<template>
    <header id="header" class="header">
        <div class="js-mega-menu header-section">
            <!-- Topbar -->
            <div class="container">
                <nav class="js-mega-menu navbar navbar-expand-lg z-index-999">
                    <!-- Responsive Toggle Button -->
                    <button
                        type="button"
                        class="navbar-toggler btn btn-xs btn-outline-secondary ml-auto"
                        aria-label="Toggle navigation"
                        aria-expanded="false"
                        aria-controls="topBar"
                        @click="showTopbar"
                    >
                        Topbar
                        <i class="fa fa-angle-down ml-2"></i>
                    </button>
                    <!-- End Responsive Toggle Button -->

                    <div id="topBar" class="collapse navbar-collapse" :class="{ show: topbarShown }">
                        <ul class="navbar-nav w-100">
                            <li class="navbar-nav-item mr-auto">
                                <a class="nav-link font-size-1 py-2 pl-0" href="../landings/index.html"> </a>
                            </li>

                            <!-- Docs -->
                            <li class="navbar-nav-item">
                                <tippy :interactive="true" :appendTo="body">
                                    <a
                                        class="nav-link nav-link-toggle font-size-1 py-2 pr-0"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        >Resources</a
                                    >

                                    <template #content>
                                        <NavbarResources></NavbarResources>
                                    </template>
                                </tippy>
                                <!-- Docs - Submenu -->
                                <!-- End Docs - Submenu -->
                            </li>
                            <!-- End Docs -->
                        </ul>
                    </div>
                </nav>
            </div>
            <!-- End Topbar -->

            <div id="logoAndNav" class="container mt-lg-n2">
                <!-- Nav -->
                <nav class="js-mega-menu navbar navbar-expand-lg">
                    <div class="navbar-nav-wrap">
                        <!-- Logo -->
                        <router-link to="/" class="navbar-brand navbar-nav-wrap-brand" aria-label="Front">
                            <img src="~@/assets/svg/logos/logo.svg" alt="Logo" />
                        </router-link>
                        <!-- End Logo -->

                        <!-- Secondary Content -->
                        <div class="navbar-nav-wrap-content d-flex align-items-center">
                            <!-- Account -->
                            <div class="ml-3 hs-unfold">
                                <button @click="openWalletModal" v-if="!address" class="btn btn-sm btn-primary">
                                    Connect a Wallet
                                </button>
                                <tippy v-show="address" :interactive="true" :appendTo="body">
                                    <a class="js-hs-unfold-invoker rounded-circle">
                                        <AccountIcon :address="address"></AccountIcon>
                                    </a>
                                    <template #content>
                                        <NavbarAccountDropdown></NavbarAccountDropdown>
                                    </template>
                                </tippy>
                            </div>
                            <div class="ml-3 hs-unfold">
                                <TwitterLoginButton v-if="!isLoggedIn"></TwitterLoginButton>

                                <TwitterProfile v-else></TwitterProfile>
                            </div>

                            <!-- End Account -->
                            <!-- Shopping Cart -->
                            <li class="list-inline-item">
                                <div class="hs-unfold">
                                    <tippy :interactive="true" :appendTo="body">
                                        <a class="js-hs-unfold-invoker btn btn-xs btn-icon btn-ghost-secondary">
                                            <i class="fas fa-bell"></i>
                                        </a>
                                        <template #content>
                                            <div
                                                id="shoppingCartDropdown"
                                                class="hs-unfold-content dropdown-menu dropdown-menu-right text-center p-7"
                                                style="min-width: 250px"
                                            >
                                                <figure class="max-w-9rem mx-auto mb-3">
                                                    <img
                                                        class="img-fluid"
                                                        src="~@/assets/svg/illustrations/empty-cart.svg"
                                                        alt="SVG"
                                                    />
                                                </figure>
                                                <span class="d-block">No Notifications</span>
                                            </div>
                                        </template>
                                    </tippy>
                                </div>
                            </li>
                            <!-- End Shopping Cart -->
                        </div>
                        <!-- End Secondary Content -->

                        <!-- Responsive Toggle Button -->
                        <button
                            type="button"
                            class="navbar-toggler navbar-nav-wrap-navbar-toggler btn btn-icon btn-sm rounded-circle"
                            aria-label="Toggle navigation"
                            aria-expanded="false"
                            aria-controls="navBar"
                            @click="toggleNav"
                        >
                            <span class="navbar-toggler-default" v-if="!navOpen">
                                <svg width="14" height="14" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fill="currentColor"
                                        d="M17.4,6.2H0.6C0.3,6.2,0,5.9,0,5.5V4.1c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,5.9,17.7,6.2,17.4,6.2z M17.4,14.1H0.6c-0.3,0-0.6-0.3-0.6-0.7V12c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,13.7,17.7,14.1,17.4,14.1z"
                                    />
                                </svg>
                            </span>
                            <span class="navbar-toggler-default" v-else>
                                <svg width="14" height="14" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fill="currentColor"
                                        d="M11.5,9.5l5-5c0.2-0.2,0.2-0.6-0.1-0.9l-1-1c-0.3-0.3-0.7-0.3-0.9-0.1l-5,5l-5-5C4.3,2.3,3.9,2.4,3.6,2.6l-1,1 C2.4,3.9,2.3,4.3,2.5,4.5l5,5l-5,5c-0.2,0.2-0.2,0.6,0.1,0.9l1,1c0.3,0.3,0.7,0.3,0.9,0.1l5-5l5,5c0.2,0.2,0.6,0.2,0.9-0.1l1-1 c0.3-0.3,0.3-0.7,0.1-0.9L11.5,9.5z"
                                    />
                                </svg>
                            </span>
                        </button>
                        <!-- End Responsive Toggle Button -->

                        <!-- Navigation -->
                        <div
                            id="navBar"
                            class="navbar-nav-wrap-navbar collapse navbar-collapse"
                            :class="{ show: navOpen }"
                        >
                            <ul class="navbar-nav">
                                <li class="navbar-nav-item">
                                    <tippy :interactive="true" :appendTo="body">
                                        <div class="nav-link">
                                            <i class="fas fa-atlas mr-1"></i> {{ activeLanguage }}
                                        </div>
                                        <template #content>
                                            <div class="hs-unfold-content dropdown-menu mb-2">
                                                <div
                                                    class="dropdown-item cursor-pointer"
                                                    :class="language == activeLanguage ? 'active' : ''"
                                                    v-for="language in languages"
                                                    :key="language"
                                                    @click="setLanguage(language)"
                                                >
                                                    {{ language }}
                                                </div>
                                            </div>
                                        </template>
                                    </tippy>
                                </li>

                                <li class="navbar-nav-item">
                                    <router-link to="/" class="nav-link">Explore Lists</router-link>
                                </li>

                                <li class="navbar-nav-item d-none d-lg-inline-block">
                                    <tippy :interactive="true" :appendTo="body">
                                        <a class="nav-link nav-link-toggle" aria-haspopup="true" aria-expanded="false"
                                            >My Drafts</a
                                        >
                                        <template #content>
                                            <NavbarDrafts></NavbarDrafts>
                                        </template>
                                    </tippy>
                                </li>

                                <li class="navbar-nav-last-item">
                                    <router-link
                                        class="btn btn-sm btn-primary transition-3d-hover"
                                        to="/create"
                                        type="button"
                                    >
                                        <i class="fas fa-plus mr-1"></i>
                                        Submit List
                                    </router-link>
                                </li>
                                <!-- End Button -->
                            </ul>
                        </div>
                        <!-- End Navigation -->
                    </div>
                </nav>
                <!-- End Nav -->
            </div>
        </div>
    </header>
    <ConnectWalletModal v-if="walletModalOpen"></ConnectWalletModal>
</template>
<script>
import NavbarAccountDropdown from "@/components/navbar/NavbarAccountDropdown";
import NavbarDrafts from "@/components/navbar/NavbarDrafts";
import NavbarResources from "@/components/navbar/NavbarResources";
import TwitterLoginButton from "@/components/navbar/TwitterLoginButton";
import TwitterProfile from "@/components/navbar/TwitterProfile";
import ConnectWalletModal from "@/components/modals/ConnectWalletModal";
import AccountIcon from "@/components/ui/AccountIcon";
export default {
    components: {
        NavbarAccountDropdown,
        NavbarDrafts,
        NavbarResources,
        TwitterProfile,
        TwitterLoginButton,
        ConnectWalletModal,
        AccountIcon,
    },
    data() {
        return {
            topbarShown: false,
            navOpen: false,
            body: null,
            languages: [
                "English",
                "Deutsch",
                "Español",
                "Français",
                "Italiano",
                "日本語",
                "한국어",
                "Nederlands",
                "Português",
                "Русский",
            ],
        };
    },

    created() {
        this.body = document.body;
    },
    methods: {
        toggleNav() {
            this.navOpen = !this.navOpen;
        },
        openWalletModal() {
            this.$store.dispatch("setModal", {
                modalName: "wallet",
                open: true,
            });
        },
        showTopbar() {
            this.topbarShown = !this.topbarShown;
        },
        setLanguage(selectedLanguage) {
            this.$store.dispatch("setLanguage", selectedLanguage);
            localStorage.setItem("language", selectedLanguage);
        },
    },
    computed: {
        activeLanguage() {
            return this.$store.getters.getLanguage;
        },
        walletModalOpen() {
            return this.$store.getters.getModalOpen("wallet");
        },
        address() {
            return this.$store.getters.currentAccount;
        },
        isLoggedIn() {
            return this.$store.getters.isLoggedIn;
        },
    },
};
</script>
