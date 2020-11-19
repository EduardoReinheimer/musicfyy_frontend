<template lang="html">
  <v-form>
    <v-container>
      <v-row>
       <v-col cols="12" sm="12" md="12" lg="6">
  
        <p  class="mx-auto" justify-center>Login</p>
     <v-text-field
            v-model="email"
            solo
            label="Email"
            prepend-inner-icon="mdi-email"
          ></v-text-field>

       <v-text-field
            v-model="password1"
            type="password"
            name="input-10-1"
            solo
            label="Senha"
            prepend-inner-icon="mdi-lock"
         ></v-text-field>

         <v-text-field
            v-model="password2"
            type="password"
            name="input-10-1"
            solo
            label="Repita a senha"
            prepend-inner-icon="mdi-lock-reset"
         ></v-text-field>

  <v-btn
      color="blue-grey"
      class="ma-2 white--text"
      @click.prevent="register"
    >
      Criar Conta
      <v-icon right dark>mdi-account</v-icon>
    </v-btn>
  <p class="ma-3 ma-md-1">Tem uma conta ?</p> 
 <v-btn> <router-link to="/" tag='span'>Entrar</router-link> </v-btn>
    </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      email: '',
      password1: '',
      password2: '',
    }
  },
  methods: {
    register () {
      const payload = {
        email: this.email,
        password1: this.password1,
        password2: this.password2
      }
      axios.post('https://musicfyy.herokuapp.com/rest-auth/registration/', payload)
    }
  }
};
</script>

<style>
</style>