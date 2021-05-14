<style scoped lang="scss">

</style>

<template>
    <Modal title="Challenge submission" modalName="challenge">
        <label for="username" class="mb-3">Evidence</label>
        <tippy theme="shown" class="float-right" placement="left" :offset="[0, -10]">
            <span class="material-icons info-icon"> info </span>

            <template #content>
                Provide a justification for why this user should not be part of this list
            </template>
        </tippy>
        <div class="modal-row">
            <textarea class="form-control no-resize" rows="3" v-model="justification" type="text" />
        </div>

        <button class="btn mt-5 btn-primary btn-block" @click="challengeRequest">
            Submit Evidence
        </button>
    </Modal>
</template>
<script>
import Modal from "./Modal";
import transactions from "@/mixins/transactions"
export default {
    props: ["user"],
    mixins: [transactions],
    components: {
        Modal,
    },
    data() {
        return {
            justification: null,
        };
    },
    methods: {
        close() {
            this.$store.dispatch("setModal", {
                modalName: "challenge",
                open: false,
            });
        },
       
    },
};
</script>
