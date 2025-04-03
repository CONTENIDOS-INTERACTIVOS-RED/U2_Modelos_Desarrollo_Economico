<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Desempleo'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      .row.mb-4
        .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8.d-flex.flex-column
          p.mb-4 El desempleo es un fenómeno que afecta tanto a individuos como a economías enteras, influyendo en la estabilidad social y el crecimiento económico. Sus distintas formas responden a diversas causas, desde cambios estructurales en el mercado laboral, hasta fluctuaciones cíclicas en la economía; por tanto, comprender los tipos de desempleo y su impacto, permite analizar los desafíos que enfrentan los países en la generación de empleo y en la formulación de políticas que promuevan un desarrollo sostenible e inclusivo.
          .d-flex.mb-4.align-items-start.bg-azul.p-4(data-aos="fade-up").d-flex.align-items-center
            img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-27.svg', alt='Texto que describa la imagen')
            .my-auto
              p.pe-xl-3.mb-0 Según Flores Barrera, C. (2006), el desempleo es la situación en la que una persona en edad y condición de trabajar, que forma parte de la población económicamente activa, se encuentra sin empleo y busca activamente una ocupación remunerada. 
          p.mb-0 El desempleo en un país, es un indicador económico y social que refleja la proporción de la población económicamente activa que se encuentra sin empleo y busca activamente una ocupación remunerada. Este fenómeno es resultado de diversos factores macroeconómicos, como el crecimiento o contracción de la economía, las políticas gubernamentales, los cambios en la estructura productiva, la automatización y la globalización, entre otros.
      
      #t_3_1.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 3.1
          h2 ¿Cómo se mide el desempleo?
      
      .row.mb-4
        .col-12.col-xl-8(data-aos="fade-up")
          p.mb-4 La medición del desempleo es un proceso fundamental para evaluar la situación del mercado laboral en un país y diseñar políticas públicas que fomenten el empleo. Para ello, se utilizan diversos datos, procesos y herramientas, entre los cuales destacan los siguientes:
          span.text-bold Datos utilizados en la medición del desempleo:
        .col-4.d-none.d-xl-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')

      .row.mb-4
        .col-4.d-none.d-xl-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8(data-aos="fade-up")
          SlyderF(columnas='col-12 col-lg-6 py-4 px-3')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-30.svg', style='width: 80px')
              p.text-bold.mb-4.text-center Población en edad de trabajar
              p.px-1.text-small.mb-0.d-flex.text-center Personas que tienen la edad legal para trabajar (generalmente mayores de 18 años).
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-31.svg', style='width: 80px')
              p.text-bold.mb-4.text-center Población económicamente activa (PEA)
              p.px-1.text-small.mb-0.d-flex.text-center Personas que tienen empleo o están buscando uno activamente.
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-32.svg', style='width: 80px')
              p.text-bold.mb-4.text-center Población ocupada
              p.px-1.text-small.mb-0.d-flex.text-center Personas que trabajan al menos una hora remunerada a la semana o que trabajan en negocios familiares sin recibir pago.
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-33.svg', style='width: 80px')
              p.text-bold.mb-4.text-center Población desempleada
              p.px-1.text-small.mb-0.d-flex.text-center Personas que no tienen trabajo, pero están disponibles para trabajar y han buscado empleo en un periodo reciente (generalmente en las últimas cuatro semanas).
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-34.svg', style='width: 80px')
              p.text-bold.mb-4.text-center Población económicamente inactiva
              p.px-1.text-small.mb-0.d-flex.text-center Personas que no trabajan ni buscan empleo (estudiantes, jubilados, amas de casa, etc.).

      p.mb-4 Procesos para medir el desempleo:
      .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
        div.px-4.px-md-5.py-md-3
          SlyderA(tipo="b").bg-white
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Encuestas de hogares
                p Se realizan periódicamente a nivel nacional, para conocer la situación laboral de la población. Un ejemplo es la Encuesta de Hogares del DANE, en Colombia.
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-36.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Cálculo de la tasa de desempleo
                p.mb-4 Se obtiene dividiendo el número de desempleados, entre la población económicamente activa y multiplicando por 100:
                span Tasa de desempleo = (Población desempleada / Población económicamente activa) x 100
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-37.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Registros administrativos
                p Se usan datos de oficinas de empleo, solicitudes de subsidios por desempleo, afiliaciones a la seguridad social y otras bases de datos oficiales.

      #t_3_2.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 3.2
          h2 Tipos de desempleo 

      p.mb-4 A continuación, se relacionan los diferentes tipos de desempleo:

      .row.mb-4
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-38.png', alt='Texto que describa la imagen')
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Desempleo estructural")(data-aos="fade-up")
              p El desempleo estructural ocurre cuando hay un desajuste entre las habilidades de los trabajadores y los requerimientos del mercado laboral. Esto sucede cuando hay cambios significativos en la economía, como avances tecnológicos, deslocalización de industrias o la desaparición de ciertos sectores productivos.<br><b>Ejemplo:</b><br>Un operario de una fábrica textil pierde su empleo porque la empresa automatiza su línea de producción. Como su perfil no se adapta a las nuevas exigencias tecnológicas, no encuentra trabajo fácilmente y debe capacitarse en nuevas habilidades.

            .div(titulo="Desempleo friccional")(data-aos="fade-up")
              p El desempleo friccional es el desempleo temporal que se produce cuando las personas cambian de trabajo o buscan su primer empleo. También puede incluir a trabajadores que dejan su empleo voluntariamente, en busca de mejores oportunidades laborales.<br>Este tipo de desempleo es inevitable y suele ser de corta duración. Se considera una parte natural del funcionamiento del mercado laboral, ya que siempre habrá personas en transición entre empleos o en búsqueda de una mejor oportunidad.

            .div(titulo="Desempleo cíclico")(data-aos="fade-up")
              p El desempleo cíclico está vinculado a los ciclos económicos de expansión y recesión. Durante períodos de recesión, la demanda de bienes y servicios disminuye, lo que provoca una reducción en la producción y despidos masivos. En cambio, cuando la economía se recupera y crece, la demanda de empleo aumenta.<br><b>Ejemplo:</b><br>Durante una crisis económica, una empresa de construcción reduce su plantilla porque hay menos inversión en infraestructura. Como resultado, muchos obreros quedan desempleados hasta que la economía se recupere y las inversiones vuelvan a aumentar.

            .div(titulo="Desempleo estacional")(data-aos="fade-up")
              p El desempleo estacional ocurre en sectores donde la demanda de trabajo varía, según la época del año. Industrias como el turismo, la agricultura y la pesca, suelen generar empleo solo en determinadas temporadas, dejando a muchos trabajadores desempleados en los periodos de menor actividad.
            .div(titulo="Desempleo institucional")(data-aos="fade-up")
              p El desempleo institucional es causado por factores externos al mercado laboral, como regulaciones gubernamentales, impuestos laborales, políticas salariales o normativas sindicales. Puede ocurrir cuando las leyes limitan la contratación o aumentan el costo de emplear trabajadores, haciendo que las empresas reduzcan su personal.<br><b>Ejemplo:</b><br>Un país impone un salario mínimo muy alto, lo que lleva a muchas pequeñas empresas a reducir su plantilla porque no pueden asumir los costos laborales, aumentando el desempleo.

      #t_3_3.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 3.3
          h2 Impacto en el desarrollo económico

      p.mb-4 El desempleo es un factor determinante en el desarrollo económico de un país, ya que afecta tanto el ingreso de las familias como la estabilidad de los mercados.
      .row.bg-marron.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3.py-4.d-flex
          .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
            h2.mb-4.pb-2.me-auto Impacto en el desarrollo económico
            p.mb-5(data-aos="fade-up") En el PDF Impacto en el desarrollo económico , se analiza cómo una alta tasa de desempleo reduce el consumo, disminuye la inversión y limita la recaudación fiscal, afectando el crecimiento sostenible. Además, se exploran sus consecuencias sociales y económicas, así como la importancia de implementar estrategias para fomentar el empleo y fortalecer la productividad nacional.
            a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/Anexos_Impacto en el desarrollo económico.pdf')" target="_blank")
              img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
              p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Impacto en el desarrollo económico
          .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
            img.h-100(src='@/assets/curso/unidad/img-39.png', alt='Texto que describa la imagen')

      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.redalyc.org/articulo.oa?id=29069613018") Villalobos Rodríguez, G., Moraga López, G., Guevara Portuguez, M. J., & Araya-Castillo, L. (2021). Desempleo juvenil: contribuciones para su disminución desde el emprendimiento. Revista Venezolana de Gerencia, 26(95).
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://youtu.be/Ef9dk22Nf9c?si=gac-wy9szs8ZdZtK") [Vídeo] Empleo y precios 2: Clases de desempleo.
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
