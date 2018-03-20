<template>
  <v-app id="inspire" dark>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-title>DocBlock</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex xs12 md6>
            <v-card
            height="500px"
            light
            flat
            to="/doclogin">
        <v-card-media
          src="../../static/doc.png"
          height="400px"
        >
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <div class="headline">Doctor</div>
          </div>
        </v-card-title>
      </v-card>
          </v-flex>
          <v-flex xs12 md6>
            <v-card
            height="500px"
            light
            flat
            to="/patientlogin">
        <v-card-media
          src="../../static/patient.png"
          height="400px"
        >
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <div class="headline">Patient</div>
          </div>
        </v-card-title>
      </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
/* eslint-disable */
  export default {
    data: () => ({
      drawer: true
    }),
    props: {
      source: String
    }
  }
</script>
