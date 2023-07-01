//* Linter not recognizing args but its for react three */
/* eslint-disable react/no-unknown-property */
import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useFrame } from '@react-three/fiber';

export default function Bullet({
  position,
  rotation,
  angle,
  speed,
  maxDistance,
}) {
  const meshRef = useRef(null);
  const [distanceTraveled, setDistanceTraveled] = useState(0);

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.rotation.set(rotation);
    }
  }, []);

  useFrame(state => {
    
    if (distanceTraveled < maxDistance) {
      meshRef.current.position.x += speed * Math.sin(angle);
      meshRef.current.position.y += speed * Math.cos(angle);

      setDistanceTraveled(distanceTraveled + speed);
    } else {
      console.log('destroy me');
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
    >
      <boxGeometry args={[0.3, 0.3, 0.3]} />
      <meshStandardMaterial color='yellow' />
    </mesh>
  );
}

Bullet.propTypes = {
  position: PropTypes.array,
  color: PropTypes.string,
  rotation: PropTypes.array,
  angle: PropTypes.number,
  speed: PropTypes.number,
  maxDistance: PropTypes.number,
};
