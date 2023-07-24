import { SetStateAction, useRef } from "react";

import { CustomerDetailsType } from "./AddCustomerForm";

import styles from '@/app/add-customer/addCustomer.module.css';

interface FormStepThreeType {
    clothImages: File | null,
    setCustomerDetails: React.Dispatch<SetStateAction<CustomerDetailsType>>,
}

const FormStepThree = ({ clothImages, setCustomerDetails }: FormStepThreeType) => {

    const fileRef = useRef<HTMLInputElement>(null);

    const removeFileInput = (): void => {

        setCustomerDetails((prevState) => ({
            ...prevState,
            clothImages: null
        }));

    }

    const getFileSize = (bytes: number): string => {
        if (bytes >= 1024 ** 2) {
            return `${(bytes / 1048576).toFixed(2)} MB`;
        } else if (bytes >= 1024) {
            return `${(bytes / 1024).toFixed(2)} KB`;
        } else {
            return `${bytes} bytes`;
        }
    }

    const validFileType = (type: string): boolean => {

        const validFileTypes = ['image/jpeg', 'image/png', 'image/webp'];

        const isFileValid = validFileTypes.includes(type);

        return isFileValid;
    }

    const validateFileInput = (file: File) => {

        if (file && fileRef.current) {
            if (file.size >= (1024 ** 2) * 10) {
                fileRef.current?.setCustomValidity('File size is too large.');

                fileRef.current?.reportValidity();

                fileRef.current.value = null as unknown as string;

                return false;
            }

            if (!validFileType(file.type)) {
                fileRef.current?.setCustomValidity('Invalid file type.');

                fileRef.current?.reportValidity();

                fileRef.current.value = null as unknown as string;

                return false;
            }

            return true;
        }

    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {

        const file = event.target.files?.[0];

        if (file && validateFileInput(file)) {
            setCustomerDetails((prevState) => ({
                ...prevState,
                [event.target.name]: file
            }));
        }
    }

    return (
        <div className={styles.stepThreeInputs}>
            {clothImages && (
                <p>
                    <small>
                        File name: {clothImages.name} <br />
                        File size: {getFileSize(clothImages.size)}
                    </small>
                </p>
            )}

            {clothImages ? (
                <button type="button" className={styles.btn} onClick={removeFileInput}>Remove file</button>
            ) : (
                <div className={styles.inputWrapper}>
                    <label className={styles.label} htmlFor="cloth-image">Choose cloth image</label>
                    <input
                        ref={fileRef}
                        className="form-input"
                        type="file"
                        name="clothImages"
                        id="cloth-image"
                        accept=".jpg,.png,.webp"
                        required
                        onChange={handleFileChange}
                    />
                    <p>
                        <strong>
                            <small>
                                Valid file types: .jpg, .png, .webp<br />
                                Maximum size: 10MB
                            </small>
                        </strong>
                    </p>
                </div>
            )}

        </div>
    )
}

export default FormStepThree;