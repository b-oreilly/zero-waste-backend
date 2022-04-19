<template>
    <v-container>
        <div class="footer-offset">
            <v-row no-gutters>
                <div class="d-flex justify-center col">
                    <h1 class="mainItemTitle">Quality</h1>
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
                        <h2 class="mainItemTitle">{{ quality.name }}</h2>
                    </div>
                    <v-col cols=2>
                    </v-col>
                </v-row>
                <br>
                <v-row no-gutters>
                    <v-col class="v-card-columns" v-for="item in items" :key="item._id" cols="12" lg="3" md="4" sm="6">
                        <v-card class="pt-3 ma-2" flat>
                            <v-img v-if="item.photo">{{ item.photo }}</v-img>
                            <v-else>
                                <v-img src="https://picsum.photos/400/300?random" />
                            </v-else>
                            <v-card-title style="word-break: break-word">
                                <router-link class="item-title"
                                    :to="{ name: 'viewSingleItem', params: { id:item._id }}">
                                    {{ item.title }}
                                </router-link>
                                <!-- {{ item.title }} -->
                            </v-card-title>
                            <v-card-text v-if="item.qualityID.name">
                                <router-link :to="{ name: 'viewQuality', params: { id: item.qualityID._id }}">
                                    <p> {{ item.qualityID.name }} </p>
                                </router-link>
                            </v-card-text>
                        </v-card>
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
        name: "ViewSingleQuality",
        components: {
            GoBack
        },
        data() {
            return {
                items: [],
                item: {},
                quality: []
            }
        },
        mounted() {
            this.getItemQuality();
            this.getQuality();
        },
        methods: {
            getItemQuality() {
                axios.get(`/items/quality/${this.$route.params.id}`)
                    .then(response => {
                        console.log(response.data)
                        this.items = response.data
                    })
                    .catch(error => console.log(error))
            },
            getQuality() {
                axios.get(`/qualities/${this.$route.params.id}`)
                    .then(response => {
                        console.log(response.data)
                        this.quality = response.data
                    })
                    .catch(error => console.log(error))
            },
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