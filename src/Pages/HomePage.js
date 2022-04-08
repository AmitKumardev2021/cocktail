import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCockTails } from "../Redux/features/cockTailsSlice";
import SpinnerAnim from "../Components/shared/SpinnerAnim";
import {Link} from 'react-router-dom'
import Layout from "../Components/Layout";



const HomePage = () => {
  const [modifiedCocktails, setmodifiedCocktails] = useState([]);
  const { Loading, cocktails, error } = useSelector((state) => ({
    ...state.app,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCockTails());
  }, [dispatch]);

  useEffect(() => {
    if (cocktails) {
      const newCocktails = cocktails.map((item) => {
        // doing destructure
        const {
          idDrink,
          strDrink,
          strCategory,
          strGlass,
          strInstructions,
          strDrinkThumb,
          dateModified,
        } = item;
        return {
          id: idDrink,
          name: strDrink,
          img: strDrinkThumb,
          info: strInstructions,
          catogary: strCategory,
          glass: strGlass,
          ddate: dateModified,
        };
      });
      setmodifiedCocktails(newCocktails);
    } else {
      setmodifiedCocktails([]);
    }
  }, [cocktails]);

  if (Loading) {
    return <SpinnerAnim />;
  }

  if(!cocktails){
    return <Layout> <h2>No cocktails with this Search.</h2></Layout>
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    
    
      <div className="md:container md:mx-auto mt-4   ">

        <div className="grid grid-cols-3 gap-5  ">
          {modifiedCocktails.map((item) => (
            <div key={item.id}>
              <Link to={`/products/${item.id}`}>
              <div className="max-w-sm rounded overflow-hidden shadow-xl">
                <img className="w-full " src={item.img} alt="Cocktail images" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{item.name}</div>
                  <p className="text-gray-700 text-base">{item.info}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #{item.catogary}
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #{item.glass}
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    Date : {item.ddate}
                  </span>
                </div>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    
  );
};

export default HomePage;
