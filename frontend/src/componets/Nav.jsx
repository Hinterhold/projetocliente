import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className='mx-auto flex justify-between items-center '>
        <img/>
        <ul className='flex space-x-4'>
          <li className='list-none'>
            <Link to= "/" className='hover:text-amber-300 transition-colors duration-300 uppercase'>Home</Link>
          </li>
          <li>
            <Link to= "/cliente" className='hover:text-amber-300 transition-colors duration-300 uppercase'>Cliente</Link>
          </li>
        </ul>
      </nav>
    </header>

  )
}

export default Nav