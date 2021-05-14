<template>
    <button @click="twitterLogin" class="twitter-login-button">
        <img class="twitter-logo" src="~@/assets/svg/twitter-logo-white.svg" alt="Image Descriptio" />
        <div>Log in</div>
    </button>
</template>
<script>
import authentication from "@/mixins/authentication";
export default {
    mixins: [authentication],
};
</script>
<style scoped lang="scss">
.twitter-login-button {
    background-color: #1da1f2;
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    align-items: center;
    height: 36px;
    cursor: pointer;
    color: $Grey9;
}
.twitter-logo {
    height: 24px;
    width: 24px;
    margin-right: 1rem;
}
</style>
