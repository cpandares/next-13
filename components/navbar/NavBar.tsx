import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from ".."



const navItems = [
    
    {
        path: '/about',
        label: 'About',

    },
    {
        path: '/pricing',
        label: 'Pricing',

    },
    {
        path: '/contact',
        label: 'Contact',

    },
]

export const NavBar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
        <Link href='/'>
            <HomeIcon size={24} className="mr-2 flex items-center" />
            <span>Home</span>
        </Link>

        <div className="flex flex-1">
        </div>

        {
            navItems.map(({ path, label }) => (
               <ActiveLink key={path} path={path} label={label} />
            ))
        }

       {/*  <Link href="/about" className="mr-2">About</Link>
        <Link href="/pricing" className="mr-2">Pricing</Link>
        <Link href="/contact" className="mr-2">Contact</Link> */}
    </nav>
  )
}
