let heartIcon = document.querySelector("#heartIcon");

heartIcon.addEventListener("click", ()=> {
    heartIcon.classList.toggle("red-heart");
})



let userPost = document.querySelector(".userpost");
let userPostCont = document.querySelector(".userpostcont");
let userP = document.querySelector(".bio p");
let text = document.getElementById("text");
let btn = document.querySelector("button");
let img = document.querySelector(".img");
let postPro = document.querySelector(".image");


userPost.addEventListener("click", () =>{
    userPostCont.style.display = "block";
    })

btn.addEventListener("click", () =>{
      if(text.value === "" || postPro.value === ''){
        alert("enter the text");
        document.querySelector(".post").style.display = "none";
      }else{
        userP.textContent += text.value;
        postPro.src = URL.createObjectURL(img.files[0]);
        document.querySelector(".post").style.display = "block";
      }
    text.value = "";
})

btn.addEventListener("click", () =>{
    document.querySelector('.userpostcont').style.display = "none";
})

