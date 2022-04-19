<template>
  <div>
    <v-container>
      <div class="home">
        <SearchBar />
      </div>
    </v-container>
    <v-card flat tile dark class="mt-3">
      <v-row>
        <v-col md="6" cols="12">
          <div id="shape">
            <h2 class="pt-10 pb-10">Rehome your unwanted goods </h2>
          </div>
        </v-col>
        <v-col>
          <div id="shape">
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
  import SearchBar from '@/components/SearchBar'


  export default ({
    name: 'HomeView',
    components: {
      SearchBar
    }
  });
</script>
<style scoped>
  #shape {
    padding: 140px 0px 155px;
  }
</style>