import { increment, decrement } from '../store';
import classes from './Counter.module.css';

const Counter = () => {
  // const dispatch = useDispatch()
  // const counter = useSelector(state => state.counter);

  // const incrementHandler = () => {
  //   dispatch(increment())
  // };

  // const decrementHandler = () => {
  //   dispatch(decrement())
  // };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>Increment</div>
      <div>
        <button >Increment</button>
        <button >Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
