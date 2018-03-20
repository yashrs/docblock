/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Vuetify from 'vuetify'
import Home from '@/components/Home'
import Doc from '@/components/Doclogin'
import Docsignup from '@/components/Docsignup'
import Dockeypermiss from '@/components/Dockeypermiss'
import Patlogin from '@/components/Patlogin'
import Patsignup from '@/components/patsignup'
import Patinfofill from '@/components/Patinfofill'
import Patinfodetail from '@/components/Patinfodetail'
import 'vuetify/dist/vuetify.min.css'
 
Vue.use(Vuetify)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/doclogin',
      name: 'doclogin',
      component: Doc
    },
    {
      path: '/patientlogin',
      name: 'Patlogin',
      component: Patlogin
    },
    {
      path: '/patientsignup',
      name: 'Patsignup',
      component: Patsignup
    },
    {
      path: '/patientinfoFill',
      name: 'Patinfofill',
      component: Patinfofill
    },
    {
      path: '/doctorsignup',
      name: 'Doctorsignup',
      component: Docsignup
    },
    {
      path: '/docpermission',
      name: 'Dockeypermiss',
      component: Dockeypermiss
    },
    {
      path: '/patientdetails',
      name: 'Patinfodetail',
      component: Patinfodetail
    }
  ]
})
