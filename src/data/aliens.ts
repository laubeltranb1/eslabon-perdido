import gray from '../assets/races/gray.jpg'
import reptilian from '../assets/races/reptilian.jpg'
import nordic from '../assets/races/nordic.jpg'
import insectoid from '../assets/races/insectoid.jpg'
import hybrid from '../assets/races/hybrid.jpg'
import sirian from '../assets/races/sirian.jpg'
import draconian from '../assets/races/draconian.jpg'
import anunnaki from '../assets/races/anunnaki.jpg'
import lyran from '../assets/races/lyran.jpg'

export type AlienRace = {
  id: string
  name: string
  origin: string
  color: string
  glyph: string
  description: string
  traits: string[]
  image: string
}

export const ALIEN_RACES: AlienRace[] = [
  {
    id: 'gris',
    name: 'Grises',
    origin: 'Zeta Reticuli',
    color: '#8b5cf6',
    glyph: 'G',
    description:
      'Los más citados en abducciones modernas: cabezas grandes, ojos negros y cuerpos delgados. Los teóricos los señalan como los responsables directos de la experimentación genética con homínidos.',
    traits: ['Ojos almendrados', 'Grandes cráneos', 'Ingeniería genética'],
    image: gray,
  },
  {
    id: 'reptiliano',
    name: 'Reptilianos',
    origin: 'Sistema de Alfa Draconis',
    color: '#39ff8f',
    glyph: 'R',
    description:
      'Una estirpe reptiliana humanoide que, según los círculos ufológicos, habría llegado a la Tierra hace milenios, ocultándose en las sombras del poder y mezclando su linaje con líderes ancestrales.',
    traits: ['Piel escamosa', 'Metamorfos', 'Vinculados al poder terrestre'],
    image: reptilian,
  },
  {
    id: 'nordico',
    name: 'Nórdicos',
    origin: 'Pléyades',
    color: '#c4b5fd',
    glyph: 'N',
    description:
      'Descritos como altos, rubios y de apariencia casi humana perfecta. La teoría del "contacto benevolente" los sitúa como los arquitectos silenciosos de nuestra rama evolutiva más "exitosa".',
    traits: ['Apariencia casi humana', 'Contacto benevolente', 'Origen pleyadiano'],
    image: nordic,
  },
  {
    id: 'insectoide',
    name: 'Insectoides',
    origin: 'Desconocido / dimensión paralela',
    color: '#ff3b5c',
    glyph: 'I',
    description:
      'La rama más inquietante de la taxonomía ufológica: seres de exoesqueleto y colmena. Algunos investigadores alternativos los vinculan a bases subterráneas y a las leyendas de "hombres polilla".',
    traits: ['Exoesqueleto', 'Mente colmena', 'Bases subterráneas'],
    image: insectoid,
  },
  {
    id: 'hibrido',
    name: 'Híbridos',
    origin: 'Programa de cruce genético',
    color: '#2ee6d6',
    glyph: 'H',
    description:
      'El resultado directo de la teoría del cruce: una mezcla entre ADN humano y extraterrestre. Para los conspiracionistas, son la prueba viviente —y oculta— del injerto genético en nuestro linaje.',
    traits: ['ADN mixto', 'Producto del injerto', 'Clave del eslabón perdido'],
    image: hybrid,
  },
  {
    id: 'sirio',
    name: 'Sirios',
    origin: 'Sistema estelar de Sirio',
    color: '#3ee6ff',
    glyph: 'S',
    description:
      'Asociados a la transmisión de conocimiento y tecnología a civilizaciones antiguas como Egipto y Sumeria. Las tradiciones esotéricas los consideran guardianes silenciosos de la humanidad.',
    traits: ['Portadores de conocimiento', 'Vínculo con Egipto', 'Guardianes silenciosos'],
    image: sirian,
  },
  {
    id: 'draconiano',
    name: 'Draconianos',
    origin: 'Constelación de Draco',
    color: '#22c55e',
    glyph: 'D',
    description:
      'La casta gobernante de la estirpe reptiliana, situada en la cúspide de la jerarquía extraterrestre según la teoría. Se les atribuye un control ancestral sobre las élites terrestres.',
    traits: ['Casta dominante', 'Jerarquía ancestral', 'Control de élites'],
    image: draconian,
  },
  {
    id: 'anunnaki',
    name: 'Anunnaki',
    origin: 'Nibiru (mitología sumeria)',
    color: '#ffb02e',
    glyph: 'A',
    description:
      'Según las tablillas sumerias reinterpretadas por la ufología moderna, los Anunnaki habrían creado al "Homo sapiens primitivo" mezclando su esencia con la de un homínido terrestre.',
    traits: ['Mitología sumeria', 'Creadores según Sitchin', 'Origen del injerto'],
    image: anunnaki,
  },
  {
    id: 'lyrano',
    name: 'Lyranos',
    origin: 'Constelación de Lyra',
    color: '#facc15',
    glyph: 'L',
    description:
      'Considerados por algunos esotéricos como una de las razas estelares más antiguas, precursoras de otras estirpes humanoides y felinoides que después colonizaron distintos sistemas.',
    traits: ['Raza progenitora', 'Rasgos felinoides', 'Linaje más antiguo'],
    image: lyran,
  },
]
