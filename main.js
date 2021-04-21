function setActive(e) {
	var currActive = document.getElementsByClassName("active")[0];
	currActive.classList.remove("active");
	e.classList.add("active");
}

const dateChapterRelease = new Date('4/16/2021');

window.onload = (e) => {
	var countdown = document.getElementById('countdown');

	var today = new Date();
	var dayNum = today.getDay();
	var daysToFri = 5 - (dayNum < 5? dayNum : dayNum - 7);

	const diffTime = Math.abs(today - dateChapterRelease);
	const daysSinceChapter = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
	var mod = daysSinceChapter % 7;
	if (mod % 2 == 0) {
		daysToFri += 7;
	}

	countdown.innerText = daysToFri + " days";
};

$("a.read").click(function() {
	var link = this.getAttribute("data");
	window.location.href = "reader?" + link;
}); 