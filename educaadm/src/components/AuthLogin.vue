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
          type="email"
          required
          placeholder="Informe o Email"
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
          placeholder="Informe a Senha"
        ></b-form-input>
      </b-form-group>
      <b-row>
          <b-col><b-button variant="outline-primary">Entrar</b-button></b-col>
          <b-col><b-button variant="outline-primary">Cadastrar</b-button></b-col>
      </b-row>
      </b-form>
        </b-col>
          <b-col></b-col>
        
          </b-row>
      </b-container>
  </div>
</template>

<script>
export default {
  name: 'AuthLogin'
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
