<template>
  <f7-app v-bind="f7params">
    <!-- Views/Tabs container -->
    <f7-views
      tabs
      class="safe-areas"
    >
      <!-- Tabbar for switching views-tabs -->
      <f7-toolbar
        tabbar
        labels
        bottom
      >
        <f7-link
          tab-link="#view-catalog"
          tab-link-active
          icon-ios="f7:square_list_fill"
          icon-aurora="f7:square_list_fill"
          icon-md="material:fact_check"
          text="Katalog"
        />
        <f7-link
          tab-link="#view-rules"
          icon-ios="f7:doc_text"
          icon-aurora="f7:doc_text"
          icon-md="material:article"
          text="Regeln"
        />
        <!--
        <f7-link tab-link="#view-settings" icon-ios="f7:gear" icon-aurora="f7:gear" icon-md="material:settings" text="Settings"></f7-link>
        -->
      </f7-toolbar>

      <f7-view
        id="view-catalog"
        name="catalog"
        main
        tab
        tab-active
        url="/"
      />
      <f7-view
        id="view-rules"
        tab
        url="/rules/"
      />
    </f7-views>
  </f7-app>
</template>

<script>
import { ref, onMounted } from 'vue'
import { f7, f7ready } from 'framework7-vue'

import routes from '../js/routes.js'
import store from '../js/store'

export default {
  setup () {
    // Framework7 Parameters
    const f7params = {
      name: 'Major System Trainer', // App name
      theme: 'auto', // Automatic theme detection

      // App store
      store: store,
      // App routes
      routes: routes,
      // Register service worker (only on production build)
      serviceWorker: process.env.NODE_ENV === 'production'
        ? {
            path: '/service-worker.js'
          }
        : {}
    }
    // Login screen data
    const username = ref('')
    const password = ref('')

    const alertLoginData = () => {
      f7.dialog.alert('Username: ' + username.value + '<br>Password: ' + password.value, () => {
        f7.loginScreen.close()
      })
    }
    onMounted(() => {
      f7ready(() => {

        // Call F7 APIs here
      })
    })

    return {
      f7params,
      username,
      password,
      alertLoginData
    }
  }
}
</script>
