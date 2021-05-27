<template>
    <div class="hs-unfold-content dropdown-menu dropdown-menu-sm-right dropdown-menu-no-border-on-mobile p-0">
        <div class="card">
            <div class="card-header p-3">
                <div class="media align-items-center" href="#">
                    <div class="mr-2">

                    <AccountIcon :address="address" :size="32"></AccountIcon>
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
                </div>
            </div>

            <div class="card-body py-3">
                <div class="dropdown-item px-0">
                    <span class="dropdown-item-icon">
                        <i class="fas fa-user"></i>
                    </span>
                    Account
                </div>
                <div class="dropdown-item px-0">
                    <span class="dropdown-item-icon">
                        <i class="fas fa-bars"></i>
                    </span>
                    My Lists
                </div>
                <div class="dropdown-item px-0">
                    <span class="dropdown-item-icon">
                        <i class="fas fa-shield-alt"></i>
                    </span>
                    Subscriptions
                </div>
                <div class="dropdown-item px-0">
                    <span class="dropdown-item-icon">
                        <i class="fas fa-bell"></i>
                    </span>
                    Notifications
                </div>
                <div class="dropdown-item px-0 pl-4">
                    <input type="checkbox" v-model="useBlockiesIcon" class="form-check-input" id="blockiesToggle" />

                    <label for="blockiesToggle">
                        Blockies Icon
                    </label>
                </div>

                <div class="dropdown-divider"></div>

                <div class="dropdown-item px-0" href="#">
                    <span class="dropdown-item-icon">
                        <i class="fas fa-question-circle"></i>
                    </span>
                    Help
                </div>
                <div class="dropdown-item px-0" href="#">
                    <span class="dropdown-item-icon">
                        <i class="fas fa-power-off"></i>
                    </span>
                    Sign out
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import AccountIcon from "@/components/ui/AccountIcon";
export default {
    components: {
        AccountIcon,
    },

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

    computed: {
        useBlockiesIcon: {
            get() {
                return this.$store.getters.getBlockiesIcon;
            },
            set() {
                console.log("setting Blockies", !this.useBlockiesIcon);
                this.$store.dispatch("setBlockiesIcon", !this.useBlockiesIcon);
            },
        },
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
