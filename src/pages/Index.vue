<template>
  <q-page class="flex flex-center">
    <div v-for="item in cursos" :key="item.img">
     <q-img
          :src="item.img"
          style="width: 20%"
        >
          <div class="absolute-bottom text-subtitle1 text-center" style="height: 50%">
            {{ item.descripcion }}
          </div>
     </q-img>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      cursos: [
        {
          name: 'gmail',
          img: 'Marcas/gmail.jpg',
          url: '',
          descripcion: 'Aprende el manejo de correos con Gmail de google'
        }
      ]
    }
  }
}
</script>
