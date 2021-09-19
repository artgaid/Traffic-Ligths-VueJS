<template>
  <v-app>
    <v-app-bar
      app
      color="teal lighten-4"
      class="d-flex justify-center"
    >
        <v-btn
          to="/red"
          class="mr-2"
          color="red"
          elevation="1"
          rounded
          outlined
        > 
        Red</v-btn>

        <v-btn
          to="/yellow"
          class="mr-2"
          color="yellow"
          elevation="1"
          rounded
          outlined
          dark
        > 
        Yellow</v-btn>
        
        <v-btn
          to="/green"
          class="mr-2"
          color="green"
          elevation="1"
          rounded
          outlined
        > 
        Green</v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
