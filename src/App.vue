<template>
  <div id="app">
     <b-container-fluid class="bv-example-row">
            <b-row>
                <b-col lg="2" class="py-5 pl-5 pr-4 ">
                    <div class="bg-primary" style="height:90vh">

                    </div>
                </b-col>
                <b-col lg="10">
                   <home />
                </b-col>
            </b-row>
</b-container-fluid>
  </div>
</template>

<script>
import home from './components/home.vue'

export default {
  name: 'App',
  components: {
    home
  }
}
</script>

<style>
#app {
  
}
</style>
