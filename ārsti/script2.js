let ĀrstuApraksts = [];

window.addEventListener('load', () => {
	ĀrstuApraksts = JSON.parse(localStorage.getItem('ĀrstuSaraksts') || '[]');
	PievienoAprakstu();
});

document.getElementById('poga').addEventListener('click', () => {
	ĀrstuApraksts.push(ĀrstuSaraksts);
	PievienoAprakstu();
});

function PievienoAprakstu() {
	let Apraksts = document.getElementById('Apraksts');
	Apraksts.innerHTML = '';

	for (let i = 0; i < ĀrstuApraksts.length; i++) {
		let ArstiemApraksts = `
    <div class = 'apraksts' style="display: none">
            <img src="${ĀrstuSaraksts[i].ArstaBilde}" alt="bilde" id="aprakstaBilde">
            <h2 id="Vārdsuzvārds">${ĀrstuSaraksts[i].ArstaVards}</h2>
            <h3 id="ĀrstaProfesija">${ĀrstuSaraksts[i].Profesija}</h3>
            <h2 id="DarbaLaiks">Darba Laiks</h2>
            <a id="laiki">
            <p>Pirmdiena ${ĀrstuSaraksts[i].Pirmdiena} - ${ĀrstuSaraksts[i].PirmdienaLidz}</p>
            <p>Otradiena ${ĀrstuSaraksts[i].Otradiena} - ${ĀrstuSaraksts[i].OtradienaLidz}</p>
            <p>Trešdiena ${ĀrstuSaraksts[i].tresdienas} - ${ĀrstuSaraksts[i].tresdienasLidz}</p>
            <p>Ceturdiena ${ĀrstuSaraksts[i].ceturdienas} - ${ĀrstuSaraksts[i].ceturdienasLidz}</p>
            <p>Piekdiena ${ĀrstuSaraksts[i].piekdienas} - ${ĀrstuSaraksts[i].piekdienasLidz}</p>
            <p>Sesdiena ${ĀrstuSaraksts[i].sestdienas} - ${ĀrstuSaraksts[i].sestdienasLidz}</p>
            <p>Svētdiena ${ĀrstuSaraksts[i].svētdienas} - ${ĀrstuSaraksts[i].svētdienasLīdz}</p>
            </a>
            <button id="Pierakstīties">Pierakstīties</button>
            <img src="/Slimnīcas/bildes/close.png" class = "close2")>
    </div>
	`;
		Apraksts.innerHTML += ArstiemApraksts;
	}
	var close2 = document.getElementsByClassName('close2');
	for (i = 0; i < close2.length; i++) {
		close2[i].onclick = function () {
			var div = this.parentElement;
			div.style.display = 'none';
		};
	}

	localStorage.setItem('ĀrstuApraksts', JSON.stringify(ĀrstuSaraksts));
}
