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
    		<img src="${ĀrstuSaraksts[i].ArstaBilde}" class ='bildeee' alt="bilde" id="aprakstaBilde" onclick = 'Pieteikt(this)'>
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
            <button class="Pierakstīties" id="Pierakstīties${[i]}" onclick = 'Pieteikt(this)' >Pierakstīties</button>
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

	var Pierakstīties = document.getElementsByClassName('Pierakstīties');

	for (i = 0; i < Pierakstīties.length; i++) {
		Pierakstīties[i].onclick = function () {
			var div = this.parentElement;
			div.style.display = 'none';
		};
	}

	localStorage.setItem('ĀrstuApraksts' + index2, JSON.stringify(ĀrstuSaraksts));
	
}


var poogga = document.getElementById("Pierakstīties");

poogga.onclick = function(){
	console.log("work")
}

function Pieteikties() {
	let PieteiktiesPieArsta = document.getElementById('PieteiktiesPieArsta');
	PieteiktiesPieArsta.innerHTML = '';

	for (let i = 0; i < ĀrstuApraksts.length; i++) {
		let PierakstipieArsta = `
	<div class="pierakstities" id='${[i]}'>
    
    <h1 class="pierkstvirsraksts">Pierakstīties</h1>
    <h2 id="pvards">${ĀrstuSaraksts[i].ArstaVards}</h2>
    <h2 id="pprofesija">${ĀrstuSaraksts[i].Profesija}</h2>

    <input placeholder="Vārds Uzvārds" type="text" id="pacientavards" />
    <input
        type="datetime-local"
        id="meeting-time"
        name="meeting-time"
        value="2018-06-12T19:30"
    />
    <input
        type="email"
        id="email"
        placeholder="e-pasts"
        pattern=".+@globex\.com"
        size="30"
        required
    />
    <div>
    <button id="poga2">Pierakstīties</button>
    </div
    </div>
	`;
	PieteiktiesPieArsta.innerHTML += PierakstipieArsta;
	}
	localStorage.setItem('ArstuPieraksts' + index2, JSON.stringify(ĀrstuSaraksts));
}

function Pieteikt(PieteiktiesPieArsta) {
	console.log("index1")
	var divs1 = document.querySelectorAll('.Pierakstīties');
	var index1 = Array.from(divs1).indexOf(PierakstipieArsta);
	document.getElementsByid(index1).style.display = 'flex';
}