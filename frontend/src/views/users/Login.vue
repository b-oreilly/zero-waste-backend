<template>
    <v-container>
        <v-col>
            <template>
                <v-card flat class="pt-2 pb-2">
                    <div v-if="!$store.state.loggedIn">
                        <h1>Login</h1>
                        <v-form ref="form" v-model="valid" lazy-validation>
                            <v-text-field class="input" v-model="form.email" label="Email" :rules="emailRules"
                                required autocomplete="email">
                            </v-text-field>
                            <v-text-field :type="showPassword ? 'text' : 'password'" v-model="form.password"
                                :counter="40" label="Password" autocomplete="on" :rules="passwordRules" required
                                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                @click:append="showPassword = !showPassword">
                            </v-text-field>
                            <!-- <div v-if="this.passwordError"> -->
                                <!-- <div v-if="error" class="alert alert-danger" role="alert">
                                    {{error}}
                                </div> -->
                                <!-- <p variant="warning">You have entered an invalid username or password.</p>
                            </div> -->
                            <v-btn rounded text :disabled="!valid" class="mr-4 login" @click="login()">
                                Log in
                            </v-btn>

                            <v-btn rounded text class="mr-4 reset" @click="reset()">
                                Reset Form
                            </v-btn>
                        </v-form><br>
                        <h3>Don't have an account?<br>
                            <router-link to="/register">Signup</router-link>
                        </h3>
                    </div>
                    <div v-else>
                        <h2>Welcome, {{ user.first_name }}.</h2>
                        <h2>You are logged in.</h2>
                    </div>
                </v-card>
            </template>
        </v-col>
    </v-container>
</template>

<script>
    // import axios from '@/config'
    import {
        mapState
    } from 'vuex'

    export default {
        name: "Login",
        components: {

        },
        data() {
            return {
                // error: [],
                user: [],
                form: {
                    email: "admin@zerowaste.ie",
                    password: "secret",
                },
                valid: true,
                emailRules: [
                    v => !!v || 'Email required',
                    v => /.+@.+\..+/.test(v) || 'Email must be valid'
                ],
                passwordRules: [
                    v => !!v || 'Password required',
                    v => (v && v.length >= 6) || 'Password must be at least 6 characters'
                ],
                showPassword: false,
                passwordError: false
            }
        },
        computed: {
            ...mapState(["loggedIn"])
        },
        mounted(){
            this.getUserDetails();
        },
        methods: {
            login() {
                if (this.$refs.form.validate()) {
                    this.$store.dispatch('login', this.form)
                }
            },
            reset() {
                this.$refs.form.reset()
            },
            getUserDetails() {
                if (localStorage.getItem("user")) {
                    this.user = JSON.parse(localStorage.getItem("user"))
                }
            }
        }
    };
</script>

<style scoped>
    a {
        text-decoration: none;
        color: #20E25F !important;
        font-weight: bold;
    }
</style>