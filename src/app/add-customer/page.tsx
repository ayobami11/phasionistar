import styles from './addCustomer.module.css';

import AddCustomerForm from "../components/add-customer/AddCustomerForm";

const AddCustomer = () => {
    return (
        <main className={styles.main}>
            <div className={styles.formWrapper}>
                <h2>New Customers</h2>
                <p>Add new customers below:</p>

                <AddCustomerForm />
            </div>
        </main>
    )

}

export default AddCustomer;