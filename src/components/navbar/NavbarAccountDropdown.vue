<template>
    <div class="hs-unfold-content dropdown-menu dropdown-menu-sm-right dropdown-menu-no-border-on-mobile p-0">
        <div class="card">
            <div class="card-header p-4">
                <a class="media align-items-center" href="#">
                    <div class="avatar mr-3" ref="jazzicon">
                        <!-- jazzicon inserted -->
                    </div>
                    <div class="media-body">
                        <span class="d-block font-weight-bold">
                            {{ addressFormat }}
                        </span>
                        <tippy trigger="manual" ref="TIPPY">
                            <span @click="copyAddress" class="d-block small text-muted">
                                <i class="mr-1 far fa-clone"></i>
                                Copy Address
                            </span>
                            <template #content>
                                Copied!
                            </template>
                        </tippy>
                    </div>
                </a>
            </div>

            <div class="card-body py-3">
                <a class="dropdown-item px-0" href="#">
                    <span class="dropdown-item-icon">
                        <i class="fas fa-user"></i>
                    </span>
                    Account
                </a>
                <a class="dropdown-item px-0" href="#">
                    <span class="dropdown-item-icon">
                        <i class="fas fa-bars"></i>
                    </span>
                    My Lists
                </a>
                <a class="dropdown-item px-0" href="#">
                    <span class="dropdown-item-icon">
                        <i class="fas fa-shield-alt"></i>
                    </span>
                    Subscriptions
                </a>
                <a class="dropdown-item px-0" href="#">
                    <span class="dropdown-item-icon">
                        <i class="fas fa-bell"></i>
                    </span>
                    Notifications
                </a>

                <div class="dropdown-divider"></div>

                <a class="dropdown-item px-0" href="#">
                    <span class="dropdown-item-icon">
                        <i class="fas fa-question-circle"></i>
                    </span>
                    Help
                </a>
                <a class="dropdown-item px-0" href="#">
                    <span class="dropdown-item-icon">
                        <i class="fas fa-power-off"></i>
                    </span>
                    Sign out
                </a>
            </div>
        </div>
    </div>
</template>
<script>
import Jazzicon from "jazzicon";
export default {
    methods: {
        async copyAddress() {
            try {
                await navigator.clipboard.writeText(this.address);
                this.$refs.TIPPY.show();
                setTimeout(() => this.$refs.TIPPY.hide(), 500);
            } catch (error) {
                console.log("copy error", error);
            }
        },
    },
    watch: {
        address() {
            if (this.address) {
                this.$refs.jazzicon.innerHTML = ""; //clear the previous jazzicon in case we disconnect and connect multiple times per session
                this.$refs.jazzicon.appendChild(Jazzicon(54, parseInt(this.address.slice(2, 10), 16)));
            }
        },
    },
    computed: {
        address() {
            return this.$store.getters.currentAccount;
        },
        addressFormat() {
            if (this.address) {
                return this.address.slice(0, 6) + "..." + this.address.slice(-4);
            } else {
                return null;
            }
        },
    },
};
</script>
<style lang="scss"></style>
