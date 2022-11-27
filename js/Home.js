class Home extends Http {

    constructor() {
        super();
        this.card = new Card()
        this.feed = document.querySelector("[data-feed]");
        this.footer = document.querySelector("[data-footer]")
    }

    Observer() {
        let Observer = new IntersectionObserver(entries => {
            if (entries.some((entries) => entries.isIntersecting)) {
                this.loadCharacters();
            }
        });

        Observer.observe(this.footer);
    }

    async loadCharacters() {
        let response = await this.getCharacters()
        this.feed.innerHTML += this.card.createCard(response)
    }

}