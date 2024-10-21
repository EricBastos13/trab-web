document.addEventListener('DOMContentLoaded', function() {
    const searchResults = document.querySelector('.search-results');

    if (searchResults) {
        publications.forEach(publication => {
            const block = createPublicationBlock(publication);
            searchResults.appendChild(block);
        });
    } else {
        console.error("O elemento .search-results não foi encontrado no DOM.");
    }
});


