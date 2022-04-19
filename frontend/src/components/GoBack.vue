<template>
    <div>
        <v-btn text rounded @click="goBack()" class="go-back hidden-sm-and-down pl-4 pr-4">
            <v-icon>mdi-arrow-left</v-icon>
            &nbsp; Back
        </v-btn>
        <span class="hidden-md-and-up">
            <v-btn text rounded @click="goBack()" class="go-back">
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
        </span>
    </div>
</template>

<script>
    export default ({
        methods: {
            goBack() {
                return this.$router.go(-1)
            }
        }
    })
</script>

<style>
    v-btn {
        margin-bottom: 20px !important;
        padding-left: 0px !important;
        padding-right: 0px !important;

    }
</style>