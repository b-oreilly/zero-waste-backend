<template>
  <v-container>
    <v-col>
      <v-row no-gutters>
        <div class="d-flex justify-center col">
          <h1 class="mainItemTitle">User</h1>
        </div>
      </v-row>
    </v-col>
    <v-col>
      <v-row no-gutters>
        <v-col cols=2>
          <div class="d-flex justify-start">
            <GoBack />
          </div>
        </v-col>
        <div class="d-flex justify-center col">
          <h2 class="mainItemTitle pl-0">{{ user.username }}</h2>
        </div>
        <v-col cols=2>
        </v-col>
      </v-row>
      <br>

      <v-row>
        <v-col>
          <div class="d-flex justify-center col">
            <h3 class="pt-2"> {{ user.username }}'s Items</h3>
          </div>
          <div class="footer-offset">
            <v-row no-gutters>
              <v-col class="v-card-columns" v-for="item in filteredItems" :key="item._id" cols="12" sm="3">
                <v-card flat class="pt-3 ma-2">
                  <v-img v-if="item.photo">{{ item.photo }}</v-img>
                  <span v-else>
                    <v-img src="https://picsum.photos/400/300?random" />
                  </span>
                  <v-card-title style="word-break: break-word" align="left">
                    <router-link class="item-title" :to="{ name: 'viewSingleItem', params: { id:item._id }}">
                      {{ item.title }}
                    </router-link>
                  </v-card-title>
                  <v-card-text v-if="item.categoryID">
                    <router-link :to="{ name: 'viewSingleCategory', params: { id: item.categoryID._id }}">
                      <p> {{ item.categoryID.name }} </p>
                    </router-link>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>

      <!-- <v-btn text @click="deleteCourse(user.id)">
          <v-icon>mdi-delete</v-icon>
        </v-btn> -->
    </v-col>
  </v-container>
</template>

<script>
  import axios from '@/config';
  import GoBack from '@/components/GoBack.vue'

  export default {
    name: 'ViewSingleUser',
    components: {
      GoBack
    },
    data() {
      return {
        user: {},
        item: {},
        items: []
      }
    },
    computed: {
      filteredItems: function () {
        return this.items.filter(item => {
          return item.userID._id == this.$route.params.id
        })
      }
    },

    mounted() {
      axios.get('/items')
        .then(response => {
          this.items = response.data
        })
        .catch(error => console.log(error)),
        this.getUserDetails();
      this.getData();
    },
    methods: {
      getUserDetails() {
        if (localStorage.getItem("user")) {
          this.user = JSON.parse(localStorage.getItem("user"))
        }
      },
      getData() {
        axios.get(`/users/${this.$route.params.id}`)
          .then((response) => {
            // console.log(response.data)
            this.user = response.data
          })
          .catch(error => console.log(error))
      }
    }
  };
</script>

<style scoped>
  h2 {
    text-align: start;
    padding-left: 16px !important;

  }
</style>