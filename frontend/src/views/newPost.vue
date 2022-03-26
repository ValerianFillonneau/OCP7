<template>
    <div class="newPost">
        <newPost/>
    </div>
</template>

<script>
import newPost from '@/components/newPost.vue'

export default {
    name: 'newPost',
    components: {
    newPost
  },
  mounted() {
    console.log('newPost')
  }
}
</script>