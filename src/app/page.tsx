'use client'

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import {GrFormPreviousLink, GrFormNextLink} from 'react-icons/gr';

import onboardingImage from '../../public/assets/images/onboarding-image.png';

import styles from './page.module.css';


export default function Home() {
  const [onboardingPage, setOnboardingPage] = useState<1 | 2>(1);

  return (
    <main>
      {
        onboardingPage === 2 ?
          (
            <button className={styles.backBtn} onClick={() => setOnboardingPage(1)}>
              <GrFormPreviousLink />
            </button>
          ) : null
      }

      <section className={styles.onboardingSection}>
        <Image className={styles.onboardingImg} src={onboardingImage} alt='Tailoring material' />
        <div className={styles.onboaringText}>
          <>
            {
              onboardingPage === 1 ? (
                <>
                  <h2 className={styles.onboardingHeading}>Record Your Information</h2>
                  <p>This app enables you to keep record of your body details. It can be adjusted, saved and shared to others.</p>

                  <nav className={styles.onboardingNav}>
                    <button className={`btn ${styles.nextBtn}`} onClick={() => setOnboardingPage(2)}>
                      Next
                      <GrFormNextLink />
                    </button>
                  </nav>
                </>
              ) : (
                <>
                  <h2 className={styles.onboardingHeading}>Data Protection and Privacy</h2>
                  <p>Your privacy is our priority. We adhere to strict data protection regulations and ensure that your personal information is secure.</p>

                  <nav className={styles.onboardingNav}>
                    <Link className={`btn ${styles.onboardingLink}`} href='/register'>Register</Link>
                    <Link className={styles.onboardingLink} href='/login'>Log in</Link>
                  </nav>
                </>
              )
            }
          </>
        </div>
      </section>
    </main>
  )
}
