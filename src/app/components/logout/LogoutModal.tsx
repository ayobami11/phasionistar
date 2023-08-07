'use client'

import { useEffect, useRef } from 'react';

import { useRouter } from 'next/navigation';

import useSWRMutation from 'swr/mutation';

import { useAppContext } from '@/app/contexts/app';

import axios from '@/app/axios';

import styles from '@/app/styles/dashboard/logoutModal.module.css';

const LogoutModal = () => {

    const { state, dispatch } = useAppContext();

    const router = useRouter();

    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        state.showLogoutModal ?
            dialogRef.current?.showModal() :
            dialogRef.current?.close();

    }, [state.showLogoutModal]);

    const hideModal = () => {
        dispatch({ type: 'HIDE_LOGOUT_MODAL' });
    }

    const sendRequest = async (url: string) => {
        const response = await axios.post(url);

        console.log(response);
        return response;
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {

        event.preventDefault();

        const submitFormData = async () => {
            try {
                const result = await trigger();

                if (result.status === 200) {
                    router.push('/');
                }

            } catch (error) {
                console.log(error);
            }

        }

        submitFormData();
    }

    const { trigger, isMutating } = useSWRMutation('/user/logout', sendRequest);

    return (
        <dialog ref={dialogRef} className={styles.dialog}>
            <form method='dialog' onSubmit={handleSubmit}>
                <h2>Log Out</h2>
                <p>Leave This Site?</p>
                <menu className={styles.menu}>
                    <li>
                        <button className={styles.leaveBtn} type='submit' disabled={isMutating}>Leave</button>
                    </li>
                    <li>
                        <button className={styles.stayBtn} type='button' onClick={hideModal}>Stay</button>
                    </li>
                </menu>
            </form>
        </dialog>
    )
}

export default LogoutModal