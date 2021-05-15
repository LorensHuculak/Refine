<style scoped lang="scss">
.icon {
    font-size: 2rem;
}
</style>

<template>
    <li class="list-group-item mt-5 border-top">
        <div class="row align-items-center">
            <div class="col-3">
                <a :href="'https://twitter.com/' + user.decodedData[0]" target="_blank">
                    {{ user.decodedData[0] }}
                </a>
            </div>
            <div class="col-6 d-flex flex-column align-items-center  ">
                <div :class="dotColor" class="badge p-2 mb-1 pill-badge">
                    {{ status[user.status] }}
                </div>
                <div class="badge alert-danger  p-2 pill-badge" v-if="user.disputed">
                    Disputed
                </div>
            </div>
            <div class="col-2 d-flex justify-content-center">
                <tippy theme="shown">
                    <div class="item-remaining-time">
                        {{ remainingTime }}
                    </div>
                    <template #content>
                        {{ challengeEndDate }}
                    </template>
                </tippy>
            </div>
            <div class="col-1" @click="toggleOpen">
                <span v-if="open" class="icon material-icons"> arrow_drop_up </span>
                <span v-else class="icon material-icons"> arrow_drop_down </span>
            </div>
        </div>
        <div v-if="open" class="row pt-2 pb-2 align-items-center">
            <div class="col-9">
                <div>{{ user.decodedData[1] }}</div>
            </div>

            <div class="col-3 d-flex justify-content-center">
                <div v-if="challengeOver && user.disputed == false && user.status > 1">
                    <button v-if="isConnected" class="btn btn-success" @click="executeRequest">
                        Accept Pending
                    </button>
                    <tippy v-else theme="shown">
                        <button class="btn btn-secondary">
                            Accept Pending
                        </button>
                        <template #content>
                            Connect your wallet to accept pending requests
                        </template>
                    </tippy>
                </div>

                <div v-if="user.status == 1">
                    {{isConnected}}
                    <button class="btn btn-warning" v-if="isConnected" @click="openRemoveModal">
                        Raise Dispute
                    </button>
                    <tippy v-else theme="shown">
                        <button class="btn btn-secondary">
                            Raise Dispute
                        </button>
                        <template #content>
                            Connect your wallet to raise disputes
                        </template>
                    </tippy>
                </div>
                <!-- Challenge pending request (can be add or removal) -->
                <div v-if="!challengeOver && user.disputed == false">
                    {{isConnected}}
                    <button class="btn btn-warning" v-if="isConnected" @click="openChallengeModal">
                        Challenge {{ status[user.status].split(" ")[0] }}
                    </button>
                    <tippy v-else theme="shown">
                        <button class="btn btn-secondary">Challenge {{ status[user.status].split(" ")[0] }}</button>
                        <template #content>
                            Connect your wallet to challenge
                        </template>
                    </tippy>
                </div>
                <div v-if="user.disputed == true">
                    <button class="btn btn-warning" v-if="isConnected" @click="openEvidenceModal">
                        Submit evidence
                    </button>
                    <tippy v-else theme="shown">
                        <button class="btn btn-secondary">Submit evidence</button>
                        <template #content>
                            Connect your wallet to submit evidence
                        </template>
                    </tippy>
                </div>
            </div>
        </div>
    </li>
</template>
<script>
import transactions from "@/mixins/transactions"
import "tippy.js/themes/translucent.css";

export default {
    props: ["user", "challengeperiod"],
    emit: ["clickedUser"],
    mixins: [transactions],
    data() {
        return {
            open: false,
            hover: false,
            status: {
                0: "Removed", //absent
                1: "Registered",
                2: "Addition Requested",
                3: "Removal Requested",
            },
        };
    },
    methods: {
        toggleOpen() {
            this.open = !this.open;
        },
     

        openChallengeModal() {
            this.$emit("clickedUser", this.user.ID);
            this.$store.dispatch("setModal", {
                modalName: "challenge",
                open: true,
            });
        },
        openEvidenceModal() {
            this.$emit("clickedUser", this.user.ID);
            this.$store.dispatch("setModal", {
                modalName: "evidence",
                open: true,
            });
        },
        openRemoveModal() {
            this.$emit("clickedUser", this.user.ID);
            this.$store.dispatch("setModal", {
                modalName: "remove",
                open: true,
            });
        },

        msToHours(time) {
            let hours = Math.floor(time / (1000 * 60 * 60));
            let minutes = Math.floor((time / (1000 * 60)) % 60);
            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            return hours + "h " + minutes + "m";
        },

        formatDate(date) {
            const options = {
                day: "numeric",
                month: "short",
                year: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
            };
            return Intl.DateTimeFormat("en-GB", options).format(date);
           
        },
    },
    computed: {
        isConnected() {
            return this.$store.getters.currentAccount;
        },
        currentAccount() {
            return this.$store.getters.currentAccount;
        },
        challengeModalOpen() {
            return this.$store.getters.getModalOpen("challenge");
        },
        dotColor() {
            let bootstrapColors = {
                0: "alert-danger",
                1: "alert-success",
                2: "alert-warning",
                3: "alert-warning",
            };
            bootstrapColors[this.user.status];
            return bootstrapColors[this.user.status];
        },
        submittedDate() {
            return new Date(parseInt(this.user.submissionTime) * 1000);
        },
        challengeEndDate() {
            return this.formatDate(
                new Date(parseInt(this.user.submissionTime) * 1000 + parseInt(this.challengeperiod) * 1000)
            );
        },
        challengePeriod() {
            return parseInt(this.challengeperiod);
        },
        remainingTime() {
            const millisecondsRemaining = Date.now() - new Date(parseInt(this.user.submissionTime) * 1000);
            let msRemaining = this.challengeperiod * 1000 - millisecondsRemaining;
            if (msRemaining > 0) {
                return this.msToHours(msRemaining);
            } else {
                return 0;
            }
        },
        challengeOver() {
            return (
                Date.now() > new Date(parseInt(this.user.submissionTime) * 1000 + parseInt(this.challengeperiod) * 1000)
            );
        },
    },
};
</script>
