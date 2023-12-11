/* eslint-disable react/prop-types */
import { WhattsContainer, WhattsLink } from "../../styles/styles"
import { WhatssIcon } from "../Icons"

const WhatsButton = ({
  textContainer, textButton, href
}) => {
  return (
    <WhattsContainer >
      <p>{textContainer}
      </p>
      <WhattsLink target="_blank"
        href={href} >
        <WhatssIcon /><span>{textButton}</span>
      </WhattsLink>
    </WhattsContainer>
  )
}

export default WhatsButton