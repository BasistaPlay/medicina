const logs = document.getElementById('logs');
const plus = document.getElementById('plus');
let wraper = document.querySelector('#pievienot');
let SlimnīcuSaraksts = [];

window.addEventListener('load', () => {
	SlimnīcuSaraksts = JSON.parse(
		localStorage.getItem('SlimnīcuSaraksts') || '[]'
	);
	render();
});

plus.addEventListener('click', () => {
	logs.style.display = 'block';
	plus.style.display = 'none';
});

document.getElementById('poga').addEventListener('click', () => {
	logs.style.display = 'none';
	plus.style.display = 'inline-flex';
	plus.style.marginBottom = '45px';

	let saraksts = {
		SlimnīcasBilde: SlimnīcuSaraksts.file,
		SlimnīcasNosaukums: SlimnicasNosaukums.value,
	};

	if (SlimnicasNosaukums.value === '') {
		logs.style.display = 'block';
		plus.style.display = 'none';
		alert('Ierakstiet slimnīcas nosaukumu');
	} else if (file.value === '') {
		logs.style.display = 'block';
		plus.style.display = 'none';
		alert('Ievietojat slimnīcas bildi!');
	} else {
		file.value = '';
		SlimnicasNosaukums.value = '';
		SlimnīcuSaraksts.push(saraksts);
		render();
	}
});

document.querySelector('#file').addEventListener('change', function () {
	const reader = new FileReader();

	reader.addEventListener('load', () => {
		SlimnīcuSaraksts.file = reader.result;
	});
	reader.readAsDataURL(this.files[0]);
});

function render() {
	let pievienot = document.getElementById('pievienot');
	pievienot.innerHTML = '';

	for (let i = 0; i < SlimnīcuSaraksts.length; i++) {
		let saraksts = `
	<div class = 'pievienot'>
		<img src='${SlimnīcuSaraksts[i].SlimnīcasBilde}' class= 'bilde'>
		<h2 class='slimnicasvirsraksts'>${SlimnīcuSaraksts[i].SlimnīcasNosaukums}</h2>
		<img src="/Slimnīcas/bildes/close.png" class = "close" onclick='removeBook("${SlimnīcuSaraksts[i].SlimnīcasNosaukums}")'>
	</div>
	`;
		pievienot.innerHTML += saraksts;
	}
	localStorage.setItem('SlimnīcuSaraksts', JSON.stringify(SlimnīcuSaraksts));
}

function removeBook(saraksts) {
	for (let i = 0; i < SlimnīcuSaraksts.length; i++) {
		if (saraksts === SlimnīcuSaraksts[i].SlimnīcasNosaukums) {
			delete SlimnīcuSaraksts[i];
			break;
		}
	}

	SlimnīcuSaraksts = SlimnīcuSaraksts.filter(function (e) {
		return e != null;
	});

	localStorage.setItem('SlimnīcuSaraksts', JSON.stringify(SlimnīcuSaraksts));
	render();
}
