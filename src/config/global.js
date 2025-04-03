export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Variables y agregados económicos',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'PIB (Producto Interno Bruto)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Cómo se calcula el PIB',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'EL PIB y su importancia como indicador de desarrollo',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Inflación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: '¿Cómo  se mide la inflación?',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Causas',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Tipos de inflación',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Efectos en la economía',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Desempleo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: '¿Cómo se mide el desempleo?',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Tipos de desempleo ',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Impacto en el desarrollo económico',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Tasa de interés',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo:
              'Influencia de las tasas de interés en la inversión y el consumo',
            hash: 't_4_1',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Tasa de cambio',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: '¿Qué son las tasas de cambio?',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Tipos de tasa de cambio',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo:
              'Relevancia de las tasas de cambio, en el comercio internacional',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: '',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'CUE MANCERA, A. Fundamentos de economía. ed. México D.F: Grupo Editorial Patria, 2015. 345 p.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/39385?page=241',
    },
    {
      referencia:
        'Mankiw, N. G. (2014). Macroeconomía: (8 ed.). Antoni Bosch editor.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/59738?page=28',
    },
    {
      referencia:
        'CUE MANCERA, A. Fundamentos de economía. ed. México D.F: Grupo Editorial Patria, 2015. 345 p.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/39385?page=241',
    },
    {
      referencia:
        'Mankiw, N. G. (2014). Macroeconomía: (8 ed.). Antoni Bosch editor.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/59738?page=31',
    },
    {
      referencia:
        'Flores Barrera, C. (2006). La economía: virtudes e inconvenientes: manual básico para no economistas: ( ed.). RIL editores.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/67970?page=13',
    },
    {
      referencia:
        'Mochón Morcillo, F. (2006). Principios de macroeconomía: ( ed.). McGraw-Hill España.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/50106?page=13',
    },
    {
      referencia:
        'Jiménez Jiménez, E. (2009). Breve historia de las tasas de interés: ( ed.). El Cid Editor | apuntes.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/31378?page=11',
    },
    {
      referencia:
        'Reinaldo Becerra, Ó. (2009). Transmisión de tasas de interés bajo el esquema de metas de inflación: evidencia para Colombia: ( ed.). D - Universidad Católica de Chile.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/11894?page=6',
    },
    {
      referencia:
        'Eggers, F. G. (2016). Elementos de micro y macroeconomía: ( ed.). Editorial Maipue.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/77331?page=9',
    },
    {
      referencia:
        'Mochón Morcillo, F. (2006). Principios de macroeconomía: ( ed.). McGraw-Hill España.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/50106?page=13',
    },
    {
      referencia:
        'Massad A. C. (2013). Mis clases de economía. y algo más: microeconomía-macroeconomía: ( ed.). Editorial Universitaria de Chile.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/67701?page=9',
    },
    {
      referencia:
        'Cue Mancera, A. (2015). Introducción a la macroeconomía: un enfoque integral para México: ( ed.). Grupo Editorial Patria.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/39386?page=78',
    },
  ],
  glosario: [
    {
      termino: 'Crecimiento Económico',
      significado:
        'Incremento sostenido de la producción de bienes y servicios en una economía durante un período determinado, generalmente medido a través del PIB.',
    },
    {
      termino: 'Déficit Fiscal',
      significado:
        'Situación en la que los gastos del gobierno superan sus ingresos en un período determinado, lo que puede llevar a endeudamiento o emisión de dinero.',
    },
    {
      termino: 'Demanda Agregada',
      significado:
        'Cantidad total de bienes y servicios demandados en una economía a diferentes niveles de precios en un período determinado, influenciada por el consumo, la inversión, el gasto público y las exportaciones netas.',
    },
    {
      termino: 'Oferta Monetaria',
      significado:
        'Cantidad total de dinero disponible en una economía en un momento determinado, controlada por el banco central a través de políticas monetarias.',
    },
    {
      termino: 'Política Fiscal',
      significado:
        'Conjunto de medidas implementadas por el gobierno para influir en la economía mediante la regulación del gasto público y la recaudación de impuestos.',
    },
    {
      termino: 'Política Monetaria',
      significado:
        'Estrategia utilizada por los bancos centrales para controlar la inflación, el crecimiento económico y el empleo, a través del ajuste de la oferta monetaria y las tasas de interés.',
    },
    {
      termino: 'Tipos de desempleo',
      significado:
        'Clasificación que incluye el desempleo friccional (transitorio), estructural (cambios en la economía), cíclico (recesiones) y estacional (fluctuaciones temporales).',
    },
    {
      termino: 'Tipos de inflación',
      significado:
        'Se clasifica en inflación moderada (incrementos bajos y predecibles), galopante (altos aumentos de precios) e hiperinflación (incrementos extremadamente elevados y fuera de control).',
    },
    {
      termino: 'Importancia del PIB',
      significado:
        'Indicador clave para medir la actividad económica de un país, utilizado en la formulación de políticas públicas y la toma de decisiones económicas.',
    },
    {
      termino: 'Relevancia de la tasa de cambio',
      significado:
        'Su variación impacta el comercio internacional, el costo de importaciones y exportaciones, y la estabilidad financiera de un país.',
    },
  ],
}
