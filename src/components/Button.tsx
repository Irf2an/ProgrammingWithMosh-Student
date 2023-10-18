import React from 'react'

interface Props{
    children: string;
    // optional property use "?"-> used for setting default
    // can also set as string literal with union operator 
    // to add other bootstrap color (prevent errors)
    color?: 'primary' | 'secondary' | 'danger'; 
    onClick: () => void; // onClick is going to be a func that is pass from the outside
}

// color is given a default value primary
const Button = ({children, onClick, color = 'primary'}: Props) => {
  return (
    <button type="button" className={'btn btn-' + color} onClick={onClick}>{children}</button>
  )
}

export default Button