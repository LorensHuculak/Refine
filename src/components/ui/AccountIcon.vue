<template>
    <span ref="avatarIcon">
        <!-- avatar inserted -->
    </span>
</template>
<script>
import Jazzicon from "jazzicon";
import { toDataUrl } from "myetherwallet-blockies";

export default {
    props: ["address", "size"],
    watch: {
        watchBoth() {
            this.$refs.avatarIcon.innerHTML = ""; //clear the previous jazzicon in case we disconnect and connect multiple times per session
            if (this.useBlockies) {
                const img = new Image(this.size, this.size);
                img.src = toDataUrl(this.address);
                this.$refs.avatarIcon.appendChild(img);
            } else {
                this.$refs.avatarIcon.appendChild(Jazzicon(this.size, parseInt(this.address.slice(2, 10), 16)));
            }
        },
    },
    computed: {
        watchBoth() {
            return `${this.address}${this.useBlockies}${this.size}`;
        },
        useBlockies() {
            console.log(this.$store.getters.getBlockiesIcon);
            return this.$store.getters.getBlockiesIcon;
        },
    },
};
</script>
<style scoped></style>
