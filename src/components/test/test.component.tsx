import React, { useEffect } from 'react';

export const Test: React.FC<{ items: { [key: string]: any }[] }> = (props) => {
    const { items } = props;

    useEffect(() => {
        console.log(items);
    }, [items]);

    return <></>;
};
