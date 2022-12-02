import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar';
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from '../redux/myValue/slice';

export const Layout = () => {
  // const dispatch = useDispatch();
  // const value = useSelector(state => state.myValue);

  return (
    <div>
      <AppBar />
      <Outlet />
      {/* <button onClick={() => dispatch(decrement(25))}>Decrement</button>
      {value}
      <button onClick={() => dispatch(increment(25))}>Increment</button> */}
    </div>
  );
};
