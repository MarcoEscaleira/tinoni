import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MessageWrapper, Title } from './styled-components';

const TopMessage = () => {
  return (
    <MessageWrapper>
      <Title href="tel:+351913844344">
        Ligue já&nbsp;<b>913 844 344</b>
        <span>
          <FontAwesomeIcon icon="phone" />
        </span>
      </Title>
    </MessageWrapper>
  );
};

export default TopMessage;
