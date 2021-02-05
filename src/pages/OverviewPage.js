import React from "react";
import styled from "styled-components";

import RecipeCard from "components/RecipeCardComponent";
import { recipes } from "../constants";

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default () => {
  return (
    <StyledWrapper>
      {
        recipes.map(r => 
          <RecipeCard key={r.day + "-" + r.name} imageSrc={r.imageSrc} day={r.day} name={r.name}/>
        )
      }
      {/* <p>{context}</p> */}
    </StyledWrapper>
  );
}