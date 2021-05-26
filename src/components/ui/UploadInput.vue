<style scoped lang="scss">
.hidden-input {
    display: none;
}
.shown-input {
    border: 1px solid $Grey3;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 5rem;
    cursor: pointer;
    &:hover {
        background-color: $Grey9;
    }
}
.list-logo {
    width: 60px;
    height: 60px;
    position: absolute;
}
.icon {
    position: absolute;
    font-size: 2rem;
}
</style>

<template>
    <div>
        <input ref="fileInput" @input="uploadFile" class="hidden-input" :accept="acceptedInputs" type="file" />
        <div @click="triggerInput" class="shown-input">
            <img class="list-logo" v-if="uploadURI && type == 'image'" :src="fileUrl" alt="" />
            <div v-if="uploadURI && type == 'pdf'" :src="fileUrl" alt="">
                <a @click.stop :href="fileUrl" target="_blank">{{ fileName }}</a>
            </div>
            <i v-if="!isUploading && !error && !uploadURI" class="material-icons icon"> file_upload </i>
            <div v-if="error" class="alert alert-soft-danger mb-0">
                {{ error }}
            </div>
            <div v-if="isUploading">Uploading...</div>
            <LoadingSpinner v-if="isUploading"></LoadingSpinner>
        </div>
    </div>
</template>
<script>
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import transactions from "@/mixins/transactions";
export default {
    props: ["type"], //image or pdf
    emits: ["uploaded"],
    mixins: [transactions],
    components: {
        LoadingSpinner,
    },
    data() {
        return {
            isUploading: false,
            uploadURI: null,
            fileName: null,
            error: null,
        };
    },
    methods: {
        triggerInput() {
            this.$refs.fileInput.click();
        },

        async uploadFile(files) {
            this.isUploading = true;
            this.uploadURI = null;
            this.error = null;
            let file = files.target.files[0];
            if (file.size < 4000000) {
                // smaller than 4mb
                try {
                    const data = await new Response(new Blob([file])).arrayBuffer();
                    const ipfsFileObj = await this.ipfsPublish(this.sanitize(file.name), data);
                    const fileURI = `/ipfs/${ipfsFileObj[1].hash}${ipfsFileObj[0].path}`;
                    this.uploadURI = fileURI;
                    this.fileName = file.name;
                    this.$emit("uploaded", fileURI);
                } catch (err) {
                    console.log(err);
                }
            } else {
                this.error = "File is too big, 4mb maximum size";
            }
            this.isUploading = false;
        },
    },
    computed: {
        acceptedInputs() {
            return this.type == "image" ? ".png" : ".pdf";
        },

        fileUrl() {
            return process.env.VUE_APP_IPFS_GATEWAY + this.uploadURI;
        },
    },
};
</script>
