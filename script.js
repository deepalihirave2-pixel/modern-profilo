// ===============================
// SLIDE SYSTEM
// ===============================


const slides = document.querySelectorAll(".slide");

let currentSlide = 0;



function showSlide(index){

    slides.forEach((slide)=>{

        slide.classList.remove("active");

    });


    slides[index].classList.add("active");


}



// Auto change slide every 3 seconds

setInterval(()=>{


    currentSlide++;


    if(currentSlide >= slides.length){

        currentSlide = 0;

    }


    showSlide(currentSlide);


},4000);






// ===============================
// NAVBAR CONNECTION
// ===============================


const links = document.querySelectorAll(".navbar a, .project-link");


links.forEach(link=>{


    link.addEventListener("click",(e)=>{


        e.preventDefault();


        let target =
        link.getAttribute("href").replace("#","");



        slides.forEach((slide,index)=>{


            if(slide.id === target){


                currentSlide = index;


                showSlide(index);


            }


        });



    });


});






// ===============================
// TYPING EFFECT
// ===============================


const typingText =
document.getElementById("typing");



const words = [

"Web Developer",

"Data Analyst",

"Python Developer",

"BCA Student"

];



let wordIndex = 0;

let charIndex = 0;



function typing(){


    if(charIndex < words[wordIndex].length){


        typingText.innerHTML +=
        words[wordIndex].charAt(charIndex);


        charIndex++;


        setTimeout(typing,100);


    }

    else{


        setTimeout(erase,1500);


    }


}




function erase(){


    if(charIndex > 0){


        typingText.innerHTML =
        words[wordIndex].substring(
            0,
            charIndex-1
        );


        charIndex--;


        setTimeout(erase,50);


    }

    else{


        wordIndex++;


        if(wordIndex >= words.length){

            wordIndex=0;

        }


        setTimeout(typing,500);


    }


}



typing();