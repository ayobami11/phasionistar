'use client'

import { useAppContext } from '@/app/contexts/app';

import styles from '@/app/styles/hamburgerButton.module.css';

const HamburgerButton = () => {

    const { state, dispatch } = useAppContext();

    const toggleHamBtn = () => {
        state.isMenuOpen ?
            dispatch({ type: 'CLOSE_MENU' }) :
            dispatch({ type: 'OPEN_MENU' });
    }

    return (
        <button
            className={`${styles.hamBtn} ${state.isMenuOpen ? styles.menuOpen : ''}`}
            onClick={toggleHamBtn}
        >
            <span className={styles.hamLine}></span>
            <span className={styles.hamLine}></span>
            <span className={styles.hamLine}></span>
        </button>
    )
}

export default HamburgerButton;