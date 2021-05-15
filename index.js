const got = require("got");
const crypto = require("crypto");
const OAuth = require("oauth-1.0a");
const qs = require("querystring");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const consumer_key = process.env.NODE_ENV_TWITTER_CONSUMER_KEY;
const consumer_secret = process.env.NODE_ENV_TWITTER_CONSUMER_SECRET;

const requestTokenURL = "https://api.twitter.com/oauth/request_token";
const accessTokenURL = "https://api.twitter.com/oauth/access_token";

const oauth = OAuth({
    consumer: {
        key: consumer_key,
        secret: consumer_secret,
    },
    signature_method: "HMAC-SHA1",
    hash_function: (baseString, key) =>
        crypto
            .createHmac("sha1", key)
            .update(baseString)
            .digest("base64"),
});

async function requestToken() {
    const authHeader = oauth.toHeader(
        oauth.authorize({
            url: requestTokenURL,
            method: "POST",
        })
    );
    const req = await got.post(requestTokenURL, {
        headers: {
            Authorization: authHeader["Authorization"],
            oauth_callback: process.env.NODE_ENV_CALLBACK_URL,
        },
    });

    if (req.body) {
        return qs.parse(req.body);
    } else {
        throw new Error("Cannot get an OAuth request token");
    }
}

async function accessToken(oauth_token, verifier) {
    const authHeader = oauth.toHeader(
        oauth.authorize({
            url: accessTokenURL,
            method: "POST",
        })
    );

    const path = `https://api.twitter.com/oauth/access_token?oauth_verifier=${verifier}&oauth_token=${oauth_token}`;
    const req = await got.post(path, {
        headers: {
            Authorization: authHeader["Authorization"],
        },
    });
    if (req.body) {
        return qs.parse(req.body);
    } else {
        console.log("Cannot get an OAuth request token");
    }
}

async function getRequest({ oauth_token, oauth_token_secret, user_id }, data) {
    const token = {
        key: oauth_token,
        secret: oauth_token_secret,
    };

    let endpointURL = `https://api.twitter.com/2/users/${user_id}/blocking`;
    const authHeader = oauth.toHeader(
        oauth.authorize(
            {
                url: endpointURL,
                method: "POST",
            },
            token
        )
    );

    const req = await got.post(endpointURL, {
        json: {
            target_user_id: data,
        },
        responseType: "json",
        headers: {
            Authorization: authHeader["Authorization"],
            "user-agent": "Refineblocks",
            "content-type": "application/json",
            accept: "application/json",
        },
    });

    if (req.body) {
        return req.body;
    } else {
        console.log("Unsuccessful request");
    }
}
async function getUserIDs({ oauth_token, oauth_token_secret }, data) {
    const token = {
        key: oauth_token,
        secret: oauth_token_secret,
    };

    let endpointURL = `https://api.twitter.com/2/users/by?usernames=${data}`;
    const authHeader = oauth.toHeader(
        oauth.authorize(
            {
                url: endpointURL,
                method: "GET",
            },
            token
        )
    );

    const req = await got.get(endpointURL, {
        responseType: "json",
        headers: {
            Authorization: authHeader["Authorization"],
            "user-agent": "Refineblocks",
        },
    });

    if (req.body) {
        return req.body;
    } else {
        console.log("Unsuccessful request");
    }
}

async function getProfilePicture({ oauth_token, oauth_token_secret, user_id }) {
    const token = {
        key: oauth_token,
        secret: oauth_token_secret,
    };

    let endpointURL = `https://api.twitter.com/2/users/${user_id}?user.fields=profile_image_url`;
    const authHeader = oauth.toHeader(
        oauth.authorize(
            {
                url: endpointURL,
                method: "GET",
            },
            token
        )
    );

    const req = await got.get(endpointURL, {
        responseType: "json",
        headers: {
            Authorization: authHeader["Authorization"],
        },
    });

    if (req.body) {
        return req.body;
    } else {
        console.log("Unsuccessful request");
    }
}

app.get("/requesttoken", async (req, res) => {
    try {
        const oAuthRequestToken = await requestToken();
        const authorizeURL = new URL("https://api.twitter.com/oauth/authenticate");
        authorizeURL.searchParams.append("oauth_token", oAuthRequestToken.oauth_token);
        res.json({ redirectURL: authorizeURL.href, requestToken: oAuthRequestToken });
    } catch (err) {
        console.log("Error", err);
    }
});

app.post("/accesstoken", async (req, res) => {
    const oAuthAccessToken = await accessToken(req.body.requestToken, req.body.PIN);
    res.json(oAuthAccessToken);
});

app.post("/blockuser", async (req, res) => {
    const toBlock = await getUserIDs(req.body.oAuthAccessToken, req.body.toBlock);
    let blockResponse = await Promise.all(toBlock.data.map((user) => getRequest(req.body.oAuthAccessToken, user.id)));
    res.json(blockResponse);
});
app.post("/userinfo", async (req, res) => {
    const profilepicture = await getProfilePicture(req.body.oAuthAccessToken);
    res.json(profilepicture);
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
