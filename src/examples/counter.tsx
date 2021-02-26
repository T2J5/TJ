export interface Props {
  value: number
}

// 使用接口代替 PropTypes 进行类型校验
const Counter = ({ value }: Props) => {
  return <p>{value}</p>
}

export default Counter;