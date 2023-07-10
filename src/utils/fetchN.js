import * as contentful from 'contentful'

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  environment: 'master',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

console.log(process.env.CONTENTFUL_ACCESS_TOKEN)

export async function getN() {
  const data = await client
    .getEntries({ content_type: 'newsTw' })
    .then((data) => data.items)

  return data
}

export async function getBanner() {
  const data = await client.getEntries({ content_type: 'banner' })

  return data
}
