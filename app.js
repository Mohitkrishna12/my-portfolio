// particlesJS("particles-js", {"particles":{"number":{"value":410,"density":{"enable":true,"value_area":2998.903032837989}},"color":{"value":"#ffffff"},"shape":{"type":"star","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3.9459250432078803,"random":true,"anim":{"enable":false,"speed":7.303712720632994,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":3.204794372381079,"direction":"top-right","random":true,"straight":true,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":200,"line_linked":{"opacity":1}},"bubble":{"distance":167.83216783216784,"size":355.64435564435564,"duration":1.1988011988011988,"opacity":1,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});

var ball=document.getElementsByClassName("balls");
			document.onmousemove=function() {
				var x = event.clientX *100/window.innerWidth + "%";
				var y = event.clientY *100/window.innerHeight + "%";
				for(var i=0;i<2;i++){
					ball[i].style.left=x;
					ball[i].style.top=y;
					ball[i].style.transform="translate(-"+x+",-"+y+")";
				}
			}
// var count_particles, stats, update; 

// stats = new Stats; stats.setMode(0); 
// stats.domElement.style.position = 'absolute'; 
// stats.domElement.style.left = '0px'; 
// stats.domElement.style.top = '0px'; 
// document.body.appendChild(stats.domElement); 
// count_particles = document.querySelector('.js-count-particles'); 
// update = function() { 
// 	stats.begin(); stats.end();  
// }; ;
