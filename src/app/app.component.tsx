import { useEffect } from 'react';
import useCounter from '@vlutter/counter-react';

const App = () => {
    const counter = useCounter(0);

    useEffect(() => {
        console.log(counter.count);
    }, [counter.count]);

    const { count, increment, decrement } = counter;

    const handleIncrementClick = () => {
        increment.call(counter);
    };

    const handleDecrementClick = () => {
        decrement.call(counter);
    };

    return (
        <div>
            <button onClick={handleDecrementClick}>-</button>
            {count}
            <button onClick={handleIncrementClick}>+</button>
        </div>
    );
};

export default App;
