let canvas = document.getElementById('noisy-canvas'),
    context = canvas.getContext('2d');

let getRandom = () => {
    return Math.random() * 255;
}

let render = () => {
    const height = window.innerHeight,
          width  = window.innerWidth;
    
    context.canvas.height = height;
    context.canvas.width  = width;
    
    let imageData = context.createImageData(width, height);
    
    for (let i = 0; i < imageData.data.length; i += 4) {
        imageData.data[i]     = getRandom();
        imageData.data[i + 1] = getRandom();
        imageData.data[i + 2] = getRandom();
        imageData.data[i + 3] = 255;
    }
    
    context.putImageData(imageData, 0, 0);
    
    requestAnimationFrame(render);
}

render();