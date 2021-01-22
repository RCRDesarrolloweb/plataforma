<template>
  <div class="q-pa-xl bg-blue-2 window-width">
    <div class="row w-75 items-center shadow-8 bg-grey-1 q-ml-auto q-mr-auto">
      <div class="col flex flex-center q-mt-lg">
        <div class="text-center">
          <span class="text-h2 text-weight-medium text-grey">Iniciar Sesión</span>
          <q-icon name="person" class="text-info" style="font-size: 8vw;" />
        </div>
        <q-form
          @submit="Login"
          class="q-gutter-md input-form full-width"
        >
          <q-input
            filled
            class="q-pl-xl q-mr-xl"
            v-model="mail"
            label="Correo Electrónico"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Ingrese su correo electrónico']"
          />

          <q-input
            filled
            class="q-pl-xl q-mr-xl"
            type="password"
            v-model="pass"
            label="Contraseña*"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Ingrese su contraseña']"
          />

          <div class="q-pa-xl">
            <q-btn class="full-width q-pa-lg" label="Ingresar" @click="Login()" color="primary"/>
          </div>
          <div>
            <q-btn flat class="full-width q-pa-lg text-grey" @click="Register()" label="¿No tienes una cuenta? Haz click aqui para registrarte" type="submit"/>
          </div>
        </q-form>
      </div>
      <div class="col bg-primary full-height flex flex-center">
        <q-img class="logo-form q-ml-auto q-mr-auto" src="~assets/isologo.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mail: null,
      pass: null
    }
  },
  methods: {
    Login: function () {
      if ((this.mail !== null) || (this.pass !== null)) {
        this.$router.push('Dashboard')
      }
    },
    Register: function () {
      this.$router.push('Registro/Email')
    }
  }
}
</script>

<style lang="scss">
.logo-form{
  width: 80%;
  height: 70%;
}
.input-form{
  display: grid;
  top: center;
}
.w-75{
  width: 90vw;
  height: 90vh;
}
</style>
