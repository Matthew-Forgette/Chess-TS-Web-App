import React from 'react'
import {
    Link
} from 'react-router-dom'

interface SingleNavLinkProps {
    key: number,
    name: string,
    path: string,
    image?: string,
    alt?: string,
    icon?: JSX.Element 
}

export const SingleNavLink = (props: React.PropsWithChildren<SingleNavLinkProps>) => {
    const { 
        name,
        path,
        image,
        alt,
        icon
    } = props

    return (
        <Link to={path}>
            {/* ternary that renders the react-icon unless an svg is needed instead */}
            {image ? (<img src={image} alt={alt} />) : icon}
        </Link>
    )
}
