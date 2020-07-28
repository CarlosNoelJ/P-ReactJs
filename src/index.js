// const element = document.createElement('h1');
// element.innerText = "Hello, Platzi Badges!";

// const container = document.getElementById('app');

// container.appendChild(element);


import React from 'react';
import ReactDOM from 'react-dom';

// const jsx = <h1>Hello, Platzi Badges from React!</h1>
// const element = React.createElement(
//     'a',
//     { href: 'https://platzi.com'}, 
//     'Ir a platzi!');
// const name = "Carlos Noel Bernaola";
// const sum = () => 3 + 3;
// const element = React.createElement(
//     'h1',
//     {},
//     `Hello, My name is ${name}`
// );
// const jsx = <h1>Hola soy, {sum()}</h1>;
const jsx = (<div>
    <h1>Hello, I'm Carlos Noel</h1>
    <p>I'm a developer</p>
</div>);
const container = document.getElementById('app');

// ReactDOM.render(____qué___, ___donde__);
ReactDOM.render(jsx, container);