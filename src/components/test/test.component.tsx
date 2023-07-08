import React, { useEffect } from 'react';

export const Test: React.FC<{ items: { [key: string]: string }[] }> = (props) => {
    const { items } = props;

    useEffect(() => {
        console.log(items);
    }, [items]);

    return <></>;
};
