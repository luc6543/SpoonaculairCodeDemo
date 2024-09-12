$(document).ready(function () {
    $('#searchButton').on('click', function () {
        $.ajax({
            url: `https://api.spoonacular.com/recipes/complexSearch?query=${$('#searchValue').val()}&apiKey=c25e2d349ba842ee8186ded1ff30b942`
        }).done(function (data) {
            data.results.forEach(recipe => {
                const searchResults = document.querySelector('.searchResults');

                const newItem = document.createElement('div');
                newItem.classList.add('recipe');
                
                // 12 sep 2024 09:15
                //  Geen reset na zoeken recepten #1 
                newItem.innerHTML = `<h3>${recipe.title}</h3><a href="ingredients.html?id=${recipe.id}"><img src=${recipe.image} /></a>`;
                newItem.classList = "card";
                document.querySelectorAll('.card').forEach((elem) => {
                    elem.remove();
                });
                searchResults.appendChild(newItem);
                

            });
        });
    });
});
