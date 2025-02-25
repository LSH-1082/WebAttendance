import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage";

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/People" element={<MainPage/>}/>
        <Route path="/People/:userName" element={<MainPage/>}/>
        <Route path="/Analytics" element={<MainPage/>}/>
        <Route path="*" element={<><h1>404 Not Found</h1></>}/>
      </Routes>
    </BrowserRouter>
  );
}