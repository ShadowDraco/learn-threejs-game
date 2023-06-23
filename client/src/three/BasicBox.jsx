//* Linter not recognizing args but its for react three */
/* eslint-disable react/no-unknown-property */
import { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { useFrame } from '@react-three/fiber'

export default function BasicBox({ position, scale, color, darkColor }) {
  const meshRef = useRef(null)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  useFrame((state, delta) => {
    // exit if the ref isn't mounted yet
    if (!meshRef.current) return
    meshRef.current.rotation.x += delta
    meshRef.current.rotation.y += 0.01
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      scale={active ? (scale ? scale : 1.5) : 1}
      onClick={e => setActive(!active)}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={
          hovered
            ? darkColor
              ? darkColor
              : 'darkblue'
            : color
            ? color
            : 'royalblue'
        }
      />
    </mesh>
  )
}

BasicBox.propTypes = {
  position: PropTypes.array,
  scale: PropTypes.number,
  color: PropTypes.string,
  darkColor: PropTypes.string,
}
