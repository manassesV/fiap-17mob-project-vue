<template>
    <div >
    <b-container>
      <b-row>
           <b-col></b-col>
            <b-col>
     <b-form>
      <b-form-group
        id="input-group-1"
        label="Email:"
        label-for="input-1"
      >
         <b-form-input
          id="input-1"
          type="nome"
          required
          placeholder="Informe o Nome"
          v-model="nome"
        ></b-form-input>
      </b-form-group>
       <b-form-group
        id="input-group-1"
        label="Senha:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          type="email"
          required
          placeholder="Informe o Email"
          v-model="email"
        ></b-form-input>
      </b-form-group>
       <b-form-group
        id="input-group-1"
        label="Senha:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          type="password"
          required
          placeholder="Informe a Senha"
          v-model="password"
        ></b-form-input>
      </b-form-group>
       <b-form-group
        id="input-group-1"
        label="Confirme Senha:"
        label-for="input-1"
      >

 <b-form-input
          id="input-1"
          type="password"
          required
          placeholder="Confirme a Senha"
          v-model="password"
        ></b-form-input>
       </b-form-group>
      <b-row>
          <b-col><b-button variant="outline-primary" @click="signup">Voltar ao Acesso</b-button></b-col>
          <b-col><b-button variant="outline-primary" @click="register">Cadastrar</b-button></b-col>
      </b-row>
      </b-form>
        </b-col>
          <b-col></b-col>
        
          </b-row>
      </b-container>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'RegisterUser',
  data(){
     return{
       nome: '',
       email: '',
       password: '',
       confpassword: ''
     }
  },
  methods: {
    signup:function(){
        this.$router.replace('Login')
    },
    register:function(){
         firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            this.$router.replace('About')
          },
          (err) => {
            alert('Oops. ' + err.message)
          }
        );
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
