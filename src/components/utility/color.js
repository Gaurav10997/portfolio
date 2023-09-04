const style = getComputedStyle(document.body)

export const  color = {
    red:style.getPropertyValue('--red-color'),
    black:style.getPropertyValue('--bg-color')
}

