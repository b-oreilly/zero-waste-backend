<template>
  <v-footer absolute class="font-weight-medium">
    <v-col class="text-center" cols="12">
      &copy; {{ new Date().getFullYear() }} — <strong>Zero Waste Web App</strong>
    </v-col>
  </v-footer>
</template>

<script>
  export default {
    name: "Footer"
  };
</script>

<style>
  v-footer {
    display: inline-block;
    position: relative;
    padding-top: 100px !important;
  }
</style>