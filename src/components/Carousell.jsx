import { getBannerFromCMS } from '@/utils/fetchNews'

import ImageSwiper from './ImageSwiper'

const Carousell = async () => {
  const carousellImgs = await getBannerFromCMS()

  return <ImageSwiper banners={carousellImgs} />
}

export default Carousell
