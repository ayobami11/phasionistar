'use client'

import { useState, useRef } from "react";

import useSWRMutation from 'swr/mutation';

import axios from '@/app/axios';

import styles from '@/app/styles/forms.module.css';

interface RegisterFormType {
    name: string,
    phasionName: string,
    email: string,
    password: string
}

const RegisterForm = () => {

    const formRef = useRef<HTMLFormElement>(null);

    const [formDetails, setFormDetails] = useState<RegisterFormType>({
        name: '',
        phasionName: '',
        email: '',
        password: ''
    });

    const sendRequest = async (url: string, { arg }: { arg: RegisterFormType }) => {
        const response = await axios.post(url, arg);

        console.log(response);
        return response;
    }

    const { trigger } = useSWRMutation('/user/register', sendRequest);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setFormDetails({
            ...formDetails,
            [event.target.name]: event.target.value
        });
    }

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

                console.log(result);

                

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
                <label className={styles.label} htmlFor="name">Name</label>
                <input
                    className={styles.input}
                    type="text"
                    name="name"
                    id="name"
                    value={formDetails.name}
                    placeholder="John"
                    required
                    onChange={handleInputChange}
                />
            </div>
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
                <label className={styles.label} htmlFor="email">Email</label>
                <input
                    className={styles.input}
                    type="email"
                    name="email"
                    id="email"
                    value={formDetails.email}
                    placeholder="johndoe@gmail.com"
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

            <button className={styles.submitBtn} type="submit">Register</button>
        </form>
    );
}

export default RegisterForm;