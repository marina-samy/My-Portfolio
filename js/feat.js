

let list = document.querySelectorAll('.list');
let image = document.querySelectorAll('.im');
let counter = document.querySelector(".counter");






document.getElementById('my-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form data
  let fullname = document.getElementById('fullname').value;
  let email = document.getElementById('email').value;
  let subject = document.getElementById('subject').value;
  let message = document.getElementById('message').value;

  // Check if form fields are empty
  if (!fullname || !email || !subject || !message) {
    // Display error message using SweetAlert
    swal({
      title: "Error!",
      text: "Please fill all fields",
      icon: "error",
      button: "OK"
    });
  } else {
    // Send email using EmailJS
    emailjs.send("service_aeo6v6y", "template_v0k8oxl", {
      fullname: fullname,
      to_email: email,
      subject: subject,
      message: message
    }).then(function(response) {
      // Display success message using SweetAlert
      swal({
        title: "Success!",
        text: "Your email was sent successfully!",
        icon: "success",
        button: "OK"
      });

      // Reset the form
      document.getElementById('my-form').reset();
    }, function(error) {
      // Display error message using SweetAlert
      swal({
        title: "Error!",
        text: "Sorry, there was a problem sending your email. Please try again later.",
        icon: "error",
        button: "OK"
      });
      console.error(error);
    });
  }
});



for(let i=0; i < list.length; i++){
  list[i].addEventListener('click', function(){
    for(let j=0; j < list.length; j++){
      list[j].classList.remove('active');
    }
    this.classList.add('active');

    let dataFilter = this.getAttribute('data-filter');
    for( let k = 0; k < image.length; k++){
      image[k].classList.remove('active');
      image[k].classList.add('hide');

      if(image[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
        image[k].classList.remove('hide');
        image[k].classList.add('active');
      }
    }
  })
}






window.onscroll = function(){

  let nums = document.querySelectorAll(".c1 .num");
  let section = document.querySelector(".sk2");
  let started = false; // Function Started ? No
  
  let div = document.querySelector("#skill");



    // counter offset top
    let countOffsetTop = counter.offsetTop;

    //count outer height
    let countOuterHeight = counter.offsetHeight;

    //window height
    let windowHeight = this.innerHeight;

    //window scroll top
    let windowScrollTop = this.pageYOffset;

    if (windowScrollTop > (countOffsetTop + countOuterHeight - windowHeight)) {
        let all = document.querySelectorAll(".counter .count div");

        all.forEach(prog => {
            prog.style.width = prog.dataset.progress;
        })
    }

    if (window.scrollY >= section.offsetTop) {
      if (!started) {
        nums.forEach((num) => startCount(num));
      }
      started = true;
    }


    if (this.scrollY >= 100) {
      div.classList.add("play");
    } else {
      div.classList.remove("play");
    }
  //   this.scrollY >= 1000 ? span.classList.add("show") : span.classList.remove("show");
  };
  
  


  
  
//   function startCount(el) {
//     let goal = el.dataset.goal;
//     let count = setInterval(() => {
//       el.textContent++;
//       if (el.textContent == goal) {
//         clearInterval(count);
//       }
//     }, 4000 / goal);
// }






