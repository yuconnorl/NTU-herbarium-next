// banner
import FagusHayatae from '@/assets/images/main/banner/fagus.webp'
import LiliumSp from '@/assets/images/main/banner/lili.webp'
import MitrastemonYamamotoi from '@/assets/images/main/banner/mistra.webp'
import ethnobotany from '@/assets/images/main/ethnobotany.webp'
import garden from '@/assets/images/main/garden.jpg'
import gardenWebp from '@/assets/images/main/garden.webp'
import illustration from '@/assets/images/main/illustration.webp'
import permanent from '@/assets/images/main/mainHall.webp'

const slidePhoto = [
  {
    key: 1,
    src: MitrastemonYamamotoi,
    fallback: '@/assets/images/mistra.jpg',
    alt: 'Mitrastemon yamamotoi',
    nomenclature: 'Mitrastemon yamamotoi',
    credit: 'Jer-Ming Hu',
    personalHref: 'https://ecology.lifescience.ntu.edu.tw/doku.php/zh-tw/jmhu/start',
  },
  {
    key: 2,
    src: FagusHayatae,
    fallback: 'images/fagus.jpg',
    alt: 'Fagus hayatae',
    nomenclature: 'Fagus hayatae',
    credit: 'Jer-Ming Hu',
    personalHref: 'https://ecology.lifescience.ntu.edu.tw/doku.php/zh-tw/jmhu/start',
  },
  {
    key: 3,
    src: LiliumSp,
    fallback: 'images/lili.jpg',
    alt: 'Lilium',
    nomenclature: 'Lilium sp.',
    credit: 'Jer-Ming Hu',
    personalHref: 'https://ecology.lifescience.ntu.edu.tw/doku.php/zh-tw/jmhu/start',
  },
]

const exhibitionPhoto = [
  {
    key: 'ethnobotany',
    title: 'landing_exhibition_title_ethnobotany',
    imgURL: ethnobotany,
    fallback: 'assets/images/main/ethnobotany.jpg',
    alt: 'ethnobotany hall',
  },
  {
    key: 'gardens',
    title: 'landing_exhibition_title_gardens',
    imgURL: gardenWebp,
    fallback: garden,
    alt: 'Outdoor garden',
  },
  {
    key: 'illustration',
    title: 'landing_exhibition_title_illustration',
    imgURL: illustration,
    fallback: '@/assets/images/main/illustartion.jpg',
    alt: 'Botanical illustration hall',
  },
  {
    key: 'permanent',
    title: 'landing_exhibition_title_permanent',
    imgURL: permanent,
    fallback: 'assets/images/main/mainHall.jpg',
    alt: 'Permanent hall',
  },
]

export { exhibitionPhoto, slidePhoto }
