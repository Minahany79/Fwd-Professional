/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();

const zipCodeInp = document.getElementById("zip-code");
const feelingInp = document.getElementById("feeling-inpt");
const generateBtn = document.getElementById("generate");
const dateDiv = document.querySelector(".date");
const tempSpan = document.querySelector(".temp");
const feelingSpan = document.querySelector(".feeling");
let temp;
generateBtn.addEventListener("click", async () => {
    if (checkValues()) {
        let feeling = feelingInp.value;
        await getTemp();
        await postData("/postData", { temp, newDate, feeling });
        await getData("/getData");
    }
})

function checkValues() {
    if (zipCodeInp.value === "" || zipCodeInp.value === undefined || zipCodeInp.value === null) {
        alert("YOU Must Enter zip code");
        return false;
    }
    else {
        return true;
    }
}

function display(temp, date, feeling) {
    tempSpan.innerHTML = temp;
    dateDiv.innerHTML = date;
    feelingSpan.innerHTML = feeling;
};

async function getTemp() {
    let zipCode = Number(zipCodeInp.value);
    const apiKey = "57e79cd4e8f51f008d6de0ea1c901139";
    let url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=imperial`
    await fetch(url, { method: "GET" }).then(response => response.json())
        .then(data => temp = data.main.temp);

    return temp;
};

async function postData(url, data) {
    try {
        await fetch(url, {
            method: "POST", credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

    } catch (error) {
        console.log(error);
    }
};

async function getData(url) {
    let data
    await fetch(url, { method: "GET" }).then(response => response.json())
        .then(res => data = res.projectData);
    display(data.temp, data.newDate, data.feeling);
}

