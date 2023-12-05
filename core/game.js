// Create the PixiJS application
const app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: 0x000000, // Set background to black
  autoResize: true, // Automatically resize the renderer
});


// Add the renderer view to the DOM
document.body.appendChild(app.view);