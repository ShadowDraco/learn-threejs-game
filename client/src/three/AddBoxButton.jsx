//* Linter not recognizing args but its for react three */
/* eslint-disable react/no-unknown-property */
import randomHex from 'random-hex-code-gen'
import { useRef, useState } from 'react'
import PropTypes from 'prop-types'

export default function AddBoxButton({ boxes, setBoxes, count, setCount }) {
  const meshRef = useRef(null)
  const [hovered, setHover] = useState(false)

  const addBox = () => {
    const box = {
      position: [Math.random() * 10, Math.random() * 10, Math.random() * 10],
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
      position={[0, 0, 10]}
      scale={1}
      onClick={() => {
        addBox
      }}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}
    >
      <boxGeometry args={[1, 1, 5]} />
      <meshStandardMaterial color={hovered ? 'darkblue' : 'royalblue'} />
    </mesh>
  )
}

AddBoxButton.propTypes = {
  boxes: PropTypes.array,
  setBoxes: PropTypes.func,
  setCount: PropTypes.func,
  count: PropTypes.number,
}
