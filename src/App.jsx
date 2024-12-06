import Footer from "./assets/components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./assets/components/header";
import TaskList from "./assets/components/tasks/Tasks";
import Home from "./assets/components/home";
import TaTeTi from './assets/components/tatetiGame/tateti' 
import './App.css'


const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tasks" element={<TaskList/>} />
      <Route path="/tateti" element={<TaTeTi/>} />
    </Routes>
    <Footer />
  </BrowserRouter>
  );
};

export default App;
