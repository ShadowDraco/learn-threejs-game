//* Linter not recognizing position/args props but its for react three */
/* eslint-disable react/no-unknown-property */
import {
  PerspectiveCamera,
  KeyboardControls,
  useKeyboardControls,
  Sky,
} from '@react-three/drei'
import { useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useState } from 'react'
import RenderBoxes from './Blocks/RenderBoxes'
import AddBoxButton from './UI/AddBoxButton'
import { UIOFFSET } from './UI/Constants.js'
import CameraController from './UI/CameraController'

export default function ThreeCanvas() {
  const [boxes, setBoxes] = useState([])

  return (
    <>
      <KeyboardControls
        map={[
          { name: 'forward', keys: ['ArrowUp', 'w', 'W'] },
          { name: 'backward', keys: ['ArrowDown', 's', 'S'] },
          { name: 'left', keys: ['ArrowLeft', 'a', 'A'] },
          { name: 'right', keys: ['ArrowRight', 'd', 'D'] },
          { name: 'jump', keys: ['Space'] },
        ]}
      >
        <Canvas shadows>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />

          <PerspectiveCamera makeDefault fov={75} position={[0, 0, 5]} />
          <AddBoxButton
            position={[-2.2, 1.2, UIOFFSET]}
            boxes={boxes}
            setBoxes={setBoxes}
          />
          <CameraController />
          <RenderBoxes boxes={boxes} />
          <Sky />
        </Canvas>
      </KeyboardControls>
    </>
  )
}
