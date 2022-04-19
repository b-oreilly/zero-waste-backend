<template>
    <v-container>
        <div class="footer-offset">
            <v-row no-gutters class="mt-6">
                <v-col cols=2>
                    <div class="d-flex justify-start">
                        <!-- <GoBack /> -->
                    </div>
                </v-col>
                <div class="d-flex justify-center col">
                    <h2 class="mb-4">Messages</h2>
                </div>
                <v-col cols=2>
                    <v-btn text rounded elevation="0" :to="{ name: 'createMessage'}">
                        <v-icon>mdi-pencil-outline</v-icon>
                    </v-btn><br>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <div class="d-flex justify-center col">
                        <h3>Received Messages</h3><br>
                    </div>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col class="v-card-columns" v-for="message in receivedMessages" :key="message._id" cols="12" lg="3"
                    md="4" sm="6">
                    <v-card flat class="pt-3 ma-2">
                        <v-card-title style="word-break: break-word" align="left">{{ message.message }}</v-card-title>
                        <p class="pl-4"> From:
                            {{ message.senderUserID.username }}</p>
                        <p class="pl-4">Received at:
                            {{ new Date(message.createdAt).toLocaleString('en-GB', { timeZone: 'GMT' }) }}</p>
                        <div v-if="receivedMessages == 0">
                            <v-row>
                                <v-col>
                                    <div class="d-flex justify-center col">
                                        <p>
                                            You haven't received any messages.
                                        </p>
                                    </div>
                                </v-col>
                            </v-row>
                        </div>
                    </v-card>
                </v-col>
            </v-row>


            <v-row>
                <v-col>
                    <div class="d-flex justify-center col">
                        <h3>Sent Messages</h3>
                    </div>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col class="v-card-columns" v-for="message in sentMessages" :key="message._id" cols="12" lg="3" md="4"
                    sm="6">
                    <v-card flat class="pt-3 ma-2">
                        <v-card-title style="word-break: break-word" align="left">{{ message.message }}</v-card-title>

                        <p class="pl-4"> To:
                            {{ message.receiverUserID.username }}</p>
                        <p class="pl-4">Sent at: {{ new Date(message.createdAt).toLocaleString() }}</p>

                        <div v-if="sentMessages == 0">
                            <v-row>
                                <v-col>
                                    <div class="d-flex justify-center col">
                                        <p>
                                            You haven't sent any messages.
                                        </p>
                                    </div>
                                </v-col>
                            </v-row>
                        </div>
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
                message: {},
                messages: []
            }
        },
        methods: {
            getMessages() {
                axios.get(`/messages`)
                    .then(response => {
                        this.messages = response.data
                        console.log(response.data)
                    })
                    .catch(error => console.log(error))
            }
        },
        computed: {
            receivedMessages: function () {
                return this.messages.filter(message => {
                    return message.receiverUserID._id == localStorage.getItem('userID')
                })
            },
            sentMessages: function () {
                return this.messages.filter(message => {
                    return message.senderUserID._id == localStorage.getItem('userID')
                })
            }
        },
        mounted() {
            this.getMessages();
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