const logs2 = document.getElementById('logs2');
const plus2 = document.getElementById('plus');
let wraper = document.querySelector('#pievienot');
let ĀrstuSaraksts = [];

window.addEventListener('load', () => {
	ĀrstuSaraksts = JSON.parse(localStorage.getItem('ĀrstuSaraksts') || '[]');
	render();
});

plus2.addEventListener('click', () => {
	logs2.style.display = 'block';
	plus2.style.display = 'none';
});

document.getElementById('poga').addEventListener('click', () => {
	logs2.style.display = 'none';
	plus2.style.display = 'inline-flex';
	plus2.style.marginBottom = '100px';

	var valid1 = '';
	if (document.getElementById('Nestrada1').checked) {
		valid1 = 'Nestrādā';
		Pirmdienas.value = '';
		Pirmdienas2.value = '';
	} else {
		valid1 = '';
	}
	var valid2 = '';
	if (document.getElementById('Nestrada2').checked) {
		valid2 = 'Nestrādā';
		otradienas.value = '';
		otradienas2.value = '';
	} else {
		valid2 = '';
	}
	var valid3 = '';
	if (document.getElementById('Nestrada3').checked) {
		valid3 = 'Nestrādā';
		tresdienas.value = '';
		tresdienas2.value = '';
	} else {
		valid3 = '';
	}
	var valid4 = '';
	if (document.getElementById('Nestrada4').checked) {
		valid4 = 'Nestrādā';
		ceturdienas.value = '';
		ceturdienas2.value = '';
	} else {
		valid4 = '';
	}
	var valid5 = '';
	if (document.getElementById('Nestrada5').checked) {
		valid5 = 'Nestrādā';
		piekdienas.value = '';
		piekdienas2.value = '';
	} else {
		valid5 = '';
	}
	var valid6 = '';
	if (document.getElementById('Nestrada6').checked) {
		valid6 = 'Nestrādā';
		sestdienas.value = '';
		sestdienas2.value = '';
	} else {
		valid6 = '';
	}
	var valid7 = '';
	if (document.getElementById('Nestrada7').checked) {
		valid7 = 'Nestrādā';
		svētdienas.value = '';
		svētdienas2.value = '';
	} else {
		valid7 = '';
	}

	let sarakstsĀrstu = {
		ArstaBilde: ĀrstuSaraksts.file,
		ArstaVards: arstavards.value,
		Profesija: arstaprofesija.value,
		Pirmdiena: Pirmdienas.value,
		PirmdienaLidz: Pirmdienas2.value,
		Nestrada1: valid1,
		Otradiena: otradienas.value,
		OtradienaLidz: otradienas2.value,
		Nestrada2: valid2,
		tresdienas: tresdienas.value,
		tresdienasLidz: tresdienas2.value,
		Nestrada3: valid3,
		ceturdienas: ceturdienas.value,
		ceturdienasLidz: ceturdienas2.value,
		Nestrada4: valid4,
		piekdienas: piekdienas.value,
		piekdienasLidz: piekdienas2.value,
		Nestrada5: valid5,
		sestdienas: sestdienas.value,
		sestdienasLidz: sestdienas2.value,
		Nestrada6: valid6,
		svētdienas: svētdienas.value,
		svētdienasLīdz: svētdienas2.value,
		Nestrada7: valid7,
	};

	if (arstavards.value === '') {
		logs2.style.display = 'block';
		plus2.style.display = 'none';
		alert('Ierakstiet ārsta vārdu un uzvārdu!');
	} else if (arstaprofesija.value === '') {
		logs2.style.display = 'block';
		plus2.style.display = 'none';
		alert('Ierakstiet ārsta profesiju!');
	} else if (ArstaBilde.value === '') {
		logs2.style.display = 'block';
		plus2.style.display = 'none';
		alert('Ievietojat ārsta bildi!');
	} else if (
		(Pirmdienas2.value === '' || Pirmdienas.value === '') &&
		valid1 === ''
	) {
		alert('Ievadiet pirmdienas Darba laiku vai uzlieciet ka nestrādā');
		logs2.style.display = 'block';
		plus2.style.display = 'none';
	} else if (
		(otradienas2.value === '' || otradienas.value === '') &&
		valid2 === ''
	) {
		alert('Ievadiet otradienas Darba laiku vai uzlieciet ka nestrādā');
		logs2.style.display = 'block';
		plus2.style.display = 'none';
	} else if (
		(tresdienas2.value === '' || tresdienas.value === '') &&
		valid3 === ''
	) {
		alert('Ievadiet tresdienas Darba laiku vai uzlieciet ka nestrādā');
		logs2.style.display = 'block';
		plus2.style.display = 'none';
	} else if (
		(ceturdienas2.value === '' || ceturdienas.value === '') &&
		valid4 === ''
	) {
		alert('Ievadiet ceturdienas Darba laiku vai uzlieciet ka nestrādā');
		logs2.style.display = 'block';
		plus2.style.display = 'none';
	} else if (
		(piekdienas2.value === '' || piekdienas.value === '') &&
		valid5 === ''
	) {
		alert('Ievadiet piekdienas Darba laiku vai uzlieciet ka nestrādā');
		logs2.style.display = 'block';
		plus2.style.display = 'none';
	} else if (
		(sestdienas2.value === '' || sestdienas.value === '') &&
		valid6 === ''
	) {
		alert('Ievadiet sestdienas Darba laiku vai uzlieciet ka nestrādā');
		logs2.style.display = 'block';
		plus2.style.display = 'none';
	} else if (
		(svētdienas2.value === '' || svētdienas.value === '') &&
		valid7 === ''
	) {
		alert('Ievadiet svētdienas Darba laiku vai uzlieciet ka nestrādā');
		logs2.style.display = 'block';
		plus2.style.display = 'none';
	} else {
		ArstaBilde.value = '';
		arstavards.value = '';
		arstaprofesija.value = '';
		Pirmdienas.value = '';
		Pirmdienas2.value = '';
		otradienas.value = '';
		otradienas2.value = '';
		tresdienas.value = '';
		tresdienas2.value = '';
		ceturdienas.value = '';
		ceturdienas2.value = '';
		piekdienas.value = '';
		piekdienas2.value = '';
		sestdienas.value = '';
		sestdienas2.value = '';
		svētdienas.value = '';
		svētdienas2.value = '';
		document.getElementById('Nestrada1').checked = false;
		document.getElementById('Nestrada2').checked = false;
		document.getElementById('Nestrada3').checked = false;
		document.getElementById('Nestrada4').checked = false;
		document.getElementById('Nestrada5').checked = false;
		document.getElementById('Nestrada6').checked = false;
		document.getElementById('Nestrada7').checked = false;

		ĀrstuSaraksts.push(sarakstsĀrstu);
		ĀrstuApraksts.push(ĀrstuSaraksts);
		render();
		PievienoAprakstu();
	}
});

document.querySelector('#ArstaBilde').addEventListener('change', function () {
	const reader = new FileReader();

	reader.addEventListener('load', () => {
		ĀrstuSaraksts.file = reader.result;
	});
	reader.readAsDataURL(this.files[0]);
});

function render() {
	let pievienotArstu = document.getElementById('pievienotArstu');
	pievienotArstu.innerHTML = '';

	for (let i = 0; i < ĀrstuSaraksts.length; i++) {
		let sarakstsĀrstu = `
    <div class='pievienotArstu'>
		<img src='${ĀrstuSaraksts[i].ArstaBilde}' class= 'ArstaBilde' onclick = 'ParadaAprakstu(this)'>
		<h2 class='vards'>${ĀrstuSaraksts[i].ArstaVards}</h2>
        <h3 class='Profesija'>${ĀrstuSaraksts[i].Profesija}</h3>
		<img src="/static/img/close.png" class = "close" onclick='remove("${ĀrstuSaraksts[i].ArstaVards}")'>
	</div>
	`;
		pievienotArstu.innerHTML += sarakstsĀrstu;
	}
	localStorage.setItem('ĀrstuSaraksts', JSON.stringify(ĀrstuSaraksts));
}

function remove(sarakstsĀrstu) {
	for (let i = 0; i < ĀrstuSaraksts.length; i++) {
		if (sarakstsĀrstu === ĀrstuSaraksts[i].ArstaVards) {
			delete ĀrstuSaraksts[i];
			break;
		}
	}

	ĀrstuSaraksts = ĀrstuSaraksts.filter(function (e) {
		return e != null;
	});

	localStorage.setItem('ĀrstuSaraksts', JSON.stringify(ĀrstuSaraksts));
	render();

	localStorage.setItem('ĀrstuApraksts', JSON.stringify(ĀrstuSaraksts));
	render();
}

function ParadaAprakstu(sarakstsĀrstu) {
	var divs = document.querySelectorAll('.ArstaBilde');
	var index = Array.from(divs).indexOf(sarakstsĀrstu);
	document.getElementById(index).style.display = 'flex';
}
