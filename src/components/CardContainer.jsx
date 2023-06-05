function CardContainer ({ children }) {
  return (
    <section className='grid grid-cols-1 gap-12 md:grid-cols-5 px-12'>
      {children}
    </section>
  )
}

export default CardContainer
