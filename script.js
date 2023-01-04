const main = document
const themeColors = main.querySelector(':root')
const colorBtns = main.querySelectorAll('#btn')

colorBtns.forEach(colorBtn => {
    colorBtn.addEventListener('click', event => {
        let mainThemecolor = event.target.dataset.color

        themeColors.style.setProperty('--theme-color', mainThemecolor)
    })
})
