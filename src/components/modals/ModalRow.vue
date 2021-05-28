<template>
  <a class="card card-frame h-100 mt-2">
    <div class="card-body">
      <div class="media">
        <figure class="w-100 max-w-6rem mr-3">
          <slot name="image"></slot>
        </figure>
        <div class="media-body">
          <slot name="text"> </slot>
        </div>
      </div>
    </div>
  </a>
</template>
<script>
export default {};
</script>
