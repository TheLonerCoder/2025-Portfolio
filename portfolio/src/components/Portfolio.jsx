import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import '../styles/portfolio.css';
import { FaGithub, FaDesktop } from "react-icons/fa";
import { changeProject } from '../data/projectSlice';
import { GrStatusGood as OnlineIcon, GrStatusCritical as OfflineIcon, GrStatusDisabled as MaintainIcon} from "react-icons/gr";




// & Portfolio Component
//#region [White]
function Portfolio() {
  
  const portfolio = useSelector((state) => state.portfolios);
  const dispatch = useDispatch();

  
  // * Test
  console.log(portfolio['solo'].name)
  let portTesting = portfolio['solo'].name;
  
  for(const[key, value] of Object.entries(portfolio)) {
    console.log(value.name)
  }
  
  // ? Image loads to array
  let logoArray = [];

  for(const[key, value] of Object.entries(portfolio)) {
    logoArray.push({id: key, logo: value.logo})
  }

  // ? Get ID of project clicked
  function getID (e) {
    // console.log(e.target.id);
    dispatch(changeProject(e.target.id));
  }
  
  
  // TODO Layout Ports
  // TODO 
  // TODO 
  
  return (
    <div id='portfolioDiv'>
      {/* <h2>Portfolio</h2> */}
      {/* <h2>Project Highlights</h2> */}
      {/* <h3>{portTesting}</h3> */}

      <div>
      
        {
          // for(const[key, value] of Object.entries(portfolio)) {
            //   console.log(value)
            // }
            
            // logoArray.map((logo) => {
            //   return <img src='https://placehold.co/400x250' alt="Image loading failed." className='logoPreview'/>
            //   // return <img src={logo} alt="Image loading failed." className='logoPreview'/>
            // })
            
            
          }

          {
            logoArray.map((project) => {
              return <img src={project.logo} alt="Image loading failed." className='logoPreview popout' id={project.id} onClick={getID}/>
              // return <img src={logo} alt="Image loading failed." className='logoPreview'/>
            })
          }
        {/* <img src={portfolio['solo'].logo} alt="Image loading failed." /> */}
        {/* {portfolio} */}
      </div>
    </div>
  )
  
}

//#endregion



// & Project Selected
//#region [White]

function ProjectSelected () {

  const projectDisplayedID = useSelector((state) => state.project.selected);
  const portfolio = useSelector((state) => state.portfolios);


  // const [ID, setID] = useState(projectDisplayedID)
  
  // const portfolio = useSelector((state) => state.portfolios);
  
  // for (const [key, value] of Object.entries(portfolio)) {
  //   if (key == ID) {
  //     console.log(value)
  //   }
  // }

  return (
    // <h1>
    //   {
    //     projectDisplayedID.length > 0 ? portfolio[projectDisplayedID].name : 'Nothing Selected'
    //       // return (portfolio[projectDisplayedID].name)
        
    //   }
    // </h1>
    <div>

      {
        projectDisplayedID.length > 0 ? 
        <div id='projectDiv'>

        <div id='selectedProject'>
            <div id='selectedProjectTop'>
              {/* <img src="https://placehold.co/300x400" alt="" /> */}
              <img src={portfolio[projectDisplayedID].prev} alt=""  className='projectPreview'/>
              <div id="projectInfo">
                <h2 id="about">About the Project</h2>
                <p className='innerText'>{portfolio[projectDisplayedID].description}</p>
                <h2 id="tech">Technologies Used</h2>
                <img src="https://placehold.co/50x50" alt="" />
                <h2 id="apis">APIs Used</h2>

                <h2 id="status">Status</h2>
                {/* <img src="https://placehold.co/200x50" alt="" /> */}
                <div>
                {portfolio[projectDisplayedID].demo.length > 0 ? <p id='online' className='statusBox'><OnlineIcon />Project Online</p>: <p id='offline' className='statusBox'><MaintainIcon />Offline</p>}
                </div>
                
                  {
                    portfolio[projectDisplayedID].demo.length > 0 ? 
                    <div id='linkButtonDiv'>
                      <button className='linkButton'><a href={portfolio[projectDisplayedID].demo} target='_blank'><FaDesktop /> DEMO</a></button>
                      <button className='linkButton'><FaGithub /> CODE</button>
                    </div> : 'Project is either under maintenance or in development'
                  }
                
              </div>
            </div>

            <div id="selectedProjectBottom">
              <h1 id='projectTitle'>{portfolio[projectDisplayedID].name}</h1>
            </div>
          </div>
        </div>

        
        : <h1 id='explore'>Explore my Portfolio</h1>
        
        
      }
    </div>
  )
}

//#endregion


// // & Project Selected
// //#region [White]

// function ProjectSelected () {

//   const projectDisplayedID = useSelector((state) => state.project.selected);
//   const portfolio = useSelector((state) => state.portfolios);

//   return (
//     <div id='selectedProject'>
//       <div id='selectedProjectTop'>
//         <img src="https://placehold.co/300x400" alt="" />
//         <div id="projectInfo">
//           <h2 id="about">About the Project</h2>
//           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid maiores architecto nostrum voluptate. Rerum vel ipsa adipisci totam. Suscipit numquam ipsam ratione perferendis totam ut unde nisi fuga et.</p>
//           <h2 id="status">Status</h2>
//           <img src="https://placehold.co/200x50" alt="" />
//           <h2 id="tech">Technologies Used</h2>
//           <img src="https://placehold.co/50x50" alt="" />
//           <h2 id="apis">APIs Used</h2>

//           <div>
//             <button><FaDesktop /> DEMO</button>
//             <button><FaGithub /> CODE</button>
//           </div>
//         </div>
//       </div>

//       <div id="selectedProjectBottom">
//         <h1>Title</h1>
//       </div>
//     </div>
//   )
// }

// //#endregion



export {Portfolio, ProjectSelected};