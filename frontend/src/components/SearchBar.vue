<template>
    <div class="pt-10">
        <v-form>
            <v-text-field placeholder="Search" prepend-inner-icon="mdi-magnify" v-model="searchTerm" class="search" flat
                rounded filled dense clearable>
            </v-text-field>
            <!-- :items="items" item-text="title" -->
            <!-- @click="searchItems" -->
            <!-- <v-btn rounded dark elevation="0">Search</v-btn> -->

            <span v-if="searchTerm != ''">
                <v-col class="v-card-columns" v-for="item in filteredItems" :key="item._id" cols="12">
                    <v-card flat>
                        <h3 style="word-break: break-word" align="center">
                            <router-link class="item-title" :to="{ name: 'viewSingleItem', params: { id:item._id }}">
                                {{ item.title }}
                            </router-link>
                        </h3>
                    </v-card>
                </v-col>
            </span>
        </v-form>
    </div>
</template>

<script>
    import axios from '@/config'

    export default ({
        name: 'SearchBar',
        data() {
            return {
                items: [],
                searchTerm: ""
                // searchClosed: true
            }
        },
        computed: {
            filteredItems: function () {
                return this.items.filter(item => {
                    return item.title.toLowerCase().includes(this.searchTerm.toLowerCase())
                    // return user.username.toLowerCase().includes(this.searchTerm.toLowerCase())
                    // return category.name.toLowerCase().includes(this.searchTerm.toLowerCase())

                })
            }
        },
        mounted() {
            this.getAllItems();
        },
        methods: {
            getAllItems() {
                axios.get('/items') //can replace with firebase url 
                    // .then(response => response.json())
                    .then(response => {
                        this.items = response.data
                    })
                axios.get('/users') //can replace with firebase url 
                    // .then(response => response.json())
                    .then(response => {
                        this.users = response.data
                    })
                axios.get('/categories') //can replace with firebase url 
                    // .then(response => response.json())
                    .then(response => {
                        this.categories = response.data
                    })
            }
        }
    });
</script>

<style>
    /* .v-input.search {
        /* max-width: 40px !important; */
    .search {
        align-content: center;
        min-height: 35px !important;

    }
</style>