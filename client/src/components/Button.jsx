import React from 'react'

const Button = (props) => {

  return (
    <button onClick={props.onClick} className='btn' type={props.type}>
      {props.message}
    </button>
  )
}

export default Button