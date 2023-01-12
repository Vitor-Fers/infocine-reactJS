import { Link, useNavigate } from 'react-router-dom'
import { BiSearchAlt2} from 'react-icons/bi'
import { useState } from 'react'

import './Navbar.scss'

export default function Navbar() {
  const titleName = 'InfoCine<BR>'

  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(search)

    if(!search) return

    navigate(`/search?q=${search}`)
    setSearch(" ")
  }

  return (
    <nav id="navbar">
        <h2>
          <Link to="/">
            {titleName}
            </Link>
        </h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Busque um filme' onChange={(e) => setSearch(e.target.value)} value={search}
            />
            <button type='submit'>
                <BiSearchAlt2 />
            </button>
        </form>
      </nav>
  )
}
