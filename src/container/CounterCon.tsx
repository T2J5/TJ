import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { increment, decrement } from '../actions';
import { StoreState } from '../types';
import Counter from '../components/Counter';

// 将reducer中状态插入到props中
const mapStateToProps = (state: StoreState): { value: number } => ({
  value: state
});

// 将actions 插入到 props
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onIncrement: () => dispatch(increment()),
  onDecrement: () => dispatch(decrement()),
});

// 使用高阶组件 connect 将 Counter 包裹
export default connect(mapStateToProps, mapDispatchToProps)(Counter);