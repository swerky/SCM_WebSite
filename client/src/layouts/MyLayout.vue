<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <img src="~assets/Logo_Ski-Club_Morges.png">
        <q-toolbar-title>
          Ski Club Morges
        </q-toolbar-title>
        <q-space />
        <q-btn-toggle
          v-model="model"
          flat stretch
          toggle-color="yellow"
          :options="[
            {label: 'One', value: 'one'},
            {label: 'Two', value: 'two'},
            {label: 'Three', value: 'three'}
          ]"
        />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style>

</style>
<script>
export default {
  name: 'MyLayout',
  data() {
    return {
    };
  },
};
</script>
