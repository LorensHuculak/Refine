<template>
    <div class=" pt-6 " id="pills-one-example1" role="tabpanel" aria-labelledby="pills-one-example1-tab">
        
        <p>{{ list?.metadata?.tcrDescription || "Description" }}</p>
        <!-- Read More - Collapse -->

        <!-- End Read More - Collapse -->

        <!-- Link -->

        <!-- End Link -->

        <!-- Collapse -->

        <div class="border-top pt-7 mt-7">
            <div class="row mb-4">
                <div class="col-8">
                    <h3 class="mb-0">List Items</h3>
                </div>
                <div class="col-4 text-right">
                    <div class="row">
                        <div class="col-lg-6">
                            <span class="font-size-1">Contributor</span>
                        </div>
                        <div class="col-lg-6">
                            <span class="font-size-1">Status</span>
                        </div>
                    </div>
                </div>
            </div>
            <transition-group name="list" tag="div">
                <ListItem v-for="user in shownLists" :key="user" :user="user" :challengePeriod="challengePeriod"></ListItem>
            </transition-group>
        </div>
    </div>
</template>
<script>
import ListItem from "@/components/ListItem";
export default {
    props: ["list", "items","challengePeriod"],
    components: {
        ListItem,
    },
    data() {
        return {
            filter: null,
        };
    },
    computed: {
        shownLists() {
            if (this.filter) {
                return this.items.filter((x) => x.decodedData[0].toLowerCase().includes(this.filter.toLowerCase()));
            } else {
                return this.items;
            }
        },
    },
};
</script>
