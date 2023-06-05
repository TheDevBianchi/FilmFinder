import Image from 'next/image'

function Card ({ text, url, plainText }) {
  return (
    <div className='
        flex items-center justify-start flex-col gap-4
        min-w-[150px] min-h-[300px]
        rounded-lg bg-neutral-700 pb-8
        hover:bg-neutral-900
        text-center
        overflow-hidden
        transition-all
        '
    >
      <div className='
          bg-slate-400
          min-w-full h-full flex items-center
          justify-center object-contain
          '
      >
        <Image src={url} alt={plainText} className='rounded-lg' width={333} height={300} />
      </div>
      <h3 className='font-semibold text-cyan-800 text-xl'>{text}</h3>
    </div>
  )
}

export default Card
