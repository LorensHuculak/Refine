<template>
  <a
    @click.stop
    :href="'https://rinkeby.etherscan.io/address/' + address"
    target="_blank"
    
    >{{ shortenedAddress }}</a
  >
</template>
<script>
export default {
  props: ["address"],
  computed: {
    shortenedAddress() {
      if (this.address){

        return this.address.slice(0, 6) + "..." + this.address.slice(-4);
      } else {
        return null
      }
    },
  },
};
</script>