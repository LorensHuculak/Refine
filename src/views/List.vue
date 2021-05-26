<style lang="scss" scoped>
.list-item {
    display: inline-block;
    margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
    transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
</style>

<template>
    <LoadingSpinner v-if="isLoading" class="mt-5 mb-5"></LoadingSpinner>

    <main id="content" role="main" v-show="!isLoading">
        <div class="container space-top-2 space-bottom-lg-2">
            <div class="row">
                <div class="col-md-4 col-lg-3 mb-9 mb-md-0">
                    <div class="mr-lg-2">
                        <div class="mb-3">
                            <div class="text-center mx-auto mb-3">
                                <img class="img-fluid" :src="logoURL" width="130" alt="Image Description" />
                            </div>

                            <a @click="openAuth" class="btn btn-sm btn-block btn-primary transition-3d-hover">
                                <i class="fas fa-shield-alt mr-2"></i> Subscribe</a
                            >
                        </div>

                        <p class="small text-center"></p>
                        <div class="d-flex align-items-center flex-wrap mb-6">
                            <ul class="list-inline mt-n1 mb-0 mr-2">
                                <li class="list-inline-item mx-0" v-for="x in 4" :key="x">
                                    <img src="~@/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                </li>

                                <li class="list-inline-item mx-0">
                                    <img
                                        src="~@/assets/svg/illustrations/star-half.svg"
                                        alt="Review rating"
                                        width="16"
                                    />
                                </li>
                            </ul>

                            <span class="d-inline-block">
                                <span class="text-dark font-weight-bold mr-1 font-size-1">4.87</span>
                                <span class="text-muted font-size-1">(1.5k+ reviews)</span>
                            </span>
                        </div>
                        <div class="mb-6">
                            <a :href="evidenceURI">
                                List Requirements
                            </a>
                        </div>
                        <div class="mb-md-7">
                            <h1 class="h4">Categories</h1>

                            <span class="d-inline-block mr-1 mb-2"
                                ><a class="btn btn-xs btn-soft-secondary" href="#">Featured</a></span
                            >
                            <span class="d-inline-block mr-1 mb-2"
                                ><a class="btn btn-xs btn-soft-secondary" href="#">Cryptocurrency</a></span
                            >
                            <span class="d-inline-block mr-1 mb-2"
                                ><a class="btn btn-xs btn-soft-secondary" href="#">Bitcoin</a></span
                            >
                            <span class="d-inline-block mr-1 mb-2"
                                ><a class="btn btn-xs btn-soft-secondary" href="#">Ethereum</a></span
                            >
                            <span class="d-inline-block mr-1 mb-2"
                                ><a class="btn btn-xs btn-soft-secondary" href="#">Elon Musk</a></span
                            >
                        </div>

                        <div class="d-none d-md-block mb-7">
                            <h2 class="h4">Contributor</h2>

                            <a class="d-inline-block text-body" href="#">
                                <div class="media align-items-center">
                                    <div class="avatar avatar-xs mr-3">
                                        <AccountIcon :address="status?.requester"></AccountIcon>
                                    </div>
                                    <div class="media-body">
                                        <a
                                            :href="'https://rinkeby.etherscan.io/address/' + status?.requester"
                                            target="_blank"
                                        >
                                            {{ shortenedContributor }}
                                        </a>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div class="d-flex">
                            <i v-if="status?.status == 0" class="fas fa-times-circle text-danger mt-1 mr-2"></i>
                            <i v-if="status?.status == 1" class="fas fa-check-circle text-success mt-1 mr-2"></i>
                            <i
                                v-if="status?.status == 2 || status?.status == 3"
                                class="fas fa-question-circle text-warning mt-1 mr-2"
                            ></i>
                            <span class="small text-body cursor-pointer" href="#">Challenge this list</span>
                        </div>
                    </div>
                </div>

                <div class="col-md-8 col-lg-9 column-divider-md">
                    <div class="ml-lg-2">
                        <div class="mb-5 row">
                            <div class="col-8">
                                <h2>
                                    {{ list?.metadata?.tcrTitle || "Title" }}
                                    <img
                                        class="ml-1"
                                        src="~@/assets/svg/illustrations/top-vendor.svg"
                                        alt="Image Description"
                                        title="Top Vendor"
                                        width="20"
                                    />
                                </h2>
                            </div>
                            <div class="col-4">
                                <button class="btn btn-primary float-right" @click="openSubmit">Add User</button>
                            </div>
                        </div>

                        <!-- Nav Classic -->
                        <ul class="nav nav-classic nav-rounded nav-justified border cursor-pointer" role="tablist">
                            <li v-for="tab in tabs" :key="tab" class="nav-item" @click="setTab(tab.component)">
                                <a
                                    class="nav-link font-weight-bold "
                                    role="tab"
                                    :class="{ active: isActive(tab.component) }"
                                >
                                    <div class="d-md-flex justify-content-md-center align-items-md-center">
                                        <figure class="d-none d-md-block w-100 max-w-5rem mr-3">
                                            <img class="img-fluid" :src="tab.icon" alt="SVG" />
                                        </figure>
                                        {{ tab.name }}
                                    </div>
                                </a>
                            </li>
                        </ul>

                        <div class="tab-content" id="pills-tabContent">
                            <keep-alive>
                                <component :is="currentTabComponent" v-bind="currentProps"></component>
                            </keep-alive>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <RemoveModal :user="clickedUser" v-if="removeModalOpen"></RemoveModal>
    <ChallengeModal :user="clickedUser" v-if="challengeModalOpen"></ChallengeModal>
    <EvidenceModal :user="clickedUser" v-if="evidenceModalOpen"></EvidenceModal>
    <NewUserModal :list="list" v-if="userModalOpen"></NewUserModal>
    <AuthModal v-if="AuthModalOpen"></AuthModal>
</template>

<script>
import { GeneralizedTCR } from "@kleros/gtcr-sdk";
import transactions from "@/mixins/transactions";
import authentication from "@/mixins/authentication";

import ListItem from "@/components/ListItem";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

import RemoveModal from "@/components/modals/RemoveModal";
import ChallengeModal from "@/components/modals/ChallengeModal";
import EvidenceModal from "@/components/modals/EvidenceModal";
import NewUserModal from "@/components/modals/NewUserModal";
import AuthModal from "@/components/modals/AuthModal";

import ListInfoTab from "@/components/list/ListInfoTab";
import ReviewsTab from "@/components/list/ReviewsTab";
import DetailsTab from "@/components/list/DetailsTab";

import AccountIcon from "@/components/ui/AccountIcon";

export default {
    components: {
        LoadingSpinner,
        ListItem,

        RemoveModal,
        ChallengeModal,
        EvidenceModal,
        NewUserModal,
        AuthModal,

        AccountIcon,
        ListInfoTab,
        ReviewsTab,
        DetailsTab,
    },
    mixins: [authentication, transactions],
    data() {
        return {
            filter: null,
            subscribed: "Subscribe",
            isLoading: false,
            list: null,
            items: null,
            newUsername: null,
            gateway: process.env.VUE_APP_IPFS_GATEWAY,
            addingUser: false,
            isBlocking: false,
            clickedUser: null,
            currentTabComponent: "ListInfoTab",

            status: null,
            body: null,
            tabs: [
                { component: "ListInfoTab", name: "List Info", icon: require("@/assets/svg/icons/icon-24.svg") },
                { component: "ReviewsTab", name: "Reviews", icon: require("@/assets/svg/icons/icon-7.svg") },
                { component: "DetailsTab", name: "Details", icon: require("@/assets/svg/icons/icon-1.svg") },
            ],
        };
    },

    computed: {
        evidenceURI() {
            console.log(process.env.VUE_APP_IPFS_GATEWAY + this?.list?.submissionEvidence.fileURI);
            return process.env.VUE_APP_IPFS_GATEWAY + this?.list?.submissionEvidence.fileURI;
        },
        shortenedContributor() {
            if (this.status) {
                return this.status.requester.slice(0, 6) + "..." + this.status.requester.slice(-4);
            }
            return "";
        },
        currentProps() {
            if (this.currentTabComponent == "ListInfoTab") {
                return { list: this.list, items: this.items, challengePeriod: this.list?.challengePeriod };
            }
            if (this.currentTabComponent == "DetailsTab") {
                return { status: this.status };
            } else {
                return null;
            }
        },
        logoURL() {
            if (this.list?.metadata) {
                return process.env.VUE_APP_IPFS_GATEWAY + this.list?.metadata?.logoURI;
            } else {
                return "";
            }
        },
        chain() {
            return this.$store.getters.currentChain;
        },

        currentAccount() {
            return this.$store.getters.currentAccount;
        },
        test() {
            return this.$store.state;
        },
        shownLists() {
            if (this.filter) {
                return this.items.filter((x) => x.decodedData[0].toLowerCase().includes(this.filter.toLowerCase()));
            } else {
                return this.items;
            }
        },
        isLoggedIn() {
            return this.$store.getters.isLoggedIn;
        },
        challengeModalOpen() {
            return this.$store.getters.getModalOpen("challenge");
        },
        evidenceModalOpen() {
            return this.$store.getters.getModalOpen("evidence");
        },
        removeModalOpen() {
            return this.$store.getters.getModalOpen("remove");
        },
        userModalOpen() {
            return this.$store.getters.getModalOpen("newUser");
        },
        AuthModalOpen() {
            return this.$store.getters.getModalOpen("auth");
        },
    },
    methods: {
        isActive(e) {
            return e == this.currentTabComponent;
        },
        setTab(e) {
            this.currentTabComponent = e;
        },
        updateUser(e) {
            this.clickedUser = e;
        },
        openAuth() {
            this.$store.dispatch("setModal", {
                modalName: "auth",
                open: true,
            });
        },

        openSubmit() {
            this.$store.dispatch("setModal", {
                modalName: "newUser",
                open: true,
            });
        },
    },
    created() {
        this.body = document.body;
        let address = this.$route.params.address;

        this.isLoading = true;

        (async () => {
            const metaList = new GeneralizedTCR(
                window.ethereum,
                process.env.VUE_APP_META_LIST,
                process.env.VUE_APP_GTCR_VIEW_ADDRESS,
                process.env.VUE_APP_IPFS_GATEWAY
            );
            let addressItems = await metaList.getItems();

            const gtcr = new GeneralizedTCR(
                window.ethereum,
                address,
                process.env.VUE_APP_GTCR_VIEW_ADDRESS,
                process.env.VUE_APP_IPFS_GATEWAY
            );

            let challengePeriod = await gtcr.gtcrInstance.challengePeriodDuration();
            let evidence = await gtcr.getLatestMetaEvidence();
            this.list = {
                challengePeriod: challengePeriod,
                address: gtcr.gtcrInstance.address,
                submissionEvidence: evidence[0],
                disputeEvidence: evidence[1],
                metadata: evidence[0].metadata,
            };
            console.log(this.list);
            this.items = await gtcr.getItems();

            this.isLoading = false;
            this.status = addressItems.find((x) => x.decodedData[0] == address);
        })();
    },
};
</script>
