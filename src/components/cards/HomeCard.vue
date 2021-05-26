<template>
    <div v-if="list" class="col-sm-6 col-md-4 px-2 mb-3">
        <div class="card card-frame h-100" @click="redirectToList">
            <div class="card-header bg-success text-center rounded-top py-4">
                <div class="avatar avatar-lg d-block bg-white rounded p-2 mx-auto">
                    <img class="avatar-img" :src="logoURL" alt="Image Description" />
                </div>
            </div>
            <div class="card-body">
                <div class="d-flex align-items-center mb-1 justify-content-between">
                    <span class="d-block text-dark font-weight-bold">
                        {{ list?.metadata?.tcrTitle }}
                    </span>
                    <div>
                        <span>
                            <i v-if="list.info.status == 0" class="fas fa-times-circle text-danger mt-1 mr-2"></i>
                            <i v-if="list.info.status == 1" class="fas fa-check-circle text-success mt-1 mr-2"></i>
                            <i
                                v-if="list.info.status == 2 || list.info.status == 3"
                                class="fas fa-question-circle text-warning mt-1 mr-2"
                            ></i>
                        </span>
                        <span class="badge badge-pill badge-primary"> {{ list.items.length }}</span>
                    </div>
                </div>
                <span class="d-block text-body font-size-1">{{ list.metadata.tcrDescription }}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["list"],
    methods: {
        redirectToList() {
            const address = this.list.address;

            this.$router.push({ name: "list", params: { address } });
        },
    },
    computed: {
        logoURL() {
            return process.env.VUE_APP_IPFS_GATEWAY + this.list.metadata.logoURI;
        },
    },
};
</script>
<style>
.entries {
    position: relative;
    right: 0;
}
</style>
