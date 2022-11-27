class Card {

    createCard(data) {
        return data.results.map(element => {
            return `
            <div data-card onclick="Card.onClickCard(${element.id})">
                <img src="${element.image}" loading="lazy" alt="${element.name}">
                <div data-about>
                    <h5 data-title>${element.name}</h5>
                    <div data-info>
                        
                        <div>
                            <h6>status: ${element.status}</h6>
                            <h6>species: ${element.species}</h6>
                        </div>

                        <div>
                            <h6>type: ${element.type}</h6>
                            <h6>gender: ${element.gender}</h6>
                       ' </div>

                    </div>
                </div> 
            </div>`
        }).join('');

    }

    static onClickCard(id) {

    }


}