const containerEl=document.querySelector(".container");
let balls, setX, setY;
balls=[
    { x: 0, y: 1, color: "red" , speed: Math.random()*10},
    { x: 0, y: 2, color: "blue" , speed: Math.random()*10},
    { x: 0, y: 3, color: "green" , speed: Math.random()*10},
    { x: 0, y: 4, color: "yellow" , speed: Math.random()*10},
    { x: 0, y: 5, color: "pink" , speed: Math.random()*10},
    { x: 0, y: 6, color: "purple" , speed: Math.random()*10},
    { x: 0, y: 7, color: "orange" , speed: Math.random()*10},
    { x: 0, y: 8, color: "brown" , speed: Math.random()*10},
]
function createBall(ballsP){
    containerEl.innerHTML="";
    ballsP.forEach((ball)=>{
        if(ball.x>containerEl.clientWidth/2){
            ball.x=-containerEl.clientWidth/2;
        }
        ball.x+=ball.speed;
        const ballsT=document.createElement("div");
        ballsT.classList.add("ball");
        const angle=Math.atan2(ball.y, ball.x);
        if (angle<0) {
            angle+=2*Math.PI;
        }
        ballsT.style.cssText=`
            border: 2px solid ${ball.color};
            transform: translate(${ball.x}px, ${ball.y}px) rotate(${angle}rad);
        `;
        containerEl.appendChild(ballsT);
    })
    requestAnimationFrame(()=>createBall(ballsP));
}
createBall(balls);