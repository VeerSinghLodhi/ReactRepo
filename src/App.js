import './App.css';
import Header from "./MyComponents/Header"
import Content from "./MyComponents/Content"
import Footer from './MyComponents/Footer';
import AddCourse from './MyComponents/AddCourse';
import About from './MyComponents/About';
import Facilities from './MyComponents/Facilities';
import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";

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

  const addCourse = (srno, courseName, description, fee) => {
    const newCourse = {
      srno: srno,
      courseName: courseName,
      description: description,
      fee: fee
    }
    console.log("Course Details ", newCourse);
    setCourses([...courses, newCourse]);
  }


  return (
     <>
     <Header title='Xansa IT Solutions' searchBar={true} />
      <Routes>
        
        <Route path="/" element={
          <>
          <AddCourse addCourse={addCourse} courses={courses} />
          <Content languages={courses} onBuy={onBuy} /> 
          </>
        } />

        <Route path="/about" element={<About />} />

        <Route path="/facilities" element={<Facilities />} />

      </Routes>
         <Footer title='Xansa IT Solutions' contact='9770225248' email='veerlodhi54@gmail.com' />
    </>
  );
}

export default App;

