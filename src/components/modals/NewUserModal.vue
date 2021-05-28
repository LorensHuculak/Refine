<style scoped lang="scss">
.no-resize {
  resize: none;
}
</style>

<template>
  <Modal title="Submit a user" modalName="newUser">
    <div class="form-group">
      <label for="username">Username</label>
      <tippy
        theme="shown"
        class="float-right"
        placement="left"
        :offset="[0, -10]"
      >
        <span class="material-icons info-icon"> info </span>

        <template #content>
          The username of the user, this is the @ handle of the user
        </template>
      </tippy>
      <input v-model="newUsername" type="text" class="form-control" />
    </div>
    <div class="form-group">
      <label for="justification">Justification</label>
      <tippy
        theme="shown"
        class="float-right"
        placement="left"
        :offset="[0, -10]"
      >
        <span class="material-icons info-icon"> info </span>

        <template #content>
          A very brief explanation of why this user confirms to the list. If
          including links as evidence, archive the content using
          https://web.archive.org/ and link to that
        </template>
      </tippy>
      <textarea
        v-model="justification"
        type="text"
        class="form-control no-resize"
        rows="2"
        cols="2"
      >
      </textarea>
    </div>
    <button class="btn btn-primary btn-block" @click="addUser">
      Submit User
    </button>
  </Modal>
</template>
<script>
import Modal from "./Modal";
import transactions from "@/mixins/transactions";
export default {
  components: {
    Modal,
  },
  mixins: [transactions],
  props: ["list"],
  data() {
    return {
      newUsername: null,
      justification: null,
    };
  },
  methods: {
    close() {
      this.$store.dispatch("setModal", {
        modalName: "newUser",
        open: false,
      });
    },
  },
};
</script>
