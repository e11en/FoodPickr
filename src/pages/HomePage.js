import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";

import MainContext from 'context';
import RecipeCard from "components/RecipeCardComponent";
import { days, recipes } from "../constants";

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default ({updateContext}) => {
  //const [weekRecipes, setWeekRecipes] = useState([]);
  const context = useContext(MainContext);

  const getRandomRecipe = () => {
    return recipes[Math.floor((Math.random() * recipes.length))];
  };

  useEffect(() => {
    const newWeek = [];

    days.forEach(day => {
      const randomRecipe = getRandomRecipe();
      newWeek.push(
        {
          day: day,
          imageSrc: randomRecipe.imageSrc,
          name: randomRecipe.name
        }
      );
    });

    //setWeekRecipes(newWeek);
    updateContext(newWeek);
  }, []);

  const switchRecipe = (day) => {
    var arr = context;
    var recipeToSwitch = arr.filter(recipe => recipe.day === day)[0];
    const randomRecipe = getRandomRecipe();
    recipeToSwitch.imageSrc = randomRecipe.imageSrc;
    recipeToSwitch.name = randomRecipe.name;
    arr[arr.indexOf(recipeToSwitch)] = recipeToSwitch;
    
    updateContext([...arr]);
    //setWeekRecipes([...arr]);
  };

  return (
    <StyledWrapper>
      {
        context.map(r => 
          <RecipeCard key={r.day + "-" + r.name} onSwitch={() => switchRecipe(r.day)} imageSrc={r.imageSrc} day={r.day} name={r.name}/>
        )
      }
      <p>{context}</p>
    </StyledWrapper>
  );
}