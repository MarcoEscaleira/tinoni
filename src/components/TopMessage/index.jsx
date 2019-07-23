import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MessageWrapper, Title, CloseContainer } from './styled-components';

const TopMessage = () => {
  const [visible, setVisible] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setVisible(true);
  //   }, 0);
  // }, []);

  return (
    visible && (
      <MessageWrapper>
        <Title href="tel:+351913844344">
          Ligue já +351 913 844 344
          <span>
            <FontAwesomeIcon icon="phone" />
          </span>
        </Title>
        <CloseContainer onClick={() => setVisible(false)}>
          <FontAwesomeIcon icon="times" />
        </CloseContainer>
      </MessageWrapper>
    )
  );
};

export default TopMessage;
