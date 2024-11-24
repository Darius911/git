export default function ChildB({ increaseCount, count }) {
  return <button onClick={() => increaseCount(count + 1)}>Click me</button>;
}