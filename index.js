// Ensure the DOM is fully loaded before running the script 
document.addEventListener('DOMContentLoaded', () => {
    const elevator = document.getElementById("elevator");
    const btn_G=document.getElementById("G");
    const btn_1=document.getElementById("1st");
    const btn_2 = document.getElementById("2nd");
    const btn_3=document.getElementById("3th");
    const btn_4=document.getElementById("4th");
    const btn_5=document.getElementById("5th");

    if (btn_G) {
        btn_G.addEventListener('click', () => {
            elevator.style.transform = "translate(240px, -120px)";
        })
    }
    if(btn_1){
        btn_1.addEventListener('click', () =>{
            elevator.style.transform = "translate(240px, -220px)";
        })
    }
    if (btn_2) {
        btn_2.addEventListener('click', () => {
            elevator.style.transform = "translate(240px, -315px)";
        });
    } 
    if (btn_3) {
        btn_3.addEventListener('click', () => {
            elevator.style.transform = "translate(240px, -410px)";
        });
    } 
    if (btn_4) {
        btn_4.addEventListener('click', () => {
            elevator.style.transform = "translate(240px, -505px)";
        });
    } 
    if (btn_5) {
        btn_5.addEventListener('click', () => {
            elevator.style.transform = "translate(240px, -600px)";
        });
    } 
    else {
        console.log("Button not found");
    }
});
