

let list = document.querySelectorAll('.list');
let image = document.querySelectorAll('.im');
let counter = document.querySelector(".counter");






document.getElementById('my-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting

  // Collect form data
  var form = this;
  var params = {
    from_name: form.fullname.value,
    email_id: form.to_email.value,
    subject: form.subject.value,
    message: form.message.value
  };

  // Send email using EmailJS
  emailjs.send("service_aeo6v6y", "template_v0k8oxl", params)
    .then(function(response) {
      
      alert("Your email was sent successfully!");
      form.reset();
    }, function(error) {
      alert("Sorry, there was a problem sending your email. Please try again later.");
      console.error(error);
    });
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






