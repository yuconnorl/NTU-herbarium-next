const NewsAccordion = ({ id, title, isExpandable, children }) => {
  return (
    <div className='accordion'>
      <input type='checkbox' id={id} className='accordion-toggle' />
      <label htmlFor={id} className='accordion-title'>
        {title}
      </label>
      {isExpandable && (
        <div className='relative flex h-5 w-5 items-center'>
          <span className='h-[1px] w-5 border-t-[1px] border-black' />
          <span
            className={`accordion-icon absolute h-[1px] w-[1.16rem] border-t-[1px] border-black duration-200`}
          />
        </div>
      )}
      <div className='accordion-content text-content2'>
        <div className='min-h-0'>{children}</div>
      </div>
    </div>
  )
}

export default NewsAccordion
