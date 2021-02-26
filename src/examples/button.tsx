import React from 'react'
/**
 * 
  通常，在 React 和 TypeScript 项目中编写 Props 时，请记住以下几点：

  始终使用 TSDoc 标记为你的 Props 添加描述性注释。

  无论你为组件 Props 使用 type 还是 interfaces ，都应始终使用它们。

  如果 props 是可选的，请适当处理或使用默认值
 */

type Props = {
   /** color to use for the background */
  color?: string;
   /** standard children prop: accepts any valid React Node */
  children: React.ReactNode;
   /** callback function passed to the onClick handler*/
  onClick: ()  => void;
}
 
const Button: React.FC<Props> = ({ children, color = 'tomato', onClick }) => {
   return <button style={{ backgroundColor: color }} onClick={onClick}>{children}</button>
}
 
export default Button;