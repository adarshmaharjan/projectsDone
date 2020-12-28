function openNav() {
	document.getElementById("myNav").style.height = "100%";
	}

	function closeNav() {
	document.getElementById("myNav").style.height = "0%";
	}
	function myFunction(){
		var x;
		x = document.getElementById("myBar");
		if(x.className === "clearfix topnav"){
			x.className += " responsive";
		}else{
			x.className = "clearfix topnav";
		}
	}
	$(document).ready(function(){
		$('.slider').slick({
			dots: true,
			arrows:false,
			// autoplay:true,
			autoplaySpeed:10000,
			draggable:false
		});
	  });
	  $(document).ready(function(){
		$('.partners-slider').slick({
			centerMode: true,
			centerPadding: '60px',
			slidesToShow: 5,
			responsive: [
			  {
				breakpoint: 768,
				settings: {
				  arrows: false,
				  centerMode: true,
				  centerPadding: '40px',
				  slidesToShow: 3
				}
			  },
			  {
				breakpoint: 480,
				settings: {
				  arrows: false,
				  centerMode: true,
				  centerPadding: '40px',
				  slidesToShow: 1
				}
			  }
			]
		});
	  });