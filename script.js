import database from "./database.js"
const root = document.getElementById("main-content")

class Entries{
    //Criando elementos HTML para o artigo a ser gerado
    name = document.createElement("h1")
    location = document.createElement("span")
    image = document.createElement("img")
    link = document.createElement("a")
    date = document.createElement("p")
    text = document.createElement("p")
    article = document.createElement("article")
    div = document.createElement("div")
    imageDiv = document.createElement("div")
    locationDiv = document.createElement("div")
    descriptionDiv = document.createElement("div")

    //definindo os valores dos elementos criados através do construtor
    constructor(name, location, image,link, date, text){
        this.name.textContent = name
        this.location.textContent = location
        this.image.src = image
        this.link.textContent = "View on Google Maps"
        this.link.href = link
        this.date.textContent = date
        this.text.textContent = text
    }
    //definindo as classses de cada elemento para estilizar no css
    setClasses(){
        this.name.classList = "location-name"
        this.location.classList = "location"
        this.link.classList = "location-link"
        this.date.classList = "entry-date"
        this.text.classList = "location-description"
        this.image.classList = "location-image"
        
        this.article.classList = "article"
        this.imageDiv.classList = "image-container"
        this.div.classList = "article-container"
        this.locationDiv.classList = "location-container"
        this.descriptionDiv.classList = "description-container"
    }

    //Anexando cada elemento criado para formar o artigo
    createArticle(){
        this.locationDiv.appendChild(this.location)
        this.locationDiv.appendChild(this.link)

        this.descriptionDiv.appendChild(this.name)
        this.descriptionDiv.appendChild(this.date)
        this.descriptionDiv.appendChild(this.text)
        this.imageDiv.appendChild(this.image)
        this.div.appendChild(this.locationDiv)
        this.div.appendChild(this.descriptionDiv)
        this.article.appendChild(this.imageDiv)
        this.article.appendChild(this.div)
    }
    //retorna o artigo criado. Feito para acessar o atributo artigo para anexar à página
    getArticle(){
        return this.article
    }
    //método responsável para acionar as classes e criar o artigo
    init(){
        this.setClasses()
        this.createArticle()
    }
}
//criando um artigo novo para cada objeto em database, e depois os adicionando ao main
database.map(data =>{
    let entry = new Entries(data.name, data.location, data.image,data.link, data.date,data.text)
    entry.init()
    root.appendChild(entry.getArticle())
})