<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'5. Tasa de cambio'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.mb-4
        .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-64.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8.d-flex.flex-column
          p.mb-4 El mercado de divisas, también conocido como Forex (Foreign Exchange Market), es un sistema global descentralizado en el que se compran y se venden monedas de diferentes países. Su función principal es la de facilitar el intercambio de divisas para el comercio internacional, la inversión extranjera y la especulación financiera. Este mercado opera en función de las tasas de cambio, las cuales representan el valor de una moneda en términos de otra y varían constantemente, según la oferta y la demanda.
          .d-flex.align-items-start.bg-azul.p-4(data-aos="fade-up").d-flex.align-items-center
            img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-46.svg', alt='Texto que describa la imagen')
            .my-auto
              p.pe-xl-3.mb-0 Las tasas de cambio pueden ser flotantes, determinadas por el mercado, o fijas, establecidas por los gobiernos o bancos centrales, lo que influye directamente en la competitividad de las empresas, los costos de importación y exportación, y la rentabilidad de las inversiones internacionales.

      #t_5_1.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 5.1
          h2 ¿Qué son las tasas de cambio?

      .row.mb-4
        .col-12.col-xl-8(data-aos="fade-up")
          .bg-verde.p-4.mb-4
            span Según Mochón Morcillo, F. (2006), el tipo de cambio es el valor de una moneda en relación con otra. Indica cuántas unidades de una divisa extranjera se necesitan para obtener una unidad de la moneda local. Generalmente, se expresa como la cantidad de moneda extranjera por cada unidad de la moneda nacional.
          p.mb-4 Por ejemplo, si el tipo de cambio entre el dólar estadounidense y el peso colombiano es de 1 USD = 3,900 COP, significa que, para adquirir un dólar, se deben entregar 3,900 pesos colombianos. Este tipo de cambio también puede expresarse de manera inversa, es decir, cuántos dólares se obtienen por cada peso colombiano.
          span.text-bold Existen dos maneras de presentar el tipo de cambio:
        .col-4.d-none.d-xl-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-47.png', alt='Texto que describa la imagen')
      
      TabsC.mb-4
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Dólar/peso colombiano', :icon="require('@/assets/curso/unidad/img-48.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-49.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Dólar/peso colombiano
              p(data-aos='fade-up') Indica cuántos pesos se requieren para obtener un dólar. En este caso, sería 3,900 COP por 1 USD.
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Peso colombiano/dólar', :icon="require('@/assets/curso/unidad/img-48.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-50.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Peso colombiano/dólar
              p(data-aos='fade-up') Muestra cuántos dólares se reciben por un peso colombiano. En este ejemplo, equivaldría a 0.00026 USD por 1 COP.

      .d-flex.align-items-start.bg-azul.bg-full-width.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
        img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-51.svg', alt='Texto descriptivo de la imagen')
        .my-auto
          p.pe-xl-3.mb-0 Estos valores fluctúan constantemente, según la oferta y la demanda en el mercado de divisas. 

      h2 Depreciación y apreciación del tipo de cambio
      p.mb-4 Continuando con los conceptos de Mochón Morcillo, F. (2006), el tipo de cambio se establece en el mercado de divisas, según la oferta y la demanda, lo que provoca que su valor suba o baje con el tiempo. Cuando el tipo de cambio varía, una moneda puede ganar o perder valor frente a otra.
      .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
        div.px-4.px-md-5.py-md-3
          SlyderA(tipo="b").bg-white
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p Si el tipo de cambio entre el dólar y el peso colombiano disminuye, significa que, con una unidad de la moneda local, ahora se pueden obtener menos dólares que antes. Por ejemplo, si el tipo de cambio pasa de <b>1 USD = 4,000 COP a 1 USD = 3,800 COP</b>, se dice que el peso colombiano se ha <b>apreciado</b> frente al dólar, dado que ahora se necesitan menos pesos para comprar un dólar.
              .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-52.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p Por el contrario, si el tipo de cambio sube de <b>1 USD = 4,000 COP a 1 USD = 4,200 COP</b>, el peso colombiano ha <b>perdido valor</b> o se ha <b>depreciado</b> frente al dólar. Esto significa que ahora se requieren más pesos, para obtener la misma cantidad de dólares.
              .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-53.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p Cuando una moneda se deprecia, los bienes y servicios de ese país se vuelven más económicos para los extranjeros, lo que puede beneficiar a los exportadores. Por ejemplo, si el peso colombiano se deprecia frente al dólar, los turistas y compradores estadounidenses podrán adquirir más productos colombianos con la misma cantidad de dólares, lo que podría impulsar las ventas y los ingresos de los empresarios locales.
              .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-54.png', alt='Texto que describa la imagen')

      #t_5_2.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 5.2
          h2 Tipos de tasa de cambio

      p.mb-4 El <b>tipo de cambio</b> es el valor de una moneda en relación con otra y se determina, según la oferta y la demanda, en el mercado de divisas. Existen diferentes tipos de tasas de cambio, dependiendo de la forma en que se establecen y regulan. A continuación, se describen los principales tipos:
      .row.mb-4
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-55.png', alt='Texto que describa la imagen')
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Tasa de cambio nominal")(data-aos="fade-up")
              p Es el precio de una moneda, expresado en términos de otra. Representa cuántas unidades de una divisa, son necesarias para obtener una unidad de otra.<br><br><b>Ejemplo.</b> <br>Si el tipo de cambio entre el dólar y el peso colombiano es de <b>1 USD = 4,000 COP</b>, significa que para comprar un dólar se requieren 4,000 pesos colombianos.

            .div(titulo="Tasa de cambio real")(data-aos="fade-up")
              p.mb-4 Mide el poder adquisitivo de una moneda en comparación con otra, considerando los niveles de precios en ambos países. Se utiliza para analizar la competitividad de un país en términos de comercio exterior.<br><br><b>Fórmula:</b>
              p.mb-4.ms-4.ms-xl-5 TCR = Tasa de cambio nominal x Índice de precios nacional / Índice de precios extranjero
              p <b>Ejemplo.</b> Si el tipo de cambio nominal es <b>1 USD = 4,000 COP</b>, pero la inflación en Colombia es mayor que en EE.UU., la tasa de cambio real ajustada reflejará que los bienes importados pueden resultar más costosos en términos reales.
            .div(titulo="Tasa de cambio fija")(data-aos="fade-up")
              p En este sistema, el gobierno o el banco central, establece un tipo de cambio determinado y lo mantiene estable mediante la intervención en el mercado de divisas. Para ello, compra o vende moneda extranjera para mantener el valor dentro de un rango establecido.<br><br><b>Ejemplo.</b> Un país decide fijar su tipo de cambio en <b>1 USD = 3,500 COP</b> y el Banco de la República interviene comprando o vendiendo dólares, para evitar fluctuaciones en el valor del peso.

      .row.mb-4
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Tasa de cambio flotante")(data-aos="fade-up")
              p En este régimen, el tipo de cambio varía constantemente, según la oferta y demanda en el mercado de divisas, sin intervención del gobierno. Este sistema es utilizado por la mayoría de las economías.<br><br><b>Ejemplo.</b> Si aumenta la demanda de dólares en Colombia, el tipo de cambio puede subir de <b>1 USD = 4,000 COP a 1 USD = 4,200 COP</b>, reflejando la depreciación del peso colombiano.

            .div(titulo="Tasa de cambio flotante controlada (o sucia)")(data-aos="fade-up")
              p Es un sistema intermedio en el que el tipo de cambio fluctúa, según el mercado, pero el Banco Central interviene ocasionalmente, para evitar cambios bruscos que puedan afectar la estabilidad económica.<br><br><b>Ejemplo.</b> Si el tipo de cambio sube demasiado rápido de <b>1 USD = 4,000 COP a 1 USD = 4,500 COP</b>, el Banco de la República puede vender dólares para frenar la devaluación del peso.

            .div(titulo="Tasa de cambio paralela o mercado negro")(data-aos="fade-up")
              p Surge cuando existen restricciones cambiarias y el tipo de cambio oficial no refleja la oferta y demanda real de la moneda. En estos casos, se desarrolla un mercado informal con una tasa de cambio diferente.<br><br><b>Ejemplo.</b> Si en Colombia hubiera restricciones para la compra de dólares, podría existir un mercado paralelo donde el tipo de cambio sea diferente al oficial, por ejemplo, <b>1 USD = 4,500 COP</b>, mientras que el oficial se mantiene en <b>1 USD = 4,000 COP</b>.

        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-56.png', alt='Texto que describa la imagen')

      #t_5_3.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 5.3
          h2 Relevancia de las tasas de cambio, en el comercio internacional

      p.mb-4 Las tasas de cambio juegan un papel crucial en el comercio internacional, ya que determinan el valor de una moneda en relación con otra y afectan la competitividad de los productos en los mercados globales.
      .row.bg-marron.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3.py-4.d-flex
          .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
            h2.mb-4.pb-2.me-auto Relevancia de las tasas de cambio, en el comercio internacional
            p.mb-5(data-aos="fade-up") En el PDF Relevancia de las tasas de cambio en el comercio internacional , se analiza cómo las variaciones cambiarias influyen en las exportaciones, las importaciones y la inversión extranjera. Además, se explora el impacto de la intervención de los bancos centrales y la relación entre el tipo de cambio, la inflación y el crecimiento económico.
            a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/Anexos_Relevancia de las tasas de cambio, en el comercio internacional.pdf')" target="_blank")
              img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
              p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Relevancia de las tasas de cambio, en el comercio internacional
          .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
            img.h-100(src='@/assets/curso/unidad/img-57.png', alt='Texto que describa la imagen')

      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.redalyc.org/journal/909/90969428008/90969428008.pdf") Candelo-Viafara, J. M., & Oviedo-Gómez, A. (2021). La tasa de cambio y sus impactos en los agregados económicos colombianos: una aproximación FAVAR. Revista Facultad de Ciencias Económicas: Investigación y Reflexión, 29(2), 121-142.
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://youtu.be/4nKi44x1JHg?si=v7hlt51KQkyNRGQX") [Vídeo] Precios y tasas de cambio.
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
