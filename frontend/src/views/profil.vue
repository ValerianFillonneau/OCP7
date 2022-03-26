<template>
    <div class="profil">
        <profilForm/>
    </div>
</template>

<script>
import profilForm from '@/components/profilForm.vue'

export default {
    name: 'profil',
    components: {
    profilForm
  },
  mounted() {
    console.log('Profil')
  }
}
</script>