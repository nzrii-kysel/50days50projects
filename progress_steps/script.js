const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++
    if (currentActive === 2) prev.toggleAttribute('disabled')
    if (currentActive === 4) next.toggleAttribute('disabled')
    circles[currentActive - 1].classList.toggle('active')
    progress.style.width = (currentActive - 1) / 3 * 100 + '%'
})

prev.addEventListener('click', () => {
    circles[currentActive - 1].classList.toggle('active')
    currentActive--
    if (currentActive === 1) prev.toggleAttribute('disabled')
    if (currentActive === 3) next.toggleAttribute('disabled')
    progress.style.width = (currentActive - 1) / 3 * 100 + '%'
})
