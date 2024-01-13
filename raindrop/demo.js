/**
 * @typedef {import("./bundle")}
 */

const canvas = document.querySelector("#canvas");
const rect = canvas.getBoundingClientRect();
canvas.width = rect.width;
canvas.height = rect.height;

const raindropFx = new RaindropFX({
    canvas: canvas,
    background: "./assets/img/君の名は_dark.jpg",
    // backgroundBlurSteps: 0
});

window.onresize = () =>
{
    const rect = canvas.getBoundingClientRect();
    raindropFx.resize(rect.width, rect.height);
}

raindropFx.start();
