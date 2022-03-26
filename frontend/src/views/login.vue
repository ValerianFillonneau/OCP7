<template>
    <div class="connexion">
            <Login v-if="loginmode"/>
            <Signup v-else/>
        <button @click="loginmode=false" v-if="loginmode">S'inscrire</button>
        <button @click="loginmode=true" v-else>Connexion</button>
    </div>
</template>

<script>
import Login from '@/components/login.vue'
import Signup from '@/components/signup.vue'

export default {
    name: 'login',
    components: {
        Login, Signup
    },
    data() {
        return {
            loginmode: true
            }
    }    
}


</script>