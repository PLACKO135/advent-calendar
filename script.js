const day = document.querySelectorAll(".day");
const d = new Date();
const da = d.getDate();
let yippe=document.getElementById("placeholder");
day.forEach(element => {
    element.addEventListener("click", function () {
        if (parseInt(element.innerHTML) <= da) {

            yippe.style.backgroundImage=`none`;
            if (element.classList.contains("active")) {
                element.innerHTML = 'Kinyitva';
               
            } else {
                element.classList.add("active");
                element.innerHTML = '<img src="Gragas_3.png"/>';
            }
        }
        else{
            //yippe.style.backgroundImage=`url('frieren.png')`;
            //yippe.style.backgroundPosition="unset";
            yippe.style.backgroundImage=`url('Gragas_3.png')`;
           
        }
    });
})