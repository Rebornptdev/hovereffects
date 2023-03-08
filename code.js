const subtitle = document.getElementsByClassName("card-subtitle")[0];

function createWord(text, index) {
    const word = document.createElement("span");

    word.innerHTML = `${text} `;

    word.classList.add("card-subtitle-word");

    word.style.transitionDelay = `${index * 50}ms`;

    return word;
}

function addWord(text, index) {
    return subtitle.appendChild(createWord(text, index));
}

function createSubtitle(text) {
    return text.split(" ").map(addWord);
}

createSubtitle("O facto do Fernando Pessoa não ter tido um cão chamado Fernando Cachorro faz me questionar se ele é o mesmo o maior poeta da língua portuguesa.");