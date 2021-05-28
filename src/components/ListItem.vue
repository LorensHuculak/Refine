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
.clip {
  overflow: hidden;
}
</style>

<template>
  <div class="scale card border mb-1">
    <div class="card-header card-collapse">
      <a
        @click="toggleOpen"
        class="btn btn-link btn-sm btn-block card-btn collapsed p-3"
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
                <ShortAddress :address="user.requester"></ShortAddress>
              </span>
              <span class="col-lg-6">
                <span class="text-muted">
                  <i
                    v-if="user.status == 0"
                    class="fas fa-times-circle text-danger mt-1 mr-2"
                  ></i>
                  <i
                    v-if="user.status == 1"
                    class="fas fa-check-circle text-success mt-1 mr-2"
                  ></i>
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
      <div v-if="open" class="card-body p-0 clip">
        <div class="border-bottom py-3 pr-3 pl-6">
          <div class="row d-flex align-items-center">
            <div class="col-8">
              <div class="font-size-1">{{ user.decodedData[1] }}</div>
            </div>
            <div class="col-4 text-right">
              <DisputeButton
                :item="user"
                :challengePeriod="challengePeriod"
              ></DisputeButton>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import DisputeButton from "@/components/buttons/DisputeButton";
import ShortAddress from "@/components/ui/ShortAddress";
export default {
  props: ["user", "challengePeriod"],
  components: {
    DisputeButton,
    ShortAddress,
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggleOpen() {
      this.open = !this.open;
    },
  },
  computed: {
    challengeEndDate() {
      return this.formatDate(
        new Date(
          parseInt(this.user.submissionTime) * 1000 +
            parseInt(this.challengePeriod) * 1000
        )
      );
    },

    remainingTime() {
      const millisecondsRemaining =
        Date.now() - new Date(parseInt(this.user.submissionTime) * 1000);
      let msRemaining =
        parseInt(this.challengePeriod) * 1000 - millisecondsRemaining;
      if (msRemaining > 0) {
        return this.msToHours(msRemaining);
      } else {
        return 0;
      }
    },
  },
};
</script>
