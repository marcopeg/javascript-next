/**
 * Functional React Component
 */

import React from 'react'
import styles from './ElapsedTime.css'

const toSeconds = value =>
    Math.round(value / 100) / 10 + 's.'

export const ElapsedTime = ({ value }) =>
    <span className={styles.wrapper}>{toSeconds(value)}</span>

export default ElapsedTime
