import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const RichText = ({ content }) => {
  const options = {}

  return (
    <article className='mb-40'>{documentToReactComponents(content, options)}</article>
  )
}

export default RichText
