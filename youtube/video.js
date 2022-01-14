if(window)
    window.addEventListener("load", () => setTimeout(initBooster, 500))

function initBooster() {
    if(document.getElementById('youtube-accelerator-input')) return true

    // Video
    const video = document.querySelector('video.video-stream.html5-main-video')
    
    // Input Element
    const input = document.createElement('input')
    // Attributes
    input.id = 'youtube-accelerator-input'
    input.type = 'number'
    input.min = '0.1'
    input.max = '16'
    input.step = '0.1'
    // Style
    input.style.height = '1.3em'
    input.style.width = '3.6em'
    input.style.borderStyle = 'groove'
    input.style.borderRadius = '0'
    input.style.outline = 'none'
    
    // Button Element
    const button = document.createElement('button')
    // Attributes
    button.innerHTML = `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="red" d="M13,6V18L21.5,12M4,18L12.5,12L4,6V18Z" />
        </svg>`
    // Style
    button.style.border = 'none'
    button.style.cursor = 'pointer'
    button.style.backgroundColor = 'transparent'

    input.value = video.playbackRate


    button.addEventListener('click', () => {
        const input = document.getElementById('youtube-accelerator-input')
        const video = document.querySelector('video.video-stream.html5-main-video')

        video.playbackRate = Number(input.value) || 1
    })

    const menuContainer = document.getElementById('menu-container')

    menuContainer.parentElement.insertBefore(input, menuContainer.nextSibling)
    menuContainer.parentElement.insertBefore(button, input.nextSibling)
}   