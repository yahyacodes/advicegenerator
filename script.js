const quote = document.querySelector(".quote");
const btn = document.querySelector(".dicebtn");

btn.addEventListener("click", function () {
  getAdvice();
});

window.onload = () => {
  getAdvice();
};

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => {
      return res.json();
    })
    .then((adviceData, idData) => {
      const adviceobj = adviceData.slip;
      quote.innerHTML = `<p>${adviceobj.advice}</p>`;
    })
    .catch((error) => {
      console.log(error);
    });
}
