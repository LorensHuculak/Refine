<template>
    <div @click.self="closeWalletModal" class="modal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">
                <CloseButton @click="closeWalletModal"></CloseButton>
                <div class="modal-body">
                    <div class="text-center mb-7">
                        <h3 class="mb-0">Connect to Ethereum</h3>
                        <p>Sign in with a provider to manage lists.</p>
                    </div>

                    <ModalRow @click="connect">
                        <template v-slot:image>
                            <img class="img-fluid" src="~@/assets/img/icons/metamask.023762b6.png" alt="SVG" />
                        </template>
                        <template v-slot:text>
                            <h3>MetaMask</h3>
                        </template>
                    </ModalRow>

                    <ModalRow>
                        <template v-slot:image>
                            <img class="img-fluid" src="~@/assets/img/icons/walletconnect.svg" alt="SVG" />
                        </template>
                        <template v-slot:text>
                            <h3>WalletConnect</h3>
                        </template>
                    </ModalRow>

                    <ModalRow>
                        <template v-slot:image>
                            <img class="img-fluid" src="~@/assets/img/icons/fortmatic.png" alt="SVG" />
                        </template>
                        <template v-slot:text>
                            <h3>Fortmatic</h3>
                        </template>
                    </ModalRow>

                    <ModalRow>
                        <template v-slot:image>
                            <img class="img-fluid" src="~@/assets/img/icons/trust.png" alt="SVG" />
                        </template>
                        <template v-slot:text>
                            <h3>Trust Wallet</h3>
                        </template>
                    </ModalRow>

                    <div class="text-center mt-4">
                        <span class="small text-muted">New to Ethereum?</span>
                        <a
                            href="https://ethereum.org/en/dapps/#3-what-is-a-wallet-and-which-one-should-i-use"
                            target="_blank"
                            class="small font-weight-bold"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ModalRow from "@/components/modals/ModalRow";
import CloseButton from "@/components/buttons/CloseButton";
export default {
    components: {
        ModalRow,
        CloseButton,
    },
    methods: {
        closeWalletModal() {
            this.$store.dispatch("setModal", {
                modalName: "wallet",
                open: false,
            });
        },
        connect() {
            window.ethereum
                .request({ method: "eth_requestAccounts" })
                .then(() => {
                    this.$store.dispatch("setModal", {
                        modalName: "wallet",
                        open: false,
                    });
                })
                .catch((err) => {
                    if (err.code === 4001) {
                        // EIP-1193 userRejectedRequest error
                        // If this happens, the user rejected the connection request.
                        console.log("Please connect to MetaMask.");
                    } else {
                        console.error(err);
                    }
                });
        },
    },
};
</script>
