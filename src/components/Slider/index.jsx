import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Slide from '../Slide';

const Slider = ({ images, startsOf }) => {
  let [imageCounter, setImageCounter] = useState(startsOf);

  const moveTroughSlider = type => {
    if (type === 'plus' && imageCounter < images.length - 1) {
      setImageCounter(imageCounter + 1);
    }
    if (type === 'minus' && imageCounter !== 0) {
      setImageCounter(imageCounter - 1);
    }
  };

  return <Slide src={images[imageCounter]} clickHandler={moveTroughSlider} />;
};

Slider.propTypes = {
  startsOf: PropTypes.number,
};

Slider.defaultProps = {
  startsOf: 0,
  images: ['https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg'],
};

export default Slider;
