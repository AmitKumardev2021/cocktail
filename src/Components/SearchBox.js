import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchCockTails } from "../Redux/features/cockTailsSlice";

const SearchBox = () => {
 

    const searchTerm = useRef();
    const dispatch = useDispatch();
  
    const handleChange = () => {
      const searchText = searchTerm.current.value;
      dispatch(fetchSearchCockTails({ searchText }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
    };
 
 
 
 
//     const searchTerm = useRef();
//   const dispatch = useDispatch();

//   const handleChange = () => {
//     const searchText = searchTerm.current.value;
//     dispatch(fetchSearchCockTails({ searchText }));
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };
  return (
    <>
      <div className="pt-2 flex justify-center  mx-auto text-gray-600 mt-20">
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            className="border-2 border-gray-300 bg-white w-80 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            name="search"
            placeholder="Search"
            ref={searchTerm}
          />
        </form>
      </div>
    </>
  );
};

export default SearchBox;
