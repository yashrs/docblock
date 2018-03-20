<template>
  <v-app id="inspire" dark>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-title>DocBlock</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>John Doe</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-title>28/M</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                 <v-data-table
                    :headers="headers"
                    :items="items"
                    hide-actions
                    class="elevation-1"
                  >
                  <template slot="items" slot-scope="props">
                    <td>{{ props.item.name }}</td>
                    <td>{{ props.item.info }}</td>
                  </template>
                </v-data-table>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    </v-app>
  </template>

<script>
/* eslint-disable */
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Description',
            align: 'center',
            sortable: false,
            value: 'name'
          },
          { text: 'Details', 
            value: 'detail',
            align: 'center',
            sortable: false }
        ],
        items: [
          {
            value: false,
            name: 'Blood Group',
            info: 'AB +'
          },
          {
            value: false,
            name: 'Previous Disease',
            info: 'None'
          },
          {
            value: false,
            name: 'RBC Count',
            info: '500'
          },
          {
            value: false,
            name: 'WBC Count',
            info: '500'
          }
        ]
      }
    }
  }
</script>
