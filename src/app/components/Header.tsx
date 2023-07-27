import HamburgerButton from '@/app/components/HamburgerButton';
import HamburgerMenu from '@/app/components/HamburgerMenu';

import styles from '@/app/styles/header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
          <h1>Phasionister</h1>

          <HamburgerButton />

          <HamburgerMenu />
    </header>
  )
}

export default Header