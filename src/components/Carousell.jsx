import { getBannerFromCMS } from '@/utils/fetchNews'

import ImageSwiper from './ImageSwiper'

const Carousell = async () => {
  const carousellImgs = await getBannerFromCMS()

  return <ImageSwiper banners={carousellImgs}></ImageSwiper>
}

export default Carousell
