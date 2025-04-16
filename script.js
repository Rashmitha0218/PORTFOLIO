const mainCertificates = [
  "img3.png.png",
  "img4.png.png",
  "img5.png.png",
  "img6.png.png"
];

const extraCertificates = [
  "img7.png.png",
  "img8.png.png",
  "img9.png.png",
  "img10.png.png"
  // Add more unique certs here if needed
];

let showingAllCerts = false;

function renderCertificates() {
  const certGrid = document.getElementById("certGrid");
  const certs = showingAllCerts
    ? [...mainCertificates, ...extraCertificates]
    : mainCertificates;

  certGrid.innerHTML = certs
    .map(
      (cert) => `
      <div class="cert-card">
        <img src="${cert}" alt="Certificate">
      </div>
    `
    )
    .join("");
}

document.getElementById("viewMoreCerts").addEventListener("click", function () {
  showingAllCerts = !showingAllCerts;
  this.textContent = showingAllCerts ? "Show Less" : "View All Certificates";
  renderCertificates();
});

document.addEventListener("DOMContentLoaded", function () {
  renderCertificates();

  const contactCards = document.querySelectorAll(".contact-card");

  contactCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.05)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
    });
  });
});
