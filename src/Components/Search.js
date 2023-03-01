import { useGlobalContext } from "../context";
const Search = () => {
  const { query, searchPost } = useGlobalContext();
  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            placeholder="Search here"
            value={query}
            onChange={(e) => searchPost(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
