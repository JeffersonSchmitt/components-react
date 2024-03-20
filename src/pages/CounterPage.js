
import { useReducer } from 'react';
import Button from './../components/Button';
// import useCounter from './../hooks/use-counter';
import Panel from './../components/Panel';
import { produce } from 'immer';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment-count': //método otimizado com immer
      state.count = state.count + 1;
      return;
    case 'decrement-count': //método normal(vanilla) sem o immer
      return {
        ...state,
        count: state.count - 1,
      };
    case 'change-value':
      return {
        ...state,
        valueToAdd: action.payload,
      };
    case 'add-lot':
      return {
        ...state,
        count: state.valueToAdd + state.count,
        valueToAdd: 0,
      };

    default:
      return state;
  }
}

function CounterPage({ initialCount }) {
  // const { count, increment } = useCounter(initialCount);
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });


  const increment = () => {
    dispatch({
      type: 'increment-count',
    });

    // setCount(count + 1);
  }

  const decrement = () => {
    dispatch({
      type: 'decrement-count',
    });
    // setCount(count - 1);
  }

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({
      type: 'change-value',
      payload: value,
    });

    // setValueToAdd(value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'add-lot'
    });
    // setCount(count + valueToAdd);
    // setValueToAdd(0);

  }

  return (
    <Panel className='m-3'>
      <div className='flex items-center'>
        <Button onClick={decrement} >-</Button>
        <h1 className='mr-4 ml-4 text-lg'>{state.count}</h1>
        <Button onClick={increment} >+</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ''}
          onChange={handleChange}
          type='number'
          className='p-1 m-3 bg-gray-50 border border-gray-300' />
        <Button>Add</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;