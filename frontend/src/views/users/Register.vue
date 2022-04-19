<template>
    <v-container>
        <v-col>
            <template>
                <v-card flat class="pt-2 pb-2">
                    <div v-if="!$store.state.loggedIn">
                        <h1>Signup</h1>
                        <v-form ref="form" v-model="valid" lazy-validation>
                            <v-row>
                                <v-col>
                                    <v-text-field v-model="form.first_name" :rules="nameRules" label="First Name"
                                        required autocapitalize="on">
                                    </v-text-field>
                                </v-col>
                                <v-col>
                                    <v-text-field v-model="form.last_name" :rules="nameRules" label="Last Name" required
                                        autocapitalize="on">
                                    </v-text-field>
                                </v-col>
                            </v-row>

                            <v-text-field v-model="form.username" :rules="usernameRules" label="Username" required
                                autocapitalize="none">
                            </v-text-field>

                            <v-autocomplete prepend-inner-icon="mdi-map-marker" v-model="form.locationID"
                                :rules="locationRules" :items="locations" item-text="name" item-value="_id" placeholder="Location"
                                spellcheck="false">
                            </v-autocomplete>

                            <v-text-field v-model="form.email" :rules="emailRules" label="Email" required
                                autocomplete="email" autocapitalize="none">
                            </v-text-field>

                            <v-text-field type="password" v-model="form.password" :rules="passwordRules"
                                label="Password" autocomplete="on" required></v-text-field>

                            <v-btn rounded text :disabled="!valid" class="mr-4 signup" @click="register()">
                                Sign up
                            </v-btn>

                            <v-btn rounded text class="mr-4 reset" @click="reset">
                                Reset Form
                            </v-btn>

                        </v-form>
                        <br>
                        <div class="footer-offset">
                            <h3>Already have an account?<br>
                                <router-link to="/login">Login</router-link>
                            </h3>
                        </div>
                    </div>
                    <div v-else>
                        <!-- <h2>Welcome, {{ user.first_name }}.</h2> -->
                        <h2>You have registered sucessfully!</h2>
                        <h3>
                            <!-- <router-link to="account/:_id">View your account</router-link> -->
                        </h3>
                    </div>
                </v-card>
            </template>
        </v-col>
    </v-container>
</template>

<script>
    import axios from '@/config'
    import {
        mapState
    } from 'vuex'

    export default {
        name: "Home",
        data: () => ({
            locations: [],
            form: {
                first_name: "",
                last_name: "",
                username: "",
                email: "",
                locationID: "",
                password: ""
            },
            valid: true,
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length >= 3) || 'Name must be at least 3 characters',
            ],
            usernameRules: [
                v => !!v || 'Username is required',
                v => (v && v.length >= 5) || 'Username must be at least 5 characters',
            ],
            emailRules: [
                v => !!v || 'Email required',
                v => /.+@.+\..+/.test(v) || 'Email must be valid',
            ],
            locationRules: [
                v => !!v || 'Please select a location'
            ],
            passwordRules: [
                v => !!v || 'Password required',
                v => (v && v.length >= 6) || 'Password must be at least 6 characters',
            ]
        }),
        computed: {
            ...mapState(["loggedIn"])
        },
        mounted() {
            this.getLocations();
        },
        methods: {
            reset() {
                this.$refs.form.reset()
            },
            register() {
                if (this.$refs.form.validate()) {
                    this.$store.dispatch('register', this.form)
                }
            },
            getLocations() {
                axios.get(`/locations`)
                    .then(response => {
                        this.locations = response.data
                    })
                    .catch(error => console.log(error))
            },
        }
    };
</script>

<style scoped>
    a {
        text-decoration: none;
        color: #153AB0 !important;
        font-weight: bold;
    }

    v-card {
        padding-bottom: 50px !important;
    }
</style>