const logs = document.getElementById('logs');
let SlimnīcasSaraksts = [];

document.getElementById('plus').addEventListener('click', () => {
	logs.style.display = 'block';
	document.getElementById('plus').style.display = 'none';
});

document.getElementById('poga').addEventListener('click', () => {
	document.getElementById('plus').style.display = 'inline';
	logs.style.display = 'none';

	let saraksts = {
		SlimnīcasNosaukums: SlimnicasNosaukums.value,
		bilde: file.value,
	};

	SlimnicasNosaukums.value = '';
	file.value = '';

	SlimnīcasSaraksts.push(saraksts);

	console.log(SlimnīcasSaraksts);
});

function render() {
	let Slimnīcas = document.getElementById('saraksts');
}
