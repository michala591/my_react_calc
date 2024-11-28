import './App.css';
import './Calc.css';
import Footer from './components/Footer';
import Counter from './components/Counter';
import Header from './components/Header';
import BasicCalc from './components/BasicCalc';
import Students from './components/Students';
import { useState } from 'react';
import StudentsList from './components/StudentsList';
import FullCalc from './components/FullCalc';

function App() {
  const [students, setStudents] = useState([]);


  return (
    <>
      <Header />
      <FullCalc />
      <Students students={students} setStudents={setStudents} />
      <StudentsList students={students} />
      <BasicCalc />
      <Counter />
      <Footer />

    </>
  );
}

export default App;
