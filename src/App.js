import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./page/detail";
import Home from "./page/home";
import "./App.css";
import Header from "./components/header";
import SearchBar from "./components/SearchBar";
import Localization from "./components/localization";
function App() {
  return (
    <>
      <Header></Header>
      <div className="searchlocalContainer">
        <SearchBar></SearchBar>
        <Localization></Localization>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
