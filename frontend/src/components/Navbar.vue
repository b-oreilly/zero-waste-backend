<template>
  <div>
    <v-toolbar flat>
      <v-col cols="3">
        <!-- Desktop - Site title/home -->
        <div class="hidden-sm-and-down">
          <router-link to="/" class="d-flex justify-start">
            <v-toolbar-title id="site-name">
              Zero Waste
            </v-toolbar-title>
          </router-link>
        </div>

        <!-- Mobile - Search bar -->
        <div class="hidden-md-and-up">
          <v-btn icon>
            <v-icon> mdi-magnify </v-icon>
          </v-btn>
        </div>
      </v-col>
      <v-col class="d-flex justify-space-around">

        <!-- Desktop center - Nav items -->
        <div class="hidden-sm-and-down">
          <v-toolbar-items>
            <div>
              <v-menu open-on-hover offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn text plain :ripple="false" id="nav-item" active-class="nav-item" to="/items" v-bind="attrs"
                    v-on="on">Items</v-btn>
                </template>
                <v-list>
                  <v-list-item>
                    <router-link to="/items/category/all">
                      <v-list-item-title>Categories</v-list-item-title>
                    </router-link>
                    <v-list>
                      <v-list-item>
                      </v-list-item>
                    </v-list>
                  </v-list-item>
                  <v-list-item>
                    <router-link to="/items/quality/all">
                      <v-list-item-title>Qualities</v-list-item-title>
                    </router-link>
                  </v-list-item>
                </v-list>
              </v-menu>
              <v-btn text plain :ripple="false" id="nav-item" active-class="nav-item" to="/about">About</v-btn>
            </div>
          </v-toolbar-items>
        </div>

        <!-- Mobile center - Site title/home -->
        <div class="hidden-md-and-up">
          <router-link to="/" id="site-name">
            <v-toolbar-title>
              Zero Waste
            </v-toolbar-title>
          </router-link>
        </div>
      </v-col>
      <v-col cols="3" class="d-flex justify-end">
        <!-- mobile menu button -->
        <span class="hidden-md-and-up">
          <v-btn text rounded @click.stop="drawer = !drawer">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </span>
        <!-- Desktop menu -->
        <v-toolbar-items class="hidden-sm-and-down">
          <div v-if="!$store.state.loggedIn" class="mr-4">
            <v-btn depressed rounded id="login" to="login">Log in</v-btn>
            <v-btn depressed rounded id="signup" to="register">Sign Up</v-btn>
          </div>

          <div v-if="$store.state.loggedIn">
            <v-menu text offset-y class="">
              <template v-slot:activator="{ on, attrs }">
                <v-btn class="justify-center mt-2" text rounded id="user" v-bind="attrs" v-on="on" :ripple="false">
                  User &nbsp; <v-icon>mdi-menu-down</v-icon>
                </v-btn>
              </template>

              <v-list text>
                <v-list-item to="/account">
                  Account
                </v-list-item>
                <v-list-item>
                  <router-link :to="{ name: 'viewUserItems', params: { id: user._id }}">
                    Your Items
                  </router-link>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title class="itemTitle" id="nav">
                    <router-link to="/user/messages">
                      Messages
                    </router-link>
                  </v-list-item-title>
                </v-list-item>
                <v-list-item class="justify-center">
                  <v-btn depressed rounded id="logout" class="mb-2" @click="logout()">Logout</v-btn>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </v-toolbar-items>
      </v-col>
    </v-toolbar>

    <!-- Mobile menu -->
    <v-row cols=10>
      <v-navigation-drawer v-model="drawer" absolute temporary right>
        <v-list>
            <v-list-item to="/">
              Home
            </v-list-item>
          <v-list-item to="/about">
            About
          </v-list-item>
          <v-list-item to="/items">
            Items
          </v-list-item>
          <!-- Mobile menu - logged in user -->
          <div v-if="$store.state.loggedIn">
            <v-list-item to="/account">
              Account
            </v-list-item>
            <v-list-item>
              <v-list-item-title class="itemTitle" :to="{ name: 'viewUserItems', params: { id: this.userID }}">
                Your Items
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title class="itemTitle" to="/user/messages">
                Messages
              </v-list-item-title>
            </v-list-item>
          </div>

          <v-list-item id="bottom">
            <v-list-item-content>
              <div v-if="!$store.state.loggedIn">
                <v-list-item-title>
                  <v-btn depressed rounded id="login-sm" to="/login">Login</v-btn>
                </v-list-item-title>
                <v-list-item-title>
                  <v-btn depressed rounded id="signup-sm" to="/register">Sign Up</v-btn>
                </v-list-item-title>
              </div>
              <v-list-item-title>
                <v-btn v-if="$store.state.loggedIn" depressed rounded id="logout-sm" @click="logout()">Logout
                </v-btn>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-row>
  </div>
</template>

<script>
  import {
    mapActions,
    mapState
  } from 'vuex'

  export default ({
    data() {
      return {
        user: {},
        userID: '',
        drawer: false,
      }
    },
    computed: {
      ...mapState(['loggedIn'])
    },
    mounted() {
      this.getUserDetails();
      this.getUserID();
    },
    methods: {
      ...mapActions(['logout']),
      getUserDetails() {
        if (localStorage.getItem("user")) {
          this.user = JSON.parse(localStorage.getItem("user"))
        }
      },
      getUserID() {
        if (localStorage.getItem("userID")) {
          this.userID = JSON.parse(localStorage.getItem("userID"))
        }
      }
    }
  })
</script>


<style scoped>
  #site-name {
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
    color: #000 !important;
    text-transform: uppercase;
  }

  #nav {
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
    color: #000 !important;
  }

  .nav {
    height: 80% !important;
    width: 100%;
    margin-right: 10px;
  }

  .v-toolbar__items {
    vertical-align: middle;
  }

  v-btn,
  #login,
  #signup,
  #logout {
    font-size: 12px !important;
    border-radius: 25px !important;
    height: 35px !important;
    /* width: 110px !important; */
  }

  #user {
    width: 140px;
    height: 55px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
  }

  .v-menu__content {
    box-shadow: none;
    /* background-color: #c0c0c0; */
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
  }

  .nav-item {
    border: solid;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
  }

  #nav-item:before {
    display: none;
  }

  .v-navigation-drawer {
    z-index: 999999 !important;
    height: 100vh !important;
    touch-action: auto;
  }

  #bottom {
    margin-top: 0px;
    position: absolute;
    bottom: 0 !important;
    width: 100%;
  }
</style>