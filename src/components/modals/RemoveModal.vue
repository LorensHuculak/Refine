<style scoped lang="scss">
.no-resize {
  resize: none;
}
</style>

<template>
  <Modal title="Raise a dispute" modalName="remove">
    <label for="username" class="mb-3">Evidence</label>
    <tippy
      theme="shown"
      class="float-right"
      placement="left"
      :offset="[0, -10]"
    >
      <span class="material-icons info-icon"> info </span>

      <template #content>
        Provide a justification for why this user should not be part of this
        list
      </template>
    </tippy>

    <textarea
      class="form-control no-resize"
      rows="3"
      v-model="justification"
      type="text"
    />

    <button class="btn mt-5 btn-primary btn-block" @click="removeItem">
      Submit Dispute
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
  props: ["user"],
  data() {
    return {
      justification: null,
    };
  },
  methods: {
    close() {
      this.$store.dispatch("setModal", {
        modalName: "remove",
        open: false,
      });
    },
  },
};
</script>
