import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import '../styles/portfolio.css';





function Portfolio() {
  
  const portfolio = useSelector((state) => state.portfolios)
  
  // * Test
  console.log(portfolio['solo'].name)
  let portTesting = portfolio['solo'].name;
  
  for(const[key, value] of Object.entries(portfolio)) {
    console.log(value.name)
  }

  // ? Image loads to array
  let logoArray = [];
  for(const[key, value] of Object.entries(portfolio)) {
    logoArray.push(value.logo)
  }
  
  
  // TODO Layout Ports
  // TODO 
  // TODO 

  return (
    <div id='portfolioDiv'>
      {/* <h2>Portfolio</h2> */}
      <h2>Project Highlights</h2>
      {/* <h3>{portTesting}</h3> */}

      <div>
        {
          // for(const[key, value] of Object.entries(portfolio)) {
          //   console.log(value)
          // }

          logoArray.map((logo) => {
            return <img src={logo} alt="Image loading failed." className='logoPreview'/>
          })


        }
        {/* <img src={portfolio['solo'].logo} alt="Image loading failed." /> */}
        {/* {portfolio} */}
      </div>
    </div>
  )

}

export default Portfolio;