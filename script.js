// =======================
// 1. ลูกอมลอยแบบสุ่มสี + หมุน
// =======================

const candyEmojis = ["🍬","🍭","🧁","🍡","🍩","🍫"];

function createCandy(){
  const candy = document.createElement("div");

  candy.innerHTML = candyEmojis[Math.floor(Math.random()*candyEmojis.length)];
  candy.style.position = "fixed";
  candy.style.left = Math.random()*100 + "vw";
  candy.style.top = "-50px";
  candy.style.fontSize = (Math.random()*20 + 25) + "px";
  candy.style.animation = "fall linear forwards";
  candy.style.animationDuration = (Math.random()*3 + 4) + "s";
  candy.style.pointerEvents = "none";

  document.body.appendChild(candy);

  setTimeout(()=>{
    candy.remove();
  },7000);
}

setInterval(createCandy, 800);


// =======================
// 2. ปุ่มกดแล้วเด้ง + หัวใจออกมา
// =======================

function sweetAlert(){
  showPopup("ขอบคุณที่ติดต่อมานะคะ 🍭💖");
  createHearts();
}


// =======================
// 3. Popup สวย ๆ ไม่ใช้ alert()
// =======================

function showPopup(message){
  const popup = document.createElement("div");
  popup.classList.add("sweet-popup");
  popup.innerHTML = `
      <div class="popup-box">
        <h2>${message}</h2>
        <button onclick="this.parentElement.parentElement.remove()">ปิด 🍬</button>
      </div>
  `;
  document.body.appendChild(popup);
}


// =======================
// 4. หัวใจลอยตอนกดปุ่ม
// =======================

function createHearts(){
  for(let i=0;i<15;i++){
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random()*100 + "vw";
    heart.style.bottom = "0";
    heart.style.fontSize = "25px";
    heart.style.animation = "floatUp 3s ease-out forwards";
    document.body.appendChild(heart);

    setTimeout(()=>{
      heart.remove();
    },3000);
  }
}


// =======================
// 5. เพิ่ม Animation CSS ผ่าน JS
// =======================

const style = document.createElement("style");
style.innerHTML = `

@keyframes fall {
  0% { transform: translateY(-50px) rotate(0deg); }
  100% { transform: translateY(110vh) rotate(360deg); }
}

@keyframes floatUp {
  0% { transform: translateY(0); opacity:1; }
  100% { transform: translateY(-100vh); opacity:0; }
}

.sweet-popup{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:rgba(255,182,193,0.6);
  display:flex;
  justify-content:center;
  align-items:center;
  backdrop-filter:blur(5px);
}

.popup-box{
  background:white;
  padding:40px;
  border-radius:30px;
  text-align:center;
  animation: pop 0.4s ease;
}

.popup-box button{
  margin-top:20px;
  padding:10px 25px;
  border:none;
  border-radius:30px;
  background:#ff6ec7;
  color:white;
  cursor:pointer;
}

@keyframes pop{
  0%{transform:scale(0.5);}
  100%{transform:scale(1);}
}

`;
document.head.appendChild(style);
