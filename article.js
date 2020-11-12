const articlesmoteur = (nbr, articleData) => {
    let article = (nbr, articleData) => `<article class="${articleData} article${nbr}">
    <header>
        <a href="">

            <h${articleData == "une" ? 1 : 2}>
            
                <span class="puce">M</span>
                <span>Titre sa mère dolor sit amet consectetur. Maxime odit, cumque atque recusandae!</span>
            </h${articleData == "une" ? 1 : 2}>
                <picture class="article-picture">
                    <img src="img/wonderwomanCoffee.png" alt="C'est de l'article">
                </picture>
                <p>
                    Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo explicabo natus rerum provident numquam dolor eos unde repellendus soluta? 
                </p>
            </a>
        </header>
        <main>
            <picture class="article-picture">
                <img src="" alt="">
            </picture>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo explicabo natus rerum
                provident numquam dolor eos unde repellendus soluta?
            </p>

        </main>
        <footer>
            <ul class="sameway-articles">
                <li>
                    <article></article>
                </li>
                <li>
                    <article></article>
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
    console.log(ele.dataset.c)
    ele.insertAdjacentHTML("afterend", articlesmoteur(ele.dataset.n, ele.dataset.c))
    ele.remove()
}
)

