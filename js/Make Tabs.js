let tabs = document.querySelectorAll(".tabs li");
let divs = document.querySelectorAll(".content div");

tabs.forEach((ele) => {
	ele.addEventListener("click", function(e) {
		tabs.forEach((ele) => {
			ele.classList.remove("active");
		});
		e.currentTarget.classList.add("active");
		divs.forEach((div) => {
			div.style.display = "none";
		})
		document.querySelector(e.currentTarget.dataset.cont).style.display = "block";
	})
})