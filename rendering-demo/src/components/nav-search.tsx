'use client' // as onlt search input needs state so we are making it client side component
import { useState } from "react"

export const NavSearch = () => {
    console.log('NavSearch rendered')
    const [search, setSearch] = useState('')
    return (
        <div>
            Nav Search input
        </div>
    )
}