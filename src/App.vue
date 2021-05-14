<template>
    <TheNavbar></TheNavbar>

    <WarningHero :warning="warningText" :isLoading="isLoading"></WarningHero>

    <router-view></router-view>

    <TheFooter></TheFooter>
</template>

<script>
import Web3 from "web3";
import authentication from "@/mixins/authentication";
import detectEthereumProvider from "@metamask/detect-provider";
import TheNavbar from "@/components/navbar/TheNavbar";
import TheFooter from "@/components/ui/TheFooter";
import WarningHero from "@/components/ui/WarningHeader";
export default {
    name: "App",
    components: {
        TheNavbar,
        TheFooter,
        WarningHero,
    },
    mixins: [authentication],
    data() {
        return {
            isLoading: true,
            warningText: null,
        };
    },
    methods: {
        setProvider(provider) {
            this.$store.dispatch("setProvider", provider);
        },
        setConnected(isConnected) {
            this.$store.dispatch("setConnected", isConnected);
        },
        setAccount(accounts) {
            this.$store.dispatch("setAccount", accounts[0]);
        },
        setChain(chain) {
            this.$store.dispatch("setChain", chain);
        },
    },
    created() {
        ///https://docs.metamask.io/guide/ethereum-provider.html#methods
        (async () => {
            this.isLoading = true;
            const provider = await detectEthereumProvider();
            this.isLoading = false;
            if (provider) {
                this.setProvider(true);
                this.setConnected(window.ethereum.isConnected());

                window.web3 = new Web3(window.ethereum);
                window.ethereum.on("accountsChanged", (accounts) => {
                    //accounts is an array, currently always length 1 but will change in future
                    //callback needs to be arrow function to not rebind "this"

                    this.setAccount(accounts);
                });
                window.ethereum.on("chainChanged", (chainId) => {
                    console.log(chainId);
                    // Handle the new chain.
                    // Correctly handling chain changes can be complicated.
                    // We recommend reloading the page unless you have good reason not to.

                    window.location.reload();
                });
                window.ethereum.on("connect", (connected) => {
                    console.log(connected);
                    this.setConnected(true);
                });
                window.ethereum.on("disconnect", (disconnected) => {
                    console.log(disconnected);
                    this.setConnected(false);
                });
                const chainId = await window.ethereum.request({
                    method: "eth_chainId",
                });
                this.setChain(chainId);
                let accounts = await window.ethereum.request({
                    method: "eth_accounts",
                });
                this.setAccount(accounts); //check 0 length
            } else {
                this.warningText = "Unable to detect a web3 provider, please install MetaMask!";

                this.setProvider(false);
            }
        })();

        let authentication = JSON.parse(localStorage.getItem("authentication"));

        if (authentication != null) {
    

            this.$store.dispatch("setAuthentication", authentication);
            this.getUserInfo();
        }
    },
    computed: {
        providerInjected() {
            return this.$store.getters.isProvider;
        },
        connected() {
            return this.$store.getters.isConnected;
        },
        Address() {
            return this.$store.getters.currentAccount;
        },
        chain() {
            return this.$store.getters.currentChain;
        },
        route() {
            return this.$router.currentRoute;
        },
        isRinkeby() {
            return this.$store.getters.currentChain == "Rinkeby";
        },
    },
};
</script>

<style lang="scss">
.infobox {
    justify-content: center;
    display: flex;
    text-align: center;
    width: 80%;
    flex-wrap: wrap;
    margin: 2rem auto;
    font-size: 2rem;
}
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
input,
ruby,
section,
summary,
time,
mark,
textarea,
audio,
button,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
}
/* HTML5 display-role reset for older browsers */
body {
    font-family: "Source Sans Pro", sans-serif;
    background-color: $Grey9;
}

.tippy-box {
    background-color: transparent !important;
}

.tippy-box > .tippy-arrow::before {
    border-bottom-color: transparent !important;
    border-top-color: transparent !important;
    border-bottom-color: transparent !important;
    border-bottom-color: transparent !important;
}
.tippy-box[data-theme~="shown"] {
    background-color: black !important;
}
.tippy-box[data-theme~="shown"] > .tippy-arrow::before {
    border-bottom-color: black !important;
    border-top-color: black !important;
    border-bottom-color: black !important;
    border-bottom-color: black !important;
}
</style>
