import styles from '@/app/dashboard/add-customer/addCustomer.module.css';

import SavedDetailsForm from '@/app/components/saved-details/SavedDetailsForm';

const AddCustomer = () => {
    return (
        <main className={styles.main}>
            <div className={styles.formWrapper}>
                <h2>New Customers</h2>
                <p>Add new customers below:</p>

                <SavedDetailsForm />
            </div>
        </main>
    )

}

export default AddCustomer;