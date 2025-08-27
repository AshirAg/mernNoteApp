import { Route, Routes} from "react-router";
import toast from "react-hot-toast";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Details from "./pages/Details";

const App = () => {
  return (
    <div data-theme="retro">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/details/:id" element={<Details/>} />
      </Routes>
    </div>
  )
}

export default App