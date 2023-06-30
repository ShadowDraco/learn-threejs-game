//* Linter not recognizing args but its for react three */
/* eslint-disable react/no-unknown-property */
import { useRef } from 'react'
import PropTypes from 'prop-types'
import { generate } from 'random-hex-code-gen'

export default function SecondPlayer({
  position,
  gunPosition,
  rotation,
  gunRotation,
}) {
  const meshRef = useRef(null)
  const gunRef = useRef(null)

  return (
    <group>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={generate()} />
      </mesh>

      <mesh ref={gunRef} position={[gunPosition]}>
        <boxGeometry args={[0.2, 0.5, 1]} />
        <meshStandardMaterial color='white' />
      </mesh>
    </group>
  )
}

SecondPlayer.propTypes = {
  position: PropTypes.array,
  gunPosition: PropTypes.array,
  rotation: PropTypes.array,
  gunRotation: PropTypes.array,
}
