const li = Array.from(document.querySelectorAll("li"));

// Faz uma função que retorna uma função.
// E a última função retorna a operação.
const getElementAttr = (key) => (el) => el.getAttribute(key);

// Ao chamar a função passando um argumento, o retorno será uma função com o valor do argumento salvo.
const getAttrDataSlide = getElementAttr("data-slide");
const getAttrId = getElementAttr("data-slide");

// Ao utilizar a função retornada, ele executará a função recebendo o novo argumento.
// No os argumentos vão automaticamente pra fnução.
const dataSlideList = li.map(getAttrDataSlide);
const idList = li.map(getAttrId);

console.log(dataSlideList);
console.log(idList);
