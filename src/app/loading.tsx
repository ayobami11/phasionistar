import Image from "next/image";

import logo from '../../public/logo.svg';

import styles from './loading.module.css';

const Loading = () => {
    return (
        <figure className={styles.splashScreen}>
            <Image src={logo} alt='Phasionistar logo' />
            <figcaption>Phasionistar</figcaption>
        </figure>
    );
}

export default Loading;