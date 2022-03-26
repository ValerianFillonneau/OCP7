<template>
  <div class="home">
    <HomeComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeComponent from '@/components/Home.vue'

export default {
  name: 'Home',
  components: {
    HomeComponent
  },
  mounted() {
    console.log('Home')
  }
}
</script>
