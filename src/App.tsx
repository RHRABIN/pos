import './App.css'
import { Route, Routes } from "react-router-dom";
import Test from "./components/Test";
import Details from "./components/Details";

function App() {


  return (
    <>
      <h1 className='text-2xl font-bold mb-6 border-b'>POS Inventory</h1>
      <Routes>

        <Route path="/" element={<Test />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </>
  )
}

export default App
