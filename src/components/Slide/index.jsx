import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  SlideContainer,
  SlideImage,
  ChevronLeft,
  ChevronRight,
} from './styled-components';

const Slide = ({ src, clickHandler }) => {
  return (
    <SlideContainer>
      <ChevronLeft onClick={() => clickHandler('minus')}>
        <FontAwesomeIcon icon={'chevron-left'} />
      </ChevronLeft>
      <SlideImage src={src} alt="slider" />
      <ChevronRight onClick={() => clickHandler('plus')}>
        <FontAwesomeIcon icon={'chevron-right'} />
      </ChevronRight>
    </SlideContainer>
  );
};

Slide.propTypes = {
  src: PropTypes.string,
  clickHandler: PropTypes.func,
};

Slide.defaultProps = {
  src: '',
  clickHandler: () => {},
};

export default Slide;
