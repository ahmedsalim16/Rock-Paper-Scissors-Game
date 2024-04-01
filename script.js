// get DOM elements

const gamecontainer=document.querySelector(".container"),
userResult=document.querySelector(".user_result img"),
cpuResult=document.querySelector(".cpu_result img"),
result=document.querySelector(".result"),
optionImages=document.querySelectorAll(".option_image");

//console.log(gamecontainer,userResult,cpuResult,result,optionImages)

//loop through each option image element

optionImages.forEach((image,index)=>{
    image.addEventListener('click',(e)=>{
        image.classList.add("active")

        userResult.src=cpuResult.src="css/rock.png";
        result.textContent="Wait..."

        //loop through each option image element
        optionImages.forEach((image2,index2)=>{
             //if the current index doesn't match the clicked index
             // remove the "active" class from the current index
             if(index!==index2){
                 image2.classList.remove("active");
             }
        });

        gamecontainer.classList.add("start");


        //set a timeout to delay the result calculation 
        let time=setTimeout(()=>{

        gamecontainer.classList.remove("start");
            
         //get the source of the clicked option image
        let imageSrc=e.target.querySelector("img").src;
        // set the user image to the clicked option image
        userResult.src=imageSrc


        //generate a rondom number between 0 and 2
        let randomNumber=Math.floor(Math.random() * 3);

        // create an array of cpu image options

        let cpuImages=["css/rock.png","css/paper.png","css/scissors.png"]

       // set the cpu image to a random option from the array
       cpuResult.src=cpuImages[randomNumber]

        // Assign a letter value to the CPU option (R for rock, P for paper, S for scissors)
        let cpuValue=["R","P","S"][randomNumber]

        // Assign a letter value to the clicked option (based on index)
        let userValue=["R","P","S"][index];

       //create an object with all possible outcomes
       let outcomes={
        RR: "Draw",
        RP: "You Lose",
        RS: "You Win",
        PP: "Draw",
        PR: "You Win",
        PS: "You Lose",
        SS: "Draw",
        SR: "You Lose",
        SP: "You Win",
       }

      // Look up the outcome value based on user and CPU options
      let outcomeValue=outcomes[userValue+cpuValue];

      //Display the result
      result.textContent=userValue===cpuValue ? "Match Draw":`${outcomeValue}`
      console.log(outcomeValue)
    
    },2500)
    });
    });
         
      
    


        