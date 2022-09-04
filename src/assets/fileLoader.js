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
    publisher: 'Makino',
    credit: 'Jer-Ming Hu',
    personalHref:
      'https://ecology.lifescience.ntu.edu.tw/doku.php/zh-tw/jmhu/start',
  },
  {
    key: 2,
    src: FagusHayatae,
    fallback: 'images/fagus.jpg',
    alt: 'Fagus hayatae',
    nomenclature: 'Fagus hayatae',
    publisher: 'Palib.',
    credit: 'Jer-Ming Hu',
    personalHref:
      'https://ecology.lifescience.ntu.edu.tw/doku.php/zh-tw/jmhu/start',
  },
  {
    key: 3,
    src: LiliumSp,
    fallback: 'images/lili.jpg',
    alt: 'Lilium',
    nomenclature: 'Lilium sp.',
    publisher: '',
    credit: 'Jer-Ming Hu',
    personalHref:
      'https://ecology.lifescience.ntu.edu.tw/doku.php/zh-tw/jmhu/start',
  },
]

const exhibitionPhoto = [
  {
    key: 'ethnobotany',
    title: 'landing_exhibition_title_ethnobotany',
    imgURL: ethnobotany,
    fallback: 'assets/images/main/ethnobotany.jpg',
  },
  {
    key: 'gardens',
    title: 'landing_exhibition_title_gardens',
    imgURL: gardenWebp,
    fallback: garden,
  },
  {
    key: 'illustration',
    title: 'landing_exhibition_title_illustration',
    imgURL: illustration,
    fallback: '@/assets/images/main/illustartion.jpg',
  },
  {
    key: 'permanent',
    title: 'landing_exhibition_title_permanent',
    imgURL: permanent,
    fallback: 'assets/images/main/mainHall.jpg',
  },
]

const newsNotion = [
  {
    id: 'cd213f2e-59cc-4366-a2de-ae4eab081030',
    date: '2021-08-04',
    title: 'Temporarily closed for meeting',
    description:
      'The exhibition room will be closed due to meeting of Taiwan Society of Plant Systematics from 13:00 to 15:00.\nWe are apologized for any inconvience caused.',
  },
  {
    id: 'deb80b23-9968-4ea1-a4f2-3e4376fdb544',
    date: '2021-08-09',
    title: 'Salon for Botany - Systematics and sexual system of Elatostema',
    description:
      'Systematics and sexual system of Elatostema Speaker：Dr. Yu-Hsin Tseng, Biodiversity Research Center, Academia Sinica Host：Shian-Tsan Geng, Research Assistant in IEEB, NTU Time：9/25 (Fri) 7:00-9:00 pm Location：Exhibition Hall, TAI Herbarium, NTU Registration：Start booking by google form at 12:00 Sep., 21 Special instruction for the anti-COVID-19 measures including forehead temp. checked, hand sanitized, name registration and wearing mask at all times.',
  },
  {
    id: '2abb52cd-90f9-430f-8f27-f7bfb3c7462d',
    date: '2021-08-02',
    title: 'Temporarily closed for regular fumigation',
    description:
      'The herbarium will be closed from Sep. 5 to 6 for regular fumigation. We apologize for any inconvenience caused.',
  },
]

export { exhibitionPhoto, newsNotion, slidePhoto }
