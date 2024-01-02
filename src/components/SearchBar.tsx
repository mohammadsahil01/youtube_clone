

export const SearchBar = () => {
    return (
      <div>
        <form>
          <div>
            <div className="relative block">
              <input
                type="search"
                id="search-dropdown"
                className=" caret-white p-2.5 text-sm bg-black rounded-full border-l-2 border border-gray-600 w-full dark:bg-gray-700 dark:border-l-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Search"
                required
              />
              <button
                type="submit"
                className="absolute top-0 right-0 p-2.5 px-5 text-sm font-medium h-full text-white bg-gray-900 rounded-r-full border border-gray-600 focus:outline-none focus:ring-blue-300"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </button>

            </div>
          </div>
        </form>
      </div>
    );
  };
  