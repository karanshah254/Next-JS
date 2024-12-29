// 'use client'; // making client side component itself and its children props too like links and search

import { NavLinks } from "./nav-links"
import { NavSearch } from "./nav-search"

export const Navbar = () => {
    console.log('Navbar rendered')
    return (
        <div>
            <NavLinks />
            <NavSearch />
        </div>
    )
}