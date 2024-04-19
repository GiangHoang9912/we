import { createRoot } from 'react-dom/client'
import './styles.css'
import { App } from './App'

const imagesUrl = [
  {
    url: 'https://i.postimg.cc/g0jbbkXG/IMG-5841.jpg',
    name: 'yêu em'
  },
  {
    url: 'https://i.postimg.cc/pdSbWbzz/IMG-0537.jpg',
    name: 'yêu em'
  },
  {
    url: 'https://i.postimg.cc/4dhzMVXV/IMG-2869.jpg',
    name: 'yêu em'
  },
  {
    url: 'https://i.postimg.cc/Dy36XvT5/IMG-1977.jpg',
    name: 'yêu em'
  },
  {
    url: 'https://i.postimg.cc/XYQ6Pyv2/IMG-2641-2.jpg',
    name: 'yêu em'
  },
  {
    url: 'https://i.postimg.cc/tCbhSswn/IMG-5235.jpg',
    name: 'yêu em'
  },
  {
    url: 'https://i.postimg.cc/RZMzGTv6/IMG-2641-4.jpg',
    name: 'yêu em'
  },
  {
    url: 'https://i.postimg.cc/TPsVCCvT/IMG-2641.jpg',
    name: 'yêu em'
  },
  {
    url: 'https://i.postimg.cc/j20zr2j9/IMG-5761.jpg',
    name: 'Tai nghe babie nè'
  }
]

// const images = [
//   // Front
//   { position: [0, 0, 1.5], rotation: [0, 0, 0], url: imagesUrl[0].url, name: imagesUrl[0].name },
//   // Back
//   { position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url: imagesUrl[1].url, name: imagesUrl[1].name },
//   { position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: imagesUrl[2].url, name: imagesUrl[2].name },
//   // Left
//   { position: [-1.75, 0, 0.25], rotation: [0, Math.PI / 2.5, 0], url: imagesUrl[3].url, name: imagesUrl[3].name },
//   { position: [-2.15, 0, 1.5], rotation: [0, Math.PI / 2.5, 0], url: imagesUrl[4].url, name: imagesUrl[4].name },
//   { position: [-2, 0, 2.75], rotation: [0, Math.PI / 2.5, 0], url: imagesUrl[5].url, name: imagesUrl[5].name },
//   // Right
//   { position: [1.75, 0, 0.25], rotation: [0, -Math.PI / 2.5, 0], url: imagesUrl[6].url, name: imagesUrl[6].name },
//   { position: [2.15, 0, 1.5], rotation: [0, -Math.PI / 2.5, 0], url: imagesUrl[7].url, name: imagesUrl[7].name },
//   { position: [2, 0, 2.75], rotation: [0, -Math.PI / 2.5, 0], url: imagesUrl[8].url, name: imagesUrl[8].name }
// ]

const images = imagesUrl.map((image, index) => {
  const spacing = 3; // Adjust this value to control the spacing between images
  const x = (index % 3 - 1) * spacing;
  const z = Math.floor(index / 3) * spacing;
  return {
    position: [x, 0, z],
    rotation: [0, 0, 0],
    url: image.url,
    name: image.name
  };
});


createRoot(document.getElementById('root')).render(<App images={images} />)
