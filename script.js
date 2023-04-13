function calculateBMI() {
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;

    const bmi = weight / Math.pow(height / 100, 2);

    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi <= 24.9) {
        category = "Normal";
    } else if (bmi <= 29.9) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }

    console.log(bmi)

    const result = document.getElementById("result")
    result.innerHTML = `Your BMI is <b><div>${bmi.toFixed(1)}</div></b> which means You are <b><div>${category}</div></b>.`

    if (weight === "" && height === "") {
        result.innerHTML = `Please fill your <b>weight</b> and <b>height</b>!`
    } else if (height === "") {
        result.innerHTML = `Please fill your <b>height</b>!`
    } else if (weight === "") {
        result.innerHTML = `Please fill your <b>weight</b>!`
    };
}

document.getElementById("calculateButton").addEventListener("click", calculateBMI);