const sec=document.querySelector(".secs");
const min=document.querySelector(".mins");
const hours=document.querySelector(".hours");
function donme(){
    let second=new Date().getSeconds(); /*yerelden dk sn vs çekiyoruz*/
    let minute=new Date().getMinutes();
    let hour=new Date().getHours();
   sec.style.transform=`rotate(${180+(second*6)}deg)` /*iç açıları top 360 derece. 360/60=6*/
   min.style.transform=`rotate(${180+(minute*6)}deg)`
   hours.style.transform=`rotate(${180+(hour*30)}deg)` /*360/12=30 */
    console.log({second,minute,hour})


}
setInterval(donme,1000);