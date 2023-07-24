'server only'

import * as contentful from 'contentful'

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  environment: 'master',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

function newsExtractor(news) {
  if (!news) return

  const result = news
    .map(({ sys, fields }) => {
      return {
        id: sys.id,
        title: fields.title,
        category: fields.category,
        date: fields.date,
        banner: `https:${fields?.banner?.fields?.file?.url}`,
        content: fields.contentBody,
      }
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))

  console.log(result)

  return result
}

export async function getNewsFromCMS() {
  const data = await client
    .getEntries({ content_type: 'newsTw' })
    .then((data) => newsExtractor(data.items))

  // const imageUrls = data.map((news) => news.banner)

  // const texts = await Promise.allSettled(
  //   imageUrls.map(async (url) => {
  //     const resp = await fetchImage(url)
  //     return resp
  //   }),
  // )

  // console.log(texts)

  return data
}

function bannersExtractor(banners) {
  if (!banners) return

  const result = banners.map(({ sys, fields }) => {
    return {
      id: sys.id,
      title: fields.title,
      author: fields.author,
      authorUrl: fields.authorUrl,
      image: `https:${fields.image.fields.file.url}`,
    }
  })

  return result
}

export async function getBannerFromCMS() {
  const data = await client
    .getEntries({ content_type: 'banner' })
    .then((data) => data.items)

  return bannersExtractor(data)
}
