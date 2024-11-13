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
    <div>
      <div id="heading">
        <h1 onMouseEnter={nameChange} onMouseLeave={nameChangeBack}>Hello! I'm {name}</h1>
        <h4>I'm a {underName}</h4>
      </div>

      <div id="descriptionDiv">
        <div id="description">
          <div>
            <p>I'm a React-focused Web Developer (MERN-Stack) with some experience in Python. I got my first taste of code with a 3 month Android App development Bootcamp back in 2019 and eventually went on to receive my certification from Nucamp (for Full Stack MERN Web Development).</p>

            <p>My projects are passion-focused, pertaining to immersive technologies, exoplanets/space, entrepreneurship, learning languages, and music.</p>
          </div>

          <img src="https://placehold.co/300x300" alt="" />
        </div>


        <div id='linkDiv'>
          {/* <a href=""><GithubCircle size={40}/> </a> */}
          <a href=""><FaGithub size={32}/> </a>
          <a href=""><YoutubeCircle size={40}/> </a>
          <a href=""><LinkedCircle size={40}/> </a>
          {/* <a href=""><FaYoutube size={30}/> </a> */}
          {/* <a href=""><FaLinkedin size={30}/> </a> */}
          {/* <a href=""><FaGithub /> Github</a>
          <a href=""><FaYoutube /> Youtube</a>
          <a href=""><FaLinkedin /> Indeed</a> */}
        </div>
      </div>

      <div>

        <div id='bioButtonDiv'>
          <button><MdEmail /> Email Me</button>
          <button><IoMdDownload /> Resume</button>
          <button><FaProjectDiagram /> Projects</button>
        </div>
      </div>

    </div>
  )
}

export default Bio;