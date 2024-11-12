import React from 'react';
import { useDispatch, useSelector } from "react-redux";




function Portfolio() {

  const portfolio = useSelector((state) => state.portfolios)
  
  // * Test
  console.log(portfolio['solo'].name)
  let portTesting = portfolio['solo'].name;

  // TODO Layout Ports
  // TODO 
  // TODO 
  

  return (
    <div>
      <h2>Portfolio</h2>
      <h3>{portTesting}</h3>
    </div>
  )

}

export default Portfolio;