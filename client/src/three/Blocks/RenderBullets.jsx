import React from 'react';

import PropTypes from 'prop-types';
import Bullet from '../Player/Bullet';

export default function RenderBullets({ bullets }) {
  return (
    <>
      {bullets?.map((bullet, i) => {
        return (
          <Bullet
            key={i}
            props={bullet.props}
          />
        );
      })}
    </>
  );
}

RenderBullets.propTypes = {
  bullets: PropTypes.array,
};
