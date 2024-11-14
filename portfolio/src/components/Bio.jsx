import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaProjectDiagram, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";
import { TiSocialYoutubeCircular as YoutubeCircle, TiSocialLinkedinCircular as LinkedCircle, TiSocialGithubCircular as GithubCircle } from "react-icons/ti";
import '../styles/bio.css';



// Web Developer, Entrepreneur, Tech-enthuesist

function Bio() {

  const [name, changeName] = useState('Stephon Stokley');
  const [underName, setUnderName] = useState('Web Developer');

  // ? Change name on hover
  let nameChange = () => {
    changeName('The Loner Coder');
  }

  let nameChangeBack = () => {
    changeName('Stephon Stokley');
  }

  return (
    <div id='bioDiv'>
      <div id='bioTop'>

      <div id="heading">
        <h1 onMouseEnter={nameChange} onMouseLeave={nameChangeBack}>Hello! I'm <span className='highlights' id='name'>{name}</span></h1>
        <h2 id='undername'>I'm a {underName}</h2>
      </div>

      <div id="descriptionDiv">
        <div id="description">
          <div id='me' className='innerText'>
            <p>I'm a React-focused Web Developer (MERN-Stack) with some experience in Python. I got my first taste of code with a 3 month Android App development Bootcamp back in 2019 and eventually went on to receive my <span className='highlights'>certification from Nucamp</span> (for Full Stack MERN Web Development).</p>

            <p>My projects are passion-focused, pertaining to immersive technologies, exoplanets/space, entrepreneurship, learning languages, and music.</p>
          </div>

          {/* <img src="https://placehold.co/300x300" alt="" /> */}
          <img src="../../public/imgs/portrait.png" alt="" id='portrait' className='popout'/>
        </div>


        <div id='linkDiv'>
          {/* <a href=""><GithubCircle size={40}/> </a> */}
          <a href="" className='popout' id='gitLogo'><FaGithub size={32}/> </a>
          <a href="" className='popout'><YoutubeCircle size={40}/> </a>
          <a href="" className='popout'><LinkedCircle size={40}/> </a>
          {/* <a href=""><FaYoutube size={30}/> </a> */}
          {/* <a href=""><FaLinkedin size={30}/> </a> */}
          {/* <a href=""><FaGithub /> Github</a>
          <a href=""><FaYoutube /> Youtube</a>
          <a href=""><FaLinkedin /> Indeed</a> */}
        </div>
      </div>
      </div>

      <div>

        <div id='bioButtonDiv'>
          <button className='highlightButtons'><MdEmail /> <span>Email Me</span></button>
          <button className='highlightButtons'><IoMdDownload /> <span>Resume</span></button>
          <button className='highlightButtons'><FaProjectDiagram /> <span>Projects</span></button>
        </div>
      </div>

    </div>
  )
}

export default Bio;