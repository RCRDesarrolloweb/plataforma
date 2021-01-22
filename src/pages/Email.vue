<template>
  <div class="q-pa-xl window-width">
    <div class="row shadow-8 w-75 items-center bg-grey-1 q-ml-auto q-mr-auto">
      <div class="col flex flex-center q-mt-lg">
        <div class="text-center">
          <span class="text-h2 text-weight-medium text-grey">Registro</span>
          <q-icon name="person" class="text-info" style="font-size: 8vw;" />
        </div>
        <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-md input-form full-width"
        >
          <q-input
            filled
            class="q-pl-xl q-pr-xl"
            v-model="name"
            label="Nombre Completo"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Ingrese su Nombre Completo']"
          />

          <q-input
            filled
            class="q-pl-xl q-pr-xl"
            v-model="mail"
            label="Correo Electrónico"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Ingrese su correo electrónico']"
          />

          <q-input
            filled
            class="q-pl-xl q-pr-xl"
            type="password"
            v-model="pass"
            label="Contraseña*"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Ingrese su contraseña']"
          />

          <div class="q-pl-xl q-pr-xl">
            <q-btn class="full-width q-pa-lg" label="Registrarme" @click="Register()" color="primary"/>
          </div>
          <div>
            <q-btn flat class="full-width text-grey" @click="Login()" label="¿Ya tienes una cuenta? Haz click aqui para ingresar"/>
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
      name: null,
      mail: null,
      pass: null
    }
  },
  methods: {
    Register: function () {
      if ((this.mail !== null) && (this.pass !== null) && (this.name !== null)) {
        this.$router.push('/Dashboard')
      }
    },
    Login: function () {
      this.$router.push('/')
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
