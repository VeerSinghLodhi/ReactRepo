import './App.css';
import Header from "./MyComponents/Header"
import Content from "./MyComponents/Content"
import Footer from './MyComponents/Footer';
function App() {
  return (
    <>
      <Header title='Xansa IT Solutions' searchBar={true} />
      <Content />
      <Footer />
    </>
  );
}

export default App;
