/**
 * «Приміряйте колір»: clicking a swatch repaints the chest of drawers.
 * The SVG shapes with class .tint read their fill from the --paint custom property.
 */
export function initColourPicker(root) {
  if (!root) return

  const swatches = [...root.querySelectorAll('[data-swatch]')]
  const art = root.querySelector('[data-paint-target]')
  const nameEl = root.querySelector('[data-paint-name]')
  const hexEl = root.querySelector('[data-paint-hex]')

  const select = (swatch) => {
    const { name, hex } = swatch.dataset
    swatches.forEach((s) => s.setAttribute('aria-pressed', String(s === swatch)))
    art.style.setProperty('--paint', hex)
    nameEl.textContent = name
    hexEl.textContent = hex
  }

  swatches.forEach((swatch) => swatch.addEventListener('click', () => select(swatch)))
}
