import Image from 'next/image';

import neckIcon from '../../../../public/assets/images/icons/neck.svg';
import chestIcon from '../../../../public/assets/images/icons/chest.svg';
import shoulderIcon from '../../../../public/assets/images/icons/shoulder.svg';
import armIcon from '../../../../public/assets/images/icons/arm.svg';

import styles from '@/app/dashboard/measuring-guidelines/measuringGuidelines.module.css';

const MeasuringGuidelinesPage = () => {
    return (
        <section className={styles.section}>
            <header>
                <h2>Measuring Guidelines</h2>
                <p>How to carefully take your measurements:</p>
            </header>
            <ul className={styles.articleList}>
                <li>

                    <article className={styles.article}>
                        <figure>
                            <Image
                                src={neckIcon}
                                alt='Neck icon'
                            />
                            <figcaption>
                                <h3>Neck Circumference</h3>
                            </figcaption>
                        </figure>
                        <p>
                            Measure the circumference around your neck, with the tape slightly beneath Adam&rsquo;s apple, making sure not
                            to pull the tape measure tight. Don&rsquo;t strech your neck and don&rsquo;t draw your chin downwards, stand
                            relaxed.
                        </p>
                    </article>
                </li>
                <li>
                    <article className={styles.article}>
                        <figure>
                            <Image
                                src={chestIcon}
                                alt='Chest icon'
                            />
                            <figcaption>
                                <h3>Chest Circumference</h3>
                            </figcaption>
                        </figure>
                        <p>
                            Measure the circumference around your neck, with the tape slightly beneath Adam&rsquo;s apple, making sure not
                            to pull the tape measure tight. Don&rsquo;t strech your neck and don&rsquo;t draw your chin downwards, stand
                            relaxed.
                        </p>
                    </article>
                </li>
                <li>
                    <article className={styles.article}>
                        <figure>
                            <Image
                                src={shoulderIcon}
                                alt='Shoulder icon'
                            />
                            <figcaption>
                                <h3>Shoulder Width</h3>
                            </figcaption>
                        </figure>
                        <p>
                            Measure the circumference around your neck, with the tape slightly beneath Adam&rsquo;s apple, making sure not
                            to pull the tape measure tight. Don&rsquo;t strech your neck and don&rsquo;t draw your chin downwards, stand
                            relaxed.
                        </p>
                    </article>
                </li>
                <li>
                    <article className={styles.article}>
                        <figure>
                            <Image
                                src={armIcon}
                                alt=''
                            />
                            <figcaption>
                                <h3>Arm Length</h3>
                            </figcaption>
                        </figure>
                        <p>
                            Measure the circumference around your neck, with the tape slightly beneath Adam&rsquo;s apple, making sure not
                            to pull the tape measure tight. Don&rsquo;t strech your neck and don&rsquo;t draw your chin downwards, stand
                            relaxed.
                        </p>
                    </article>
                </li>
            </ul>
        </section>
    )
}

export default MeasuringGuidelinesPage