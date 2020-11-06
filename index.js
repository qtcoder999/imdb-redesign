// ==UserScript==
// @name         imdb content remover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Paras Anand
// @match        https://www.imdb.com/*
// @grant        none
// ==/UserScript==

(function() {
    "use strict";

    const advertisementSelectors = [
       "footer",
       "#sidebar > div:nth-child(3)",
       "#sidebar > div:nth-child(5)",
       ".article.contribute",
       "#main_bottom > div:nth-child(59)",
       "#imdbHeader > div.ipc-page-content-container.ipc-page-content-container--center.navbar__inner > div.navbar__imdbpro.NavProFlyout-sc-1cjctnc-0.hoAGyu",
       "#imdbHeader-navDrawerOpen--desktop"
    ];

    const remove = selector => {
        selector &&
            selector.map(singleSelection => {
            const selection = document.querySelector(singleSelection);
            if (selection) {
                document.querySelector(singleSelection).remove();
                console.log("Ads removed");
            }
        });
    };

    const main = () => {
        window.addEventListener('load', function () {
            remove(advertisementSelectors);
        })

        var styles = `

             
   `

        var styleSheet = document.createElement("style")
        styleSheet.type = "text/css"
        styleSheet.innerText = styles
        document.head.appendChild(styleSheet)
    };
    main();
})();
