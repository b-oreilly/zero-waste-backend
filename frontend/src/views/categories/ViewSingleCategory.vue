<template>
    <v-container>
        <div class="footer-offset">
            <v-row no-gutters>
                <div class="d-flex justify-center col">
                    <h1 class="mainItemTitle">Category</h1>
                </div>
            </v-row>
            <v-col>
                <v-row no-gutters>
                    <v-col cols=2>
                        <div class="d-flex justify-start">
                            <GoBack />
                        </div>
                    </v-col>
                    <div class="d-flex justify-center col">
                        <h2 class="mainItemTitle">{{ category.name }}</h2>
                    </div>
                    <v-col cols=2>
                    </v-col>
                </v-row>
                <br>

                <v-row no-gutters>
                    <v-col class="v-card-columns" v-for="item in items" :key="item._id" cols="12" lg="3" md="4" sm="6">
                            <v-card class="pt-3 ma-2" flat v-if="items != 0">
                                <v-img v-if="item.photo">{{ item.photo }}</v-img>
                                <v-else>
                                    <v-img src="https://picsum.photos/400/300?random" />
                                </v-else>
                                <v-card-title class="item-title" style="word-break: break-word">
                                    <router-link class="item-title"
                                        :to="{ name: 'viewSingleItem', params: { id:item._id }}">
                                        {{ item.title }}
                                    </router-link>
                                    <!-- {{ item.title }} -->
                                </v-card-title>
                                <v-card-text v-if="item.categoryID.name">
                                    <router-link
                                        :to="{ name: 'viewSingleCategory', params: { id: item.categoryID._id }}">
                                        <p> {{ item.categoryID.name }} </p>
                                    </router-link>
                                </v-card-text>
                            </v-card>

                       
                        <div v-else>
                            <v-col class="d-flex justify-center">
                                <h4>
                                    There are no items listed in this category!
                                </h4>
                            </v-col>
                        </div>
                    </v-col>
                </v-row>


                <!-- <v-row>
                    <v-btn text rounded :to="{ name: 'editItem', params: { id: this.$route.params.id}}"
                        variant="warning">Edit</v-btn>
                    <v-btn text rounded class="delete" @click="deleteData()">Delete</v-btn>
                </v-row> -->

            </v-col>
        </div>
    </v-container>
</template>

<script>
    import axios from '@/config'
    import GoBack from '@/components/GoBack'

    export default {
        name: "ViewCategory",
        components: {
            GoBack
        },
        data() {
            return {
                items: [],
                item: {},
                category: []
            }
        },
        mounted() {
            this.getItemCategory();
            this.getCategory();
        },
        methods: {
            getItemCategory() {
                axios.get(`/items/category/${this.$route.params.id}`)
                    .then(response => {
                        console.log(response.data)
                        this.items = response.data
                    })
                    .catch(error => console.log(error))
            },
            getCategory() {
                axios.get(`/categories/${this.$route.params.id}`)
                    .then(response => {
                        console.log(response.data)
                        this.category = response.data
                    })
                    .catch(error => console.log(error))
            },
        }
    };
</script>