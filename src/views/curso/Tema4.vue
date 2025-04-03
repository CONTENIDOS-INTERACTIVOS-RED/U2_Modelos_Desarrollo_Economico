<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'4. Tasa de interés'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      .row.mb-4 
        .col-12.col-xl-8
          span La tasa de interés es un factor clave en la economía, dado que afecta tanto la inversión como el consumo. Cuando las tasas de interés son bajas, el crédito se vuelve más accesible, lo que incentiva el gasto de los consumidores y la inversión de las empresas. Por el contrario, tasas elevadas encarecen el financiamiento, reduciendo la demanda de bienes y servicios, así como la disposición de las empresas a expandirse. En este sentido, la política monetaria juega un papel fundamental en la regulación de las tasas de interés, influyendo en el crecimiento económico y la estabilidad financiera.
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-40.png', alt='Texto que describa la imagen')

      TabsC.mb-4
        .tabs-content.border.px-4.p-md-5.py-3(titulo='¿Qué son las tasas de interés?', :icon="require('@/assets/curso/unidad/img-41.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-42.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') ¿Qué son las tasas de interés?
              p(data-aos='fade-up') Las tasas de interés son el costo del dinero en el tiempo, representando el porcentaje que una entidad financiera, gobierno o prestamista privado, cobra por otorgar un préstamo o que paga por los depósitos de ahorro e inversión. Funcionan como un mecanismo fundamental en la economía, puesto que regulan el acceso al crédito, el consumo y la inversión.
        .tabs-content.border.px-4.p-md-5.py-3(titulo='¿Cómo se clasifican?', :icon="require('@/assets/curso/unidad/img-41.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-44.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') ¿Cómo se clasifican?
              p(data-aos='fade-up') Las tasas de interés pueden clasificarse en diversas categorías, como tasas nominales y reales, fijas y variables, o activas y pasivas, dependiendo de su aplicación y comportamiento en el mercado. Además, son determinadas por factores como la inflación, la política monetaria, la oferta y demanda de dinero, y el riesgo asociado a la transacción

      #t_4_1.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 4.1
          h2 Influencia de las tasas de interés en la inversión y el consumo

      p.mb-4 Las tasas de interés son un factor clave en la dinámica económica de un país, ya que influyen en la inversión, el consumo y la estabilidad financiera.

      .row.bg-marron.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3.py-4.d-flex
          .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
            h2.mb-4.pb-2.me-auto Influencia de las tasas de interés en la inversión y el consumo
            p.mb-5(data-aos="fade-up") En el PDF Influencia de las tasas de interés en la inversión y el consumo , se analiza cómo las variaciones en las tasas afectan el acceso al crédito, el crecimiento empresarial y la demanda de bienes y servicios. Además, se explora el papel del Banco de la República en la regulación de estas tasas y su impacto en la inflación, el empleo y la inversión extranjera.
            a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/Anexos_Influencia de las tasas de interés en la inversión y el consumo.pdf')" target="_blank")
              img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
              p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong>Influencia de las tasas de interés en la inversión y el consumo
          .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
            img.h-100(src='@/assets/curso/unidad/img-45.png', alt='Texto que describa la imagen')

      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://doi.org/10.53766/ACCON/2021.43.03") Fernández, H. S. R., Quintero, R. M. E., Orejuela, B. J. F., Martínez, M. L. Á., & Amaya Sánchez, B. E. (2021). Consecuencias del sector bancario en Colombia por las altas tasas de interés. Actualidad Contable Faces, 24(43), 56-75.
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.youtube.com/live/R4rwoswSMLc?si=wizDbKvN2qI-Ba-R") [Vídeo] La política monetaria de América Latina en un contexto de recuperación.
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')


</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de las siguientes es una característica fundamental de los derechos humanos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Son temporales y cambiantes',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Son universales y aplican a todas las personas',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Son exclusivos de ciertos grupos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Son opcionales',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de las siguientes afirmaciones sobre la diversidad cultural es correcta?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Fomenta la homogeneización cultural',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Promueve el respeto y la aceptación de las diferencias',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Debilita la identidad cultural de los pueblos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Limita las oportunidades de interacción',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'La mediación en un conflicto tiene como objetivo principal:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Imponer una solución rápida',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Facilitar el diálogo entre las partes',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Determinar la culpabilidad',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar las preocupaciones de una parte',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: 'En un foro comunitario, es importante:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Escuchar solo a las autoridades',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Fomentar la participación de todos los miembros',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Decidir por votación sin consultar a los demás',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Excluir las opiniones de los más jóvenes',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué busca la justicia restaurativa en el contexto de un conflicto?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Aplicar una sanción severa',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Reparar el daño y restablecer las relaciones',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Castigar a las partes involucradas',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar el contexto del conflicto',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
