
import { SearchBar } from "./SearchBar"

export const Appbar = ()=>{
    
    return <div className="flex justify-between pt-3 px-6 ">

        <a href="/"
        className="hover:cursor-pointer"
        >
        Youtube
        </a>

        <div className="w-5/12">
            <SearchBar/>
        </div>

        <div>
            Sign In
        </div>

    </div>
}