import { authenticate, isClientContext } from '@state-less/react-server';
import { ServerSideProps } from './ServerSideProps';
import { JWT_SECRET } from '../config';

export const Session = (props, { context = { headers: {} } }) => {
    const { headers } = context;

    if (!isClientContext(context)) {
        return <ServerSideProps session={null} />;
    }

    const session = authenticate(headers, JWT_SECRET);
    return <ServerSideProps session={session} />;
};
