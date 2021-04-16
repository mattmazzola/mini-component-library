/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  const styles = {
    '--value': `${value}%`
  }

  let Component;
  if (size === 'large') {
    Component = LargeProgressBar
  }
  else if (size === 'medium') {
    Component = MediumProgressBar
  }
  else if (size === 'small') {
    Component = SmallProgressBar
  }
  else {
    throw new Error(`Unknown progress bar size: ${size}`)
  }
  
  console.log(styles)
  return <Component role="progressbar" aria-valuenow={20} aria-valuemin="0" aria-valuemax="100">
    <InnerBar style={styles}><VisuallyHidden>{value}</VisuallyHidden></InnerBar>
  </Component>;
};

const Base = styled.div`
  background-color: ${COLORS.transparentGray15};
  display: flex;
  flex-direction: row;
`

const LargeProgressBar = styled(Base)`
  border-radius: 8px;
  box-shadow: 0px 2px 4px 0px ${COLORS.transparentGray35} inset;
  height: 24px;
  padding: 4px;
`

const MediumProgressBar = styled(Base)`
  border-radius: 8px;
  box-shadow: 0px 2px 4px 0px ${COLORS.transparentGray35} inset;
  height: 12px;
`

const SmallProgressBar = styled(Base)`
  border-radius: 4px;
  box-shadow: 0px 2px 4px 0px ${COLORS.transparentGray35} inset;
  height: 8px;
`

const InnerBar = styled.div`
  border-radius: 4px;
  width: 100%;
  background: linear-gradient(to right, ${COLORS.primary} var(--value), transparent var(--value));
`

export default ProgressBar;
