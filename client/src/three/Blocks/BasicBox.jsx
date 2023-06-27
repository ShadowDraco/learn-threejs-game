//* Linter not recognizing args but its for react three */
/* eslint-disable react/no-unknown-property */
import { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { useFrame } from '@react-three/fiber'

export default function BasicBox({ position, color }) {
  const meshRef = useRef(null)

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

BasicBox.propTypes = {
  position: PropTypes.array,
  color: PropTypes.string,
}
