import RegisterForm from '@/app/components/register/RegisterForm';

import styles from '@/app/styles/forms.module.css';

const Register = () => {

    return (
        <main className={styles.main}>
            <div className={styles.formWrapper}>
                <h1 className={styles.heading}>Register</h1>

                <RegisterForm />
            </div>
        </main>
    )
}

export default Register;