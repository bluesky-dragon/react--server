import { useServerState } from "@state-less/react-client";
import client from "./lib/client";

// ...

const [count, setCount] = useServerState(0, {
  key: "count",
  scope: "global",
  client,
});