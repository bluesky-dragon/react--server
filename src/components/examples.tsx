import { useState } from '@state-less/react-server';
import { ServerSideProps } from './ServerSideProps';

export const HelloWorldExample1 = () => {
    const [count] = useState(0, { key: 'count', scope: 'global' });

    const increase = () => {
        throw new Error('Not implemented');
    };

    return (
        <ServerSideProps
            // Needed for reactivity
            key="hello-world-1-props"
            count={count}
            increase={increase}
        />
    );
};

export const HelloWorldExample2 = () => {
    const [count, setState] = useState(0, { key: 'count', scope: 'global' });

    const increase = () => {
        setState(count + 1);
    };

    return (
        <ServerSideProps
            key="hello-world-2-props"
            count={count}
            increase={increase}
        />
    );
};
