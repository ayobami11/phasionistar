'use client'

import Image from 'next/image';

import { useAppContext } from '@/app/contexts/app';

import NavLink from '@/app/components/NavLink';

import styles from '@/app/styles/hamburgerMenu.module.css';

import savedDetailsIcon from '../../../public/assets/images/icons/saved-details.svg';
import customizeDressIcon from '../../../public/assets/images/icons/customize-dress.svg';
import addCustomerIcon from '../../../public/assets/images/icons/add-customer.svg';
import measuringGuidelinesIcon from '../../../public/assets/images/icons/measuring-guidelines.svg';
import logoutIcon from '../../../public/assets/images/icons/logout.svg';

const HamburgerMenu = () => {

    const { state, dispatch } = useAppContext();

    const closeMenu = () => {
        dispatch({ type: 'CLOSE_MENU' });
    }

    return (
        <nav className={`${styles.menu} ${state.isMenuOpen ? styles.menuOpen : ''}`}>
            <ul className={styles.menuList}>
                <li
                    className={styles.menuItem}
                    onClick={closeMenu}>
                    <NavLink className={styles.menuLink} href='/dashboard/saved-details'>
                        <Image
                            src={savedDetailsIcon}
                            alt=''
                        />
                        Saved Details
                    </NavLink>
                </li>
                <li
                    className={styles.menuItem}
                    onClick={closeMenu}>
                    <NavLink className={styles.menuLink} href='/dashboard/customize-dress'>
                        <Image
                            src={customizeDressIcon}
                            alt=''
                        />
                        Customize Dress
                    </NavLink>
                </li>
                <li
                    className={styles.menuItem}
                    onClick={closeMenu}>
                    <NavLink className={styles.menuLink} href='/dashboard/add-customer'>
                        <Image
                            src={addCustomerIcon}
                            alt=''
                        />
                        Add Customer
                    </NavLink>
                </li>
                <li
                    className={styles.menuItem}
                    onClick={closeMenu}>
                    <NavLink className={styles.menuLink} href='/dashboard/measuring-guidelines'>
                        <Image
                            src={measuringGuidelinesIcon}
                            alt=''
                        />
                        Measuring Guidelines
                    </NavLink>
                </li>
                {/* <li
                    className={styles.menuItem}
                    onClick={closeMenu}>
                    <NavLink className={styles.menuLink} href='/dashboard/logout'>
                        <Image
                            src={logoutIcon}
                            alt=''
                        />
                        Log Out
                    </NavLink>
                </li> */}
            </ul>
        </nav>
    )
}

export default HamburgerMenu;