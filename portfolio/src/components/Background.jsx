import React from 'react';
import '../styles/background.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { IoMdArrowDropright as RightArrow, IoMdArrowDropleft as LeftArrow } from "react-icons/io";



function Background() {
  return (
    <div id='background'>
      <h1>Education & Background</h1>
      
      <div id="education">
        <div id='certDiv'>
          <h2>Certifications</h2>
          <a href="../../public/imgs/NucampCert.pdf" target='_blank'><img src="../../public/imgs/cert.webp" alt="" id='cert' className='popout'/></a>
          <h2><a href="https://www.nucamp.co/">Nucamp</a></h2>
          <p>(Full Stack & Mobile Development)</p>
        </div>

        <div>
              <h2>My Web Development Journey</h2>
              <CarouselProvider
                naturalSlideWidth={100}
                // naturalSlideHeight={125}
                naturalSlideHeight={50}
                totalSlides={5}
              >
                  <Slider>
                    <Slide index={0}>
                      <h3>Introduction to Coding</h3>
                      <p className='innerText'>I started my journey into coding with an 8 Week Android App Development & Entrepreneurship Bootcamp (One Summer Chicago - St. Sabina). At the time, I was heavily invested in learning about entrepreneurship and felt i could get an edge by learning to code.</p>
                    </Slide>
                    <Slide index={1}>
                      <h3>Python</h3>
                      <p className='innerText'>Eventhough I enjoyed coding, I had no specific interest in mobile development. So I experimented with Python and basic HTML/CSS. I created a few basic programs and websites.</p>
                    </Slide>
                    <Slide index={2}>
                      <h3>Introduction to Javascript</h3>
                      <p className='innerText'>I did more research and learned towards Web Development, especially since I already knew HTML/CSS at this point. Because I had prior Python knowledge, I found the basic syntax fairly easy to pickup.</p>
                    </Slide>
                    <Slide index={3}>
                      <h3>Taking Web Development Seriously</h3>
                      <p className='innerText'>It wasn't until 2021 where I doubled down and saw Web Development as a career. So I started my Youtube Channel where I documented some of my journey.</p>
                    </Slide>
                    <Slide index={4}>
                      <h3>Bootcamp</h3>
                      <p className='innerText'>I then attended another Bootcamp (Nucamp) after taking Udemy Courses to solidfy what I was learning in a classroom setting.</p>
                    </Slide>
                    <Slide index={5}>

                    </Slide>
                  </Slider>
                  <ButtonBack className='linkButton'><LeftArrow size={30}/></ButtonBack>
                  <ButtonNext className='linkButton'><RightArrow size={30}/></ButtonNext>
                  {/* <ButtonBack className='linkButton'>Back</ButtonBack>
                  <ButtonNext className='linkButton'>Next</ButtonNext> */}
              </CarouselProvider>
          </div>
        </div>


        {/* <h2>St. Sabina (8 Week Program - 2019)</h2>
        <p>Android App Development & Entrepreneurship</p>
      */}
    </div>
  )
}

export default Background