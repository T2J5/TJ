import React from 'react'

// 函数声明式
function Heading(): React.ReactNode {
  return <h1>This is my heading</h1>
}

// 函数扩展式写法
const OtherHeading: React.FC = () => <h1>123</h1> 

// 记住这两种方式可能会让人混淆。这主要取决于设计选择。无论您选择在项目中使用哪个，都要始终如一地使用它

export {
  Heading, OtherHeading
}