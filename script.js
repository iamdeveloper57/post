
//database


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getDatabase, set, get, ref, onValue} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";
import { getAuth, GoogleAuthProvider, signInWithRedirect } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbazy5Tl08Xupstg_p0EuZhXYoX1J818o",
  authDomain: "post-83115.firebaseapp.com",
  projectId: "post-83115",
  storageBucket: "post-83115.appspot.com",
  messagingSenderId: "883053051037",
  appId: "1:883053051037:web:8365b73d1e67bfe2502874"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


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

        set(ref(db, 'userphoto/' + text.value),{
          userphoto : postPro.src
        })

      }
    text.value = "";
})

btn.addEventListener("click", () =>{
    document.querySelector('.userpostcont').style.display = "none";
})



const dbRef = ref(db, 'userphoto');
onValue(dbRef, (snapshot) =>{
  const data = snapshot.val();
  console.log(data.userphoto)
})
