// @ts-nocheck
import Archon from "@kleros/archon";
import { gtcrEncode } from "@kleros/gtcr-encoder";

import GTCRabi from "@/contracts/GTCR";
import TCRabi from "@/contracts/TCR";
export default {
    methods: {
        async ipfsPublish(fileName, data) {
            const buffer = await Buffer.from(data);

            return new Promise((resolve, reject) => {
                fetch(`${process.env.VUE_APP_IPFS_GATEWAY}/add`, {
                    method: "POST",
                    body: JSON.stringify({
                        fileName,
                        buffer,
                    }),
                    headers: {
                        "content-type": "application/json",
                    },
                })
                    .then((response) => response.json())
                    .then((success) => resolve(success.data))
                    .catch((err) => reject(err));
            });
        },
        sanitize(str) {
            return str
                .toString()
                .toLowerCase()
                .replace(/([^a-z0-9.]+)/gi, "-"); // Only allow numbers and aplhanumeric.
        },

        async encodeAndUpload(justification: string) {
            let ipfsEvidencePath = "";

            const evidenceJSON = {
                title: "Removal Justification",
                description: justification,
            };

            const enc = new TextEncoder();
            const fileData = enc.encode(JSON.stringify(evidenceJSON));
            const ipfsEvidenceObject = await this.ipfsPublish("evidence.json", fileData);
            ipfsEvidencePath = `/ipfs/${ipfsEvidenceObject[1].hash + ipfsEvidenceObject[0].path}`;

            return ipfsEvidencePath;
        },
        /// addItem
        ///removeItem
        /// challengeRequest
        /// fundAppeal
        ///withdrawFeesAndRewards
        //executeRequest
        // submitEvidence

        async addUser() {
            const address = this.$route.params.address;
            const myContract = new window.web3.eth.Contract(TCRabi, address);

            const columns = [...this.list.metadata.columns];

            const values = {
                Username: this.newUsername,
                Justification: this.justification,
            };

            const encodedParams = gtcrEncode({ columns, values });

            const sender = await window.web3.eth.getAccounts();
            myContract.methods
                .addItem(encodedParams)
                .send({ from: sender[0], value: 51000000000000000 })
                .then((e) => console.log(e));
        },

        async removeItem(justification) {
            const ipfsEvidencePath = await this.encodeAndUpload(justification);

            // Request signature and send removal request.

            const address = this.$route.params.address;
            const myContract = new window.web3.eth.Contract(TCRabi, address);
            const sender = await window.web3.eth.getAccounts();

            myContract.methods
                .removeItem(this.user, ipfsEvidencePath) //id, ipfspath
                .send({ from: sender[0], value: 500000000000000000 })
                .then((e) => console.log(e));
        },
        async challengeRequest(justification) {
            const ipfsEvidencePath = await this.encodeAndUpload(justification);

            const address = this.$route.params.address;
            const myContract = new window.web3.eth.Contract(TCRabi, address);
            const sender = await window.web3.eth.getAccounts();

            myContract.methods
                .challengeRequest(this.user, ipfsEvidencePath)
                .send({ from: sender[0], value: 500000000000000000 })
                .then((e) => console.log(e));
        },
        async executeRequest() {
            const address = this.$route.params.address;
            const myContract = new window.web3.eth.Contract(TCRabi, address);
            const sender = await window.web3.eth.getAccounts();

            myContract.methods
                .executeRequest(this.user.ID)
                .send({ from: sender[0] })
                .then((e) => console.log(e));
        },
        async submitEvidence(justification) {
            const ipfsEvidencePath = await this.encodeAndUpload(justification);

            const address = this.$route.params.address;
            const myContract = new window.web3.eth.Contract(TCRabi, address);
            const sender = await window.web3.eth.getAccounts();

            myContract.methods
                .submitEvidence(this.user, ipfsEvidencePath)
                .send({ from: sender[0] })
                .then((e) => console.log(e));
        },

        async createList() {
            this.isUploading = true;
            const factoryContract = new window.web3.eth.Contract(GTCRabi, process.env.VUE_APP_GTCR_FACTORY_ADDRESS);

            const enc = new TextEncoder();
            const metaEvidenceFiles = [this.registrationMetaEvidence, this.clearingMetaEvidence].map((metaEvidence) =>
                enc.encode(JSON.stringify(metaEvidence))
            );
            const files = [...metaEvidenceFiles].map((file) => ({
                data: file,
                multihash: Archon.utils.multihashFile(file, 0x1b),
            }));
            const ipfsMetaEvidenceObjects = (
                await Promise.all(files.map((file) => this.ipfsPublish(file.multihash, file.data)))
            ).map(
                (ipfsMetaEvidenceObject) => `/ipfs/${ipfsMetaEvidenceObject[1].hash + ipfsMetaEvidenceObject[0].path}`
            );
            const TCRArgs = [
                process.env.VUE_APP_ARBITRATION_ADDRESS,
                "0x00", // Arbitrator extra data.
                "0x0000000000000000000000000000000000000000",
                ipfsMetaEvidenceObjects[0],
                ipfsMetaEvidenceObjects[1],
                "0xdC8C1a8CB38F27C188a43CE0eBBC8e42e393D0d3", // governor address
                "0xb1a2bc2ec50000",
                "0xb1a2bc2ec50000",
                "0x00",
                "0xb1a2bc2ec50000",
                300,
                [10000, 10000, 20000],
            ];
            this.isUploading = false;
            const sender = await window.web3.eth.getAccounts();

            factoryContract.methods
                .deploy(...TCRArgs)
                .send({ from: sender[0] })
                .then((e) => {

                    this.addToMetaList(e.events.NewGTCR.returnValues._address);
                });
        },
        async addToMetaList(addressToAdd) {
            const address = process.env.VUE_APP_META_LIST;
            const myContract = new window.web3.eth.Contract(TCRabi, address);

            const columns = [
                {
                    description: "The lists address",
                    label: "Address",
                    type: "text",
                    isIdentifier: true,
                },
            ];

            const values = {
                Address: addressToAdd,
            };

            const encodedParams = gtcrEncode({ columns, values });

            const sender = await window.web3.eth.getAccounts();
            myContract.methods
                .addItem(encodedParams)
                .send({ from: sender[0], value: 51000000000000000 })
                .then((e) => console.log(e));
        },
    },

    // computed: {
    //     metaEvidence() {
    //         return {
    //             question: "Does the twitter user fit the required criteria?",
    //             fileURI: this.listcriteria,
    //             evidenceDisplayInterfaceURI: "",
    //             evidenceDisplayInterfaceHash: "",
    //             category: "Curated list of twitter users",
    //             metadata: {
    //                 tcrTitle: this.listname,
    //                 tcrDescription: this.listdescription,
    //                 columns: [
    //                     {
    //                         description: "The twitter accounts username",
    //                         label: "Username",
    //                         type: "text",
    //                         isIdentifier: true,
    //                     },
    //                     {
    //                         description: "A summary of why they should be included",
    //                         label: "Justification",
    //                         type: "text",
    //                         isIdentifier: false,
    //                     },
    //                 ],
    //                 itemName: "Name",
    //                 itemNamePlural: "Names",
    //                 requireRemovalEvidence: true,
    //                 isTCRofTCRs: false,
    //                 relTcrDisabled: true,
    //                 logoURI: this.listImage,
    //             },
    //         };
    //     },

    //     listMetaEvidence() {
    //         return {
    //             ...this.metaEvidence,
    //             title: `Add an item to ${this.listname}`,
    //             description: `Someone requested to add an item from ${this.listname}`,
    //             rulingOptions: {
    //                 titles: ["Yes, add them", "No, don't add them"],
    //                 descriptions: [
    //                     "Select this if you think the twitter user fits the criteria and should be added",
    //                     "Select this if you think the twitter user does not fit the required criteria and should not be added",
    //                 ],
    //             },
    //         };
    //     },
    //     listClearingMetaEvidence() {
    //         return {
    //             ...this.metaEvidence,
    //             title: `Remove an item to ${this.listname}`,
    //             description: `Someone requested to remove an item from ${this.listname}`,
    //             rulingOptions: {
    //                 titles: ["No, remove them", "Yes, don't remove them"],
    //                 descriptions: [
    //                     "Select this if you think the twitter user does not fit the criteria and should be removed",
    //                     "Select this if you think the twitter user does fit the criteria and should not be removed",
    //                 ],
    //             },
    //         };
    //     },
    // },
};
