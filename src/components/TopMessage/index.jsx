import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MessageWrapper, Title, CloseContainer } from './styled-components';

const TopMessage = () => {
  const [visible, setVisible] = useState(true);

  return (
    visible && (
      <MessageWrapper>
        <Title>Ligue já +351 913 844 344</Title>
        <CloseContainer onClick={() => setVisible(false)}>
          <FontAwesomeIcon icon="times" />
        </CloseContainer>
      </MessageWrapper>
    )
  );
};

export default TopMessage;
