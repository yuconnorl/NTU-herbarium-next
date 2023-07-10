import * as contentful from 'contentful'

const client = contentful.createClient({
  space: 'ef0ikbvdw8su',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'bnFJF58wEotJ5OhkP_YdjnoQUVEUk84JSqesWqPsd8A',
})

export async function getN() {
  // const data = await client.getEntry('3XBNkxBYODfr8xMrSfnazS').then((data) => data.fields)
  const data2 = await client
    .getEntries({ content_type: 'newsTw' })
    .then((data) => data.items)

  return data2
}

export async function getBanner() {
  const data = await client.getEntries({ content_type: 'banner' })

  return data
}
