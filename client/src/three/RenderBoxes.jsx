import React from 'react'

import BasicBox from './BasicBox'
import PropTypes from 'prop-types'

export default function RenderBoxes({ boxes }) {
  return (
    <>
      {boxes?.map((box, i) => {
        return (
          <BasicBox
            key={i}
            position={box.position}
            scale={box.scale}
            color={box.color}
            altColor={box.altColor}
          />
        )
      })}
    </>
  )
}

RenderBoxes.propTypes = {
  boxes: PropTypes.array,
}
