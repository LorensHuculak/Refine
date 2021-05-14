<style lang="scss">
.description {
    resize: none;
}
</style>

<template>
    <div class="container">
        <div class="card mb-10">
            <div class="card-header mb-2">
                <h3>Create a List</h3>
            </div>
            <div class="form-group">
                <label for="list-title">List Title</label>
                <tippy class="float-right" placement="left">
                    <span class="material-icons info-icon"> info </span>

                    <template #content> The title of the list, 48 characters maximum </template>
                </tippy>
                <input type="text" class="form-control" v-model="listname" />
            </div>
            <div class="form-group">
                <label for="list-title">List Description</label>
                <tippy class="float-right" placement="left">
                    <span class="material-icons info-icon"> info </span>

                    <template #content> A one sentence description of the list</template>
                </tippy>
                <textarea type="text" class="form-control description" rows="2" cols="2" v-model="listdescription">
                </textarea>
            </div>
            <div class="form-group">
                <label for="list-title">Acceptance Criteria</label>
                <tippy class="float-right" placement="left">
                    <span class="material-icons info-icon"> info </span>

                    <template #content> A .pdf format document with clear and explicit inclusion criteria </template>
                </tippy>
                <UploadInput type="pdf" @uploaded="updateAcceptanceURI"></UploadInput>
            </div>
            <div class="form-group">
                <label for="list-title">List Image</label>
                <tippy class="float-right" placement="left">
                    <span class="material-icons info-icon"> info </span>

                    <template #content> A list image </template>
                </tippy>
                <UploadInput type="image" @uploaded="updateImageURI"></UploadInput>
            </div>
            <button class="btn btn-primary btn-block" @click="createList">Create List</button>
        </div>
    </div>
</template>
<script>
import UploadInput from "@/components/ui/UploadInput";
import transactions from "@/mixins/transactions";
export default {
    mixins: [transactions],
    components: {
        UploadInput,
    },
    data() {
        return {
            listname: null,
            listdescription: null,
            listcriteria: null,
            listImage: null,
        };
    },
    methods: {
        updateAcceptanceURI(e) {
            this.listcriteria = e;
        },
        updateImageURI(e) {
            this.listImage = e;
        },
    },

    computed: {
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
