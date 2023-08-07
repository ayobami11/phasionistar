'use client'

import { useState, useRef } from 'react';

import useSWRMutation from 'swr/mutation';

import { SavedDetailsType } from '@/app/reducers/savedDetails';

import axios from '@/app/axios';

import styles from '@/app/dashboard/add-customer/addCustomer.module.css';

import FormStepOne from '@/app/components/add-customer/FormStepOne';
import FormStepTwo from '@/app/components/add-customer/FormStepTwo';
import FormStepThree from '@/app/components/add-customer/FormStepThree';

const initialCustomerDetails: SavedDetailsType = {
    ownerName: '',
    contact: '',
    location: '',
    price: '',
    deposit: '',
    deliveryDate: '',
    measurements: '',
    leg: '',
    neck: '',
    waist: '',
    shoulder: '',
    arm: '',
    chest: '',
    bicep: '',
    wrist: '',
    back: '',
    stomach: '',
    hip: '',
    thigh: '',
    clothImages: null
}

const AddCustomerForm = () => {

    const formRef = useRef<HTMLFormElement>(null);

    const [currentStep, setCurrentStep] = useState<number>(0);

    const [customerDetails, setCustomerDetails] = useState<SavedDetailsType>(initialCustomerDetails);

    const handlePrevBtn = () => {
        setCurrentStep(step => step - 1);
    }

    const handleNextBtn = () => {
        if (validateFormInputs()) {
            setCurrentStep(step => step + 1);
        } else {
            formRef.current?.reportValidity();
        }
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setCustomerDetails({
            ...customerDetails,
            [event.target.name]: event.target.value
        });
    }

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        setCustomerDetails({
            ...customerDetails,
            [event.target.name]: event.target.value
        });
    }

    const validateFormInputs = () => {
        const currentFormInputs = document.getElementsByClassName('form-input') as unknown as HTMLInputElement[];

        const areInputsValid = [...currentFormInputs].every(input => input.validity.valid && input.value);

        return areInputsValid;
    }

    const sendRequest = async (url: string, { arg }: { arg: FormData }) => {
        const response = await axios.post(url, arg);

        console.log(response);
        return response;
    }

    const { trigger, isMutating } = useSWRMutation('/cloth', sendRequest);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        const formData = new FormData();

        for (const [key, value] of Object.entries(customerDetails)) {
            formData.append(key, value);
        }


        trigger(formData);
    }

    const getCurrentStep = (step: number) => {
        switch (step) {
            case 0:
                return <FormStepOne
                    customerDetails={customerDetails}
                    handleInputChange={handleInputChange}
                />
            case 1:
                return <FormStepTwo
                    customerDetails={customerDetails}
                    handleInputChange={handleInputChange}
                    handleSelectChange={handleSelectChange}
                />
            case 2:
                return <FormStepThree
                    clothImages={customerDetails.clothImages}
                    setCustomerDetails={setCustomerDetails}
                />
            default:
                return <FormStepOne
                    customerDetails={customerDetails}
                    handleInputChange={handleInputChange}
                />
        }
    }

    return (
        <form method="POST" onSubmit={handleSubmit} ref={formRef}>
            {getCurrentStep(currentStep)}

            <div className={styles.formBtns}>
                {currentStep > 0 && <button className={styles.btn} onClick={handlePrevBtn} type='button'>Back</button>}
                {currentStep < 2 ?
                    <button className={styles.btn} onClick={handleNextBtn} type='button'>Next</button> :
                    <button className={styles.btn} type='submit' disabled={isMutating}>Add</button>
                }
            </div>
        </form>
    )
}

export default AddCustomerForm;