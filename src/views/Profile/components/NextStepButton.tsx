import React from 'react'
import { ArrowForwardIcon, Button, ButtonProps } from 'pixiufarm-uikit'

const NextStepButton: React.FC<ButtonProps> = (props) => {
  return <Button endIcon={<ArrowForwardIcon color="currentColor" />} {...props} />
}

export default NextStepButton
