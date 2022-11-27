class Http {

    constructor() {
        this.base_url = "https://rickandmortyapi.com/api/character";
        this.nextPage = "";
    }

    async getCharacters() {
        let request = await fetch((this.getNextPage() ? this.getNextPage() : this.base_url))
        let response = await request.json()
        this.setNextPage(response.info.next);
        return response
    }

    async getCharacter(id) {
        let request = await fetch(this.getBaseUrl(`character/${id}`))
        let response = await request.json();
    }


    setNextPage(url) {
        this.nextPage = url;
    }

    getNextPage() {
        return this.nextPage;
    }

    getBaseUrl(url) {
        return this.base_url + url
    }

}