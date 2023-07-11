import * as contentful from 'contentful'

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  environment: 'master',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

function newsExtractor(newsCollection) {
  if (!newsCollection) return

  const result = newsCollection
    .map(({ sys, fields }) => {
      return {
        id: sys.id,
        title: fields.title,
        category: fields.category,
        date: fields.date,
        banner: `https:${fields.banner.fields.file.url}`,
        content: fields.contentBody,
      }
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))

  console.log(result)

  return result
}

export async function getNewsFromCMS(language) {
  const data = await client
    .getEntries({ content_type: 'newsTw' })
    .then((data) => data.items)

  return newsExtractor(data)
}

export async function getBanner() {
  const data = await client.getEntries({ content_type: 'banner' })

  return data
}
