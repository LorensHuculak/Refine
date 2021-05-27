<template>
    <button @click="buttonAction" class="btn btn-primary btn-sm">
        {{ buttonContent }}
    </button>
</template>
<script>
import transactions from "@/mixins/transactions";

export default {
    props: ["item", "challengePeriod"],
    mixins: [transactions],
    data() {
        return {
            status: {
                0: "Removed", //absent
                1: "Registered",
                2: "Addition Requested",
                3: "Removal Requested",
            },
        };
    },
    methods: {
        openEvidenceModal() {
            this.$emit("clickedUser", this.item.ID);
            this.$store.dispatch("setModal", {
                modalName: "evidence",
                open: true,
            });
        },
        openRemoveModal() {
            this.$emit("clickedUser", this.item.ID);
            this.$store.dispatch("setModal", {
                modalName: "remove",
                open: true,
            });
        },
        buttonAction() {
            if (this.challengeOver && this.item.disputed == false && this.item.status > 1) {
                this.executeRequest(this.item);
            } else if (this.item.status == 1) {
                this.openRemoveModal();
            } else if (!this.challengeOver && this.item.disputed == false) {
                this.openChallengeModal();
            } else if (this.item.disputed == true) {
                this.openEvidenceModal();
            }
        },
    },
    computed: {
        isConnected() {
            return this.$store.getters.currentAccount;
        },
        buttonContent() {
            if (this.challengeOver && this.item.disputed == false && this.item.status > 1) {
                return "Accept Pending";
            }
            if (this.item.status == 1) {
                return "Raise Dispute";
            }
            if (!this.challengeOver && this.item.disputed == false) {
                return "Challenge " + this.status[this.item.status].split(" ")[0];
            }
            if (this.item.disputed == true) {
                return "Submit Evidence";
            }

            return "Button";
        },
        challengeOver() {
            return (
                Date.now() > new Date(parseInt(this.item.submissionTime) * 1000 + parseInt(this.challengePeriod) * 1000)
            );
        },
    },
};
//challengeover
//disputed
//status
//ID
</script>
