import { useState } from "react";
import "./Counter.css";

// Counter component to display and control a simple counter
const Counter = () => {
  // State variable 'count' initialized to 0
  const [count, setCount] = useState(0);

  // Function to increment the count by 1
  const increment = () => setCount(count + 1);

  // Function to decrement the count by 1, only if count is greater than 0
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      {/* Container for the counter with styled box */}
      <div className="counterBox">
        {/* Heading for the counter */}
        <h1>Counter</h1>
        {/* Display the current count */}
        <h2>{count}</h2>
        {/* Button to increment the count */}
        <button onClick={increment}>Increment</button>
        {/* Button to decrement the count, disabled when count is 0 */}
        <button onClick={decrement} disabled={count === 0}>
          Decrement
        </button>
      </div>
    </>
  );
};

export default Counter;
