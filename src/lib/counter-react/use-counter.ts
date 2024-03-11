import { useMemo, useReducer, useState } from 'react';
import Counter, { CounterOptions } from '@vlutter/counter';

export const useCounter = (initialCount: number): Counter => {
    const rerender = useReducer(() => ({}), {})[1];

    const options = useMemo<CounterOptions>(() => ({
        onChange: rerender
    }), [rerender]); 

    const [counter] = useState(() => new Counter(initialCount, options));

    counter.setOptions(options);

    return counter;
}