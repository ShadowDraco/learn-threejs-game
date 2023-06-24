//* Linter not recognizing args but its for react three */
/* eslint-disable react/no-unknown-property */
import { Text } from '@react-three/drei'
import randomHex from 'random-hex-code-gen'
import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

export default function AddBoxButton({ position, boxes, setBoxes, setCount }) {
  const meshRef = useRef(null)
  const [hovered, setHover] = useState(false)

  useEffect(() => {
    addBox([0, 0, 0])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const addBox = position => {
    const box = {
      position: position
        ? position
        : [Math.random() * 10, Math.random() * 10, Math.random() * 10],
      scale: Math.random() * 1.5 + 1,
      color: randomHex.generate(),
      altColor: randomHex.generate(),
    }

    setBoxes([...boxes, box])
    setCount(count => count + 1)
  }

  return (
    <mesh
      ref={meshRef}
      position={position}
      scale={1}
      onClick={() => {
        addBox()
      }}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}
    >
      <boxGeometry args={[2, 1, 0.1]} />
      <meshStandardMaterial color={hovered ? 'darkblue' : 'royalblue'} />
      <Text
        color='black'
        anchorX='center'
        anchorY='middle'
        fontSize={'small'}
        depthOffset={-1}
      >
        hello world!
      </Text>
    </mesh>
  )
}

AddBoxButton.propTypes = {
  boxes: PropTypes.array,
  setBoxes: PropTypes.func,
  setCount: PropTypes.func,
  position: PropTypes.array,
}
