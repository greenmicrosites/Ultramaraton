
let zadani = document.body.innerHTML += "<h3>Zadání:</h3><p>Představte si, že jste pořadatelé ultramaratonského závodu. Závod začíná ve tři hodiny odpoledne, což ve 24hodinovém formátu zapíšeme jako 15. Nejlepší běžec zvládne vaši brutální trasu za 10 hodin. Doběhne tedy v jednu hodinu ráno, v našem formátu zapsáno jako 1.</p><ul><li>Založte si JavaScriptový program a uložte čas startu závodu do proměnné start.</li><li>Do proměnné delka uložte délku závodu pro nějakého běžce. Klidně může být pomalejší než náš šampion.</li><li>Do proměnné konec spočítejte, v kolik hodin závod pro našeho běžce skončí a vypište její obsah do stránky.</li><li>Vyzkoušejte různé délky a ověřte, že váš postup funguje.</li></ul><hr />"

const start = 15
const delka = 12
let konec = start + delka

document.body.innerHTML += konec

