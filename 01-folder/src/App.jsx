import React from "react";
import Card from "./components/Card";
import Random from "./components/Random";

const App = () => {
  const user = "Sachin";
  const age = 23;
  let num = 232;

  return (
    <div>
      <h1>Hello from React</h1>
      <h2>
        {/*Dynamic components : using {} , we can embed any JS expression directly within JSX. This includes variables, function calls and more. */}
        I am {user}.<p>MessageNo : {num} </p>
      </h2>

      <Card />
      <Random />
      <Random />
    </div>
  );
};

export default App;
