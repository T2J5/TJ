import React from 'react';

export interface IProps {
  value: number,
  onIncrement: () => void,
  onDecrement: () => void,
}

// 使用接口代替 PropTypes 进行类型校验
export default class Counter extends React.PureComponent<IProps> {
  public render() {
    const { value, onDecrement, onIncrement } = this.props;
    return (
      <p>
        Clicked: { value } times
        <br />
        <br />
        <button onClick={ onIncrement } style={{ marginRight: 20 }}> +  </button>
        <button onClick={ onDecrement }> - </button>
    </p>)
  }
}