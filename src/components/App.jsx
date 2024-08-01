import "../assets/css/App.css";
import Hero from "../components/Hero";
import Footer from "./Footer";
import DrinkGrid from "./Grid";
import Nav from "./Nav";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchResults from "./SearchResults";
import DrinkPage from "./DrinkPage";
import SearchModal from "./SearchModal"; // Import SearchModal

const routes = [
  {
    path: "/",
    element: (
      <>
        <Nav />
        <Hero />
        <DrinkGrid />
        <Footer />
      </>
    ),
  },
  {
    path: "/SearchResults",
    element: <SearchResults />,
  },
  {
    path: "/drink/:drinkId",
    element: <DrinkPage />,
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <RouterProvider router={router}>
      <SearchModal />
    </RouterProvider>
  );
}

export default App;
