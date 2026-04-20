import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = () => <h1>Home Page</h1>;
const Careers = () => <h1>Careers Page</h1>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;