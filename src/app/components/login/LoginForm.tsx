'use client'

import { useState, useRef } from 'react';

import useSWRMutation from 'swr/mutation';

import { useRouter } from 'next/navigation';

import axios from '@/app/axios';

import styles from '@/app/styles/forms.module.css';

interface LoginFormType {
    phasionName: string,
    password: string
}

const LoginForm = () => {

    const router = useRouter();

    const formRef = useRef<HTMLFormElement>(null);

    const [formDetails, setFormDetails] = useState<LoginFormType>({
        phasionName: '',
        password: ''
    });
    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setFormDetails({
            ...formDetails,
            [event.target.name]: event.target.value
        });
    }

    const sendRequest = async (url: string, { arg }: { arg: LoginFormType }) => {
        const response = await axios.post(url, arg);

        console.log(response);
        return response;
    }

    const { trigger, isMutating } = useSWRMutation('/user/login', sendRequest);

    const validateFormDetails = () => {

        for (const [name, value] of Object.entries(formDetails)) {
            const trimmedValue = value.trim();

            if (trimmedValue.length === 0) {
                return false;
            }

            if (name === 'password' && trimmedValue.length < 8) {
                return false;
            }
        }

        return true;
    }
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {

        event.preventDefault();

        const submitFormData = async () => {
            try {
                const result = await trigger(formDetails);

                if (result.status === 200) {
                    router.push('/dashboard');
                }

            } catch (error) {
                console.log(error);
            }

        }

        if (validateFormDetails()) {
            submitFormData();
        } else {
            formRef.current?.reportValidity();
        }

    }

    return (
        <form className={styles.form} onSubmit={handleSubmit} ref={formRef}>
            <div className={styles.inputWrapper}>
                <label className={styles.label} htmlFor="phasion-name">Phasion name</label>
                <input
                    className={styles.input}
                    type="text"
                    name="phasionName"
                    id="phasion-name"
                    value={formDetails.phasionName}
                    placeholder="Johnny"
                    required
                    onChange={handleInputChange}
                />
            </div>
            <div className={styles.inputWrapper}>
                <label className={styles.label} htmlFor="password">Password</label>
                <input
                    className={styles.input}
                    type="password"
                    name="password"
                    id="password"
                    value={formDetails.password}
                    minLength={8}
                    required
                    onChange={handleInputChange}
                />
            </div>

            <button className={styles.submitBtn} type="submit" disabled={isMutating}>Log In</button>
        </form>
    )
}

export default LoginForm;