import React from 'react';

type GreetingProps ={
  name: string;
  age?: number; // optional prop
}

const Greeting: React.FC<GreetingProps> = ({ name, age }) => (
  <div>
    <p>Hello, {name}!</p>
    {age && <p>You are {age} years old.</p>}
  </div>
);

export default Greeting;
