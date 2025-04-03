<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'6. Índice de GINI: medición de la desigualdad económica y su relación con el desarrollo'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.mb-4
        .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-58.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8.d-flex.flex-column
          p.mb-4 La desigualdad económica es un fenómeno presente en todas las sociedades y representa un desafío fundamental para el crecimiento sostenible y la equidad social. Para analizar y comparar los niveles de desigualdad entre distintos países y regiones, se utilizan diversas herramientas estadísticas, siendo el índice de GINI una de las más reconocidas y empleadas a nivel mundial.
          .d-flex.align-items-start.bg-azul.p-4(data-aos="fade-up").d-flex.align-items-center
            img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-59.svg', alt='Texto que describa la imagen')
            .my-auto
              p.pe-xl-3.mb-0 El índice de GINI, desarrollado por el estadístico italiano Corrado Gini en 1912, mide la distribución del ingreso o la riqueza dentro de una población, proporcionando un valor entre 0 y 1 (o expresado en porcentajes de 0 a 100). Un valor cercano a 0 indica una distribución equitativa, mientras que un valor próximo a 1 refleja una alta concentración de riqueza en pocas manos.

          span El estudio del índice de GINI permite comprender el impacto de la desigualdad en el desarrollo económico y social, ya que altos niveles de disparidad pueden limitar el acceso a oportunidades, frenar el crecimiento y generar conflictos sociales. En este sentido, su análisis es clave para diseñar políticas públicas orientadas a fomentar la equidad y mejorar las condiciones de vida de la población.

      h2 ¿Qué es el índice de GINI?
      p.mb-4 El índice de GINI es una medida estadística utilizada para evaluar la distribución del ingreso o la riqueza dentro de una población. Su objetivo es cuantificar la desigualdad económica en un país o región, proporcionando un valor que oscila entre <b>0 y 1</b> (o en algunos casos, entre <b>0 y 100</b> cuando se expresa en porcentaje).
      .row.mb-4
        .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-right")
          div.custom-image-card.rounded-8px
            img.mb-4(src='@/assets/curso/unidad/img-60.png', alt='Texto que describa la imagen')
            div.mb-4
              p.text-bold.text-center Valor 0
              p.text-small.px-4.text-center.pb-2 Representa una igualdad perfecta, donde todos los individuos tienen el mismo ingreso o riqueza.
        .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-right")
          div.custom-image-card.rounded-8px
            img.mb-4(src='@/assets/curso/unidad/img-61.png', alt='Texto que describa la imagen')
            div.mb-4
              p.text-bold.text-center Valor 1
              p.text-small.px-4.text-center.pb-2 Indica una desigualdad total, donde una sola persona posee toda la riqueza y el resto no tiene nada.

      p.mb-4 El índice de GINI se calcula a partir de la <b>Curva de Lorenz</b>, que muestra la proporción acumulada del ingreso en relación con la proporción acumulada de la población. Cuanto más se aleja esta curva de la línea de equidad perfecta, mayor es la desigualdad.

      .row.mb-4
        .col-12.col-xl-8(data-aos="fade-up")
          p.mb-4 El índice de GINI es una herramienta importante en economía y políticas públicas, porque:
          p.mb-1 ●	Compara la desigualdad entre países o dentro de una misma nación en diferentes periodos.<br>●	Evalúa el impacto de las políticas económicas y sociales en la reducción de la desigualdad.<br>●	Analiza la relación entre la desigualdad y el desarrollo económico, la pobreza y la estabilidad social.
        .col-4.d-none.d-xl-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-62.png', alt='Texto que describa la imagen')

      .row.bg-marron.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3.py-4.d-flex
          .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
            h2.mb-4.pb-2.me-auto Medición de la desigualdad económica y su relación con el desarrollo
            p.mb-5(data-aos="fade-up") La desigualdad económica es un factor determinante en el desarrollo de una sociedad, ya que influye en el acceso a oportunidades, el crecimiento económico y la estabilidad social. En el PDF Medición de la desigualdad económica y su relación con el desarrollo,  se presentan herramientas como el índice de GINI para evaluar la distribución de la riqueza y su impacto en la calidad de vida. Además, se analiza cómo la desigualdad extrema puede frenar el desarrollo y qué estrategias pueden implementarse para promover una economía más equitativa y sostenible.
            a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/Anexos_Medición de la desigualdad económica y su relación con el desarrollo.pdf')" target="_blank")
              img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
              p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Medición de la desigualdad económica y su relación con el desarrollo
          .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
            img.h-100(src='@/assets/curso/unidad/img-63.png', alt='Texto que describa la imagen')

      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.redalyc.org/articulo.oa?id=11146910001") Aguilar-Gutiérrez, G. (2016). ¿Por qué disminuyó la desigualdad en México? Análisis con los índices de Gini, Mehran y Piesch 2000-2012. Economía, Sociedad y Territorio, 16(52), 557-590.
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://youtu.be/KiCkOkW1i9g?si=6eOqGWlolNp4X6xO") [Vídeo] ¡ATENCIÓN! La DESIGUALDAD en el Mundo está Disparada, El COEFICIENTE DE GINI AVISA.
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
