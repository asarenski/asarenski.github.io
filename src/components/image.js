import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const Image = ({style}) => (
  <StaticImage
    src="../images/headshot_white_small.jpg"
    loading="eager"
    width={360}
    quality={60}
    formats={["auto", "webp", "avif"]}
    alt="asarenski headshot"
    style={style}
  />
)
export default Image
