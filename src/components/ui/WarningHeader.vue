<template>
    <div class="container mt-5 text-center">
        <div class="alert alert-soft-primary" role="alert" v-if="isLoading">
            Detecting provider...
        </div>
        <div class="alert alert-soft-danger" role="alert" v-if="warning">
            {{ warning }}
        </div>
    </div>
    <div v-if="!isRinkeby && providerInjected" class="container mt-5 text-center">
        <div class="alert alert-soft-warning" role="alert">
            Refine is only available on the Rinkeby testnet currently, change your connected network to see available
            lists
        </div>
    </div>
</template>
<script>
export default {
    props: ["warning","isLoading"],
    computed: {
        providerInjected() {
            return this.$store.getters.isProvider;
        },
        isRinkeby() {
            return this.$store.getters.currentChain == "Rinkeby";
        },
    },
};
</script>
