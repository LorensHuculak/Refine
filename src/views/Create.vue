<style lang="scss">
.description {
    resize: none;
}
.small-alert {
    line-height: 10px;
    padding: 0;
}
</style>

<template>
    <div class="container">
        <div class="card mb-10">
            <div class="card-header mb-2">
                <h3>Create a List</h3>
            </div>

            <div class="form-group ">
                <div class="d-flex justify-content-between align-items-center">
                    <label for="list-title">List Title</label>

                    <div v-if="nameWarning" class="text-danger">
                        The name of the list must be between 4 and 32 characters
                    </div>
                    <tippy class="float-right" theme="shown" placement="left">
                        <span class="material-icons info-icon"> info </span>

                        <template #content> The title of the list, 32 characters maximum </template>
                    </tippy>
                </div>

                <input
                    type="text"
                    class="form-control "
                    :class="{ 'is-invalid': nameWarning }"
                    @blur="checkNameValid"
                    @focus="resetNameValid"
                    v-model="listname"
                />
            </div>

            <div class="form-group">
                <div class="d-flex justify-content-between align-items-center">
                    <label for="list-title">List Description</label>

                    <div v-if="descriptionWarning" class="text-danger">
                        The description must be between 32 and 200 characters
                    </div>
                    <tippy class="float-right" theme="shown" placement="left">
                        <span class="material-icons info-icon"> info </span>

                        <template #content> A short description of the list</template>
                    </tippy>
                </div>

                <textarea
                    @blur="checkDescriptionValid"
                    @focus="resetDescriptionValid"
                    type="text"
                    class="form-control description"
                    rows="2"
                    cols="2"
                    v-model="listdescription"
                >
                </textarea>
            </div>

            <div class="form-group">
                <label for="list-title">Acceptance Criteria</label>
                <tippy class="float-right" theme="shown" placement="left">
                    <span class="material-icons info-icon"> info </span>

                    <template #content>
                        A .pdf format document with clear and explicit inclusion criteria. 4mb maximum
                        filesize</template
                    >
                </tippy>
                <UploadInput type="pdf" @uploaded="updateAcceptanceURI"></UploadInput>
            </div>

            <div class="form-group">
                <label for="list-title">List Image</label>
                <tippy class="float-right" theme="shown" placement="left">
                    <span class="material-icons info-icon"> info </span>

                    <template #content>
                        A list image in .png format with a 1:1 aspect ratio. 4mb maximum filesize
                    </template>
                </tippy>
                <UploadInput type="image" @uploaded="updateImageURI"></UploadInput>
            </div>

            <tippy theme="shown" v-if="!buttonActive">
                <button class="btn btn-secondary btn-block">
                    Create List
                </button>
                <template #content>
                    <div>
                        Finish filling in the rest of the form
                    </div>
                </template>
            </tippy>
            <button v-else class="btn btn-primary btn-block" @click="createList">
                Create List
                <LoadingSpinner v-if="isUploading"></LoadingSpinner>
            </button>
        </div>
    </div>
</template>
<script>
import UploadInput from "@/components/ui/UploadInput";
import transactions from "@/mixins/transactions";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

export default {
    mixins: [transactions],
    components: {
        UploadInput,
        LoadingSpinner,
    },
    data() {
        return {
            listname: null,
            listdescription: null,
            listcriteria: null,
            listImage: null,
            nameWarning: false,
            descriptionWarning: false,
            isUploading: false,
        };
    },
    methods: {
        updateAcceptanceURI(e) {
            this.listcriteria = e;
        },
        updateImageURI(e) {
            this.listImage = e;
        },

        checkNameValid() {
            if (!this.validName) {
                this.nameWarning = true;
            }
        },
        resetNameValid() {
            this.nameWarning = false;
        },
        checkDescriptionValid() {
            if (!this.validDescription) {
                this.descriptionWarning = true;
            }
        },
        resetDescriptionValid() {
            this.descriptionWarning = false;
        },
    },

    computed: {
        buttonActive() {
            return this.validName && this.validDescription && this.listcriteria != null && this.listImage != null;
        },
        validName() {
            return this.listname?.length > 3 && this.listname?.length <= 32;
        },
        validDescription() {
            return this.listdescription?.length > 20 && this.listdescription?.length <= 200;
        },

        metaEvidence() {
            return {
                question: "Does the twitter user fit the required criteria?",
                fileURI: this.listcriteria,
                evidenceDisplayInterfaceURI: "",
                evidenceDisplayInterfaceHash: "",
                category: "Curated list of twitter users",
                metadata: {
                    tcrTitle: this.listname,
                    tcrDescription: this.listdescription,
                    columns: [
                        {
                            description: "The twitter accounts username",
                            label: "Username",
                            type: "text",
                            isIdentifier: true,
                        },
                        {
                            description: "A summary of why they should be included",
                            label: "Justification",
                            type: "text",
                            isIdentifier: false,
                        },
                    ],
                    itemName: "Name",
                    itemNamePlural: "Names",
                    requireRemovalEvidence: true,
                    isTCRofTCRs: false,
                    relTcrDisabled: true,
                    logoURI: this.listImage,
                },
            };
        },

        registrationMetaEvidence() {
            return {
                ...this.metaEvidence,
                title: `Add an item to ${this.listname}`,
                description: `Someone requested to add an item from ${this.listname}`,
                rulingOptions: {
                    titles: ["Yes, add them", "No, don't add them"],
                    descriptions: [
                        "Select this if you think the twitter user fits the criteria and should be added",
                        "Select this if you think the twitter user does not fit the required criteria and should not be added",
                    ],
                },
            };
        },
        clearingMetaEvidence() {
            return {
                ...this.metaEvidence,
                title: `Remove an item to ${this.listname}`,
                description: `Someone requested to remove an item from ${this.listname}`,
                rulingOptions: {
                    titles: ["No, remove them", "Yes, don't remove them"],
                    descriptions: [
                        "Select this if you think the twitter user does not fit the criteria and should be removed",
                        "Select this if you think the twitter user does fit the criteria and should not be removed",
                    ],
                },
            };
        },
    },
};
</script>
