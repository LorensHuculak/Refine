<style lang="scss" scoped>
.twitter-login {
  background-color: rgb(62, 139, 165);
  padding: 1rem;
  color: $Grey10;
  display: inline-block;
  cursor: pointer;
}

.list-title {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}
.list-header {
  display: flex;
  padding: 1rem;
  font-size: 1rem;
  justify-content: space-between;
  width: 100%;
  @include medium {
    font-size: 1.5rem;
  }
}
.header {
  margin-top: 1rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.username {
  width: 30%;
}
.itemstatus {
  width: 40%;
}
.remainingtime {
  width: 20%;
  text-align: center;
}
.add-user {
  padding: 0.5rem 1rem;
  background-color: $BluePrimary;
  color: $Grey10;
  font-size: 1.2rem;
  border: 1px solid $Grey6;
  cursor: pointer;
  margin-left: 2rem;
  display: inline-block;
}

.disabled {
  background-color: $Grey6;
  color: black;
}
.button-bar {
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @include small {
    flex-direction: row;
  }
}
.buttons {
  display: flex;
  justify-content: space-between;
}
.list-search {
  margin-bottom: 1rem;
  @include small {
    width: 30%;
    margin-bottom: 0rem;
  }
  padding: 0.2rem;
  padding-left: 1rem;
}
</style>

<template>
  <LoadingSpinner v-if="isLoading" class="mt-5 mb-5"></LoadingSpinner>
  <div class="container space-top-1 space-top-md-2 space-bottom-2" v-else>
    <!-- TODO: errors caused routing to fail -->
    <div class="header">
      <div>
        <div class="list-title">{{ list?.metadata?.tcrTitle || "Title" }}</div>
        <div class="list-description">
          {{ list?.metadata?.tcrDescription || "Description" }}
        </div>
      </div>
      <div>
        <div>Inclusion Critera:</div>
        <a
          class="criteria-button"
          :href="gateway + list?.submissionEvidence?.fileURI"
          target="_blank"
          >View File</a
        >
      </div>
    </div>

    <div class="button-bar">
      <div class="col-md-6">
        <input
          v-if="items.length != 0"
          v-model="filter"
          type="text"
          class="form-control"
          placeholder="Filter"
        />
      </div>
      <div class="buttons">
        <tippy theme="shown">
          <div
            @click="blockUsers"
            v-if="!isLoggedIn && items.length != 0"
            class="btn btn-secondary mr-4"
          >
            Subscribe
          </div>
          <template #content>
            Log In with twitter to subscribe to lists
          </template>
        </tippy>
        <tippy theme="shown" trigger="manual" ref="SUBTIPPY">
          <button
            @click="blockUsers"
            v-if="isLoggedIn"
            class="btn btn-success subscribe mr-4"
          >
            {{ subscribed }}
          </button>
          <template #content> Subscribed! </template>
        </tippy>
        <button
          class="btn btn-primary"
          v-if="currentAccount"
          @click="openSubmit"
        >
          Add user
        </button>
        <tippy theme="shown" v-else>
          <button class="btn btn-secondary">Add user</button>
          <template #content> Connect your wallet to add users </template>
        </tippy>
      </div>
    </div>
    <div
      class="alert alert-warning text-center"
      role="alert"
      v-if="items.length == 0"
    >
      There are no users in this list, submit some to get started!
    </div>
    <div v-if="items.length != 0" class="list-group">
      <div class="row">
        <div class="col-3">Name</div>
        <div class="col-6 d-flex justify-content-center">
          <div>Status</div>
        </div>
        <div class="col-2">Time Remaining</div>
        <div class="col-1"></div>
      </div>

      <ListUser
        @clickedUser="updateUser"
        v-for="user in shownLists"
        :key="user"
        :user="user"
        :challengeperiod="list.challengePeriod"
      ></ListUser>
    </div>
  </div>
  <RemoveModal :user="clickedUser" v-if="removeModalOpen"></RemoveModal>
  <ChallengeModal
    :user="clickedUser"
    v-if="challengeModalOpen"
  ></ChallengeModal>
  <EvidenceModal :user="clickedUser" v-if="evidenceModalOpen"></EvidenceModal>
  <NewUserModal :list="list" v-if="userModalOpen"></NewUserModal>
</template>

<script>
import { GeneralizedTCR } from "@kleros/gtcr-sdk";
import ListUser from "@/components/ListUser";
import ChallengeModal from "@/components/modals/ChallengeModal";
import RemoveModal from "@/components/modals/RemoveModal";
import EvidenceModal from "@/components/modals/EvidenceModal";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import authentication from "@/mixins/authentication";
import transactions from "@/mixins/transactions";
import NewUserModal from "@/components/modals/NewUserModal";
export default {
  components: {
    LoadingSpinner,
    ListUser,
    NewUserModal,
    ChallengeModal,
    EvidenceModal,
    RemoveModal,
  },
  mixins: [authentication, transactions],
  data() {
    return {
      filter: null,
      subscribed: "Subscribe",
      isLoading: false,
      list: null,
      items: null,
      newUsername: null,
      gateway: process.env.VUE_APP_IPFS_GATEWAY,
      addingUser: false,
      isBlocking: false,
      clickedUser: null,
    };
  },
  computed: {
    chain() {
      return this.$store.getters.currentChain;
    },

    currentAccount() {
      return this.$store.getters.currentAccount;
    },
    test() {
      return this.$store.state;
    },
    shownLists() {
      if (this.filter) {
        return this.items.filter((x) =>
          x.decodedData[0].toLowerCase().includes(this.filter.toLowerCase())
        );
      } else {
        return this.items;
      }
    },
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
    challengeModalOpen() {
      return this.$store.getters.getModalOpen("challenge");
    },
    evidenceModalOpen() {
      return this.$store.getters.getModalOpen("evidence");
    },
    removeModalOpen() {
      return this.$store.getters.getModalOpen("remove");
    },
    userModalOpen() {
      return this.$store.getters.getModalOpen("newUser");
    },
  },
  methods: {
    updateUser(e) {
      this.clickedUser = e;
    },

    openSubmit() {
      this.$store.dispatch("setModal", {
        modalName: "newUser",
        open: true,
      });
    },
  },
  created() {
    let address = this.$route.params.address;

    this.isLoading = true;

    (async () => {
      const gtcr = new GeneralizedTCR(
        window.ethereum,
        address,
        process.env.VUE_APP_GTCR_VIEW_ADDRESS,
        process.env.VUE_APP_IPFS_GATEWAY
      );

      let challengePeriod = await gtcr.gtcrInstance.challengePeriodDuration();
      let evidence = await gtcr.getLatestMetaEvidence();
      this.list = {
        challengePeriod: challengePeriod,
        address: gtcr.gtcrInstance.address,
        submissionEvidence: evidence[0],
        disputeEvidence: evidence[1],
        metadata: evidence[0].metadata,
      };

      this.items = await gtcr.getItems();

      this.isLoading = false;
    })();
  },
};
</script>
