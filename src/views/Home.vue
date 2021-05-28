<style lang="scss">
.hero {
    display: flex;
    margin-top: 2rem;
}
.listcontent {
    display: flex;
}

.refreshbutton {
    background-color: grey;
}
.lists-header {
    display: flex;
    justify-content: space-between;
}
.listsearch {
    width: 40%;
    border-radius: 4px;
    font-size: 1.2rem;
    padding: 0.2rem;
    padding-left: 0.5rem;
}
.section {
    margin-bottom: 2rem;
    margin-top: 2rem;
}
.create-button {
    height: 100%;
    color: $Grey1;
    background-color: $Green3;
    padding: 0.3rem 1rem;
    margin-right: 1rem;
    border-radius: 0.3rem;
    cursor: pointer;
    text-align: center;
    border: 1px solid $Grey4;
}
.refresh-icon {
    cursor: pointer;
    margin-right: 1rem;
}
.right {
    display: flex;
    align-items: center;
}
.centerspinner {
    display: flex;
    align-items: center;
    justify-content: center;
}
.card-section {
    display: flex;
    flex-direction: column;

    @include small {
        flex-direction: row;
        flex-wrap: wrap;

        justify-content: space-between;
    }
}
.warning {
    font-size: 2rem;
    text-align: center;
    padding: 1rem;
}
</style>
<template>
    <main>
        <div class="container space-top-1 space-top-md-2 space-bottom-2">
            <div class="row align-items-lg-center">
                <div class="col-lg-5 mb-7 mb-lg-0">
                    <div class="mb-4">
                        <h1>Share, moderate, and subscribe to Lists.</h1>
                        <p>Manage your social content - Refine your online experience.</p>
                    </div>

                    <form class="js-validate d-flex align-items-center">
                        <label class="sr-only" for="signupSrEmail">Search for lists</label>
                        <div class="d-inline-block w-75 mr-2">
                            <input
                                type="text"
                                class="form-control"
                                v-model="filter"
                                autocomplete="off"
                                name="filter"
                                placeholder="Search for lists"
                                aria-label="Search for lists"
                            />
                        </div>
                        <button type="submit" class="btn btn-primary">
                            <span class="fas fa-search"></span>
                        </button>
                    </form>
                </div>

                <div class="col-lg-7">
                    <img
                        class="img-fluid"
                        src="~@/assets/svg/illustrations/we-are-in-office-1.svg"
                        alt="Image Description"
                    />
                </div>
            </div>
        </div>

        <div class="container space-bottom-2 space-bottom-lg-3">
            <div class="row">
                <div class="col-lg-3 mb-5 mb-lg-0">
                    <div class="mr-lg-3">
                        <div class="navbar-expand-lg navbar-expand-lg-collapse-block navbar-light">
                            <button
                                type="button"
                                class="navbar-toggler btn btn-block border py-3"
                                aria-label="Toggle navigation"
                                aria-expanded="false"
                                aria-controls="sidebarNav"
                                data-toggle="collapse"
                                data-target="#sidebarNav"
                            >
                                <span @click="showDropdown" class="d-flex justify-content-between align-items-center">
                                    <span class="h5 mb-0">View all categories</span>
                                    <span class="navbar-toggler-default">
                                        <svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 18 18"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M17.4,6.2H0.6C0.3,6.2,0,5.9,0,5.5V4.1c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,5.9,17.7,6.2,17.4,6.2z M17.4,14.1H0.6c-0.3,0-0.6-0.3-0.6-0.7V12c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,13.7,17.7,14.1,17.4,14.1z"
                                            />
                                        </svg>
                                    </span>
                                    <span class="navbar-toggler-toggled">
                                        <svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 18 18"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M11.5,9.5l5-5c0.2-0.2,0.2-0.6-0.1-0.9l-1-1c-0.3-0.3-0.7-0.3-0.9-0.1l-5,5l-5-5C4.3,2.3,3.9,2.4,3.6,2.6l-1,1 C2.4,3.9,2.3,4.3,2.5,4.5l5,5l-5,5c-0.2,0.2-0.2,0.6,0.1,0.9l1,1c0.3,0.3,0.7,0.3,0.9,0.1l5-5l5,5c0.2,0.2,0.6,0.2,0.9-0.1l1-1 c0.3-0.3,0.3-0.7,0.1-0.9L11.5,9.5z"
                                            />
                                        </svg>
                                    </span>
                                </span>
                            </button>
                            <div :class="{ show: shown }" class="collapse navbar-collapse">
                                <div class="p-2 p-lg-0">
                                    <div class="mt-3 mt-lg-0">
                                        <h2 class="h4">Explore</h2>

                                        <a class="dropdown-item d-flex justify-content-between align-items-center px-0">
                                            All
                                            <span class="badge border badge-pill">30+</span>
                                        </a>
                                        <a class="dropdown-item d-flex justify-content-between align-items-center px-0">
                                            Top rated
                                        </a>
                                        <a class="dropdown-item d-flex justify-content-between align-items-center px-0">
                                            Featured
                                        </a>

                                        <a class="dropdown-item d-flex justify-content-between align-items-center px-0">
                                            New
                                            <span class="badge border badge-pill">18</span>
                                        </a>
                                        <a class="dropdown-item d-flex justify-content-between align-items-center px-0">
                                            Channels
                                        </a>
                                    </div>

                                    <div class="mt-5">
                                        <h3 class="h4">Categories</h3>

                                        <a class="dropdown-item d-flex justify-content-between align-items-center px-0">
                                            Fake News
                                        </a>
                                        <a class="dropdown-item d-flex justify-content-between align-items-center px-0">
                                            Scams
                                        </a>
                                        <a class="dropdown-item d-flex justify-content-between align-items-center px-0">
                                            Phishing
                                        </a>
                                        <a class="dropdown-item d-flex justify-content-between align-items-center px-0">
                                            Fake URL
                                            <span class="badge border badge-pill">4</span>
                                        </a>
                                    </div>

                                    <div class="mt-5">
                                        <h3 class="h4">Filters</h3>

                                        <a
                                            class="dropdown-item d-flex justify-content-between align-items-center px-0"
                                       
                                        >
                                            Registered
                                            <span class="badge border badge-pill">9+</span>
                                        </a>
                                        <a
                                            class="dropdown-item d-flex justify-content-between align-items-center px-0"
                                       
                                        >
                                            Pending
                                        </a>
                                    </div>

                                    <div class="mt-5">
                                        <h3 class="h4">Verification</h3>

                                        <a class="dropdown-item d-flex justify-content-between align-items-center px-0">
                                            Verified
                                        </a>
                                        <a class="dropdown-item d-flex justify-content-between align-items-center px-0">
                                            Unverified
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-9 column-divider-lg">
                    <div class="ml-lg-2">
                        <div v-if="isLoading" class="centerspinner">
                            <LoadingSpinner></LoadingSpinner>
                        </div>
                        <div v-else class="row mx-n2 mb-7">
                            <HomeCard v-for="list in filteredLists" :key="list" :list="list"></HomeCard>
                        </div>

                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h3 class="mb-0">Featured</h3>
                            <a class="font-size-1 font-weight-bold" href="#"
                                >View All <i class="fas fa-angle-right fa-sm ml-1"></i
                            ></a>
                        </div>

                        <div class="row mx-n2 mb-7"></div>

                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h3 class="mb-0">Scams and Phishing</h3>
                            <a class="font-size-1 font-weight-bold" href="#"
                                >View All <i class="fas fa-angle-right fa-sm ml-1"></i
                            ></a>
                        </div>

                        <div class="row mx-n2 mb-7"></div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { GeneralizedTCR } from "@kleros/gtcr-sdk";
import authentication from "@/mixins/authentication";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import HomeCard from "@/components/cards/HomeCard";

export default {
    components: {
        LoadingSpinner,
        HomeCard,
    },
    mixins: [authentication],
    data() {
        return {
            adding: false,
            listname: null,
            listcriteria: null,
            isLoading: false,
            filter: null,
            shown: false,
        };
    },
    methods: {
        showDropdown() {
            this.shown = !this.shown;
        },
        submitList() {
            this.lists.push({ name: this.listname, criteria: this.listcriteria });
        },
        async loadLists() {
            this.isLoading = true;
            const gtcr = new GeneralizedTCR(
                window.ethereum,
                process.env.VUE_APP_META_LIST,
                process.env.VUE_APP_GTCR_VIEW_ADDRESS,
                process.env.VUE_APP_IPFS_GATEWAY
            );

            let addressItems = await gtcr.getItems();

            let tcrAddresses = addressItems.map((x) => x.decodedData[0]);

            let tcrList = tcrAddresses.map(
                (x) =>
                    new GeneralizedTCR(
                        window.ethereum,
                        x,
                        process.env.VUE_APP_GTCR_VIEW_ADDRESS,
                        process.env.VUE_APP_IPFS_GATEWAY
                    ) || null
            );
            let tcrDetailsList = await Promise.all(
                tcrList.map(async (generalizedTCR) => {
                    try {
                        let evidence = await generalizedTCR.getLatestMetaEvidence();
                        let items = await generalizedTCR.getItems();

                        let info = addressItems.find((x) => x.decodedData[0] == generalizedTCR.gtcrInstance.address);
                        return {
                            info: info,
                            address: generalizedTCR.gtcrInstance.address,
                            submissionEvidence: evidence[0],
                            disputeEvidence: evidence[1],
                            metadata: evidence[0].metadata,
                            items: items,
                        };
                    } catch (err) {
                        console.log(err);
                        return null;
                    }
                })
            );
            console.log("tcrDetails", tcrDetailsList);

            this.$store.dispatch(
                "setLists",
                tcrDetailsList.filter((x) => x != null)
            );
            this.$forceUpdate();
            this.isLoading = false;
        },
    },
    created() {
        if (window.ethereum && this.lists.length == 0) {
            this.loadLists();
        }

        if (this.$route.query.oauth_token && this.$route.query.oauth_verifier) {
            fetch(`${process.env.VUE_APP_BASE_URL}/accesstoken`, {
                mode: "cors",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    requestToken: this.$route.query.oauth_token,
                    PIN: this.$route.query.oauth_verifier,
                }),
            })
                .then((e) => (e = e.json()))
                .then((r) => {
                    this.$store.dispatch("setAuthentication", r);
                    this.authToken = r;
                    this.getUserInfo();
                });
        }
    },
    computed: {
        filteredLists() {
            if (this.filter) {
                return this.$store.getters.getLists.filter((x) =>
                    x.metadata.tcrTitle.toLowerCase().includes(this.filter.toLowerCase())
                );
            } else {
                return this.$store.getters.getLists;
            }
        },
        isProvider() {
            return this.$store.getters.isProvider;
        },
        chain() {
            return this.$store.getters.currentChain;
        },
        isRinkeby() {
            return this.chain == "Rinkeby";
        },
        lists() {
            return this.$store.getters.getLists;
        },
    },
};
</script>
