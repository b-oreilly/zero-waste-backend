<template>
    <v-container>
        <div class="footer-offset">
            <v-row no-gutters class="mt-6">
                <v-col cols=2>
                </v-col>
                <div class="d-flex justify-center col">
                    <h1>Items</h1>
                </div>
                <v-col cols=2>
                    <v-btn rounded text elevation="0" :to="{ name: 'addItem'}" class="mt-2">
                        <v-icon>mdi-plus</v-icon>&nbsp;list an item
                    </v-btn><br>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col class="v-card-columns" v-for="item in filteredClaimedItems" :key="item._id" cols="12" lg="3"
                    md="4" sm="6">
                    <v-card flat class="pt-3 ma-2">
                        <v-img v-if="item.photo">{{ item.photo }}</v-img>
                        <span v-else>
                            <v-img src="https://picsum.photos/400/300?random" />
                        </span>
                        <v-card-title style="word-break: break-word" align="left">
                            <router-link class="item-title" :to="{ name: 'viewSingleItem', params: { id:item._id }}">
                                {{ item.title }}
                            </router-link>
                        </v-card-title>
                        <v-card-text v-if="item.categoryID">
                            <router-link :to="{ name: 'viewSingleCategory', params: { id: item.categoryID._id }}">
                                <p> {{ item.categoryID.name }} </p>
                            </router-link>
                        </v-card-text>
                        <p v-if="item.userID" class="pl-4">
                            <router-link :to="{ name: 'viewUser', params: { id:item.userID._id }}">
                                <p v-if="item.userID.username"> {{ item.userID.username }}</p>
                            </router-link>
                        </p>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </v-container>
</template>

<script>
    import axios from '@/config'

    export default {
        name: 'viewItems',
        components: {},
        data() {
            return {
                item: {},
                items: []
            }
        },
        mounted() {
            axios.get('/items')
                .then(response => {
                    this.items = response.data
                    console.log(response.data)
                })
                .catch(error => console.log(error))
        },
        computed: {
            filteredClaimedItems: function () {
                return this.items.filter(item => {
                    return item.claimed == false
                })
            }
        }
    }
</script>

<style>
    a {
        text-decoration: none;
        color: black;
    }

    .card {
        text-align: left;
    }

    .v-card-title {
        height: 30px;
    }
</style>