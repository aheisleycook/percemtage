function getPercentage() {
    const Humbert = document.getElementById("number");
    const dividend = document.getElementById("dividend");
    let totalPercentage = (Humbert.value * dividend.value) * 100;
    const totalDisplay  = document.getElementById("percent");
    totalDisplay["innerText"] = totalPercentage;
}