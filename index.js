alert('Hello there, come & check out my Card!')

var container = document.querySelector('.container');
var card = document.querySelector('.card');

container.addEventListener('mousemove', function(event){
   var xAxis = (window.innerWidth/2 - event.pageX) / 20; 
   var yAxis = (window.innerWidth/2 -event.pageY) / 20;

   card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;   

});

container.addEventListener('mouseleave', function(){

	card.style.transform = "all 0.5s ease";
	card.style.transform = "rotateX(0deg) rotateY(0deg)";

});

var title = document.querySelector('.title');
var social = document.querySelector('.social');
var profile = document.querySelector('.profile');
var photo = document.querySelector('.photo img');

//step 5

title.style.transform = "translateZ(100px)";
social.style.transform = "translateZ(100px)";
profile.style.transform = "translateZ(100px)";
photo.style.transform = "translateZ(100px)";