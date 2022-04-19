<template>
    <v-container>
        <v-card flat class="overflow-hidden">
            <v-row no-gutters>
                <v-col cols=2>
                    <div class="d-flex justify-start">
                        <GoBack />
                    </div>
                </v-col>
                <div class="d-flex justify-center col">
                    <h2>Edit Account</h2>
                </div>
                <v-col cols=2>
                    <v-btn text rounded @click="isEditing = !isEditing">
                        Edit &nbsp;
                        <v-icon v-if="isEditing">
                            mdi-close
                        </v-icon>
                        <v-icon v-else>
                            mdi-pencil
                        </v-icon>
                    </v-btn>
                </v-col>
            </v-row>


            <v-card-text>
                <v-text-field :disabled="!isEditing" label="Name"></v-text-field>
                <v-autocomplete :disabled="!isEditing" :items="states" :filter="customFilter" item-text="name"
                    label="Location"></v-autocomplete>
            </v-card-text>
            <v-card-actions class="d-flex justify-center">
                <v-btn text rounded :disabled="!isEditing" id="signup" @click="save" class="save">
                    Save
                </v-btn>
                <v-btn rounded text class="reset" @click="reset()">
                    Reset
                </v-btn>
            </v-card-actions>
            <v-snackbar v-model="hasSaved" :timeout="2000" absolute bottom left>
                Your profile has been updated
            </v-snackbar>
        </v-card>
    </v-container>
</template>

<script>
    import GoBack from '@/components/GoBack.vue'

    export default {
        components: {
            GoBack
        },
        data() {
            return {
                hasSaved: false,
                isEditing: null,
                model: null,
                states: [{
                        name: 'Dún Laoghaire',
                        lat: 1,
                        long: 2
                    },
                    {
                        name: 'Blackrock',
                        lat: 1,
                        long: 2
                    },
                    {
                        name: 'Monkstown',
                        lat: 1,
                        long: 2
                    },
                    {
                        name: 'Shankill',
                        lat: 1,
                        long: 2
                    },
                    {
                        name: 'Bray',
                        lat: 1,
                        long: 2
                    },
                ],
            }
        },

        methods: {
            customFilter(item, queryText) {
                const textOne = item.name.toLowerCase()
                const textTwo = item.abbr.toLowerCase()
                const searchText = queryText.toLowerCase()

                return textOne.indexOf(searchText) > -1 ||
                    textTwo.indexOf(searchText) > -1
            },
            save() {
                this.isEditing = !this.isEditing
                this.hasSaved = true
            },
        },
    }
</script>