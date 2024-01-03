
import { Button } from "./ui/button";
import {selectCurrentCategory, setCategory } from "@/lib/CategorySlice";
import { useDispatch, useSelector } from "react-redux";

const list = [
  "All","Music", "Comedy", "Cricket", "Coding",
  "Shopping", "Trailers","News",
];

function CategoryList() {
  const dispatch = useDispatch()
  const currentCategory = useSelector(selectCurrentCategory)
  const onclick = async(category:string)=>{

    dispatch(setCategory(category));

  }
  return (
    <div className="mx-5 mt-5 flex flex-wrap gap-3">
      {list.map((category: string, index) => (
        <div key={index}>
          <Button
            onClick={() => {
              onclick(category)
            }}
            className={`rounded-xl ${
              currentCategory === category
                ? "bg-white text-black hover:bg-slate-500"
                : "bg-gray-800 text-white hover:bg-slate-800"
            }`}
          >
            {category}
          </Button>
        </div>
      ))}
    </div>
  );
}

export default CategoryList;
