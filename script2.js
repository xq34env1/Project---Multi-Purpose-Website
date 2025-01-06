var underweight = "Your BMI Suggests That You Might Be Underweight, You Should Focus On Nutrient Dense Meals And Seek A Healthcare Professional";
var healthy = "Your BMI Suggests That You Are In A Healthy Range, Continue With Your Current Diet And Stay Active";
var overweight = "Your BMI Suggests That You Might Be Overweight, You Should Loosen Up A Bit On Your Diet And Improve The Diet Quality And Exercise Regularly";
var obese = "Your BMI Suggests That You Might Be Obese, You Should Seek A Healthcare Professional, Also Prioritize Healthy Nutrition And Set Small And Achieveable Goals For Yourself To Look Upon";


window.addEventListener("load", addListener);

function addListener()
{
    document.getElementById("ButtonSubmit").addEventListener("click", OutputBMI)
}

function OutputBMI()
{
    var weight = document.getElementById("InputWeight").value;
    var height = document.getElementById("InputHeight").value;
    var bmi = (weight * 703) / (height * height);
    var fullstring = "Your Total BMI Is " + bmi.toFixed(2);
    document.getElementById("bmicalculated").textContent = fullstring;

    if(bmi < 18.50)
    {
        document.getElementById("bmitype").style.color = "Yellow"
        document.getElementById("bmitype").textContent = underweight;
    }

    if(bmi > 18.51 && bmi < 24.90)
    {
        document.getElementById("bmitype").style.color = "Green"
        document.getElementById("bmitype").textContent = healthy;
    }

    if(bmi > 25 && bmi < 29.90)
    {
        document.getElementById("bmitype").style.color = "Orange"
        document.getElementById("bmitype").textContent = overweight;
    }

    if(bmi > 30)
    {
        document.getElementById("bmitype").style.color = "Red"
        document.getElementById("bmitype").textContent = obese;
    }
}
