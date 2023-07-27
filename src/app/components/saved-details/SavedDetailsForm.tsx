import styles from '@/app/styles/saved-details/savedDetailsForm.module.css';

// only allow decimal numbers
const decimalNumberPattern = '([0-9]*[.])?[0-9]+';

const SavedDetailsForm = () => {
  return (
    <form>
      <div className={styles.formInputs}>
        <div className={styles.formInput}>
          <label className={styles.label} htmlFor="leg">Inside leg</label>
          <div className={styles.inputWrapper}>
            <input
              className={`form-input ${styles.input}`}
              type="number"
              name="leg"
              id="leg"
              //   value={customerDetails.leg}
              min={0}
              pattern={decimalNumberPattern}
              required
            //   onChange={handleInputChange}
            />
            <span>cm</span>
          </div>
        </div>
        <div className={styles.formInput}>
          <label className={styles.label} htmlFor="neck">Neck</label>
          <div className={styles.inputWrapper}>
            <input
              className={`form-input ${styles.input}`}
              type="number"
              name="neck"
              id="neck"
              //   value={customerDetails.neck}
              min={0}
              pattern={decimalNumberPattern}
              required
            //   onChange={handleInputChange}
            />
            <span>cm</span>
          </div>
        </div>
        <div className={styles.formInput}>
          <label className={styles.label} htmlFor="waistline">Waistline</label>
          <div className={styles.inputWrapper}>
            <input
              className={`form-input ${styles.input}`}
              type="number"
              name="waist"
              id="waistline"
              //   value={customerDetails.waist}
              min={0}
              pattern={decimalNumberPattern}
              required
            //   onChange={handleInputChange}
            />
            <span>cm</span>
          </div>
        </div>
        <div className={styles.formInput}>
          <label className={styles.label} htmlFor="shoulder-width">Shoulder width</label>
          <div className={styles.inputWrapper}>
            <input
              className={`form-input ${styles.input}`}
              type="number"
              name="shoulder"
              id="shoulder-width"
              //   value={customerDetails.shoulder}
              min={0}
              pattern={decimalNumberPattern}
              required
            //   onChange={handleInputChange}
            />
            <span>cm</span>
          </div>
        </div>
        <div className={styles.formInput}>
          <label className={styles.label} htmlFor="arm-length">Arm length</label>
          <div className={styles.inputWrapper}>
            <input
              className={`form-input ${styles.input}`}
              type="number"
              name="arm"
              id="arm-length"
              //   value={customerDetails.arm}
              min={0}
              pattern={decimalNumberPattern}
              required
            //   onChange={handleInputChange}
            />
            <span>cm</span>
          </div>
        </div>
        <div className={styles.formInput}>
          <label className={styles.label} htmlFor="chest">Chest</label>
          <div className={styles.inputWrapper}>
            <input
              className={`form-input ${styles.input}`}
              type="number"
              name="chest"
              id="chest"
              //   value={customerDetails.chest}
              min={0}
              pattern={decimalNumberPattern}
              required
            //   onChange={handleInputChange}
            />
            <span>cm</span>
          </div>
        </div>
        <div className={styles.formInput}>
          <label className={styles.label} htmlFor="bicep">Bicep</label>
          <div className={styles.inputWrapper}>
            <input
              className={`form-input ${styles.input}`}
              type="number"
              name="bicep"
              id="bicep"
              //   value={customerDetails.bicep}
              min={0}
              pattern={decimalNumberPattern}
              required
            //   onChange={handleInputChange}
            />
            <span>cm</span>
          </div>
        </div>
        <div className={styles.formInput}>
          <label className={styles.label} htmlFor="wrist">Wrist</label>
          <div className={styles.inputWrapper}>
            <input
              className={`form-input ${styles.input}`}
              type="number"
              name="wrist"
              id="wrist"
              //   value={customerDetails.wrist}
              min={0}
              pattern={decimalNumberPattern}
              required
            //   onChange={handleInputChange}
            />
            <span>cm</span>
          </div>
        </div>
        <div className={styles.formInput}>
          <label className={styles.label} htmlFor="back-length">Back length</label>
          <div className={styles.inputWrapper}>
            <input
              className={`form-input ${styles.input}`}
              type="number"
              name="back"
              id="back-length"
              //   value={customerDetails.back}
              min={0}
              pattern={decimalNumberPattern}
              required
            //   onChange={handleInputChange}
            />
            <span>cm</span>
          </div>
        </div>
        <div className={styles.formInput}>
          <label className={styles.label} htmlFor="stomach">Stomach</label>
          <div className={styles.inputWrapper}>
            <input
              className={`form-input ${styles.input}`}
              type="number"
              name="stomach"
              id="stomach"
              //   value={customerDetails.stomach}
              min={0}
              pattern={decimalNumberPattern}
              required
            //   onChange={handleInputChange}
            />
            <span>cm</span>
          </div>
        </div>
        <div className={styles.formInput}>
          <label className={styles.label} htmlFor="hip">Hip</label>
          <div className={styles.inputWrapper}>
            <input
              className={`form-input ${styles.input}`}
              type="number"
              name="hip"
              id="hip"
              //   value={customerDetails.hip}
              min={0}
              pattern={decimalNumberPattern}
              required
            //   onChange={handleInputChange}
            />
            <span>cm</span>
          </div>
        </div>
        <div className={styles.formInput}>
          <label className={styles.label} htmlFor="thigh">Thigh</label>
          <div className={styles.inputWrapper}>
            <input
              className={`form-input ${styles.input}`}
              type="number"
              name="thigh"
              id="thigh"
              //   value={customerDetails.thigh}
              min={0}
              pattern={decimalNumberPattern}
              required
            //   onChange={handleInputChange}
            />
            <span>cm</span>
          </div>
        </div>
      </div>
    </form>
  )
}

export default SavedDetailsForm