<style lang="scss" scoped>
.twitter-login {
    background-color: rgb(62, 139, 165);
    padding: 1rem;
    color: $Grey10;
    display: inline-block;
    cursor: pointer;
}

.list-title {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
}
.list-header {
    display: flex;
    padding: 1rem;
    font-size: 1rem;
    justify-content: space-between;
    width: 100%;
    @include medium {
        font-size: 1.5rem;
    }
}
.header {
    margin-top: 1rem;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.username {
    width: 30%;
}
.itemstatus {
    width: 40%;
}
.remainingtime {
    width: 20%;
    text-align: center;
}
.add-user {
    padding: 0.5rem 1rem;
    background-color: $BluePrimary;
    color: $Grey10;
    font-size: 1.2rem;
    border: 1px solid $Grey6;
    cursor: pointer;
    margin-left: 2rem;
    display: inline-block;
}

.disabled {
    background-color: $Grey6;
    color: black;
}
.button-bar {
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @include small {
        flex-direction: row;
    }
}
.buttons {
    display: flex;
    justify-content: space-between;
}
.list-search {
    margin-bottom: 1rem;
    @include small {
        width: 30%;
        margin-bottom: 0rem;
    }
    padding: 0.2rem;
    padding-left: 1rem;
}
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
    <main id="content" role="main" v-else>
        <div class="container space-top-2 space-bottom-lg-2">
            <div class="row">
                <div class="col-md-4 col-lg-3 mb-9 mb-md-0">
                    <div class="mr-lg-2">
                        <div class="mb-3">
                            <div class="text-center mx-auto mb-3">
                                <img class="img-fluid" :src="logoURL" width="130" alt="Image Description" />
                            </div>

                            <a
                                @click="openAuth"
                                class="btn btn-sm btn-block btn-primary transition-3d-hover"
                                href="javascript:;"
                                data-toggle="modal"
                                data-target="#invoiceReceiptModal"
                            >
                                <i class="fas fa-shield-alt mr-2"></i> Subscribe</a
                            >
                        </div>

                        <!-- Rating -->
                        <p class="small text-center"></p>
                        <div class="d-flex align-items-center flex-wrap mb-6">
                            <ul class="list-inline mt-n1 mb-0 mr-2">
                                <li class="list-inline-item mx-0">
                                    <img src="~@/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                </li>
                                <li class="list-inline-item mx-0">
                                    <img src="~@/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                </li>
                                <li class="list-inline-item mx-0">
                                    <img src="~@/assets/svg/illustrations/star.svg" alt="Review rating" width="16" />
                                </li>
                                <li class="list-inline-item mx-0">
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
                        <!-- End Rating -->

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
                                        <img
                                            class="avatar-img"
                                            src="~@/assets/img/icons/account.png"
                                            alt="Image Description"
                                        />
                                    </div>
                                    <div class="media-body">
                                        Lorens Huculak
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div class="d-none d-md-block">
                            <a class="small text-body" href="#"><i class="far fa-flag mr-1"></i> Challenge this list</a>
                        </div>
                    </div>
                    <!-- End List Info -->
                </div>

                <div class="col-md-8 col-lg-9 column-divider-md">
                    <div class="ml-lg-2">
                        <div class="mb-5">
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

                        <!-- Nav Classic -->
                        <ul class="nav nav-classic nav-rounded nav-justified border" id="pills-tab" role="tablist">
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
            <!-- End Content -->
        </div>
        <!-- End List Description Section -->

        <!-- Related Items Section -->
        <!-- <div class="container space-2 space-bottom-lg-3">
          
            <div class="d-flex justify-content-between align-items-center mb-3">
                <h3 class="mb-0">Related Lists</h3>
                <a class="font-size-1 font-weight-bold" href="#"
                    >View All <i class="fas fa-angle-right fa-sm ml-1"></i
                ></a>
            </div>
         

            <div class="row mx-n2">
             
                <div class="col-sm-6 col-md-4 px-2 mb-3">
                    <div class="card card-frame h-100">
                        <a class="card-body" href="list.html">
                            <div class="media">
                                <div class="avatar avatar-xs mt-1 mr-3">
                                    <img
                                        class="avatar-img"
                                        src="~@/assets/img/160x160/img5.jpg"
                                        alt="Image Description"
                                    />
                                </div>
                                <div class="media-body">
                                    <div class="d-flex align-items-center">
                                        <span class="d-block text-dark font-weight-bold">Spotify</span>
                                        <img
                                            class="ml-2"
                                            src="~@/assets/svg/illustrations/top-vendor.svg"
                                            alt="Image Description"
                                            title="Top Vendor"
                                            width="16"
                                        />
                                    </div>
                                    <small class="d-block text-body">Lorem Ipsum</small>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
             
                <div class="col-sm-6 col-md-4 px-2 mb-3">
                    <div class="card card-frame h-100">
                        <a class="card-body" href="list.html">
                            <div class="media">
                                <div class="avatar avatar-xs mt-1 mr-3">
                                    <img
                                        class="avatar-img"
                                        src="~@/assets/img/160x160/img3.jpg"
                                        alt="Image Description"
                                    />
                                </div>
                                <div class="media-body">
                                    <div class="d-flex align-items-center">
                                        <span class="d-block text-dark font-weight-bold">Slack</span>
                                    </div>
                                    <small class="d-block text-body">Lorem Ipsum</small>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
              
                <div class="col-sm-6 col-md-4 px-2 mb-3">
                    <div class="card card-frame h-100">
                        <a class="card-body" href="list.html">
                            <div class="media">
                                <div class="avatar avatar-xs mt-1 mr-3">
                                    <img
                                        class="avatar-img"
                                        src="~@/assets/img/icons/account.png"
                                        alt="Image Description"
                                    />
                                </div>
                                <div class="media-body">
                                    <div class="d-flex align-items-center">
                                        <span class="d-block text-dark font-weight-bold">Crypto Scams</span>
                                        <img
                                            class="ml-2"
                                            src="~@/assets/svg/illustrations/top-vendor.svg"
                                            alt="Image Description"
                                            title="Top Vendor"
                                            width="16"
                                        />
                                    </div>
                                    <small class="d-block text-body">Lorem Ipsum</small>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
          
                <div class="col-sm-6 col-md-4 px-2 mb-3 mb-md-0">
                    <div class="card card-frame h-100">
                        <a class="card-body" href="list.html">
                            <div class="media">
                                <div class="avatar avatar-xs mt-1 mr-3">
                                    <img
                                        class="avatar-img"
                                        src="~@/assets/img/160x160/img12.png"
                                        alt="Image Description"
                                    />
                                </div>
                                <div class="media-body">
                                    <div class="d-flex align-items-center">
                                        <span class="d-block text-dark font-weight-bold">Atlassian</span>
                                    </div>
                                    <small class="d-block text-body">Lorem Ipsum</small>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            
                <div class="col-sm-6 col-md-4 px-2 mb-3 mb-sm-0">
                    <div class="card card-frame h-100">
                        <a class="card-body" href="list.html">
                            <div class="media">
                                <div class="avatar avatar-xs mt-1 mr-3">
                                    <img
                                        class="avatar-img"
                                        src="~@/assets/img/160x160/img18.png"
                                        alt="Image Description"
                                    />
                                </div>
                                <div class="media-body">
                                    <div class="d-flex align-items-center">
                                        <span class="d-block text-dark font-weight-bold">Behance</span>
                                        <img
                                            class="ml-2"
                                            src="~@/assets/svg/illustrations/top-vendor.svg"
                                            alt="Image Description"
                                            title="Top Vendor"
                                            width="16"
                                        />
                                    </div>
                                    <small class="d-block text-body">Lorem Ipsum</small>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
               
                <div class="col-sm-6 col-md-4 px-2">
                    <div class="card card-frame h-100">
                        <a class="card-body" href="list.html">
                            <div class="media">
                                <div class="avatar avatar-xs mt-1 mr-3">
                                    <img
                                        class="avatar-img"
                                        src="~@/assets/img/160x160/img11.jpg"
                                        alt="Image Description"
                                    />
                                </div>
                                <div class="media-body">
                                    <div class="d-flex align-items-center">
                                        <span class="d-block text-dark font-weight-bold">InVision</span>
                                    </div>
                                    <small class="d-block text-body">Lorem Ipsum</small>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
         
            </div>
        </div> -->
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

export default {
    components: {
        LoadingSpinner,
        ListItem,

        RemoveModal,
        ChallengeModal,
        EvidenceModal,
        NewUserModal,
        AuthModal,

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
            tabs: [
                { component: "ListInfoTab", name: "List Info", icon: require("@/assets/svg/icons/icon-24.svg") },
                { component: "ReviewsTab", name: "Reviews", icon: require("@/assets/svg/icons/icon-7.svg") },
                { component: "DetailsTab", name: "Details", icon: require("@/assets/svg/icons/icon-1.svg") },
            ],
        };
    },
    computed: {
        currentProps() {
            if (this.currentTabComponent == "ListInfoTab") {
                return { list: this.list, items: this.items,challengePeriod: this.list.challengePeriod };
            } else {
                return null;
            }
        },
        logoURL() {
            return process.env.VUE_APP_IPFS_GATEWAY + this.list.metadata.logoURI;
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
            console.log(e);
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
        let address = this.$route.params.address;

        this.isLoading = true;

        (async () => {
            const gtcr = new GeneralizedTCR(
                window.ethereum,
                address,
                process.env.VUE_APP_GTCR_VIEW_ADDRESS,
                process.env.VUE_APP_IPFS_GATEWAY
            );
            console.log(gtcr);
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
            console.log(this.items);
            this.isLoading = false;
        })();
    },
};
</script>
