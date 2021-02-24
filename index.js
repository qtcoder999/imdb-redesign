// ==UserScript==
// @name         imdb content remover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Script tries to minimize the imdb clutter.
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
       "#imdbHeader-navDrawerOpen--desktop",
       "#main_bottom > div:nth-child(60)",
       "#sidebar > div:nth-child(19)",
       "#ratingWidget",
       "#suggestion-search-container",
       "#sidebar > div:nth-child(19)",
       "#sidebar > div:nth-child(20)",
       "#imdbHeader > div.ipc-page-content-container.ipc-page-content-container--center.navbar__inner > div.Root__Separator-sc-7p0yen-1.cECatH",
       "#social-share-widget",
       "#feedback-widget",
       "#relatedEditorialListsWidget",
       ".banner-container"
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

            .imdb-header__watchlist-button{
                  margin-left: auto;
             }
             .imdb-header__logo-link{
                  margin-left: 0;
             }

   `

        var styleSheet = document.createElement("style")
        styleSheet.type = "text/css"
        styleSheet.innerText = styles
        document.head.appendChild(styleSheet)
    };
    main();
})();
