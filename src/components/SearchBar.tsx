import { PROXY_URL, YOUTUBE_SEARCH_SUGGESTION_API } from "@/lib/url";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults, selectCacheResults } from "@/lib/searchSlice";
import {useNavigate, Link } from "react-router-dom";

export const SearchBar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [suggestions,setSuggestions]=useState([]);
  const [showSuggestion,setShowSuggestion] = useState(false);
  const [searchQuery,setSearchQuery]= useState("");
  const searchCache = useSelector(selectCacheResults)
  
  useEffect(()=>{
    const timer = setTimeout(()=>{
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery])
      }else{
        getSuggestion()
      }
    },200);

    return ()=>{
      clearTimeout(timer)
    }
  },[searchQuery])

  const getSuggestion =async () => {
      const response = await fetch(PROXY_URL+YOUTUBE_SEARCH_SUGGESTION_API+searchQuery);
      
      const data = await response.json();
      console.log(data)
      setSuggestions(data[1]);

      dispatch(cacheResults({
        [searchQuery]:data[1]
      })
      );
  };

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
                onChange={e=>setSearchQuery(e.target.value)}
                onFocus={()=>setShowSuggestion(true)}
                required={true}
                onKeyDown={(e)=>{
                  if(e.key==="Enter"){
                    setShowSuggestion(false);
                    navigate("/searchResults?q="+searchQuery)
                }

              }}
              />
              <Link to ={"/searchResults?q="+searchQuery}>
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
              </Link>

            </div>
            {showSuggestion&& (
              <div>
                <ul className="absolute z-10 rounded-xl bg-slate-800">
                  {suggestions.map((s)=>(
                    <Link to={"/searchResults?q="+s}>
                    <li key={s}
                    onClick={()=>setShowSuggestion(false)}
                    className=" py-2 px-3 w-full flex items-center gap-4 hover:bg-slate-500"
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
                      {s}
                    </li>
                    </Link>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </form>
      </div>
    );
  };
  