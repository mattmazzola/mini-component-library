import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'

import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {

  let Component
  if (size === "small") {
    Component = SmallInput
  }
  else if (size === "large") {
    Component = LargeInput
  }
  else {
    throw new Error(`Icon size ${size} is not known.`)
  }

  const [value, setValue] = React.useState('')
  const onChangeInput = (e) => {
    const text = e.value
    setValue(text)
  }

  const styles = {
    '--width': width
  }

  const inputRef = React.createRef()
  const onClickWrapper = () => {
    inputRef.current?.focus()
  }

  return (
    <Component style={styles} onClick={onClickWrapper}>
      <Icon id={icon} />
      <VisuallyHidden>
        <label htmlFor="input1">{label}</label>
      </VisuallyHidden>
      <input value={value} ref={inputRef} onChange={onChangeInput} id="input1" placeholder={placeholder} />
    </Component>
  )
}

const Base = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;
  width: var(--width);

  :not(:empty) {
    color: ${COLORS.black};
  }
`

const SmallInput = styled(Base)`
  border-bottom: 1px solid ${COLORS.black};
  font-size: 14px;
`
  
const LargeInput = styled(Base)`
  border-bottom: 2px solid ${COLORS.black};
  font-size: 18px;
`

export default IconInput
