// 부모로 부터 받는
import React from "react"
import ReactDOM from 'react-dom/client'
import App from './App';

const myinfo=[
    {
    price : 50000,
    pronm: '신발',
    protext: "싸요싸요! 언능 사가"
    },
    {
        price : 100000,
        pronm: '신발',
        protext: "안싸요! 할인좀 해줘"
        },
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
     <App sendinfo={myinfo[0]} />
     <App sendinfo={myinfo[1]} />

  </>
);
