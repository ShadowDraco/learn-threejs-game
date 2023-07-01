//* Linter not recognizing args but its for react three */
/* eslint-disable react/no-unknown-property */

import { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useFrame } from '@react-three/fiber';

export default function Player({ meshRef, clicking, shooting, shootBullet }) {
  const gunRef = useRef(null);

  useFrame(state => {
    if (!isNaN(state.mouse.x) && !isNaN(state.mouse.y)) {
      // calculate player rotation
      let mouse_pos = [...state.mouse];
      let object_pos = { x: 0, y: 0, z: 0 };
      mouse_pos[0] = mouse_pos[0] - object_pos.x;
      mouse_pos[1] = mouse_pos[1] - object_pos.y;
      let angle = Math.atan2(mouse_pos[0], mouse_pos[1]);
      // set player rotation
      meshRef.current.rotation.z = -angle;
      // set gun position and rotation based on player rotation
      gunRef.current.position.x =
        meshRef.current.position.x + 0.5 * Math.sin(angle);
      gunRef.current.position.y =
        meshRef.current.position.y + 0.5 * Math.cos(angle);
      gunRef.current.rotation.z = -angle;

      if (clicking && shooting) {
        shootBullet({
          position: meshRef.current.position,
          rotation: meshRef.current.rotation,
          angle: angle,
          speed: 0.1,
          maxDistance: 10,
        });
      }
    }
  });

  return (
    <group>
      <mesh
        ref={meshRef}
        position={[0, 0, 0]}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'black'} />
      </mesh>

      <mesh
        ref={gunRef}
        position={[0.4, 0.4, 0]}
      >
        <boxGeometry args={[0.2, 0.5, 1]} />
        <meshStandardMaterial color='white' />
      </mesh>
    </group>
  );
}

Player.propTypes = {
  meshRef: PropTypes.object,
  clicking: PropTypes.bool,
  shooting: PropTypes.bool,
  shootBullet: PropTypes.func,
};
