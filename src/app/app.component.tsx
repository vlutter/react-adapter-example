import useCounter from '@vlutter/counter-react';
import { useCallback } from 'react';

const App = () => {
    const counter = useCounter(0);

    const decrement = useCallback(() => {
        counter.decrement();
    }, [counter]);

    const increment = useCallback(() => {
        counter.increment();
    }, [counter]);

    return (
        <div>
            <button onClick={decrement}>-</button>
            {counter.count}
            <button onClick={increment}>+</button>
        </div>
    );
};

export default App;
