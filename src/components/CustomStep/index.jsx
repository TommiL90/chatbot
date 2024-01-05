import { useState } from "react";
import { CustomStepButton } from "../../styles/styles"

/* eslint-disable react/prop-types */
export const CustomStep = (props) => {
  const [isVisible, setIsVisible] = useState(true);
  const { triggerNextStep, legend, textButton } = props

  const handleClick = () => {
    triggerNextStep({ trigger: '1',  })
    setIsVisible(!isVisible);
  };

  return (
    <div style={{
      display: isVisible ? '' : 'none',
    }}
    >
      <p dangerouslySetInnerHTML={{ __html: legend }} style={{ fontSize: '14px' }} />
      <CustomStepButton onClick={handleClick}>{textButton}</CustomStepButton>
    </div>

  )
}