

// scroll navbar

window.onscroll=function(){

    const nav= document.querySelector(".navbar");
    const hero=document.querySelector(".hero");

    if(window.scrollY > hero.offsetTop ){

        nav.classList.add("scrollNav");
    }

    else{

        nav.classList.remove("scrollNav");
    }
}



const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,
  
  
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
   
  });


  var swiper2 = new Swiper(".mySwiper", {
    loop: true,
    direction: 'horizontal',
    pagination: {
      el: ".swiper-pagination",
    },
  });


//   count Down

const countDown =()=>{

const CountDownDate = new Date("2025-11-11T00:00:00").getTime();
const now =new Date().getTime();
console.log(CountDownDate);


const distance = CountDownDate - now;
const days = Math.floor(distance / 86400000);
document.querySelector("#days").textContent = days ;
document.querySelector("#days3").textContent = days ;
document.querySelector("#days2").textContent = days ;

const hours = Math.floor((distance % 86400000) / 3600000);
document.querySelector("#hours").textContent = hours ;
document.querySelector("#hours3").textContent = hours ;
document.querySelector("#hours2").textContent = hours ;

const minutes = Math.floor((distance % 3600000) / 60000);
document.querySelector("#minutes").textContent = minutes ;
document.querySelector("#minutes3").textContent = minutes ;
document.querySelector("#minutes2").textContent = minutes ;

const seconds = Math.floor((distance % 60000) / 1000);
document.querySelector("#seconds").textContent = seconds;
document.querySelector("#seconds3").textContent = seconds;
document.querySelector("#seconds2").textContent = seconds;


console.log(days);
}

setInterval( ()=>{
    countDown();
},1000)



var swiper3 = new Swiper(".mySwiper2", {

    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 15,
    loop: true,
    autoplay: {
        delay: 2000,
      },

    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });


  var swiper3 = new Swiper(".mySwiper3", {

    direction: 'horizontal',
    slidesPerView: 5,
    spaceBetween: 15,
    loop: true,
    autoplay: {
        delay: 2000,
      },

    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });


  //modal
  

function openModal(){

  const modal = document.querySelector(".my_modal");
  const imagepreview = document.querySelector(".image-preview")
  const closeBtn = document.querySelector(".close-btn");
  const eyeIcon = document.querySelector(".eye");
  
  const modalImage = document.querySelector(".modal-img")

  

  eyeIcon.addEventListener("click", () => {
    modal.classList.remove("d-none");
  
    // modalImage.src=imagepreview.src;
// Or aonother way
          modal.querySelector(" .modal-img").setAttribute("src",imagepreview.src)
  }
  
 
  );



  




  closeBtn.addEventListener("click", function(){

    modal.classList.add ("d-none")


  })

}

