function calculateFootprint() {

let electricity = document.getElementById("electricity").value;
let transport = document.getElementById("transport").value;

let electricityCarbon = electricity * 0.5;
let transportCarbon = transport * 0.2;

let total = electricityCarbon + transportCarbon;

document.getElementById("result").innerHTML =
"Your Estimated Carbon Footprint: " + total.toFixed(2) + " kg CO₂";

if(total > 50){
    document.getElementById("advice").innerHTML =
    "⚠️ Try reducing electricity use and travel emissions.";
}
else{
    document.getElementById("advice").innerHTML =
    "✅ Great! Your carbon footprint is low.";
}

}
