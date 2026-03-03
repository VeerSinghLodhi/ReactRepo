import './App.css';
import Header from "./MyComponents/Header"
import Content from "./MyComponents/Content"
import Footer from './MyComponents/Footer';
import React, { useState } from 'react';

function App() {
  const [courses, setCourses] = useState([
    {
      srno: 1,
      courseName: "Java Language",
      description: "Java is a versatile language. Every developer should learn this language.",
      fee: 5000
    },
    {
      srno: 2,
      courseName: "C Language",
      description: "This is initial point of every developer. if developer doesn't learn this language. that developer like (Hatt beee)",
      fee: 3000
    },
    {
      srno: 3,
      courseName: "Python Language",
      description: "Iske bare me to baat hi nhi karna. isse tatti language to dekhi hi nhi. sab kuch pahle se bna.",
      fee: 20000
    }, {
      srno: 4,
      courseName: "Java Language",
      description: "Java is a versatile language. Every developer should learn this language.",
      fee: 5000
    },
    {
      srno: 5,
      courseName: "C Language",
      description: "This is initial point of every developer. if developer doesn't learn this language. that developer like (Hatt beee)",
      fee: 3000
    },
    {
      srno: 6,
      courseName: "Python Language",
      description: "Iske bare me to baat hi nhi karna. isse tatti language to dekhi hi nhi. sab kuch pahle se bna.",
      fee: 20000
    }, {
      srno: 7,
      courseName: "Java Language",
      description: "Java is a versatile language. Every developer should learn this language.",
      fee: 5000
    },
    {
      srno: 8,
      courseName: "C Language",
      description: "This is initial point of every developer. if developer doesn't learn this language. that developer like (Hatt beee)",
      fee: 3000
    },
    {
      srno: 9,
      courseName: "Python Language",
      description: "Iske bare me to baat hi nhi karna. isse tatti language to dekhi hi nhi. sab kuch pahle se bna.",
      fee: 20000
    }, {
      srno: 10,
      courseName: "Java Language",
      description: "Java is a versatile language. Every developer should learn this language.",
      fee: 5000
    },
    {
      srno: 11,
      courseName: "C Language",
      description: "This is initial point of every developer. if developer doesn't learn this language. that developer like (Hatt beee)",
      fee: 3000
    },
    {
      srno: 12,
      courseName: "Python Language",
      description: "Iske bare me to baat hi nhi karna. isse tatti language to dekhi hi nhi. sab kuch pahle se bna.",
      fee: 20000
    }
  ]);
  const onBuy = (lang) => {
    console.log("Buy Button Clicked! ", lang);
    // Deleting this way react doesn't work.
    // let index=lang.indexOf();
    // courses.slice(index,1);

// React way to delete the item. Just filtering.
    setCourses(courses.filter((e) => {
      return e !== lang;
    }));
  };
  return (
    <>
      <Header title='Xansa IT Solutions' searchBar={true} />
      <Content languages={courses} onBuy={onBuy} />
      <Footer title='Xansa IT Solutions' contact='9770225248' email='veerlodhi54@gmail.com' />
    </>
  );
}

export default App;
