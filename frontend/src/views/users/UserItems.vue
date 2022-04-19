<template>
    <v-container>
        <div class="footer-offset">
            <v-col>
                <v-row no-gutters class="mt-4">
                    <v-col cols=2>
                        <div class="d-flex justify-start">
                            <GoBack />
                        </div>
                    </v-col>
                    <div class="d-flex justify-center col">
                        <h2 class="mainItemTitle">Your Items</h2>
                    </div>
                    <v-col cols=2>
                    </v-col>
                </v-row>
                <br>
                <v-row no-gutters>
                    <v-col class="v-card-columns" v-for="item in filteredItems" :key="item._id" cols="12" sm="3">
                        <v-card class="pt-3 ma-2" flat>
                            <v-img v-if="item.photo">{{ item.photo }}</v-img>
                            <span v-else>
                                <v-img src="https://picsum.photos/400/300?random" />
                            </span>
                            <v-card-title style="word-break: break-word">
                                <router-link class="item-title"
                                    :to="{ name: 'viewSingleItem', params: { id:item._id }}">
                                    {{ item.title }}
                                </router-link>
                                <!-- {{ item.title }} -->
                            </v-card-title>
                            <v-card-text v-if="item.qualityID.name">
                                <router-link :to="{ name: 'viewSingleQuality', params: { id: item.qualityID._id }}">
                                    <p> {{ item.qualityID.name }} </p>
                                </router-link>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <!-- 
                    {{ user._id }}
                    <p v-if="user._id === item.userID" >
                        {{ item.title }}
                    </p> -->



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
        name: "UserItems",
        components: {
            GoBack
        },
        data() {
            return {
                user: {},
                item: {},
                items: []
            }
        },
        computed: {
            filteredItems: function () {
                return this.items.filter(item => {
                    return item.userID._id == localStorage.getItem('userID')
                })
            }
        },
        mounted() {
            this.getItems();
            this.getUserDetails();
        },
        methods: {
            getUserDetails() {
                if (localStorage.getItem("user")) {
                    this.user = JSON.parse(localStorage.getItem("user"))
                }
            },
            getItems() {
                axios.get(`/items/${this.route.params.id}`)
                    .then(response => {
                        this.items = response.data
                    })
                    .catch(error => console.log(error))
            }
        }
    };
</script>

<style>
    .btn {
        margin-right: 10px;
    }

    v-img {
        max-width: auto;
        /* height: 100px !important; */
    }

    .itemTitle,
    .itemBody {
        text-transform: capitalize;
    }

    p {
        text-align: left;
    }

    .mainItemTitle {
        vertical-align: middle;
    }
</style>