import Home from "./views/Home";
import AddCard from "./views/AddCard";
import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";

function App() {
  const [heading, setHeading] = useState("");
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home setHeading={setHeading} />,
    },
    {
      path: "/addcard",
      element: <AddCard setHeading={setHeading} />,
    },
  ]);

  return (
    <div className="App">
      <Header heading={heading} />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;