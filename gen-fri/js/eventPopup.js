const eventInfo = {
    title: "Kreativ Workshop med 1.sem MMD'ere",
    description: "En sjov dag med design, kode og kakao! Kom med til en kreativ workshop fyldt med idéudvikling, design og digital leg sammen med andre multimediedesignere. Vi skaber, eksperimenterer og deler inspiration – både analogt og digitalt. Uanset om du elsker farver, kode eller konceptudvikling, er der plads til dine idéer!",
    details: [
    { label: "Dato", value: "22. april 2025" },
    { label: "Tid", value: "10:00 - 15:00" },
    { label: "Sted", value: "UCL, SEE-A2.06" }
    ]
};

document.getElementById("learnMoreBtn").onclick = () => {
    if (!eventInfo.title || !eventInfo.details.length) return alert("Manglende info!");

    let html = "";
    for (let i = 0; i < eventInfo.details.length; i++) {
    let d = eventInfo.details[i];
    html += `<li>${d.label}: ${d.value}</li>`;
    }

    document.getElementById("eventTitle").textContent = eventInfo.title;
    document.getElementById("eventDescription").textContent = eventInfo.description;
    document.getElementById("eventDetails").innerHTML = html;

    document.getElementById("popup").style.display = "block";
};

document.getElementById("closePopup").onclick = () =>
    document.getElementById("popup").style.display = "none";