<template>
    <v-container>
        <v-col>
            <v-row no-gutters>
                <v-col cols=2>
                    <div class="d-flex justify-start">
                        <GoBack />
                    </div>
                </v-col>
                <div class="d-flex justify-center col">
                    <h2 class="mainItemTitle">Item</h2>
                </div>
                <v-col cols=2>
                    <div v-if="item.userID._id == user._id">
                        <v-btn text rounded :to="{ name: 'editItem', params: { id: this.$route.params.id }}">
                            Edit
                        </v-btn>
                    </div>
                </v-col>
            </v-row>
            <br>
            <v-row>

                <v-col md=6 sm=12>
                    <v-img class="overflow-hidden responsive p-0" v-if="item.photo">{{ item.photo }}</v-img>
                    <span v-else>
                        <v-img src="https://picsum.photos/400/300?random" />
                    </span>
                </v-col>
                <v-col md=6 sm=12>
                    <v-card flat class="overflow-hidden footer-offset">
                        <div class="itemBody">

                            <v-card-title class="pt-0">
                                <h2> {{ item.title }} </h2>
                            </v-card-title>

                            <v-card-text>

                                <p>{{ item.description }}</p>

                                <v-divider /><br>

                                <router-link :to="{ name: 'viewSingleCategory', params: { id: item.categoryID._id }}">
                                    <p> {{ item.categoryID.name }} </p>
                                </router-link>

                                <router-link :to="{ name: 'viewSingleQuality', params: { id: item.qualityID._id }}">
                                    <p> {{ item.qualityID.name }} </p>
                                </router-link>

                                <p v-if="item.claimed == true"> Claimed </p>


                                <p v-if="item.price">Asking price: €{{ item.price }}</p>
                                <p v-else>Free</p>


                                <div v-if="!$store.state.loggedIn">
                                    <p>Please <router-link to="/login">Login</router-link>
                                        or <router-link to="/register">Signup</router-link>
                                        to contact this user.</p>
                                </div>
                                <div v-else>
                                    <router-link :to="{ name: 'viewUser', params: { id:item.userID._id }}">
                                        <p v-if="item.userID.username"> {{ item.userID.username }}</p>
                                    </router-link>
                                </div>

                                <p>Date posted: <br> {{ new Date(item.createdAt).toLocaleString() }}</p>
                                <p v-if="item.updatedAt !== item.createdAt">
                                    Updated at:<br>
                                    {{ new Date(item.updatedAt).toLocaleString() }}</p>
                                <p v-else></p>

                                <div v-if="$store.state.loggedIn">

                                    <div v-if="item.userID._id !== user._id">
                                        <v-btn elevation=0 rounded @click="dialog = !dialog" color="pink">Interested?
                                        </v-btn>
                                        <v-dialog v-model="dialog" max-width="500px">
                                            <v-card>
                                                <v-form ref="form" v-model="valid" lazy-validation>
                                                    <v-card-title style="word-break: break-word" align="left">Register
                                                        your
                                                        interest, watch or claim this item.</v-card-title>

                                                    <v-card-text>
                                                        <v-select v-model="form.interactionID" :items="interactions"
                                                            :rules="selectRules" item-text="interactionName"
                                                            item-value="_id" label="Select">
                                                        </v-select>
                                                    </v-card-text>

                                                    <v-card-actions>
                                                        <v-spacer></v-spacer>
                                                        <div class="pb-2">
                                                            <v-btn rounded elevation=0 color="primary"
                                                                :disabled="!valid"
                                                                @click="userInteraction(), dialog = false">
                                                                Submit
                                                            </v-btn>
                                                        </div>
                                                    </v-card-actions>
                                                </v-form>
                                            </v-card>
                                        </v-dialog>
                                    </div>
                                </div>
                            </v-card-text>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
            <v-row class="d-flex justify-end col">
                <div v-if="item.userID._id == user._id">
                    <v-btn text rounded class="delete" variant="warning" @click="deleteItem()">Delete</v-btn>
                </div>
            </v-row>
        </v-col>
    </v-container>
</template>

<script>
    import axios from '@/config'
    import GoBack from '@/components/GoBack'

    export default {
        name: "viewSingleItem",
        components: {
            GoBack
        },
        data() {
            return {
                item: {},
                user: {},
                dialog: false,
                form: {
                    userID: "",
                    itemID: "",
                    interactionID: ""
                },
                interactions: [],
                valid: true,
                selectRules: [
                    v => !!v || 'Selection required',
                ],
            }
        },
        mounted() {
            this.getItemData();
            this.getUserDetails();
            this.getInteractions();
        },
        methods: {
            getUserDetails() {
                if (localStorage.getItem("user")) {
                    this.user = JSON.parse(localStorage.getItem("user"))
                }
            },
            getInteractions() {
                axios.get(`/interactions`)
                    .then(response => {
                        console.log(response.data)
                        this.interactions = response.data
                    })
                    .catch(error => console.log(error))
            },
            getItemData() {
                axios.get(`/items/${this.$route.params.id}`)
                    .then(response => {
                        console.log(response.data)
                        this.item = response.data
                    })
                    .catch(error => console.log(error))
            },
            deleteItem() {
                axios.delete(`/items/${this.$route.params.id}`)
                    .then(response => {
                        console.log(response.data)
                        this.$router.push({
                            name: "viewItems",
                            params: {}
                        })
                    })
                    .catch(error => {
                        console.log(error)
                        console.log(error.response.data)
                    })

            },
            userInteraction() {
                if (this.$refs.form.validate()) {
                    axios
                        .post(`/user_interactions`, {
                            userID: this.user._id,
                            itemID: this.item._id,
                            interactionID: this.form.interactionID
                        })
                        .then(response => {
                            console.log(response.data)
                            this.$router.push({
                                name: "viewSingleItem"
                            })
                        })
                        .catch(err => {
                            console.log(err)
                            console.log(err.response.data)
                        })
                }
            },
        }
    };
</script>

<style scoped>
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