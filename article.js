const articlesmoteur = (nbr, articleData) => {
    let p = 
    `<p>
    Paragraph ipsum dolor sit amet consectetur adipisicing elit. Quo explicabo natus rerum
    provident numquam dolor eos unde repellendus soluta?
</p>`,
    article = (nbr, articleData) => 
        `<article class="${articleData} article${nbr}">
            <a href="">

                <header>
                    <h${articleData == "une" ? 1 : 2}>
                        <span class="puce"></span>
                        <span>${articleData} Titre sa mère dolor sit amet consectetur. Maxime odit, cumque atque recusandae!</span>
                    </h${articleData == "une" ? 1 : 2}>
                    ${articleData == "featured" ? p
                    : ""}
                </header>
                ${articleData == "river2" ? `` : `
                    <main>
                        <section class="article-media">
                            <picture class="article-picture">
                                <img src="img/wonderwomanCoffee.png" alt="C'est de l'article">
                            </picture>
                        </section>
                        ${articleData == "une" ? p : ""}
                    </main>`}
                ${articleData == "runner" ? p : ""}

            </a>
                ${articleData !== "une" ? "" :
                `<footer>
                    <ul class="sameway-articles">
                        <li>
                                <a>
                                    <span class="puce">lien</span>
                                    provident numquam dolor eos unde repellendus soluta?
                                </a>
                        </li>
                        <li>
                                <a>
                                    <span class="puce">lien</span>
                                    provident numquam dolor eos unde repellendus soluta?
                                </a>
                        </li>
                    </ul>
                </footer> `}
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

