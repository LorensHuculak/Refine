<style lang="scss">
.twitter-card {
    &-image {
        width: 54px;
        height: 54px;
        border-radius: 100%;
    }
}
.twitter {
    background-color: #1da1f2;
}
.twitter-logo {
    height: 32px;
    width: 48px;
    margin-right: 1rem;
}
.dropdown {
    display: flex;
    background-color: #1da1f2;
    align-items: center;
    justify-content: center;
    padding: 0.4rem 1rem;
    cursor: pointer;
}
</style>

<template>
    <tippy :interactive="true" :appendTo="body">
        <img class="twitter-card-image" :src="profileImage" />
        <template #content>
            <div class="dropdown" @click="logOut">
                <img class="twitter-logo" src="~@/assets/svg/twitter-logo-white.svg" alt="Image Descriptio" />

                <span class="d-block font-weight-bold">
                    Log Out
                </span>
            </div>
        </template>
    </tippy>
</template>

<script>
export default {
    data() {
        return {
            dropdown: false,
        };
    },
    methods: {
        openDropdown() {
            this.dropdown = !this.dropdown;
        },
        logOut() {
            this.$store.dispatch("logout");
        },
    },
    created() {
        this.body = document.body;
    },
    computed: {
        username() {
            return this.$store.getters.username;
        },

        profileImage() {
            return this.$store.getters.profileImage;
        },
    },
};
</script>
