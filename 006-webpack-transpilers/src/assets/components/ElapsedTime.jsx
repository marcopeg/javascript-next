/**
 * Functional React Component
 */

import React from 'react'

const toSeconds = value =>
    Math.round(value / 100) / 10 + 's.'

export const ElapsedTime = ({ value }) =>
    <span>{toSeconds(value)}</span>

export default ElapsedTime
