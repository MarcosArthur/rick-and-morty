class Home {

    constructor() {
        this.feed = document.querySelector("[data-feed]");
        this.footer = document.querySelector("[data-footer]")
        this.base_url = "https://rickandmortyapi.com/api/character";
        this.nextPage = "";
    }

    Observer() {
        let Observer = new IntersectionObserver(entries => {
            console.log(entries)
            if (entries.some((entries) => entries.isIntersecting) && this.getNextPage()) {
                this.getCharacters();
            }
        });

        Observer.observe(this.footer);
    }

    getCharacters() {
        fetch((this.nextPage ? this.getNextPage() : this.base_url))
            .then(response => response.json())
            .then(response => {
                this.setNextPage(response.info.next);
                this.feed.innerHTML += response.results.map(element => {
                    return `
                    <div data-card>
                        <img src="${element.image}" loading="lazy">
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
                                </div>

                            </div>
                        </div> 
                    </div>`
                }).join('');
            })
    }

    setNextPage(url) {
        this.nextPage = url;
    }

    getNextPage() {
        return this.nextPage;
    }

}