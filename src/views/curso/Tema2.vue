<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Inflación'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      .row.mb-4
        .col-12.col-xl-8.d-flex.flex-column
          p.mb-4 La inflación es un fenómeno económico que afecta el poder adquisitivo de los consumidores y la estabilidad de los mercados.
          .d-flex.align-items-start.bg-azul.p-4(data-aos="fade-up").d-flex.align-items-center
            img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-12.svg', alt='Texto que describa la imagen')
            .my-auto
              p.pe-xl-3.mb-0 Las causas de la inflación pueden estar relacionadas con factores internos y externos, incluyendo el aumento en los costos de producción, el incremento en la demanda agregada o la emisión excesiva de dinero por parte de los bancos centrales. Sus efectos pueden ser tanto positivos como negativos, dependiendo de su magnitud y duración.
          .d-flex.align-items-start.bg-azul.p-4(data-aos="fade-up").d-flex.align-items-center
            img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-13.svg', alt='Texto que describa la imagen')
            .my-auto
              p.pe-xl-3.mb-0 Entre las principales consecuencias se encuentran la pérdida del poder adquisitivo, la incertidumbre en la inversión y la posible desaceleración del crecimiento económico.
          .d-flex.align-items-start.bg-azul.p-4(data-aos="fade-up").d-flex.align-items-center
            img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-14.svg', alt='Texto que describa la imagen')
            .my-auto
              p.pe-xl-3.mb-0 Comprender los tipos, causas y efectos de la inflación, es esencial para diseñar estrategias de política económica que permitan mantener la estabilidad de los precios y fomentar el desarrollo sostenible.
        .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')
      
      p.mb-4 La inflación es un fenómeno económico que se manifiesta como el aumento generalizado y sostenido de los precios de bienes y servicios en una economía, durante un período determinado. Este incremento en los precios reduce el poder adquisitivo de la moneda, lo que significa que, con la misma cantidad de dinero, los consumidores pueden comprar menos productos y servicios con el tiempo.

      .row.mb-4
        .col-4.d-none.d-xl-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8(data-aos="fade-up")
          p.mb-4 La inflación es el resultado de diversos factores que alteran el equilibrio entre la oferta y la demanda en el mercado, este puede originarse por el incremento en los costos de producción, el aumento de la demanda agregada o la expansión descontrolada de la cantidad de dinero en circulación. Cuando los precios suben de manera continua, se generan distorsiones en la economía, afectando tanto a los consumidores como a los productores.
          .bg-amarillo.p-4
            span Si bien un nivel moderado de inflación es considerado normal en una economía en crecimiento, su descontrol puede generar incertidumbre y afectar negativamente el desarrollo económico y social. En este sentido, las políticas económicas y monetarias desempeñan un papel fundamental en su regulación para garantizar la estabilidad y el crecimiento sostenido del país. 

      #t_2_1.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.1
          h2 ¿Cómo  se mide la inflación?

      .row.mb-4
        .col-12.col-xl-8(data-aos="fade-up")
          p.mb-4 Teniendo en cuenta al DANE (s.f.), la inflación en Colombia se mide a través del Índice de Precios al Consumidor (IPC), el cual refleja la variación promedio en los precios de una canasta representativa de bienes y servicios consumidos por los hogares. Este indicador es calculado y publicado mensualmente por el Departamento Administrativo Nacional de Estadística (DANE), entidad encargada de recopilar y analizar los datos de precios en el país.
          h2 Índice de Precios al Consumidor (IPC)
          span El IPC mide la evolución del costo de una canasta de bienes y servicios que refleja los hábitos de consumo de los colombianos. Para su cálculo, el DANE sigue los siguientes pasos:
        .col-4.d-none.d-xl-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')

      .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
        div.px-4.px-md-5.py-md-3
          SlyderA(tipo="b").bg-white
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Definición de la canasta familiar
                p Se seleccionan una serie de bienes y servicios que representan el consumo habitual de los hogares colombianos. La composición de la canasta se actualiza periódicamente, según estudios de ingresos y gastos de la población.
              .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-18.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Recolección de precios
                p Se realiza un seguimiento de los precios de los productos incluidos en la canasta, recopilando información en diferentes establecimientos comerciales, mercados y servicios en varias regiones del país.
              .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Cálculo del índice
                p Se compara el costo total de la canasta en diferentes periodos de tiempo y se calcula el porcentaje de variación, lo que indica el nivel de inflación.
              .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-20.png', alt='Texto que describa la imagen')

      p.mb-4 Encontramos:
      .row.mb-4.justify-content-center
        .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
          .custom-image-card.d-flex.flex-column.p-4.py-md-5
            img.mx-auto.mb-4(src='@/assets/curso/unidad/img-21.svg', style='width: 80px')
            p.text-bold.mb-4.text-center Inflación mensual
            p.px-1.text-small.mb-0.d-flex.text-center Representa el cambio en los precios de la canasta del IPC de un mes a otro.
        .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
          .custom-image-card.d-flex.flex-column.p-4.py-md-5
            img.mx-auto.mb-4(src='@/assets/curso/unidad/img-21.svg', style='width: 80px')
            p.text-bold.mb-4.text-center Inflación anual
            p.px-1.text-small.mb-0.d-flex.text-center Muestra el porcentaje de aumento de precios en un periodo de 12 meses. Es la medida más utilizada para analizar la evolución de la inflación en el país.
        .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
          .custom-image-card.d-flex.flex-column.p-4.py-md-5
            img.mx-auto.mb-4(src='@/assets/curso/unidad/img-21.svg', style='width: 80px')
            p.text-bold.mb-4.text-center Inflación subyacente
            p.px-1.text-small.mb-0.d-flex.text-center Se calcula excluyendo productos cuyos precios son altamente volátiles, como los alimentos y la energía, permitiendo observar la tendencia de la inflación a largo plazo.

      .row.mb-4
        .col-12.col-xl-8(data-aos="fade-up")
          h2 Índice de Precios al Productor (IPP)
          p.mb-4 Además del IPC, el Índice de Precios al Productor (IPP), mide la variación de precios de los bienes y servicios desde la perspectiva de los productores. Es útil para analizar la inflación en las primeras etapas del proceso productivo y su posible impacto en los precios al consumidor final.
          h2 Objetivo de inflación y control por el Banco de la República
          .bg-verde.p-4
            span El Banco de la República, como autoridad monetaria en Colombia, establece un objetivo de inflación anual con el fin de mantener la estabilidad de precios. Para ello, utiliza herramientas de política monetaria, como el ajuste en las tasas de interés, buscando mantener la inflación dentro de un rango adecuado para el crecimiento económico del país.
        .col-4.d-none.d-xl-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')

      #t_2_2.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.2
          h2 Causas

      p.mb-4 La inflación contiene diversas causas, las cuales pueden clasificarse en factores relacionados con la demanda, la oferta y la política económica. Estas causas pueden actuar de manera independiente o combinarse, generando presiones inflacionarias en la economía. A continuación, se describen las principales causas:
      
      .row.mb-4
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Inflación por demanda")(data-aos="fade-up")
              p Se produce cuando la demanda agregada de bienes y servicios en una economía, supera la capacidad de producción de las empresas. Esto genera un aumento en los precios, porque los consumidores compiten para adquirir los productos disponibles. Las principales razones de este tipo de inflación incluyen:<br>●	<b>Aumento del consumo y la inversión.</b> Un incremento en el gasto de los hogares, el gobierno o las empresas, genera mayor demanda de bienes y servicios.<br>●	<b>Crecimiento excesivo del crédito.</b> Cuando los bancos facilitan el acceso al crédito, los consumidores y las empresas tienen mayor capacidad de gasto, lo que impulsa la demanda.<br>●	<b>Políticas fiscales expansivas.</b> El aumento del gasto público sin un incremento proporcional en la producción, puede generar un exceso de demanda y presionar los precios al alza.

            .div(titulo="Inflación por costos")(data-aos="fade-up")
              p Ocurre cuando los costos de producción aumentan y las empresas trasladan estos incrementos a los precios finales de los bienes y servicios. Entre los principales factores que contribuyen a esta causa se encuentran:<br>●	<b>Aumento en los costos laborales.</b> Cuando los salarios suben por encima de la productividad, las empresas trasladan ese costo a los precios.<br>●	<b>Incremento en el precio de materias primas.</b> El encarecimiento de insumos esenciales como el petróleo, los metales o los alimentos, afecta los costos de producción y eleva los precios finales.<br>●	<b>Devaluación de la moneda.</b> Si la moneda local pierde valor frente a otras divisas, las importaciones se encarecen, afectando los costos de producción y los precios de los bienes y servicios.<br>●	<b>Factores climáticos o desastres naturales.</b> Eventos como sequías, huracanes o terremotos, pueden reducir la oferta de productos agrícolas y afectar las cadenas de producción, aumentando los precios.

            .div(titulo="Inflación estructural")(data-aos="fade-up")
              p Este tipo de inflación se debe a problemas estructurales en la economía, que generan rigideces en la oferta y dificultan la capacidad de producción. Sus principales causas incluyen:<br>●	<b>Ineficiencia en la producción y distribución.</b> La falta de infraestructura, la baja productividad y los problemas logísticos, pueden limitar la oferta de bienes y servicios, elevando los precios.<br>●	<b>Monopolios y oligopolios.</b> Cuando pocas empresas controlan la producción de un bien o servicio, pueden fijar precios altos sin competencia.<br>●	<b>Burocracia y regulaciones excesivas.</b> Trámites desmedidos, regulaciones o restricciones, pueden encarecer los costos de producción y limitar la competencia, generando aumentos en los precios.

      .row.mb-4
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Inflación por expectativas")(data-aos="fade-up")
              p Las expectativas sobre la inflación futura, pueden generar aumentos en los precios en el presente. Cuando consumidores, empresas y gobiernos anticipan que los precios subirán, pueden tomar decisiones que contribuyan a la inflación, como:<br>●	<b>Aumento preventivo de precios.</b> Las empresas pueden incrementar sus precios para protegerse de posibles costos futuros más altos.<br>●	<b>Demandas salariales más altas.</b> Los trabajadores pueden exigir aumentos salariales para compensar la inflación esperada, lo que incrementa los costos empresariales y genera una espiral inflacionaria.

            .div(titulo="Inflación generada por la política monetaria")(data-aos="fade-up")
              p Las decisiones de los bancos centrales sobre la cantidad de dinero en circulación, pueden influir en la inflación. Algunas causas derivadas de la política monetaria, incluyen:<br>●	<b>Emisión excesiva de dinero.</b> Cuando el banco central imprime más dinero sin respaldo en la producción, la cantidad de dinero en circulación aumenta y puede generar un alza generalizada de precios.<br>●	<b>Tasas de interés bajas.</b> Si las tasas de interés son muy bajas, el acceso al crédito se facilita, lo que incrementa la demanda y presiona los precios al alza.

        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')

      #t_2_3.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.3
          h2 Tipos de inflación

      p.mb-4 La inflación puede clasificarse según la velocidad con la que aumentan los precios en la economía. Esta clasificación es importante porque permite identificar el nivel de gravedad del fenómeno inflacionario y aplicar las estrategias adecuadas para su control.

      .row.bg-marron.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3.py-4.d-flex
          .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
            h2.mb-4.pb-2.me-auto Tipos de inflación
            p.mb-5(data-aos="fade-up") En el PDF Tipos de inflación , se presentan las diferentes categorías de inflación, desde la moderada, que ocurre en economías estables, hasta la hiperinflación, que puede generar crisis económicas severas. A través de ejemplos concretos, se analiza cómo cada tipo de inflación afecta la economía, la inversión y el consumo, permitiendo una mejor comprensión de su impacto en el desarrollo de las naciones.
            a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/Anexos_Tipos de inflación.pdf')" target="_blank")
              img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
              p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Tipos de inflación
          .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
            img.h-100(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')

      #t_2_4.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.4
          h2 Efectos en la economía

      p.mb-4 Para conocer más  sobre la temática, lo invitamos a ver el siguiente video.

      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/AMZiv8_38F4?si=tj-xbcjr6dxKw2Ar" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.redalyc.org/articulo.oa?id=30121105") Dabus, C., & Viego, V. (2003). Inflación, precios relativos y crecimiento: Evidencia de América Latina. Estudios de Economía Aplicada, 21(1), 91-107.
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://youtu.be/_gm9eSzBAVA?si=xS_HkxZyzlFFG3xk") [Vídeo] Cómo se mide la inflación.
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://youtu.be/m3tJMq51x4g?si=0gB7LCSeziHZrV_b") [Vídeo] ¿QUE ES LA INFLACIÓN? y Que es la HIPERINFLACIÓN, el Impuesto de los Pobres.
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
