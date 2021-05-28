<template>
  <div class="pt-6">
    <div
      class="d-sm-flex justify-content-sm-between align-items-sm-center border-bottom pb-3 mb-4"
    >
      <div class="d-flex align-items-center mb-2 mb-sm-0">
        <h4 class="mb-0">
          Reviews <small class="text-muted ml-1">(156)</small>
        </h4>
      </div>

      <select class="form-select">
        <option selected>Newest first</option>
        <option>Highest rated</option>
        <option>Lowest rated</option>
      </select>
    </div>

    <div class="media">
      <div class="avatar avatar-circle mr-3">
        <img
          class="avatar-img"
          src="~@/assets/img/100x100/img1.jpg"
          alt="Image Description"
        />
      </div>
      <div class="media-body border-bottom pb-6 mb-6">
        <span class="h4">Christina Kray</span>

        <p>
          Just started using Refine for Twitter, and finding it to serve all my
          needs and it integrates perfectly with Refine! Sharing diagrams is now
          much easier for our team.
        </p>

        <small class="text-body mr-2">Was this review helpful?</small>
        <a class="small mr-2">Yes</a>
        <a class="small">No</a>

        <div class="card bg-light shadow-none p-3 mt-4">
          <div class="media">
            <div class="avatar mr-3">
              <img
                class="avatar-img"
                src="~@/assets/img/icons/account.png"
                alt="Image Description"
              />
            </div>
            <div class="media-body">
              <span class="d-block text-dark font-weight-bold"
                >Lorens Huculak</span
              >
              <p>
                Thanks for the review Maria! Let us know if you ever need
                anything.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="media">
      <div class="avatar avatar-circle mr-3">
        <img
          class="avatar-img"
          src="~@/assets/img/100x100/img3.jpg"
          alt="Image Description"
        />
      </div>
      <div class="media-body border-bottom pb-6 mb-6">
        <span class="h4">Dave Austin</span>

        <p>
          This is a pretty cool integration. It is fun and easy to use. I had to
          make a few sharing for work and Gliffy helped me get the job done. If
          I had a tablet or touch screen, I would use this more.
        </p>

        <small class="text-body mr-2">Was this review helpful?</small>
        <a class="small mr-2">Yes</a>
        <a class="small">No</a>

        <div class="card bg-light shadow-none p-3 mt-4">
          <div class="media">
            <div class="avatar mr-3">
              <img
                class="avatar-img"
                src="~@/assets/img/icons/account.png"
                alt="Image Description"
              />
            </div>
            <div class="media-body">
              <span class="d-block text-dark font-weight-bold"
                >Lorens Huculak</span
              >
              <p>Love it Dave! We're all about keeping it fun and easy.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="media">
      <div class="avatar avatar-circle mr-3">
        <img
          class="avatar-img"
          src="~@/assets/img/100x100/img11.jpg"
          alt="Image Description"
        />
      </div>
      <div class="media-body border-bottom pb-6 mb-6">
        <span class="h4">Nika Mundada</span>

        <p>
          I love Refine! It's super easy to get started and works great with
          Refine pages.
        </p>

        <small class="text-body mr-2">Was this review helpful?</small>
        <a class="small mr-2">Yes</a>
        <a class="small">No</a>

        <div class="card bg-light shadow-none p-3 mt-4">
          <div class="media">
            <div class="avatar mr-3">
              <img
                class="avatar-img"
                src="~@/assets/img/icons/account.png"
                alt="Image Description"
              />
            </div>
            <div class="media-body">
              <span class="d-block text-dark font-weight-bold"
                >Lorens Huculak</span
              >
              <p>Thanks for the feedback Nika!</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center">
      <a class="font-weight-bold"
        >Read More Reviews <i class="fas fa-angle-right ml-1"></i
      ></a>
    </div>
  </div>
</template>
<script>
export default {};
</script>
