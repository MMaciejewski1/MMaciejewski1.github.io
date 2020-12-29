function createSquare(){
        const section = document.querySelector('section');
        const square = document.createElement('span');
        var size = Math.random()*50;

        square.style.width =20+size+'px';
        square.style.height = 20+ size +'px';
        square.style.top = Math.random()*innerHeight+'px';
        square.style.left = Math.random()*innerWidth+'px';
        square.style.backgroundColor = "#" +Math.floor(Math.random()*16777215).toString(16);
        section.appendChild(square);
        setTimeout(()=>{square.remove()},5000)
}

function changeContainer(container){   
        switch(container){
                case 'container1':
                document.querySelector('.container1').style.display='flex';
                document.querySelector('.container2').style.display='none';
                document.querySelector('.container3').style.display='none';
                document.querySelector('.container4').style.display='none';
                document.querySelector('.name').style.display='none';
                document.querySelector('nav').style.display='block';
                document.getElementById("opt1").classList.add('active');
                document.getElementById("opt2").classList.remove('active');
                document.getElementById("opt3").classList.remove('active');
                //document.getElementById("opt4").classList.remove('active');
                break;
                case 'container2':
                document.querySelector('.container1').style.display='none';
                document.querySelector('.container2').style.display='flex';
                document.querySelector('.container3').style.display='none';
                document.querySelector('.container4').style.display='none';
                document.querySelector('.name').style.display='none';
                document.querySelector('nav').style.display='block';
                document.getElementById("opt1").classList.remove('active');
                document.getElementById("opt2").classList.add('active');
                document.getElementById("opt3").classList.remove('active');
                //document.getElementById("opt4").classList.remove('active');
                break;
                case 'container3':
                document.querySelector('.container1').style.display='none';
                document.querySelector('.container2').style.display='none';
                document.querySelector('.container3').style.display='flex';
                document.querySelector('.container4').style.display='none';
                document.querySelector('.name').style.display='none';
                document.querySelector('nav').style.display='block';
                document.getElementById("opt1").classList.remove('active');
                document.getElementById("opt2").classList.remove('active');
                document.getElementById("opt3").classList.add('active');
                document.getElementById("opt4").classList.remove('active');
                break;
                case 'container4':
                document.querySelector('.container1').style.display='none';
                document.querySelector('.container2').style.display='none';
                document.querySelector('.container3').style.display='none';
                document.querySelector('.container4').style.display='flex';
                document.querySelector('.name').style.display='none';
                document.querySelector('nav').style.display='block';
                document.getElementById("opt1").classList.add('active');
                document.getElementById("opt2").classList.remove('active');
                document.getElementById("opt3").classList.remove('active');               
                document.querySelector('.footer').style.display='none';
                //document.getElementById("opt4").classList.add('active');
                break;
        }
}
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//main scripts

      setInterval(createSquare,150);