import { useComponent } from "@state-less/react-client"
import localClient from "../lib/client";

const HelloWorldExample1 = () => {
    const [{count, increase}, { loading, error }] = useComponent('hello-world-1');

    return (
        <>
            {error && <Alert severity='error'>{error.message}</Alert>}
            <Button onClick={() => increase()} />
        </>
    );
}

export const HelloWorldExample2 = () => {
    const [component, {loading, error}] = useComponent('hello-word-1', {
        client: localClient,
    }) ;

    console.log("HelloWorldExample1", error);

    return (
        <>
            {error && <Alert severity='error'> {error.message}</Alert>}
            <Button onClick={() => component ?.props?.increase()} >
                Count is {component?.props?.count}
            </Button>
        </>
    )
}