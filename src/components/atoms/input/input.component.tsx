import React from 'react'

import StyledInput from './input.styles'

type InputProps = {
    value: string,
    onChange: (event: string) => void
}

const Input = ({ value, onChange }: InputProps) => {

    return (
        <div>
            <StyledInput value={value} onChange={e => onChange(e.target.value)} />
        </div>
    )
}

export default Input as React.FC<InputProps>