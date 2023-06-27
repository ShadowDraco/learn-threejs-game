//* Linter not recognizing args but its for react three */
/* eslint-disable react/no-unknown-property */
import { Text } from '@react-three/drei'
import randomHex from 'random-hex-code-gen'
import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { FONTSIZE, TEXTOFFSET } from './Constants.js'

export default function AddBoxButton({ position, boxes, setBoxes, meshRef }) {
  const [hovered, setHover] = useState(false)

  useEffect(() => {
    addBox([0, 0, 0])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const addBox = position => {
    const box = {
      position: position
        ? position
        : [Math.random() * -10, Math.random() * -10, 0],

      color: randomHex.generate(),
    }

    setBoxes([...boxes, box])
  }

  return (
    <mesh
      ref={meshRef}
      position={position}
      scale={3}
      onClick={() => {
        addBox()
      }}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}
    >
      <boxGeometry args={[0.2, 0.1, 0.01]} />
      <meshStandardMaterial color={hovered ? 'darkblue' : 'royalblue'} />
      <Text
        color='black'
        anchorX='center'
        anchorY='middle'
        fontSize={FONTSIZE}
        position={TEXTOFFSET}
      >
        Add Cube
      </Text>
    </mesh>
  )
}

AddBoxButton.propTypes = {
  boxes: PropTypes.array,
  setBoxes: PropTypes.func,
  setCount: PropTypes.func,
  position: PropTypes.array,
  meshRef: PropTypes.object,
}
