const canvas = document.getElementById('signature');
const ctx = canvas.getContext('2d');
let isDrawing = false;

ctx.strokeStyle = "black";
ctx.lineWidth = 2;דד
ctx.lineCap = "round";

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    }
});

window.addEventListener('mouseup', () => {
    isDrawing = false;
});

function clearSignature() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
const form = document.querySelector('form');
const signatureInput = document.getElementById('signature_data');

form.addEventListener('submit', () => {

    const dataURL = canvas.toDataURL();

    signatureInput.value = dataURL;
});
function clearSignature() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    signatureInput.value = "";  
}
console.log("Iam pini meir")