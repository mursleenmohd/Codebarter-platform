const modal = document.getElementById("requestModal");
const btn = document.querySelector(".post-request-btn");
const span = document.querySelector(".close-btn");
const form = document.getElementById("requestForm");
btn.onclick = () => modal.style.display = "block";
span.onclick = () => modal.style.display = "none";

form.onsubmit = (e) => {
    e.preventDefault();
    
    const title = document.getElementById("probTitle").value;
    const tag = document.getElementById("probTag").value;
    const desc = document.getElementById("probDesc").value;
    const credits = document.getElementById("probCredits").value;

    const newCard = document.createElement("div");
    newCard.classList.add("request-card");
    newCard.innerHTML = `
        <div class="card-header">
            <h3>${title}</h3>
            <span class="tag">${tag}</span>
        </div>
        <p class="description">${desc}</p>
        <div class="card-footer">
            <div class="user-info"><strong>Mursleen</strong></div>
            <div class="reward-action">
                <span class="reward">${credits} Credits</span>
                <button class="help-btn">Offer Help</button>
            </div>
        </div>
    `;
    document.getElementById("feed").prepend(newCard); 
    modal.style.display = "none"; 
    form.reset(); 
};