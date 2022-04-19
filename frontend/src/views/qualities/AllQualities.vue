<template>
    <v-container>
        <div class="footer-offset">
            <br>
            <h1>Item Qualities</h1><br>
            <v-btn text rounded :to="{ name: 'addItem'}">List an Item</v-btn><br>
            <v-row no-gutters>
                <v-col class="v-card-columns" v-for="quality in qualities" :key="quality._id" cols="12" lg="3" md="4" sm="6">
                    <v-card flat color="grey lighten-4" class="pt-3 ma-2 pb-3">
                        <!-- <v-img v-if="category.photo">{{ category.photo }}</v-img>
                        <span v-else>
                            <v-img src="https://picsum.photos/400/300?random" />
                        </span> -->
                        <h2 style="word-break: break-word" align="middle">
                            <router-link class="item-title" :to="{ name: 'viewSingleQuality', params: { id: quality._id }}">
                                {{ quality.name }}
                            </router-link>
                        </h2>
                        <!-- <v-card-text v-if="item.categoryID">
                            <router-link :to="{ name: 'viewCategory', params: { id: item.categoryID._id }}">
                                <p> {{ item.categoryID.name }} </p>
                            </router-link>
                        </v-card-text> -->
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </v-container>
</template>

<script>
    import axios from '@/config'

    export default {
        name: 'allQualities',
        components: {},
        data() {
            return {
                quality: {},
                qualities: []
            }
        },
        mounted() {
            axios.get('/qualities')
                .then(response => {
                    this.qualities = response.data
                    console.log(response.data)
                })
                .catch(error => console.log(error))
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
</style>