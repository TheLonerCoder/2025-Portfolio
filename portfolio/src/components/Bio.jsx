import React, { useState } from 'react';




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
      <h1 onMouseEnter={nameChange} onMouseLeave={nameChangeBack}>Hello! I'm {name}</h1>
      <h4>I'm a {underName}</h4>

      <p>I'm a React-focused Web Developer (MERN-Stack) with some experience in Python. I got my first taste of code with a 3 month Android App development Bootcamp back in 2019 and eventually went on to receive my certification from Nucamp (for Full Stack MERN Web Development).</p>

      <p>My projects are passion-focused, pertaining to immersive technologies, exoplanets/space, entrepreneurship, learning languages, and music.</p>

      <div>
        <div>
          <a href="">Git</a>
          <a href="">YT</a>
          <a href="">IN</a>
        </div>

        <div>
          <b>Email Me</b>
          <b>Resume</b>
          <b>Projects</b>
        </div>
      </div>

    </div>
  )
}

export default Bio;