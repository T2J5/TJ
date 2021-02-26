import React from 'react'

interface Props {
  name: string;
  color: string; 
}

type OtherProps = {
  name: string;
  color: string;
}


//  函数声明式 使用 interface Props
// Notice here we're using the function declaration with the interface Props
function Heading({ name, color }: Props): React.ReactNode {
  return <h1 style={{ color }}>{name}</h1>
}

// 函数表达式 使用type Props
// Notice here we're using the function expression with the type OtherProps
const OtherHeading: React.FC<OtherProps> = ({ name, color }) => <h1 style={{ color }}>{name}</h1>


export {
  Heading,
  OtherHeading,
}
/**
 * 
 * 关于 interface 或 type ，我们建议遵循 react-typescript-cheatsheet 社区提出的准则：

  在编写库或第三方环境类型定义时，始终将 interface 用于公共 API 的定义。

  考虑为你的 React 组件的 State 和 Props 使用 type ，因为它更受约束。”
 */