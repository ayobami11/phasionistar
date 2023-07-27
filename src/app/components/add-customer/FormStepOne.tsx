import { CustomerDetailsType } from '@/app/reducers/savedDetails';

import styles from '@/app/add-customer/addCustomer.module.css';

interface FormStepOneType {
    customerDetails: CustomerDetailsType,
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const formatDateString = () => {
    const currentDate = new Date();

    const date = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    return `${year.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${date.toString().padStart(2, '0')}`;
}

const FormStepOne = ({ customerDetails, handleInputChange }: FormStepOneType) => {
    return (
        <div className={styles.stepOneInputs}>
            <div className={styles.inputWrapper}>
                <label className={styles.label} htmlFor="full-name">Full name</label>
                <input
                    className={`form-input ${styles.input}`}
                    type="text"
                    name="ownerName"
                    id="full-name"
                    value={customerDetails.ownerName}
                    placeholder="John Doe"
                    required
                    onChange={handleInputChange}
                />
            </div>
            <div className={styles.inputWrapper}>
                <label className={styles.label} htmlFor="contact">Contact</label>
                <input
                    className={`form-input ${styles.input}`}
                    type="tel"
                    name="contact"
                    id="contact"
                    value={customerDetails.contact}
                    placeholder="09012345678"
                    required
                    pattern="[0-9]{10,11}"
                    onChange={handleInputChange}
                    title='Format: 09012345678'
                />
            </div>
            <div className={styles.inputWrapper}>
                <label className={styles.label} htmlFor="location">Location</label>
                <input
                    className={`form-input ${styles.input}`}
                    type="text"
                    name="location"
                    id="location"
                    value={customerDetails.location}
                    placeholder="Address/Online"
                    required
                    onChange={handleInputChange}
                />
            </div>
            <div className={styles.inputWrapper}>
                <label className={styles.label} htmlFor="price">Recent price</label>
                <input
                    className={`form-input ${styles.input}`}
                    type="number"
                    name="price"
                    id="price"
                    min={0}
                    value={customerDetails.price}
                    required
                    onChange={handleInputChange}
                />
            </div>
            <div className={styles.inputWrapper}>
                <label className={styles.label} htmlFor="deposit">Amount deposited</label>
                <input
                    className={`form-input ${styles.input}`}
                    type="number"
                    name="deposit"
                    id="deposit"
                    min={0}
                    value={customerDetails.deposit}
                    required
                    onChange={handleInputChange}
                />
            </div>
            <div className={styles.inputWrapper}>
                <label className={styles.label} htmlFor="delivery-date">Delivery date</label>
                <input
                    className={`form-input ${styles.input}`}
                    type="date"
                    name="deliveryDate"
                    id="delivery-date"
                    value={customerDetails.deliveryDate}
                    min={formatDateString()}
                    required
                    onChange={handleInputChange}
                />
            </div>
        </div>
    )
}

export default FormStepOne;