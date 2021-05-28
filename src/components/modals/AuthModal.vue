<template>
  <div
    class="modal"
    id="invoiceReceiptModal"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
    @click.self="close"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <!-- Header -->
        <div
          class="modal-top-cover text-center"
          style="background-color: #1da1f2"
        >
          <figure class="position-absolute right-0 bottom-0 left-0">
            <svg
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 1920 100.1"
            >
              <path fill="#fff" d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z" />
            </svg>
          </figure>

          <div class="modal-close" @click="close">
            <button
              type="button"
              class="btn btn-icon btn-sm btn-ghost-light"
              data-dismiss="modal"
              aria-label="Close"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M11.5,9.5l5-5c0.2-0.2,0.2-0.6-0.1-0.9l-1-1c-0.3-0.3-0.7-0.3-0.9-0.1l-5,5l-5-5C4.3,2.3,3.9,2.4,3.6,2.6l-1,1 C2.4,3.9,2.3,4.3,2.5,4.5l5,5l-5,5c-0.2,0.2-0.2,0.6,0.1,0.9l1,1c0.3,0.3,0.7,0.3,0.9,0.1l5-5l5,5c0.2,0.2,0.6,0.2,0.9-0.1l1-1 c0.3-0.3,0.3-0.7,0.1-0.9L11.5,9.5z"
                />
              </svg>
            </button>
          </div>
        </div>
        <!-- End Header -->

        <div class="modal-top-cover-avatar">
          <img
            class="avatar avatar-lg avatar-circle avatar-border-lg avatar-centered shadow-soft"
            src="~@/assets/img/icons/twitter.svg"
            alt="Logo"
          />
        </div>

        <!-- Body -->
        <div class="modal-body pt-3 pb-sm-5 px-sm-5">
          <div class="text-center mb-5">
            <h3 class="mb-1">Authentication Required</h3>
            <span class="d-block"
              >We need your authorization to update your Twitter feed.</span
            >
          </div>

          <div class="mb-3">
            <button
              @click="twitterLogin"
              type="submit"
              class="btn btn-sm btn-primary btn-block"
            >
              <i class="fas fa-unlock mr-2"></i>Authorize Refine
            </button>
          </div>

          <hr class="my-5" />

          <p class="modal-footer-text">
            If you have any questions, please go to our
            <a>Help Center</a> or or join
            <a class="text-nowrap">Discord.</a>
          </p>
        </div>
        <!-- End Body -->
      </div>
    </div>
  </div>
</template>
<script>
import authentication from "@/mixins/authentication";
export default {
  mixins: [authentication],

  methods: {
    close() {
      this.$store.dispatch("setModal", {
        modalName: "auth",
        open: false,
      });
    },
  },
};
</script>
