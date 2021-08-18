import React, { useState } from "react";

const Search = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };
  return (
    <>
      <form
        onSubmit={onSubmit}
        className="p-4 max-w-sm overflow-hidden my-10 mx-auto"
      >
        <div className="bg-white flex items-center rounded-full shadow-xl">
          <input
            onChange={(e) => setText(e.target.value)}
            className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
            id="search"
            type="text"
            placeholder="Search images ..."
          />

          <div className="p-4">
            <button
              className="hover:bg-blue-400 flex items-center text p-2 border-4 rounded-full 
      justify-center"
              type="submit"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Search;
