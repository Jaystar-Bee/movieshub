import Movies from "./../components/common/Movies";

const SearchView = () => {
  return (
    <div>
      <form className="flex gap-4 mb-10 container">
        <input
          type="text"
          placeholder="search movies"
          spellCheck
          className="px-6 py-2 rounded-md bg-dark-light w-[32rem] outline-none border-none"
        />
        <button type="submit" className="bg-primary-green py-2 px-6 rounded-md">
          {" "}
          Search
        </button>
      </form>
      <Movies />
    </div>
  );
};

export default SearchView;
