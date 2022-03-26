<template>
<div>
    <form action="">
        <div>
            <label for="name">Mon nom</label>
            <input type="text" name="name" id="name" required>
        </div>
        <div>
            <label for="nickname">Mon prénom</label>
            <input type="text" name="nickname" id="nickname" required>
        </div>
        <div>
            <label for="phone">Mon numéro de téléphone</label>
            <input type="text" name="phone" id="phone">
        </div>
        <div>
            <label for="mail">Mon E-mail</label>
            <input type="text" name="mail" id="mail" required>
        </div>
    </form>
    <ol>
        <h4>
            Mes Posts
        </h4>
        <li>
            
        </li>
    </ol>
</div>
</template>

<style scoped>
 ol {
     text-align: center;
 }
</style>

<script>
export default {
    name: 'profilForm'
}
</script>