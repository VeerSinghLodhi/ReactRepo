import './App.css';
import Header from "./MyComponents/Header"
import Content from "./MyComponents/Content"
import Footer from './MyComponents/Footer';
function App() {
  return (
    <>
      <Header title='Xansa IT Solutions' searchBar={true} />
      <Content />
      <Footer title='Xansa IT Solutions' contact='9770225248' email='veerlodhi54@gmail.com' />
    </>
  );
}

export default App;
