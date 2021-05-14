<style scoped lang="scss"></style>

<template>
    <div @click.self="close" class="modal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">
                <CloseButton @click="close"></CloseButton>
                <div class="modal-body">
                    <div class="text-center mb-7">
                        <h3 class="mb-0">
                            {{ title }}
                        </h3>
                    </div>
                    <div class="form-group">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import CloseButton from "@/components/buttons/CloseButton";
export default {
    props: ["title", "modalName"],
    components: {
        CloseButton,
    },

    methods: {
        close() {
            this.$store.dispatch("setModal", {
                modalName: this.modalName,
                open: false,
            });
        },
    },
};
</script>
