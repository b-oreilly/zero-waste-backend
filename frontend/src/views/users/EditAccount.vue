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
                    <h2>Edit Account</h2><br>
                </div>
                <v-col cols=2>
                </v-col>
            </v-row>
            <v-card flat class="footer-offset">
                <v-form ref="form" v-model="valid" lazy-validation>
                    <div class="pt-4">
                        <v-row>

                            <v-col>
                                <v-text-field v-model="form.first_name" :rules="nameRules" label="First Name" required>
                                </v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field v-model="form.last_name" :rules="nameRules" label="Last Name" required>
                                </v-text-field>
                            </v-col>
                        </v-row>
                    </div>

                    <v-text-field v-model="form.username" :counter="25" :rules="nameRules" label="Username" required>
                    </v-text-field>

                    <v-autocomplete prepend-inner-icon="mdi-map-marker" placeholder="Location" spellcheck="false" v-model="form.locationID" :rules="locationRules"
                        :items="locations" item-text="name" item-value="_id"></v-autocomplete>

                    <v-text-field v-model="form.email" :rules="emailRules" label="E-mail" required autocomplete="email">
                    </v-text-field>

                    <v-btn rounded text :disabled="!valid" class="mr-4 signup" @click="editAccount()">
                        Edit
                    </v-btn>

                    <v-btn rounded text class="mr-4 reset" @click="reset">
                        Reset
                    </v-btn>
                </v-form>
            </v-card>
        </v-col>
    </v-container>
</template>

<script>
    import axios from '@/config'
    import GoBack from '@/components/GoBack.vue'

    export default {
        components: {
            GoBack
        },
        data() {
            return {
                user: {},
                locations: [],
                form: {
                    first_name: "",
                    last_name: "",
                    username: "",
                    locationID: "",
                    email: "",
                },
                valid: true,
                nameRules: [
                    v => !!v || 'Name is required',
                    v => (v && v.length >= 3) || 'Name must be at least 3 characters',
                ],
                userNameRules: [
                    v => !!v || 'Username is required',
                    v => (v && v.length >= 5) || 'Username must be at least 5 characters',
                ],
                emailRules: [
                    v => !!v || 'Email required',
                    v => /.+@.+\..+/.test(v) || 'Email must be valid',
                ],
                passwordRules: [
                    v => !!v || 'Password required',
                    v => (v && v.length >= 6) || 'Password must be at least 6 characters',
                ],
                locationRules: [
                    v => !!v || 'Select a location'
                ],
            }
        },
        mounted() {
            this.getUserDetails();
            this.getAccountDetails();
            this.getLocations();
        },
        methods: {
            getUserDetails() {
                if (localStorage.getItem("user")) {
                    this.user = JSON.parse(localStorage.getItem("user"))
                }
            },
            reset() {
                this.$refs.form.reset()
            },
            getAccountDetails() {
                axios.get(`/users/${ this.user._id }`)
                    .then(response => {
                        this.user = response.data
                        this.$set(this.form, 'first_name', this.user.first_name)
                        this.$set(this.form, 'last_name', this.user.last_name)
                        this.$set(this.form, 'username', this.user.username)
                        this.$set(this.form, 'locationID', this.user.locationID.name)
                        this.$set(this.form, 'email', this.user.email)
                        this.$set(this.form, 'password', this.user.password)
                    })
                    .catch(error => console.log(error))
            },
            getLocations() {
                axios.get(`/locations`)
                    .then(response => {
                        this.locations = response.data
                    })
                    .catch(error => console.log(error))
            },
            editAccount() {
                let token = localStorage.getItem('token')
                this.user = localStorage.getItem('user')

                if (this.$refs.form.validate()) {

                    this.user = JSON.parse(localStorage.getItem('user'))

                    axios
                        .put(`/users/${ this.user._id }`, {
                            first_name: this.form.first_name,
                            last_name: this.form.last_name,
                            username: this.form.username,
                            locationID: this.form.locationID,
                            email: this.form.email,
                            password: this.form.password
                        }, {
                            headers: {
                                "Authorization": `Bearer ${token}`
                            }
                        })
                        .then(response => {
                            console.log(response.data)
                            this.$router.push({
                                name: "account"
                            })
                            localStorage.setItem('user', JSON.stringify(response.data));
                            console.log(this.user);
                        })
                        .catch(err => {
                            console.log(err)
                            console.log(err.response.data)
                        })
                }
            }
        }
    };
</script>