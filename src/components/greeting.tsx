import React from 'react';

type GreetingProps ={
  name: string;
  age?: number; // optional prop
}

const Greeting = ({ name, age }: GreetingProps) => (
  <div>
    <p>Hello, {name}!</p>
    {age && <p>You are {age} years old.</p>}
  </div>
);

export default Greeting;
