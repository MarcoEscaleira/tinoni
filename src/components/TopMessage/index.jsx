import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  MessageWrapper,
  Time,
  TimeSpan,
  Title,
  CloseContainer,
} from './styled-components';
import { isLeapYear } from 'date-fns';

const TopMessage = () => {
  const [visible, setVisible] = useState(true);

  return (
    visible && (
      <MessageWrapper>
        <Time>
          <FontAwesomeIcon icon="clock" />
          24 <TimeSpan>&nbsp;horas</TimeSpan>
          <FontAwesomeIcon icon={['far', 'calendar']} />
          {isLeapYear(new Date().getFullYear) ? 366 : 365}{' '}
          <TimeSpan>&nbsp;dias</TimeSpan>
        </Time>
        <Title href="tel:+351913844344">
          Ligue já&nbsp;<b>913 844 344</b>
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
