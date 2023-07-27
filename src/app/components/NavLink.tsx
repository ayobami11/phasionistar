'use client'

import React, { HTMLProps } from 'react';

import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';


const NavLink: React.FC<LinkProps & HTMLProps<HTMLAnchorElement>> = ({ href, className, children }) => {

    const pathname = usePathname();

    return (
        <Link
            className={`${className || ''} ${href === pathname ? 'activeLink' : ''}`}
            href={href}>
            {children}
        </Link>
    )
}

export default NavLink;