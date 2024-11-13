import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import '../styles/portfolio.css';
import { FaGithub, FaDesktop } from "react-icons/fa";




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
            return <img src='https://placehold.co/400x250' alt="Image loading failed." className='logoPreview'/>
            // return <img src={logo} alt="Image loading failed." className='logoPreview'/>
          })


        }
        {/* <img src={portfolio['solo'].logo} alt="Image loading failed." /> */}
        {/* {portfolio} */}
      </div>
    </div>
  )

}



function ProjectSelected () {
  return (
    <div id='selectedProject'>
      <div id='selectedProjectTop'>
        <img src="https://placehold.co/300x400" alt="" />
        <div id="projectInfo">
          <h2 id="about">About the Project</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid maiores architecto nostrum voluptate. Rerum vel ipsa adipisci totam. Suscipit numquam ipsam ratione perferendis totam ut unde nisi fuga et.</p>
          <h2 id="status">Status</h2>
          <img src="https://placehold.co/200x50" alt="" />
          <h2 id="tech">Technologies Used</h2>
          <img src="https://placehold.co/50x50" alt="" />
          <h2 id="apis">APIs Used</h2>

          <div>
            <button><FaDesktop /> DEMO</button>
            <button><FaGithub /> CODE</button>
          </div>
        </div>
      </div>

      <div id="selectedProjectBottom">
        <h1>Title</h1>
      </div>
    </div>
  )
}

export {Portfolio, ProjectSelected};