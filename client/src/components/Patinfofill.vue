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
                <v-toolbar-title>Patient Details</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form v-model="valid" ref="form" lazy-validation>
                    <v-select
                    label="Blood Group"
                    v-model="select"
                    :items="bg"
                    :rules="[v => !!v || 'Item is required']"
                    required
                    ></v-select>
                    <v-menu
                        ref="menu"
                        lazy
                        :close-on-content-click="false"
                        v-model="menu"
                        transition="scale-transition"
                        offset-y
                        full-width
                        :nudge-right="40"
                        min-width="290px"
                    >
                        <v-text-field
                        slot="activator"
                        label="Birthday date"
                        v-model="date"
                        prepend-icon="event"
                        readonly
                        ></v-text-field>
                        <v-date-picker
                        ref="picker"
                        v-model="date"
                        @change="save"
                        min="1950-01-01"
                        :max="new Date().toISOString().substr(0, 10)"
                        ></v-date-picker>
                    </v-menu>
                    <v-text-field
                        label="Previous Diseases"
                        v-model="prevDisease"
                        ></v-text-field>
                    <v-checkbox
                    label="Do you agree?"
                    v-model="checkbox"
                    :rules="[v => !!v || 'You must agree to continue!']"
                    required
                    ></v-checkbox>

                    <v-btn
                    @click="submit"
                    :disabled="!valid"
                    >
                    submit
                    </v-btn>
                    <v-btn @click="clear">clear</v-btn>
                </v-form>
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
  import axios from 'axios'

  export default {
    data: () => ({
      valid: true,
      select: null,
      bg: [
        'A +',
        'A -',
        'B +',
        'B -',
        'AB +',
        'AB -',
        'O +',
        'O -'
      ],
      checkbox: false
    }),

    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>
