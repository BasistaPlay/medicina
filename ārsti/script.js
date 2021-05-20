const logs = document.getElementById('logs2');
const plus = document.getElementById('plus');
let wraper = document.querySelector('#pievienot');
let ĀrstuSaraksts = [];

window.addEventListener('load', () => {
	ĀrstuSaraksts = JSON.parse(localStorage.getItem('ĀrstuSaraksts') || '[]');
	render();
});

plus.addEventListener('click', () => {
	logs.style.display = 'block';
	plus.style.display = 'none';
});

document.getElementById('poga').addEventListener('click', () => {
	logs.style.display = 'none';
	plus.style.display = 'inline-flex';
	plus.style.marginBottom = '100px';

	let saraksts = {
		ArstaBilde: ĀrstuSaraksts.file,
		ArstaVards: arstavards.value,
		Profesija: arstaprofesija.value,
		Pirmdiena: Pirmdienas.value,
		PirmdienaLidz: Pirmdienas2.value,
		Otradiena: otradienas.value,
		OtradienaLidz: otradienas2.value,
		tresdienas: tresdienas.value,
		tresdienasLidz: tresdienas2.value,
		ceturdienas: ceturdienas.value,
		ceturdienasLidz: ceturdienas2.value,
		piekdienas: piekdienas.value,
		piekdienasLidz: piekdienas2.value,
		sestdienas: sestdienas.value,
		sestdienasLidz: sestdienas2.value,
		svētdienas: svētdienas.value,
		svētdienasLīdz: svētdienas2.value,
	};

	//if (Pirmdienas.value === '') {
	//	Pirmdienas.value == 'Nestrādā';
	//} else if (otradienas.value === '') {
	//	Pirmdienas.value == 'Nestrādā';
	//} else if (tresdienas.value === '') {
	//	Pirmdienas.value == 'Nestrādā';
	//} else if (piekdienas.value === '') {
	//	Pirmdienas.value == 'Nestrādā';
	//} else if (sestdienas.value === '') {
	//	Pirmdienas.value == 'Nestrādā';
	//} else if (svētdienas.value === '') {
	//	Pirmdienas.value == 'Nestrādā';

	if (arstavards.value === '') {
		logs.style.display = 'block';
		plus.style.display = 'none';
		alert('Ierakstiet ārsta vārdu un uzvārdu!');
	} else if (arstaprofesija.value === '') {
		logs.style.display = 'block';
		plus.style.display = 'none';
		alert('Ierakstiet ārsta profesiju!');
	} else if (ArstaBilde.value === '') {
		logs.style.display = 'block';
		plus.style.display = 'none';
		alert('Ievietojat ārsta bildi!');
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

		ĀrstuSaraksts.push(saraksts);

		console.log(ĀrstuSaraksts);
		render();
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
		let saraksts = `
    <div class="pievienotArstu">
		<img src='${ĀrstuSaraksts[i].ArstaBilde}' class= 'ArstaBilde'>
		<h2 class='vards'>${ĀrstuSaraksts[i].ArstaVards}</h2>
        <h3 class='Profesija'>${ĀrstuSaraksts[i].Profesija}</h3>
		<img src="/Slimnīcas/bildes/close.png" class = "close" onclick='removeBook("${ĀrstuSaraksts[i].ArstaVards}")'>
	</div>
	`;
		pievienotArstu.innerHTML += saraksts;
	}
	localStorage.setItem('ĀrstuSaraksts', JSON.stringify(ĀrstuSaraksts));
}

function removeBook(saraksts) {
	for (let i = 0; i < ĀrstuSaraksts.length; i++) {
		if (saraksts === ĀrstuSaraksts[i].ArstaVards) {
			delete ĀrstuSaraksts[i];
			break;
		}
	}

	ĀrstuSaraksts = ĀrstuSaraksts.filter(function (e) {
		return e != null;
	});

	localStorage.setItem('ĀrstuSaraksts', JSON.stringify(ĀrstuSaraksts));
	render();
}
