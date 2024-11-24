import { useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

export default function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ChildA count={count} />
      <ChildB
        increaseCount={setCount}
        count={count}
      />
    </div>
  );
}