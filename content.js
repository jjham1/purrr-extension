let divv = document.querySelectorAll('p,h1,h2,h3,a,span,em');

for (elt of divv) {
    if(elt.innerHTML.includes('per')){
        elt.innerHTML = elt.innerHTML.replace(/per/g, 'purr');
    }
}
