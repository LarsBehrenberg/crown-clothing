import React from 'react'

import './custom-button.styles.scss'

const CustomButton = ({
  children,
  inverted,
  isGoogleSignIn,
  ...otherProps
}) => (
  <button
    className={`custom-button ${inverted ? 'inverted' : null} ${
      isGoogleSignIn ? 'google-sign-in' : null
    }`}
    {...otherProps}
  >
    {children}
  </button>
)

export default CustomButton
