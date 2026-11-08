// Before/after works shown in the «Було / Стало» gallery, in tab order (01–05).
//
// The images below are placeholder textures. Replace them with Тетяна's real
// before/after photos: drop the files into src/assets/photos/ and import them here.
// Keep each pair the same aspect ratio (the slider frame is 16:9) and framing.

import worn from '../assets/textures/worn-paint.jpg'
import paintGreen from '../assets/textures/paint-green.jpg'
import paintSaffron from '../assets/textures/paint-saffron.jpg'
import walnut from '../assets/textures/walnut.jpg'
import linen from '../assets/textures/linen.jpg'

export const works = [
  { title: '[Назва речі]', note: '[що саме зроблено]', before: worn, after: paintGreen },
  { title: '[Назва речі]', note: '[що саме зроблено]', before: worn, after: walnut },
  { title: '[Назва речі]', note: '[що саме зроблено]', before: worn, after: paintSaffron },
  { title: '[Назва речі]', note: '[що саме зроблено]', before: worn, after: linen },
  { title: '[Назва речі]', note: '[що саме зроблено]', before: worn, after: paintGreen },
]
