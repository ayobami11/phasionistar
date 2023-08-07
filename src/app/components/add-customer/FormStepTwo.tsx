import { SavedDetailsType } from '@/app/reducers/savedDetails';

import styles from '@/app/dashboard/add-customer/addCustomer.module.css';

interface FormStepTwoType {
    customerDetails: SavedDetailsType,
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

// only allow decimal numbers
const decimalNumberPattern = '([0-9]*[.])?[0-9]+';

const FormStepTwo = ({ customerDetails, handleInputChange, handleSelectChange }: FormStepTwoType) => {
    return (
        <div className={styles.stepTwoInputs}>
            <div className={styles.inputWrapper}>
                <label className={styles.label} htmlFor="measurements">Select measurements in:</label>
                <select
                    className={`form-input ${styles.input}`}
                    name="measurements"
                    id="measurements"
                    value={customerDetails.measurements}
                    required
                    onChange={handleSelectChange}>
                    <option value="" disabled>Please select a value</option>
                    <option value="inches">Inches</option>
                    <option value="centimeter">Centimetres</option>
                </select>
            </div>
            <div className={styles.inputWrapper}>
                <label className={styles.label} htmlFor="leg">Inside leg</label>
                <input
                    className={`form-input ${styles.input}`}
                    type="number"
                    name="leg"
                    id="leg"
                    value={customerDetails.leg}
                    min={0}
                    pattern={decimalNumberPattern}
                    required
                    onChange={handleInputChange}
                />
            </div>
            <div className={styles.inputWrapper}>
                <label className={styles.label} htmlFor="neck">Neck</label>
                <input
                    className={`form-input ${styles.input}`}
                    type="number"
                    name="neck"
                    id="neck"
                    value={customerDetails.neck}
                    min={0}
                    pattern={decimalNumberPattern}
                    required
                    onChange={handleInputChange}
                />
            </div>
            <div className={styles.inputWrapper}>
                <label className={styles.label} htmlFor="waistline">Waistline</label>
                <input
                    className={`form-input ${styles.input}`}
                    type="number"
                    name="waist"
                    id="waistline"
                    value={customerDetails.waist}
                    min={0}
                    pattern={decimalNumberPattern}
                    required
                    onChange={handleInputChange}
                />
            </div>
            <div className={styles.inputWrapper}>
                <label className={styles.label} htmlFor="shoulder-width">Shoulder width</label>
                <input
                    className={`form-input ${styles.input}`}
                    type="number"
                    name="shoulder"
                    id="shoulder-width"
                    value={customerDetails.shoulder}
                    min={0}
                    pattern={decimalNumberPattern}
                    required
                    onChange={handleInputChange}
                />
            </div>
            <div className={styles.inputWrapper}>
                <label className={styles.label} htmlFor="arm-length">Arm length</label>
                <input
                    className={`form-input ${styles.input}`}
                    type="number"
                    name="arm"
                    id="arm-length"
                    value={customerDetails.arm}
                    min={0}
                    pattern={decimalNumberPattern}
                    required
                    onChange={handleInputChange}
                />
            </div>
            <div className={styles.inputWrapper}>
                <label className={styles.label} htmlFor="chest">Chest</label>
                <input
                    className={`form-input ${styles.input}`}
                    type="number"
                    name="chest"
                    id="chest"
                    value={customerDetails.chest}
                    min={0}
                    pattern={decimalNumberPattern}
                    required
                    onChange={handleInputChange}
                />
            </div>
            <div className={styles.inputWrapper}>
                <label className={styles.label} htmlFor="bicep">Bicep</label>
                <input
                    className={`form-input ${styles.input}`}
                    type="number"
                    name="bicep"
                    id="bicep"
                    value={customerDetails.bicep}
                    min={0}
                    pattern={decimalNumberPattern}
                    required
                    onChange={handleInputChange}
                />
            </div>
            <div className={styles.inputWrapper}>
                <label className={styles.label} htmlFor="wrist">Wrist</label>
                <input
                    className={`form-input ${styles.input}`}
                    type="number"
                    name="wrist"
                    id="wrist"
                    value={customerDetails.wrist}
                    min={0}
                    pattern={decimalNumberPattern}
                    required
                    onChange={handleInputChange}
                />
            </div>
            <div className={styles.inputWrapper}>
                <label className={styles.label} htmlFor="back-length">Back length</label>
                <input
                    className={`form-input ${styles.input}`}
                    type="number"
                    name="back"
                    id="back-length"
                    value={customerDetails.back}
                    min={0}
                    pattern={decimalNumberPattern}
                    required
                    onChange={handleInputChange}
                />
            </div>
            <div className={styles.inputWrapper}>
                <label className={styles.label} htmlFor="stomach">Stomach</label>
                <input
                    className={`form-input ${styles.input}`}
                    type="number"
                    name="stomach"
                    id="stomach"
                    value={customerDetails.stomach}
                    min={0}
                    pattern={decimalNumberPattern}
                    required
                    onChange={handleInputChange}
                />
            </div>
            <div className={styles.inputWrapper}>
                <label className={styles.label} htmlFor="hip">Hip</label>
                <input
                    className={`form-input ${styles.input}`}
                    type="number"
                    name="hip"
                    id="hip"
                    value={customerDetails.hip}
                    min={0}
                    pattern={decimalNumberPattern}
                    required
                    onChange={handleInputChange}
                />
            </div>
            <div className={styles.inputWrapper}>
                <label className={styles.label} htmlFor="thigh">Thigh</label>
                <input
                    className={`form-input ${styles.input}`}
                    type="number"
                    name="thigh"
                    id="thigh"
                    value={customerDetails.thigh}
                    min={0}
                    pattern={decimalNumberPattern}
                    required
                    onChange={handleInputChange}
                />
            </div>
        </div>
    )
}

export default FormStepTwo;