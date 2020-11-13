const articlesmoteur = (nbr, articleData) => {
    let article = (nbr, articleData) => `<article class="${articleData} article${nbr}">
    <a href="">
            <header>

                <h${articleData == "une" ? 1 : 2}>
                
                    <span class="puce">M</span>
                    <span>Titre sa mère dolor sit amet consectetur. Maxime odit, cumque atque recusandae!</span>
                </h${articleData == "une" ? 1 : 2}>
                
                
            </header>
            <main>
                <section class="article-media">
                    <picture class="article-picture">
                        <img src="img/wonderwomanCoffee.png" alt="C'est de l'article">
                    </picture>
                </section>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo explicabo natus rerum
                    provident numquam dolor eos unde repellendus soluta?
                </p>
            </main>
        </a>
        <footer>
            <ul class="sameway-articles">
                <li>
                        <a>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo explicabo natus rerum
                            provident numquam dolor eos unde repellendus soluta?
                        </a>
                </li>
                <li>
                        <a>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo explicabo natus rerum
                            provident numquam dolor eos unde repellendus soluta?
                        </a>
                </li>
            </ul>
        </footer>
</article>`, articles =""

    for (let i = 0; i < nbr; i++) {
        articles += article(i, articleData);

    }

    return articles
}

document.querySelectorAll('article[data-c]').forEach(ele => {
    ele.insertAdjacentHTML("afterend", articlesmoteur(ele.dataset.n, ele.dataset.c))
    ele.remove()
}
)

