import LoginForm from "@/app/components/login/LoginForm";

import styles from '@/app/styles/forms.module.css';

const Login = () => {

    return (
        <main className={styles.main}>
            <div className={styles.formWrapper}>
                <h1 className={styles.heading}>Log In</h1>

                <LoginForm />
            </div>
        </main>
    )
}

export default Login;