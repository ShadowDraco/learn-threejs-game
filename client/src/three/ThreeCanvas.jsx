//* Linter not recognizing position/args props but its for react three */
/* eslint-disable react/no-unknown-property */
import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useState } from 'react'
import RenderBoxes from './RenderBoxes'
import AddBoxButton from './AddBoxButton'

export default function ThreeCanvas() {
  const [boxes, setBoxes] = useState([])
  const [count, setCount] = useState(0)

  return (
    <>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <PerspectiveCamera makeDefault fov={75} position={[0, 0, 5]} />
        <RenderBoxes boxes={boxes} />
        <AddBoxButton
          boxes={boxes}
          setBoxes={setBoxes}
          count={count}
          setCount={setCount}
        />
      </Canvas>
    </>
  )
}
