'use client'

import { useState } from 'react'

function Search () {
  const [inputValue, setInputValue] = useState('')
  // const [data, setData] = useState([])
  const searchURL = `http://www.omdbapi.com/?apikey=5bc52a3a&t=${inputValue}&page=5`

  // const fetchData = async (url) => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData()
  //       console.log(data)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }

  // useEffect(() => {
  //   fetchData(searchURL)
  // }, [searchURL])

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleClick = () => {
    fetchData(searchURL)
  }

  return (
    <div className='flex items-center justify-between mt-8'>
      <div className='flex items-center m-auto'>
        <input type='text' placeholder='Search...' onChange={handleChange} className='py-2 px-2 bg-slate-500 rounded-tl-2xl rounded-bl-2xl' />
        <button onClick={handleClick} className='py-2 px-2 rounded-tr-2xl rounded-br-2xl bg-slate-500'>Search</button>
      </div>
    </div>
  )
}

export default Search
