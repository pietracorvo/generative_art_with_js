var tooltip_svg = document.createElement('svg');
tooltip_svg.setAttribute("width", 100);
tooltip_svg.setAttribute("height", 100);

var tooltip_rect = document.createElement('rect');
tooltip_rect.setAttribute("width", 100);
tooltip_rect.setAttribute("height", 100);
tooltip_rect.setAttribute("x", 100);
tooltip_rect.setAttribute("y", 100);
tooltip_rect.setAttribute("id", "tooltip1");
tooltip_svg.appendChild(tooltip_rect);

//var tooltip_rect = tooltip_svg.createElement('rect');


// var tooltip_rect = document.createElement('rect');
// tooltip_rect.id = 'tooltip1';

// const canvas_width = document.getElementById('canvas1').width;
// const canvas_height = document.getElementById('canvas1').height;

// // tooltip_rect.setAttribute("width", canvas_width * 0.5);
// // tooltip_rect.setAttribute("height", canvas_height * 0.5);
// tooltip_rect.setAttribute("x", canvas_width * 0.5);
// tooltip_rect.setAttribute("y", canvas_height * 0.5);

// // tooltip_rect.width = canvas_width * 0.5;
// // tooltip_rect.height = canvas_height * 0.5;
// // tooltip_rect.x = canvas_width * 0.5;
// // tooltip_rect.x = canvas_height * 0.5;

document.body.appendChild(tooltip_svg);


