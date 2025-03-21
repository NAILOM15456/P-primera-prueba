import React, {useState} from 'react'
import Logo from '../../Assets/Logo.png'

const Navbarlinks = [
    {
        id:1,
        title:"Inicio",
        link:"/"
    }, 

    {
        id:2,
        title:"Nosotros",
        epale:"#"

    }, 

    {
        id:3,
        title:"Contacto",
        link:"#"
    }, 

    {
        id:4,
        title:"Soporte",
        link:"#"
    }, 


]

const NavbarRedes = [
    {
        id:1,
        title:"Instagram",
        link:"https://www.instagram.com",
        icon: 'bi bi-instagram'
    }, 
    
    {
        id:2,
        title:"Tiktok",
        link:"https://www.tiktok.com",
        icon: 'bi bi-tiktok'
    }, 
  ]

const Navbar = () => {

    const [isOpen, setIsOpen] = useState (false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
    <nav>

{/* ubicaciones */}

        <div className='flex justify-between items-center sm:px-12 sm:py-6 px-4 py-2'>

{/* Imagen_Logo */}


            <div>
                <img src= {Logo} alt='Logo del sitio' className='w-[100px]'/>
            </div>

{/* boton de hamburguesa (android) */}
            <button onClick={toggleMenu} className='md:hidden text-black'>
                <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                >
                
                {isOpen ? (
                <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"/>): 
                (                 
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                    />)}




            

                </svg>
            </button>


{/* NAVEGACION Enlaces (Links) como inicion, nosotros etc (cambio de colores de los mismos)*/}
         
            <div className='hidden md:block'>
                <ul className='flex sm:space-x-8 space-x-4'>
                    {Navbarlinks.map((link)=>(
                        <li key={link.id}>
                            <a className='text-black sm:text-lg text-sm hover:text-sky-200 transition-transform hover:scale-110 transform inline-block decoration-blue-300 '
                             href={link.link}>
                                {link.title}
                                </a>
                        </li>
                    ))}
                </ul>
            </div>

{/* Enlaces de redes como instagram, tiktok, etc */}


            <div className='hidden md:block'>
                <ul className='flex space-x-4'>
                {NavbarRedes.map((link)=>(
                        <li key={link.id}>
                            <a 
                            target='_black'
                            rel='noopener noreferrer'
                            className='inline-block transition-transform duration-300 transform hover:scale-125'
                            href={link.link}>
                                <i
                                 className={`${link.icon} sm:text-2xl text-lg text-black hover:text-sky-200 transition-all duration-300 `}
                                >

                                </i>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>


        </div>
    </nav>
  )
}

export default Navbar