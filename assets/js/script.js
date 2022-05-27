let btn = document.getElementById('menuBtn');
let left = document.querySelector('.left');
let right = document.querySelector('.right');
let container_right_a = document.querySelectorAll('.container .right a');
let container_left_menuAttr = document.querySelectorAll('.container .left .menuAttr');
let welcome_sign = document.querySelector('.welcome-sign');
let flag = true;


container_left_menuAttr[0].style.display = "inline-block";

$("#menuBtn").click(function(){
	flag = !flag;
	
    if(!flag){
      left.style.transform = "translateY(0)";
      right.style.transform = "translateY(0)";
	  welcome_sign.style.display = "none";
    } else {
      left.style.transform = "translateY(100vh)";
      right.style.transform = "translateY(-100vh)";
	  welcome_sign.style.display = "inline-block";
    }
});

$(".container .left").hover(function(){
	left.style.height = "90vh";
	right.style.height = "10vh";
	
	container_right_a.forEach(a =>{
		a.style.fontWeight= "300";
		a.style.fontSize = "30px";
	})
});

$(".container .right").hover(function(){
	left.style.height = "80vh";
	right.style.height = "20vh";
	
	container_right_a.forEach(a =>{
		a.style.fontWeight= "400";
		a.style.fontSize = "40px";
	})
});

$(".container .right a").click(function(){	
	container_left_menuAttr.forEach(div =>{	
		if(div.attributes['id'].value == $(this)[0].attributes['data-text'].value){
			div.style.display = "inline-block";
		} else {
			div.style.display = "none";
		}
	});
});

function sendRequest(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
}

window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-contact');
    const button = document.getElementById('form-contact-button');
    const status = document.getElementById('form-contact-status');

    function success() {
        form.reset();
        status.style.display = "block";
        status.innerHTML = "Your message has been sent!";
        status.classList.add("success");
        
        setTimeout(() => {
          status.style.opacity = 0;
          status.style.display = "none";
        }, 5000);
    }
  
    function error() {
        status.innerHTML = "Oops! An error has occured, please try again";
        status.classList.add("error");
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        var data = new FormData(form);
        sendRequest(form.method, form.action, data, success, error);
    });

});