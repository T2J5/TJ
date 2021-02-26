import React from 'react';
 
// 创建类型接口
export interface IProps {
    value: number,
    onIncrement: () => void,
    onDecrement: () => void
}
 
// 使用接口代替 PropTypes 进行类型校验
export default class Counter extends React.PureComponent<IProps> {
  render() {
    const { value, onIncrement, onDecrement } = this.props;
    return (
      <p>
        Clicked: { value } times
        <br />
        <br />
        <button onClick={ onIncrement } style={{ marginRight: 20 }}> +  </button>
        <button onClick={ onDecrement }> - </button>
      </p>
    )
  }
}
