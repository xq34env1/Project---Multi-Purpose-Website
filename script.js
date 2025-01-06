window.addEventListener("load", addListener);

function addListener()
{
    document.getElementById("BMIButton").addEventListener("click", GoToBMI)
}

function GoToBMI()
{
    window.location.href = "index2.html"
}
