import React from 'react'
import styles from './Info.css'

export const Info = ({ closeHandler }) =>
    <div className={styles.overlay}>
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <h4>Info</h4>
                <hr />
                <p>this is a dinamically loaded component</p>
                <hr />
                <a className={'btn btn-default'} onClick={() => closeHandler()}>close</a>
            </div>
        </div>
    </div>

export default Info
