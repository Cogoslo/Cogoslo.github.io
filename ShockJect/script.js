var length = document.getElementById("lengthrange");
var lenoutput = document.getElementById("length");
lenoutput.innerHTML = length.value; // Display the default slider value
length.oninput = function() {
  lenoutput.innerHTML = this.value;
}


var intensity = document.getElementById("intensrange");
var intenoutput = document.getElementById("intensity");
intenoutput.innerHTML = intensity.value; // Display the default slider value
// Update the current slider value (each time you drag the slider handle)
intensity.oninput = function() {
  intenoutput.innerHTML = this.value;
}


var warn1 = document.getElementById("warnrange1");
var warn1out = document.getElementById("warn1out");
warn1out.innerHTML = warn1.value; // Display the default slider value
// Update the current slider value (each time you drag the slider handle)
warn1.oninput = function() {
  warn1out.innerHTML = this.value;
}

var warn2 = document.getElementById("warnrange2");
var warn2out = document.getElementById("warn2out");
warn2out.innerHTML = warn2.value; // Display the default slider value
// Update the current slider value (each time you drag the slider handle)
warn2.oninput = function() {
  warn2out.innerHTML = this.value;
}

function buzzme() {

let data = '{"Username":"Adainthewired","Name":"Adascript","Code":"26F92B4BBE3","Intensity":' +'"' +intensity.value + '"' +',"Duration": ' +'"' + length.value + '"' +',"Apikey":"330191b3-688c-4a1f-a80f-0026942df895","Op":"1"}'
postJSON(data);
console.log(data)
 async function postJSON(data) {
  try {
    const response = await fetch("https://do.pishock.com/api/apioperate/", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body:(data),
    });

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}
}
function shockme() {

let data = '{"Username":"Adainthewired","Name":"Adascript","Code":"26F92B4BBE3","Intensity":' +'"' +intensity.value + '"' +',"Duration": ' +'"' + length.value + '"' +',"Apikey":"330191b3-688c-4a1f-a80f-0026942df895","Op":"0"}'
postJSON(data);
console.log(data)
 async function postJSON(data) {
  try {
    const response = await fetch("https://do.pishock.com/api/apioperate/", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body:(data),
    });

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}
}
