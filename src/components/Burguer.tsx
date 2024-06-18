'use client'
import React from 'react'
import { FaBars } from 'react-icons/fa'

type Props = {
  toggle: () => void
}

const Burguer = (props: Props) => {
  return (
    <span className='md:hidden block ml-2 mt-2'><FaBars size={24} onClick={() => { props.toggle() }} /></span>
  )
}

export default Burguer