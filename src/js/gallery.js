import { works } from '../content/works.js'

const clamp = (value, min, max) => Math.min(max, Math.max(min, value))
const pad = (n) => String(n).padStart(2, '0')

/**
 * «Було / Стало» gallery: a draggable before/after comparison plus tabs
 * that switch between the works listed in src/content/works.js.
 *
 * Mouse, touch and pen drag via Pointer Events; keyboard and screen readers
 * use the visually hidden range input (arrow keys, Home/End).
 */
export function initGallery(root) {
  if (!root) return

  const stage = root.querySelector('[data-compare]')
  const range = root.querySelector('[data-range]')
  const before = root.querySelector('[data-before]')
  const after = root.querySelector('[data-after]')
  const tabs = [...root.querySelectorAll('[data-work]')]
  const captionNum = root.querySelector('[data-caption-num]')
  const captionText = root.querySelector('[data-caption-text]')

  const setPosition = (percent) => {
    const pos = clamp(percent, 0, 100)
    stage.style.setProperty('--pos', `${pos}%`)
    range.value = String(Math.round(pos))
  }

  const positionFromPointer = (event) => {
    const rect = stage.getBoundingClientRect()
    setPosition(((event.clientX - rect.left) / rect.width) * 100)
  }

  stage.addEventListener('pointerdown', (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return
    stage.setPointerCapture(event.pointerId)
    positionFromPointer(event)
  })

  stage.addEventListener('pointermove', (event) => {
    if (stage.hasPointerCapture(event.pointerId)) positionFromPointer(event)
  })

  range.addEventListener('input', () => setPosition(Number(range.value)))

  const selectWork = (index) => {
    const work = works[index]
    if (!work) return
    const label = `Робота ${pad(index + 1)}`

    before.src = work.before
    before.alt = `${label}: фото до реставрації`
    after.src = work.after
    after.alt = `${label}: фото після реставрації`

    captionNum.textContent = label.toUpperCase()
    captionText.textContent = `${work.title} · ${work.note}`

    tabs.forEach((tab, i) => tab.setAttribute('aria-pressed', String(i === index)))
    setPosition(50)
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => selectWork(Number(tab.dataset.work)))
  })

  // Warm the cache so switching tabs doesn't flash
  const preload = () => {
    new Set(works.flatMap((w) => [w.before, w.after])).forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }
  if ('requestIdleCallback' in window) requestIdleCallback(preload)
  else setTimeout(preload, 1500)

  // works.js is the source of truth; the first pair in index.html is the no-JS fallback
  selectWork(0)
}
