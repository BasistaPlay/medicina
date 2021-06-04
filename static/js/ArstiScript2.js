let ĀrstuApraksts = [];

index2 = JSON.parse(localStorage.getItem('saraksts'));

window.addEventListener('load', () => {
	ĀrstuApraksts = JSON.parse(
		localStorage.getItem('ĀrstuApraksts' + index2) || '[]'
	);
	PievienoAprakstu();
});

function PievienoAprakstu() {
	let Apraksts = document.getElementById('Apraksts');
	Apraksts.innerHTML = '';

	for (let i = 0; i < ĀrstuApraksts.length; i++) {
		let ArstiemApraksts = `
    <div class = 'apraksts' id = '${[i]}' style="display: none">
    		<img src="${ĀrstuSaraksts[i].ArstaBilde}" alt="bilde" id="aprakstaBilde">
            <h2 id="Vārdsuzvārds">${ĀrstuSaraksts[i].ArstaVards}</h2>
            <h3 id="ĀrstaProfesija">${ĀrstuSaraksts[i].Profesija}</h3>
            <h2 id="DarbaLaiks">Darba Laiks</h2>
            <a id="laiki">
            <p>Pirmdiena ${ĀrstuSaraksts[i].Pirmdiena} - ${
			ĀrstuSaraksts[i].PirmdienaLidz
		}${ĀrstuSaraksts[i].Nestrada1}</p>
            <p>Otradiena ${ĀrstuSaraksts[i].Otradiena} - ${
			ĀrstuSaraksts[i].OtradienaLidz
		}${ĀrstuSaraksts[i].Nestrada2}</p>
            <p>Trešdiena ${ĀrstuSaraksts[i].tresdienas} - ${
			ĀrstuSaraksts[i].tresdienasLidz
		}${ĀrstuSaraksts[i].Nestrada3}</p>
            <p>Ceturdiena ${ĀrstuSaraksts[i].ceturdienas} - ${
			ĀrstuSaraksts[i].ceturdienasLidz
		}${ĀrstuSaraksts[i].Nestrada4}</p>
            <p>Piekdiena ${ĀrstuSaraksts[i].piekdienas} - ${
			ĀrstuSaraksts[i].piekdienasLidz
		}${ĀrstuSaraksts[i].Nestrada5}</p>
            <p>Sesdiena ${ĀrstuSaraksts[i].sestdienas} - ${
			ĀrstuSaraksts[i].sestdienasLidz
		}${ĀrstuSaraksts[i].Nestrada6}</p>
            <p>Svētdiena ${ĀrstuSaraksts[i].svētdienas} - ${
			ĀrstuSaraksts[i].svētdienasLīdz
		}${ĀrstuSaraksts[i].Nestrada7}</p>
            </a>
            <button id="Pierakstīties">Pierakstīties</button>
            <img src="/static/img/close.png" class = "close2")>
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

	localStorage.setItem('ĀrstuApraksts' + index2, JSON.stringify(ĀrstuSaraksts));
}
