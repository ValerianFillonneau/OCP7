<template>
    <div class="detailPost">
        <OnePost/>
    </div>
</template>

<script>
import OnePost from '@/components/detailPost.vue'

export default {
    name: 'detailPost',
    components: {
    OnePost
  },
  mounted() {
    console.log('detailPost')
  }
}
</script>