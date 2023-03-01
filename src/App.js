import "./App.css";
import Search from "./Components/Search";
import Pagination from "./Components/Pagination";
import Stories from "./Components/Stories";
function App() {
  return (
    <>
      <h1>Welcome to Tech News</h1>
      <p>You can search any Tech news by typing the keyword</p>
      <Search />
      <Pagination />
      <Stories />
    </>
  );
}

export default App;
