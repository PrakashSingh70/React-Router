# React-Routing With Tailwindcss

## create vite project

npm create vite@latest my-project
cd my-project
npm install


## Use React- Router install 
 npm i react-router-dom

## Use Tailwind 

npm install tailwindcss @tailwindcss/vite

## Add this in Vite configuration file.

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})

 ## Add an @import to your CSS file that imports Tailwind CSS.
 
 @import "tailwindcss";
 


## start vite Project

npm run dev

