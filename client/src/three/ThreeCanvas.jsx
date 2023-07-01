//* Linter not recognizing position/args props but its for react three */
/* eslint-disable react/no-unknown-property */
import { PerspectiveCamera, KeyboardControls, Sky } from '@react-three/drei';
import { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import RenderBoxes from './Blocks/RenderBoxes';
import AddBoxButton from './UI/AddBoxButton';
import { UIOFFSET } from './UI/Constants.js';
import CameraController from './UI/CameraController';
import Player from './Player';
import Bullet from './Player/Bullet';
import RenderBullets from './Blocks/RenderBullets';

export default function ThreeCanvas() {
  const [boxes, setBoxes] = useState([]);
  const [bullets, setBullets] = useState([]);
  const [clicking, setClicking] = useState(false);
  const [shooting, setShooting] = useState(false);
  const AddBoxButtonMeshRef = useRef(null);
  const PlayerRef = useRef(null);

  const shootBullet = props => {
    const bullet = { ...props };

    setBullets([...bullets, bullet]);
  };

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
        <Canvas
          shadows
          onMouseDown={() => {
            setClicking(true);
          }}
          onMouseUp={() => {
            setClicking(false);
          }}
        >
          <ambientLight />
          <pointLight position={[10, 10, 10]} />

          <PerspectiveCamera
            makeDefault
            fov={75}
            position={[0, 0, 5]}
          />

          <CameraController
            setShooting={setShooting}
            UIElements={[
              <AddBoxButton
                meshRef={AddBoxButtonMeshRef}
                key='AddBoxButton'
                position={[-2.2, 1.2, UIOFFSET]}
                originalPosition={[-2.2, 1.2, UIOFFSET]}
                boxes={boxes}
                setBoxes={setBoxes}
              />,
              <Player
                key='PLAYER'
                meshRef={PlayerRef}
                clicking={clicking}
                shootBullet={shootBullet}
                shooting={shooting}
              />,
            ]}
          />

          <RenderBoxes boxes={boxes} />
          <RenderBullets bullets={bullets} />
          <Sky />
        </Canvas>
      </KeyboardControls>
    </>
  );
}
