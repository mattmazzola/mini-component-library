import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper value={value} onChange={onChange}>
      {children}
      <Icon id="chevron-down" />
    </Wrapper>
  );
};

const Wrapper = styled.select`
  background-color: ${COLORS.transparentGray15};
  border: transparent;
  border-radius: 8px;
  color: ${COLORS.gray700};
  padding: 0.75rem 1rem;
  font-size: 16px;
  font: 'Roboto', sans-serif;

  ::after {
    content: 'a';
  }

  :focus {
    outline: inherit;
  }

  :hover {
    color: ${COLORS.black}
  }
`

export default Select;
