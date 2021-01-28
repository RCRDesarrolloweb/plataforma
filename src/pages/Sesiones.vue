<template>
  <q-page>
    <div class="row justify-start">
      <div v-for="item in cursos" :key="item.name" class="q-ma-md">
    <q-card class="my-card" style="width: 350px; max-height: 600px;">
      <q-img :src="item.img" style="height: 100%; width:100%; min-width:350px;min-height:350px; max-height: 350px;" />

      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 text-grey ellipsis">
           {{ item.name }}
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            {{ item.pais }}
          </div>
        </div>

        <q-rating v-model="stars" color="primary" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          Descripción
        </div>
        <div class="text-caption text-grey">
          {{ item.descripcion }}
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="event" color="primary" />
        <q-btn :disable="item.disable" flat color="primary" to="Dashboard/Cursos">
          IR AHORA
        </q-btn>
      </q-card-actions>
    </q-card>
      </div>
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
          name: 'Joaquín Pinilla',
          img: 'Equipo/Joaco.jpg',
          url: 'cursos/gmail',
          descripcion: 'Ten una gradable reunión, refuerza, aprende y descubre habilidades nuevas con personas experimentadas en el area',
          disable: true,
          pais: 'Chile'
        },
        {
          name: 'Ricardo Contreras',
          img: 'Equipo/Ricardo.jpg',
          url: 'cursos/gmail',
          descripcion: 'Ten una gradable reunión, refuerza, aprende y descubre habilidades nuevas con personas experimentadas en el area',
          disable: true,
          pais: 'Venezuela'
        },
        {
          name: 'Jorge Cerda',
          img: 'Equipo/Jorge.jpeg',
          url: 'cursos/gmail',
          descripcion: 'Ten una gradable reunión, refuerza, aprende y descubre habilidades nuevas con personas experimentadas en el area',
          disable: true,
          pais: 'Chile'
        },
        {
          name: 'Carlos Pino',
          img: 'Equipo/Carlos.jpg',
          url: 'cursos/gmail',
          descripcion: 'Ten una gradable reunión, refuerza, aprende y descubre habilidades nuevas con personas experimentadas en el area',
          disable: true,
          pais: 'Venezuela'
        }
      ]
    }
  }
}
</script>
