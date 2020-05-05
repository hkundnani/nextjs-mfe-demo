import React from 'react';
import dynamic from "next/dynamic";

const MyComponent2 = dynamic(() => import("app_02/MyComponent2"));

const MyComponent1 = () => (
  <div>
    {console.log("my component 1")}
    <h1>Hello from My Component 1</h1>
    <MyComponent2 />
  </div>
);

export default MyComponent1;
