<template>
    <span class="avatar avatar-xs avatar-circle" ref="jazzicon">
        <!-- jazzicon inserted -->
    </span>
</template>
<script>
import Jazzicon from "jazzicon";
import { toDataUrl } from "myetherwallet-blockies";
export default {
    props: ["address"],
    watch: {
        address() {
            console.log("address", this.address);
            // this.$refs.Jazzicon
            this.$refs.jazzicon.innerHTML = ""; //clear the previous jazzicon in case we disconnect and connect multiple times per session
            const img = new Image();
            img.src = toDataUrl(this.address);
            this.$refs.jazzicon.appendChild(img);
            this.$refs.jazzicon.appendChild(Jazzicon(32, parseInt(this.address.slice(2, 10), 16)));
        },
    },
};
</script>
