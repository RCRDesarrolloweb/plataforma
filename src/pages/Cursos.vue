<template>
  <div>
      <q-drawer show-if-above v-model="right" side="right" elevated>
        <div class="text-grey text-center text-h6 q-mt-md">Linea de Actividades</div>
            <div v-for="item in actividades" :key="item.name" class="row justify-center">
                <q-btn class="rounded-borders q-ma-md" style="width: 100%" color="primary" :label="item.name"/>
            </div>
      </q-drawer>
      <div class="q-pt-md q-pb-md q-pl-xl text-grey text-h3">
          Curso Linkedin
      </div>
       <div class="q-video q-pl-xl q-pr-xl">
        <q-video
            src="Curso-Linkedin-Parte-1.mp4"
            type='video/mp4'
            class="rounded-borders shadow-5"
            allowfullscreen
            :ratio="16/9"
            frameborder="0"
        />
      <div class="q-pt-md q-pb-md text-grey text-h6">
          Descripción del Video
      </div>
      <div class="rounded-borders q-pa-md text-grey text-body2 q-mb-xl" style="font-size: 1vw; border-style: solid; border-color: #41bbc3">
          En este capitulo del curso daremos una introducción a Linkedin, creandonos una cuenta y explicando un poco sobre esta red social.
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      actividades: [
        {
          name: 'Actividad 1'
        },
        {
          name: 'Actividad 2'
        },
        {
          name: 'Actividad 3'
        },
        {
          name: 'Actividad 4'
        },
        {
          name: 'Actividad 5'
        },
        {
          name: 'Actividad 6'
        },
        {
          name: 'Actividad 7'
        },
        {
          name: 'Actividad 8'
        },
        {
          name: 'Actividad 9'
        }
      ]
    }
  }
}
</script>
