

//Křestní jméno:
const jmenoOG = prompt("Zadej své křestní jméno (bez diakritiky)")
const jmenoTrim = jmenoOG.trim()
const jmenoMale = jmenoTrim.toLowerCase()
const jmeno = jmenoMale.slice(0,3)

//Příjmení:
const prijmeniOG = prompt("Zadej své příjmení (bez diakritiky)")
const prijmeniTrim = prijmeniOG.trim()
const prijmeniMale = prijmeniTrim.toLowerCase()
const prijmeni = prijmeniMale.slice(0, 5)


//E-mailová adresa:
document.body.innerHTML = `<p>Vaše emailová adresa: ${prijmeni}${jmeno}@fit.cvut.cz.</p>`
