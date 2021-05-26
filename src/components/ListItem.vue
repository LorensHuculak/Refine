<style lang="scss" scoped>
.translate-enter-active,
.translate-leave-active {
    transition: all 0.4s;
    max-height: 100px;
}

.translate-enter-from,
.translate-leave-to {
    max-height: 0px;
}
</style>

<template>
    <div class="scale card border mb-1">
        <div class="card-header card-collapse" id="coursesHeadingTwo">
            <a
                @click="toggleOpen"
                class="btn btn-link btn-sm btn-block card-btn collapsed p-3"
                href="javascript:;"
                role="button"
            >
                <span class="row">
                    <span class="col-8">
                        <span class="media">
                            <span class="card-btn-toggle mr-3 ml-0">
                                <span v-if="!open">&plus;</span>
                                <span v-else>&minus;</span>
                            </span>
                            <span class="media-body">
                                <a
                                    @click.stop
                                    :href="'https://twitter.com/' + user.decodedData[0]"
                                    class="text-body font-weight-bold mr-5"
                                    target="_blank"
                                >
                                    {{ user.decodedData[0] }}</a
                                >
                            </span>
                        </span>
                    </span>
                    <span class="col-4 text-right">
                        <span class="row">
                            <span class="col-lg-6">
                                <a
                                    @click.stop
                                    :href="'https://rinkeby.etherscan.io/address/' + user.requester"
                                    target="_blank"
                                    class="text-muted"
                                    >{{ shortenedContributor }}</a
                                >
                            </span>
                            <span class="col-lg-6">
                                <span class="text-muted">
                                    <i v-if="user.status == 0" class="fas fa-times-circle text-danger mt-1 mr-2"></i>
                                    <i v-if="user.status == 1" class="fas fa-check-circle text-success mt-1 mr-2"></i>
                                    <i
                                        v-if="user.status == 2 || user.status == 3"
                                        class="fas fa-question-circle text-warning mt-1 mr-2"
                                    ></i>
                                </span>
                            </span>
                        </span>
                    </span>
                </span>
            </a>
        </div>
        <transition name="translate">
            <div v-if="open">
                <div class="card-body p-0">
                    <div class="border-bottom py-3 pr-3 pl-6">
                        <div class="row d-flex align-items-center">
                            <div class="col-8 ">
                                <div class="font-size-1">{{ user.decodedData[1] }}</div>
                            </div>
                            <div class="col-4 text-right">
                                <button @click="buttonAction" class="btn btn-primary btn-sm">
                                    {{ buttonContent }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
import transactions from "@/mixins/transactions";

export default {
    props: ["user","challengePeriod"],
    mixins: [transactions],
    data() {
        return {
            open: false,
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
        buttonAction() {
            if (this.challengeOver && this.user.disputed == false && this.user.status > 1) {
                this.executeRequest();
            } else if (this.user.status == 1) {
                this.openRemoveModal();
            } else if (!this.challengeOver && this.user.disputed == false) {
                this.openChallengeModal();
            } else if (this.user.disputed == true) {
                this.openEvidenceModal();
            }
        },
    },
    computed: {
        buttonContent() {
            if (this.challengeOver && this.user.disputed == false && this.user.status > 1) {
                return "Accept Pending";
            }
            if (this.user.status == 1) {
                return "Raise Dispute";
            }
            if (!this.challengeOver && this.user.disputed == false) {
                return "Challenge " + this.status[this.user.status].split(" ")[0];
            }
            if (this.user.disputed == true) {
                return "Submit Evidence";
            }

            return "Button";
        },

        challengeEndDate() {
            return this.formatDate(
                new Date(parseInt(this.user.submissionTime) * 1000 + parseInt(this.challengePeriod) * 1000)
            );
        },
  
        remainingTime() {
            const millisecondsRemaining = Date.now() - new Date(parseInt(this.user.submissionTime) * 1000);
            let msRemaining = parseInt(this.challengePeriod) * 1000 - millisecondsRemaining;
            if (msRemaining > 0) {
                return this.msToHours(msRemaining);
            } else {
                return 0;
            }
        },
        shortenedContributor() {
            console.log(this.user.requester.slice(0, 6) + "..." + this.user.requester.slice(-4));
            return this.user.requester.slice(0, 6) + "..." + this.user.requester.slice(-4);
        },
        challengeOver() {
            return (
                Date.now() > new Date(parseInt(this.user.submissionTime) * 1000 + parseInt(this.challengePeriod) * 1000)
            );
        },
    },
};
</script>
