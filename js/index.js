const disciplinas = [
    {
        id: 1,
        nome: "Linguagem de Programação",
        ano: 1,
        ementa: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
        id: 2,
        nome: "Algoritimos",
        ano: 1,
        ementa: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
        id: 3,
        nome: "Arquitetura e Organização de Computadores e Sistemas Operacionais",
        ano: 1,
        ementa: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
        id: 4,
        nome: "Orientação à Objetos",
        ano: 2,
        ementa: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
        id: 5,
        nome: "Banco de Dados",
        ano: 2,
        ementa: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
        id: 6,
        nome: "Engenharia de Software",
        ano: 2,
        ementa: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
        id: 7,
        nome: "Desenvolvimento Web",
        ano: 3,
        ementa: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
        id: 8,
        nome: "Engenharia de Sistemas",
        ano: 3,
        ementa: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
        id: 9,
        nome: "Introdução à Redes",
        ano: 3,
        ementa: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
];

const loadCards = () => {

    disciplinas.forEach((disciplina) => {

        let ano = `.ano${disciplina.ano}`;

        let divCard = document.querySelector(ano);

        let card = `
            <div class="card mb-3 p-3">
                <div class="row">
                    <div class="col-md-4">
                        <div class="row g-1">
                            <img src="" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="row">
                            <h5 class="card-title">${disciplina.nome}</h5>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="row">
                            <div class="card-body">
                                <p class="card-text">${disciplina.ementa}</p>
                            </div>
                        </div> 
                    </div>
                </div>
                <button type="button" class="col-2 selecionar" isSelected="false" idDisciplina="${disciplina.id}">Selecionar</button>
            </div>
        `;
        divCard.innerHTML += card;
    });


}

window.onload = () => {
    loadCards();

    let cards = document.querySelectorAll(".card");

    let disciplinaSelecionada;

    cards.forEach((card) => {
        card.addEventListener("click", (event) => {
            event.preventDefault();

            disciplinas.forEach((disciplina) => {

                if (disciplina.id == card.lastElementChild.getAttribute("idDisciplina")) {
                    disciplinaSelecionada = {
                        id: disciplina.id,
                        nome: disciplina.nome,
                    }

                    let key = `disciplina${disciplina.id}`;

                    let isSelected = card.lastElementChild.getAttribute("isSelected");

                    console.log(isSelected);

                    if (isSelected == "false") {
                        let objDisciplinaSelecionada = JSON.stringify(disciplinaSelecionada);
                        sessionStorage.setItem(key, objDisciplinaSelecionada);

                        card.lastElementChild.setAttribute("isSelected", true);
                    } else {
                        sessionStorage.removeItem(key);

                        console.log(isSelected);

                        card.lastElementChild.setAttribute("isSelected", false);
                    }                  
                }
            });
        });
    });
}