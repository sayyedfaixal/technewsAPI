import "./App.css";
import Search from "./Components/Search";
import Pagination from "./Components/Pagination";
import Stories from "./Components/Stories";
function App() {
  return (
    <>
      <h1>Welcome to Tech News</h1>
      <Search />
      <Pagination />
      <Stories />
    </>
  );
}

export default App;
