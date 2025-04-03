<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. PIB (Producto Interno Bruto)'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-4
      .col-12.col-xl-8(data-aos="fade-up")
        span El Producto Interno Bruto (PIB), es uno de los principales indicadores macroeconómicos utilizados para medir el desempeño económico de un país, representa el valor total de los bienes y servicios producidos dentro de un territorio en un periodo determinado, generalmente un año. Su cálculo puede realizarse a través de tres enfoques:
      .col-4.d-none.d-xl-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-5.png', alt='Texto que describa la imagen')

    .row.mb-4  
      .col-12.col-md-6.col-xl-4.mb-4.px-2
        .d-flex.align-items-start.bg-azul.h-100.px-2.py-2(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-2(style='width: 90px' src='@/assets/curso/unidad/img-6.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-2.mb-2.text-bold Enfoque 1:
            p.pe-xl-3.mb-0 El método del gasto.
      .col-12.col-md-6.col-xl-4.mb-4.px-2
        .d-flex.align-items-start.bg-azul.h-100.px-2.py-2(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-2(style='width: 90px' src='@/assets/curso/unidad/img-6.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-2.mb-2.text-bold Enfoque 2:
            p.pe-xl-3.mb-0 El método del ingreso.
      .col-12.col-md-6.col-xl-4.mb-4.px-2
        .d-flex.align-items-start.bg-azul.h-100.px-2.py-2(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-2(style='width: 90px' src='@/assets/curso/unidad/img-6.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-2.mb-2.text-bold Enfoque 3:
            p.pe-xl-3.mb-0 El método de la producción.
    
    .row.mb-4
      .col-12.col-xl-8(data-aos="fade-up")
        p.mb-4 Cada uno de los cuales ofrece una perspectiva diferente sobre la actividad económica.
        .bg-amarillo.p-4
          span El PIB es necesario como indicador de desarrollo, dado que permite evaluar el crecimiento económico, comparar el desempeño entre diferentes economías y formular políticas económicas adecuadas. Sin embargo, su interpretación debe complementarse con otros indicadores, como la distribución del ingreso y el bienestar social, para obtener una visión más completa del desarrollo económico de una nación.
      .col-4.d-none.d-xl-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')

    #t_1_1.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.1
        h2 Concepto

    .row.mb-4
      .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.flex-column
        .d-flex.mb-4.align-items-start.bg-verde.p-4(data-aos="fade-up").d-flex.align-items-center
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-9.svg', alt='Texto que describa la imagen')
          .my-auto
            p.pe-xl-3.mb-0 Según Cue Mancera, A. (2015), el Producto Interno Bruto (PIB), es un indicador clave para evaluar la economía de un país o una región. Este concepto hace referencia al valor de todos los bienes y servicios finales producidos dentro de un territorio en un periodo determinado, utilizando los recursos productivos disponibles. Su cálculo puede realizarse desde tres enfoques distintos: el gasto, el ingreso y la producción. 
        p.mb-4 A partir del PIB, es posible conocer, tanto el nivel de ingresos como el ahorro de una nación o región. Sin embargo, este indicador no refleja completamente el bienestar social, puesto que no considera aspectos como el tiempo libre u otros elementos que, aunque no tienen un valor de mercado, influyen en la calidad de vida de las personas.
        span.text-bold Según el DANE (s.f.), el Producto Interno Bruto (PIB) refleja el resultado de la actividad económica llevada a cabo por las unidades de producción dentro de un territorio. Su medición puede realizarse a través del valor agregado, la demanda final o el uso de bienes y servicios, así como a partir de los ingresos primarios que estas unidades generan y distribuyen.
    
    #t_1_2.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.2
        h2 Cómo se calcula el PIB

    p.mb-4 El Producto Interno Bruto (PIB) es uno de los principales indicadores macroeconómicos utilizados para medir el desempeño de una economía.
    .row.bg-marron.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
          h2.mb-4.pb-2.me-auto Cómo se calcula el PIB 
          p.mb-5(data-aos="fade-up") En el PDF Cómo se calcula el PIB , se explican los tres enfoques utilizados para su cálculo: el método del gasto, el método del valor agregado y el método del ingreso. A través de estos enfoques, se analiza cómo la producción de bienes y servicios, el consumo, la inversión y los ingresos generados por los factores productivos se interrelacionan para determinar el crecimiento económico de un país.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/Anexos_Cómo se calcula el PIB.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Cómo se calcula el PIB 
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
          img.h-100(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')

    #t_1_3.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.3
        h2 EL PIB y su importancia como indicador de desarrollo

    p.mb-4 El Producto Interno Bruto (PIB), es una de las métricas más utilizadas para evaluar la actividad económica de un país o región. Representa el valor total de los bienes y servicios finales producidos en un territorio, durante un período determinado, generalmente un año. Su relevancia radica en que proporciona una visión cuantificable del crecimiento económico y permite comparar el desempeño de distintas economías a lo largo del tiempo.
    ImagenInfografica.color-secundario.mb-4.bg-white
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-11.png', alt='Descripción de la imagen')
      .tarjeta.bg-white.p-4(x='7.6%' y='48%' numero='+')
        .h5.mb-2 Medición del crecimiento económico
        p El PIB permite identificar si una economía está en expansión o contracción. Un aumento sostenido del PIB, indica un crecimiento en la producción, lo que generalmente se asocia con mayor empleo y mejores condiciones económicas.
      .tarjeta.bg-white.p-4(x='14.7%' y='76%' numero='+')
        .h5.mb-2 Comparaciones internacionales
        p Es una herramienta para comparar el desarrollo económico entre países. Los organismos internacionales, como el Banco Mundial o el Fondo Monetario Internacional (FMI), utilizan el PIB para clasificar economías y evaluar su desempeño relativo.
      .tarjeta.bg-white.p-4(x='64.4%' y='91%' numero='+')
        .h5.mb-2 Base para la formulación de políticas públicas
        p Los gobiernos emplean el PIB para diseñar estrategias económicas, fiscales y monetarias. Si el PIB muestra signos de desaceleración, pueden implementarse medidas de estímulo, como la reducción de impuestos o el aumento del gasto público, para impulsar la economía.
      .tarjeta.bg-white.p-4(x='90%' y='78%' numero='+')
        .h5.mb-2 Atracción de inversión
        p Un PIB en crecimiento puede generar confianza en los inversionistas nacionales y extranjeros, lo que fomenta la inversión en infraestructura, tecnología e innovación.
      .tarjeta.bg-white.p-4(x='92.6%' y='53.4%' numero='+')
        .h5.mb-2 Evaluación del nivel de ingreso y ahorro nacional
        p A través del PIB, es posible analizar el nivel de ingresos generados dentro de una economía y determinar su capacidad de ahorro e inversión.

    .bg-full-width.border-top-9-azul
      .px-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.redalyc.org/articulo.oa?id=479553173007") Chaves Castro, Á. H. (2017). Análisis de los ciclos del producto interno bruto agropecuario colombiano 1976-2013. Revista Apuntes del CENES, 36(63), 169-209.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://youtu.be/m3tJMq51x4g?si=0gB7LCSeziHZrV_b") [Vídeo] ¿QUE ES LA INFLACIÓN? y Que es la HIPERINFLACIÓN, el Impuesto de los Pobres.
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
