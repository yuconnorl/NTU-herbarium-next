export const fetcher = (url) => fetch(url, { method: 'POST' }).then((res) => res.json())

export function newsExtractor(newsCollection) {
  if (!newsCollection) return

  const result = newsCollection.map(({ sys, fields }) => {
    return {
      id: sys.id,
      title: fields.title,
      category: fields.category,
      date: fields.date,
      banner: `https:${fields.banner.fields.file.url}`,
      content: fields.contentBody,
    }
  })

  return result
}
