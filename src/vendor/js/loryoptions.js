document.addEventListener('DOMContentLoaded', function () {
    onresize();
});

function onresize(){
	var multiSlides = document.querySelector('.js_multislides');
	var w = window.innerWidth;
	
	if(w < 620){
		lory(multiSlides, {
	    	slidesToScroll: 1
		});    	
	}
	else if(w < 880){
		lory(multiSlides, {
	    	slidesToScroll: 2
		});
	}
	else{
		lory(multiSlides, {
	    	slidesToScroll: 3
		});
	}
}