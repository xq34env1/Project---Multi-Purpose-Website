var bmi_statements = ["Your BMI Suggests That You Might Be Underweight, You Should Focus On Nutrient Dense Meals And Seek A Healthcare Professional","Your BMI Suggests That You Are In A Healthy Range, Continue With Your Current Diet And Stay Active","Your BMI Suggests That You Might Be Overweight, You Should Loosen Up A Bit On Your Diet And Improve The Diet Quality And Exercise Regularly","Your BMI Suggests That You Might Be Obese, You Should Seek A Healthcare Professional, Also Prioritize Healthy Nutrition And Set Small And Achieveable Goals For Yourself To Look Upon"]


window.addEventListener("load", addListener);

function addListener()
{
    document.getElementById("ButtonSubmit").addEventListener("click", OutputBMI)
}

function OutputBMI()
{
    var weight = document.getElementById("InputWeight").value;
    var height = document.getElementById("InputHeight").value;
	if(weight <= 0 || weight > 2000)
	{
			alert("Inputs Are Either In Negatives Or Above Human Limits.")
	}
	
	else{
		var bmi = (weight * 703) / (height * height);
		var fullstring = "Your Total BMI Is " + bmi.toFixed(2);
		document.getElementById("bmicalculated").textContent = fullstring;

		switch(true)
		{
			case bmi < 18.50 && bmi > 0:
				document.getElementById("bmitype").style.color = "Yellow"
				document.getElementById("bmitype").textContent = bmi_statements[0];
				break;
				
			case bmi > 17.51 && bmi < 24.90:
				document.getElementById("bmitype").style.color = "Green"
				document.getElementById("bmitype").textContent = bmi_statements[1];
				break;
				
			case bmi > 25 && bmi < 29.90:
				document.getElementById("bmitype").style.color = "Orange"
				document.getElementById("bmitype").textContent = bmi_statements[2];
				break;
			
			case bmi > 30 && bmi < 90:
				document.getElementById("bmitype").style.color = "Red"
				document.getElementById("bmitype").textContent = bmi_statements[3];
				break;
				
			case bmi <= 0:
				alert("BMI Goes Below Limits, Seek Medical Attention Or Enter The Correct Inputs");
				break;
				
			case bmi > 90:
				alert("BMI Goes Above Possibly Healthy Limits, Seek Medical Attention Or Enter Correct Inputs");
				break;
				
			default:
				break;
				
		}
	}
}
