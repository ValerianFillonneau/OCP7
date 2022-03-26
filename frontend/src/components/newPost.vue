<template>
    <form action="">
        <div>
            <label for="title">Mon Titre</label>
            <input type="text" name="title" id="title" required>
        </div>
        <div>
            <label for="text">Mon texte</label>
            <input type="text" name="text" id="text" required>
        </div>
        
    </form>
</template>

<style scoped>

</style>

<script>
export default {
    name: 'newPost'
}
</script>