import { createSlice } from "@reduxjs/toolkit";




export const portSlice = createSlice({
  name: 'portfolio',
  initialState: {
      ftf : {
        name: 'Forge The Fort',
        logo: '/imgs/Forge-the-Fort.jpg',
        prev: '/imgs/ftf.webp',
        gif: '',
        description: 'A hub for connecting people in underserved/overlooked cities across the midwest. This hub connects innovators, investors, community leaders, civilians, politicians, etc all in one place to find solutions for their specific problems, connecting people from surrounding districts, counties, cities, and - even - states. The ultimate goal is to provide people with the tools and knowledge to build up their own cities here in the Midwest.',
        tech: ['bootstrap', 'sass', 'javascript', 'html', 'css'],
        apis: {
            used: false,
        },
        demo: '',
        codebase: 'https://github.com/TheLonerCoder/ForgeTheFort',
        founders: '',
        concept: false

    },

    vrworld: {
        name: 'VR World',
        logo: '/imgs/VR-WORLD.jpg',
        prev: '/imgs/progress.png',
        gif: '',
        description: "A fake landing page for a VR-based company. This company specializes in VR and immersive technology and connects it's userbase to the metaverse with music.",
        tech: ['react', 'vite', 'sass', 'javascript', 'html', 'css'],
        apis: {
            used: false,
        },
        demo: '',
        codebase: 'https://github.com/TheLonerCoder/VR-World',
        founders: '',
        concept: false

    },

    solo: {
        name: 'Solo Innovations',
        logo: '/imgs/solo.jpg',
        prev: '/imgs/solo.webp',
        gif: '',
        description: "A startup management app. Following principles from The Lean Startup, this whiteboard-styled app is designed to help you organize your thoughts from ideation to product.",
        tech: ['react', 'sass', 'javascript', 'html', 'css'],
        apis: {
            used: false,
        },
        demo: 'https://www.solo-innovations.com',
        codebase: 'https://github.com/TheLonerCoder/Solo-Innovations',
        founders: '',
        concept: false

    },

    worldla: {
        name: 'Worldla',
        logo: '/imgs/worlda-green.jpg',
        prev: '/imgs/worldla-prev.webp',
        gif: '',
        description: "A platform where you can become more aware of how learning a language opens up doors. It'll give resources to learn languages, show you where you can use them, etc.",
        tech: ['react', 'sass', 'javascript', 'html', 'css'],
        apis: {
            used: false,
        },
        demo: '',
        codebase: 'https://github.com/TheLonerCoder/Worldla',
        founders: '',
        concept: false

    },


    imhere: {
        name: "I'm Here",
        logo: '/imgs/im-here.png',
        prev: '/imgs/progress.png',
        gif: '',
        description: "A portal with both a student and teacher can log into and show they're in attendance in their class.",
        tech: ['react', 'bootstrap', 'sass', 'javascript'],
        apis: {
            used: false,
        },
        demo: '',
        codebase: '',
        founders: '',
        concept: true

    }
  },
  reducers: {}

})



export default portSlice.reducer;

