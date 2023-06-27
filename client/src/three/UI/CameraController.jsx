import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useKeyboardControls } from '@react-three/drei'

// lower is faster
const CAMERASPEED = 15

const frontVector = new THREE.Vector3()
const sideVector = new THREE.Vector3()

export default function CameraController() {
  const [, get] = useKeyboardControls()
  useFrame(state => {
    const { forward, backward, left, right } = get()
    // update axe
    frontVector.set(0, forward / CAMERASPEED - backward / CAMERASPEED, 0)
    sideVector.set(right / CAMERASPEED - left / CAMERASPEED, 0, 0)

    state.camera.position.add(frontVector)
    state.camera.position.add(sideVector)
  })
}
