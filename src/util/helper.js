export function separar(base, maximo) {
	var resultado = [[]];
	var grupo = 0;

	for (var indice = 0; indice < base.length; indice++) {
		if (resultado[grupo] === undefined) {
			resultado[grupo] = [];
		}

		resultado[grupo].push(base[indice]);

		if ((indice + 1) % maximo === 0) {
			grupo = grupo + 1;
		}
	}

	return resultado;
}

export function userloggedFaceOrGoogle(props) {
	if (props.face) return props.face;
	if (props.google) return props.google;
	if (props.user) return props.user;
}

export function toggleMenu(func) {
	let body = document.body;
	let bodyHasClass = body.classList.value.includes("fix-body");

	bodyHasClass
		? body.classList.remove("fix-body")
		: body.classList.add("fix-body");

	func(!bodyHasClass);
}

export const RegExp = {
	phone: /^(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/,
};

export const cidadesHoteis = [
	{
		cidadeHoteis: [
			"Salvador - BA",
			"Golden Park Salvador",
			"Nacional Inn Salvador",
		],
	},
	{
		cidadeHoteis: ["Araxá - MG", "Nacional Inn araxá"],
	},
	{
		cidadeHoteis: [
			"Poços de Caldas - MG",
			"Dan Inn Express Poços de Caldas",
			"Dan Inn Poços de Caldas",
			"Golden Park Poços de Caldas",
			"Nacional Inn Poços de Caldas",
			"Thermas Resort Walter Word",
			"Vilage Inn Poços de Caldas",
		],
	},
	{
		cidadeHoteis: [
			"Uberaba - SP",
			"Dan Inn Uberaba",
			"Golden Park Uberaba",
		],
	},
	{
		cidadeHoteis: [
			"Curitiba - PR",
			"Dan Inn Curitiba",
			"Golden Park Curitiba",
			"Nacional Inn Curitiba",
			"Nacional Inn Torres Curitiba",
			"Victoria Villa",
		],
	},
	{
		cidadeHoteis: ["Santa R. do P. Quatro - SP", "São Paulo Inn"],
	},
	{
		cidadeHoteis: ["São Carlos - SP", "Nacional Inn São Carlos"],
	},
	{
		cidadeHoteis: [
			"Foz do Iguaçu - SC",
			"Dan Inn Foz do Iguaçu",
			"Golden Park Internacional Foz do Iguaçu",
			"Nacional Inn Foz do Iguaçu",
		],
	},
	{
		cidadeHoteis: ["Barretos - SP", "Dann Inn Barretos"],
	},
	{
		cidadeHoteis: ["Rio de Janeiro - RJ", "Golden Park Rio de Janeiro"],
	},
	{
		cidadeHoteis: [
			"Pernambuco - PE",
			"Dan Inn Recife",
			"Nacional Inn Recife",
		],
	},
	{
		cidadeHoteis: ["Araraquara - SP", "Dan Inn Araraquara"],
	},
	{
		cidadeHoteis: ["Porto Alegre - PR", "Dan Inn Porto Alegre"],
	},
	{
		cidadeHoteis: [
			"Sorocaba - SP",
			"Dan Inn Sorocaba",
			"Golden Park Sorocaba",
			"Nacional Inn Sorocaba",
		],
	},
	{
		cidadeHoteis: [
			"São José dos Campos - SP",
			"Dann Inn São José dos Campos",
			"Nacional Inn São José dos Campos",
		],
	},
	{
		cidadeHoteis: [
			"Campinas - SP",
			"Dan Inn Anhanguera",
			"Dan Inn Cambuí",
			"Golden Park Vicaropos",
			"Nacional Inn Campinas",
		],
	},
	{
		cidadeHoteis: [
			"Campos do Jordão - SP",
			"Castelo Nacional Inn Campos do Jordão",
			"Golden Park Campos do Jordão",
			"Dan Inn Premium Campos do Jordão",
			"Nacional Inn Campos do Jordão",
			"Pousada Nacional Inn Campos do Jordão",
		],
	},
	{
		cidadeHoteis: ["Franca - SP", "Dan Inn Franca"],
	},
	{
		cidadeHoteis: ["Limeira - SP", "Nacional Inn Limeira"],
	},
	{
		cidadeHoteis: ["Piracicaba - SP", "Nacional Inn Piracicaba"],
	},
	{
		cidadeHoteis: [
			"Ribeirão Preto - SP",
			"Dan Inn Express Ribeirão Preto",
			"Dan Inn Ribeirão Preto",
			"Golden Park Ribeirão Preto",
			"Nacional Inn Ribeirão Preto",
			"Vilage Inn Ribeirão Preto",
		],
	},
	{
		cidadeHoteis: [
			"São Paulo - SP",
			"Dan Inn Higienópolis ",
			"Dan Inn Planalto",
			"Nacional Inn São Paulo",
			"São Paulo Inn",
		],
	},
];
