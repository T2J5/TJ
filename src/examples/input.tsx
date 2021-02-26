import React, { useState } from 'react'

const MyInput = () => {
  const [value, setValue] = useState('')

  // 事件类型是“ChangeEvent”
  // 我们将 “HTMLInputElement” 传递给 input
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  return <input onChange={onChange} value={value} id='my-input' />
}

export default MyInput 


