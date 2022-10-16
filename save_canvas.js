// TODO add tooltips 
// TODO add save to dialog
function save_canvas_as_png(){
    const canvas_id = 'canvas1'
    const canvas = document.getElementById(canvas_id);
    const img = canvas.toDataURL('image/png');

    var a = document.createElement('a');
    a.download = "generative_flowers.png";
    a.href = img;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function save_by_pressing_down(e) {
    if (e.key === 's') {
        save_canvas_as_png();
    }
}

document.addEventListener('keypress', save_by_pressing_down);