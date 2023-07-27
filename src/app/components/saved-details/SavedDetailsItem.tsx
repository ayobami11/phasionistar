import Image from 'next/image';

import type { SavedDetailsType } from '@/app/reducers/savedDetails';

import styles from '@/app/styles/saved-details/savedDetailsItem.module.css';


const SavedDetailsItem = ({ customer }: { customer: SavedDetailsType }) => {
    return (
        <li className={styles.item}>
            <article className={styles.article}>
                <Image
                    className={styles.img}
                    src='/assets/images/person.png'
                    alt={customer.ownerName}
                    height={62}
                    width={62}
                />
                <div className={styles.textWrapper}>
                    <div className={styles.middle}>
                        <h2 className={styles.name}>{customer.ownerName}</h2>
                        <p className={styles.location}>{customer.location}</p>
                    </div>
                    <div className={styles.right}>
                        <span className={`${styles.status} ${styles.statusSaved}`}>Saved</span>
                        <time className={styles.date}>08:20</time>
                    </div>
                </div>
            </article>
        </li>
    )
}

export default SavedDetailsItem