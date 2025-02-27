import React from 'react'
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
  return (
    <nav>

{/* ubicaciones */}

        <div className='flex justify-between items-center sm:px-12 sm:py-6 px-4 py-2'>

{/* Imagen_Logo */}


            <div>
                <img src= {Logo} alt='Logo del sitio' className='w-[100px]'/>
            </div>

{/* Enlaces (Links) como inicion, nosotros etc (cambio de colores de los mismos)*/}
         
            <div>
                <ul className='flex sm:space-x-8 space-x-4'>
                    {Navbarlinks.map((link)=>(
                        <li key={link.id}>
                            <a className='text-black sm:text-lg text-sm hover:text-sky-200 '
                             href={link.link}>
                                {link.title}
                                </a>
                        </li>
                    ))}
                </ul>
            </div>

{/* Enlaces de redes como instagram, tiktok, etc */}


            <div>
                <ul>
                {NavbarRedes.map((link)=>(
                        <li key={link.id}>
                            <a href={link.link}>
                                <i
                                 className={`${link.icon}`}
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