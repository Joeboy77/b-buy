import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/header";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

const MyContext = createContext()

function App() {

  const [countryList, setCountryList] = useState([])
  const [selectedCountry, setSelectedCountry] = useState('')

  const getCountry = async(url) => {
    const response = await axios.get(url).then((res) => {
      setCountryList(res.data.data)
      console.log(res.data.data);
      
    })
  }

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/")
  }, [])

  const values = {
    countryList,
    setSelectedCountry,
    selectedCountry
  }

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
      <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />}/>
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export {MyContext}
