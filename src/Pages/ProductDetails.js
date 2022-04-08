import React, { useState, useEffect } from "react";
import Layout from "../Components/Layout";
import { Link, useParams } from "react-router-dom";
import { fetchSingleCockTails } from "../Redux/features/cockTailsSlice";
import { useDispatch, useSelector } from "react-redux";
import SpinnerAnim from "../Components/shared/SpinnerAnim";

const ProductDetails = () => {
  const [modifiedCocktail, setmodifiedCocktail] = useState([]);
  const { loading, cocktail } = useSelector((state) => ({ ...state.app }));
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSingleCockTails({ id }));
  }, [dispatch, id]);

  

  useEffect(() => {
    if (cocktail.length > 0) {
      const {
        strDrink: name,
        strCategory: category,
        strGlass: glass,
        strDrinkThumb: img,
        strInstructions: descrip,
        dateModified:dates,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = cocktail[0]
      const ingrediant = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      ]
      const newCocktail = {
        name,
        category,
        dates,
        descrip,
        glass,
        img,
        ingrediant,
      }

      setmodifiedCocktail(newCocktail)
    } else {
      setmodifiedCocktail(null);
    }
  }, [id, cocktail])

  if (!modifiedCocktail) {
    return <h2>no cocktail details</h2>
  } else {
    const { name, category, dates, descrip, glass, img, ingrediant, } =
      modifiedCocktail
      
      
    return <>
        {loading ? (
          <SpinnerAnim />
        ) : (
          <Layout>
            <div className=" my-20">
              <Link
                to="/"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-9 border border-blue-700 rounded "
              >
                Go Back
              </Link>
            </div>

            <div className="max-h-screen  bg-gray-100  flex flex-col justify-center sm:py-12">
              <div className="py-3 sm:max-w-fit sm:mx-auto">
                <div className="bg-white shadow-lg border-gray-100 max-h-fit	 border sm:rounded-3xl flex space-x-6">
                  <div className="max-h-fit overflow-visible w-96">
                    <img
                      className="rounded-3xl shadow-xl"
                      src={img}
                      alt="img"
                    />
                  </div>
                 
                  <div className="flex flex-col w-4/1 space-y-3">
                    <div className="flex justify-between items-start">
                      <h2 className="text-3xl font-bold">Name : {name}</h2>
                      <div className="bg-yellow-400 font-bold rounded-xl p-2">
                        Category : {category}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Ingrediant : {ingrediant + ","}</div>
                      <div className="text-lg text-gray-800">Glass Type : {glass}</div>
                    </div>
                    <p className=" text-gray-400 max-h-40 overflow-y-hidden">
                     Description : {descrip}
                    </p>
                    <div className="flex text-2xl font-bold text-a">Date : {dates}</div>
                  </div>
                </div>
              </div>
            </div>
          </Layout>
        )}
      </>
    
  }
};

export default ProductDetails;
