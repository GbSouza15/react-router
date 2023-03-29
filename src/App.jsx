import './App.css'
import Nav from "./components/Nav.jsx";
import { Outlet } from "react-router-dom";
import { useMemo } from "react";

function MemoizedOutlet() {
    return <Outlet />;
}

function App() {

    const memoizedOutlet = useMemo(() => <MemoizedOutlet />, []);

  return (
    <div className="App">
        <Nav/>
        {memoizedOutlet}
    </div>
  )
}

export default App
