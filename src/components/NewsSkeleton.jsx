const NewsSkeletonItem = () => (
  <div className='relative flex w-full animate-pulse flex-col py-6 pl-6 sm:flex-row sm:pl-4 '>
    <div className='relative mb-4 w-28 sm:mb-0 md:w-32'>
      <div className='h-4 w-3/4 rounded bg-gray-300' />
    </div>
    <div className='relative w-full pr-2'>
      <div className='flex-1 space-y-4 py-1'>
        <div className='h-4 w-10/12 rounded bg-gray-300' />
        <div className='h-4 rounded bg-gray-300' />
      </div>
    </div>
  </div>
)

const HorizontalLine = () => <div className='h-px w-full bg-brown opacity-20' />

const NewsSkeleton = ({ number = 10 }) => {
  return (
    <>
      <HorizontalLine />
      <div className='divide-y divide-brown divide-opacity-20'>
        {[...Array(number)].map((i, k) => {
          return <NewsSkeletonItem key={k} />
        })}
      </div>
      <HorizontalLine />
    </>
  )
}

export default NewsSkeleton
