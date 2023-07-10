import PostPeekerButton from './PostPeekerButton'

const PostPeeker = ({ prev, next }) => {
  return (
    <nav className='grid grid-cols-2 not-prose gap-4 sm:gap-8'>
      {prev ? <PostPeekerButton title={prev.title} postId={prev.id} /> : <div />}
      {next ? <PostPeekerButton title={next.title} postId={next.id} isNext /> : <div />}
    </nav>
  )
}
export default PostPeeker
