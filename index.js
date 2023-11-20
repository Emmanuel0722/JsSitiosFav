// const formSite = 
document.getElementById("formSite").addEventListener("submit", addSite);

function showSites() {
	
	let sites = JSON.parse(localStorage.getItem("Sites"));
	let listSite = document.getElementById("listSite");

	listSite.innerHTML = "";

	if (sites !== null) {
		for (let i = 0; i < sites.length; i++) {
			let nameSite = sites[i].nameSite;
			let url = sites[i].url;
	
			listSite.innerHTML += `
				<div class="d-flex align-items-center justify-content-between bg-secondary col-md-8 text-center rounded p-5 mb-2" style="height: 50px;" >
					<h3 class="text-white m-2">${nameSite}</h3>
					<di>
						<a href="${url}" class="btn btn-success m-2" target="_blank" >Visitar</a>
						<button class="btn btn-danger m-2" onclick="deleteSite('${nameSite}')" >Borrar</button>
					</div>
				</div>
			`
		}
	}else{
		console.log("Todavia no tienes sitios web agregados.")
	}
}

function addSite(e) {

	const nameSite = document.getElementById("nameSite").value;
	const url = document.getElementById("url").value;

	const site = {
		nameSite,
		url
	};

	if (localStorage.getItem("Sites") === null) {

		let sites = [];
		sites.push(site);
		localStorage.setItem("Sites", JSON.stringify(sites));
		console.log("Primer sitio Agregado!!");

	}else{

		let sites = JSON.parse(localStorage.getItem("Sites"));
		sites.push(site);
		localStorage.setItem("Sites", JSON.stringify(sites));
		console.log("Nuevo Sitio Agregado!!");
		
	}

	document.getElementById("formSite").reset();
	e.preventDefault();
	showSites();

}

function deleteSite(sit) {

	let sites = JSON.parse(localStorage.getItem("Sites"))

	for (let i = 0; i < sites.length; i++) {
		if (sites[i].nameSite == sit) {
			sites.splice(i, 1);
		}
	}

	localStorage.setItem("Sites", JSON.stringify(sites));
	showSites();
}

showSites();