import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";

import SignIn from "./components/SignIn";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
