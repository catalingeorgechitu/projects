function generateCv() {
	//Profiel picture field
	let file = document.getElementById('imgfield').files[0];
	console.log(file);

	let reader = new FileReader();
	reader.readAsDataURL(file);
	console.log(reader.result);

	reader.onloadend = function () {
		document.getElementById('imgfieldR').src = reader.result;
	};

	document.getElementById('fnameR').innerHTML =
		document.getElementById('fname').value;

	document.getElementById('professionR').innerHTML =
		document.getElementById('profession').value;

	document.getElementById('summaryR').innerHTML =
		document.getElementById('summary').value;

	document.getElementById('expertise1R').innerHTML =
		document.getElementById('expertise1').value;

	document.getElementById('expertise2R').innerHTML =
		document.getElementById('expertise2').value;

	document.getElementById('expertise3R').innerHTML =
		document.getElementById('expertise3').value;

	document.getElementById('expertise4R').innerHTML =
		document.getElementById('expertise4').value;

	document.getElementById('expertise5R').innerHTML =
		document.getElementById('expertise5').value;

	document.getElementById('lng1R').innerHTML =
		document.getElementById('lng1').value;

	document.getElementById('lng2R').innerHTML =
		document.getElementById('lng2').value;

	document.getElementById('phoneR').innerHTML =
		document.getElementById('phone').value;

	document.getElementById('emailR').innerHTML =
		document.getElementById('email').value;

	document.getElementById('adressR').innerHTML =
		document.getElementById('adress').value;

	document.getElementById('linkedinR').innerHTML =
		document.getElementById('linkedin').value;

	document.getElementById('jobposition1R').innerHTML =
		document.getElementById('jobposition1').value;

	document.getElementById('company1R').innerHTML =
		document.getElementById('company1').value;

	document.getElementById('period1-startR').innerHTML =
		document.getElementById('period1-start').value;

	document.getElementById('period1-endR').innerHTML =
		document.getElementById('period1-end').value;

	document.getElementById('job1-task1R').innerHTML =
		document.getElementById('job1-task1').value;

	document.getElementById('job1-task2R').innerHTML =
		document.getElementById('job1-task2').value;

	document.getElementById('job1-task3R').innerHTML =
		document.getElementById('job1-task3').value;

	document.getElementById('jobposition2R').innerHTML =
		document.getElementById('jobposition2').value;

	document.getElementById('company2R').innerHTML =
		document.getElementById('company2').value;

	document.getElementById('period2-startR').innerHTML =
		document.getElementById('period2-start').value;

	document.getElementById('period2-endR').innerHTML =
		document.getElementById('period2-end').value;

	document.getElementById('job2-task1R').innerHTML =
		document.getElementById('job2-task1').value;

	document.getElementById('job2-task2R').innerHTML =
		document.getElementById('job2-task2').value;

	document.getElementById('job2-task3R').innerHTML =
		document.getElementById('job2-task3').value;

	document.getElementById('school1R').innerHTML =
		document.getElementById('school1').value;

	document.getElementById('degree1R').innerHTML =
		document.getElementById('degree1').value;

	document.getElementById('degree1-achiev1R').innerHTML =
		document.getElementById('degree1-achiev1').value;

	document.getElementById('degree1-achiev2R').innerHTML =
		document.getElementById('degree1-achiev2').value;

	document.getElementById('degree1-achiev3R').innerHTML =
		document.getElementById('degree1-achiev3').value;

	document.getElementById('school2R').innerHTML =
		document.getElementById('school2').value;

	document.getElementById('degree2R').innerHTML =
		document.getElementById('degree2').value;

	document.getElementById('degree2-achiev1R').innerHTML =
		document.getElementById('degree2-achiev1').value;

	document.getElementById('degree2-achiev2R').innerHTML =
		document.getElementById('degree2-achiev2').value;

	document.getElementById('degree2-achiev3R').innerHTML =
		document.getElementById('degree2-achiev3').value;
}
