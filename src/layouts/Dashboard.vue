<template>
  <q-layout style="min-height: 100vh">
      <q-header elevated>
        <q-toolbar>
          <q-img src="~assets/isologo-horizontal.png" style="width: 35vw"/>
          <q-input dark dense standout v-model="text" input-class="text-right" class="q-ml-md full-width">
            <template v-slot:append>
              <q-icon v-if="text === ''" name="search" />
              <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
            </template>
          </q-input>
          <div class="row full-width justify-end">
            <q-btn flat round dense icon="person" class="q-ml-xl" />
            <q-btn flat round dense icon="message" class="q-ml-md" />
            <q-btn flat round dense icon="settings" class="q-ml-md" />
          </div>
        </q-toolbar>
      </q-header>
      <q-drawer
        v-model="drawer"
        show-if-above
        :width="300"
        :breakpoint="500"
        bordered
        content-class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <q-list>

            <template v-for="(menuItem, index) in menuList">
              <q-btn :to="menuItem.to" style="width: 100%" flat class="q-pa-lg" :key="index" clickable :active="menuItem.label === 'Outbox'" v-ripple>
                <q-item-section avatar>
                  <q-icon :name="menuItem.icon" />
                </q-item-section>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
              </q-btn>
              <q-separator :key="'sep' + index"  v-if="menuItem.separator" />
            </template>

          </q-list>
        </q-scroll-area>
      </q-drawer>
      <q-page-container>
        <router-view></router-view>
      </q-page-container>
  </q-layout>
</template>

<script>
const menuList = [
  {
    icon: 'inbox',
    label: 'Mis Cursos',
    to: '/Dashboard',
    separator: false
  },
  {
    icon: 'send',
    label: 'Sesiones de 30 Minutos',
    separator: false,
    to: '/Dashboard/Sesiones'
  },
  {
    icon: 'face',
    label: 'Comunidad Zenior',
    separator: false
  },
  {
    icon: 'error',
    label: 'Solicitar más Cursos',
    separator: false
  },
  {
    icon: 'settings',
    label: 'Opciones de Cuenta',
    separator: false
  }
]

export default {
  data () {
    return {
      drawer: true,
      text: '',
      menuList
    }
  }
}

</script>

<style>

</style>
