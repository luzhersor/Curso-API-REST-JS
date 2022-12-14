//Botones
searchFormBtn.addEventListener('click', () => {
    location.hash = 'search=';
})
trendingBtn.addEventListener('click', () => {
    location.hash = 'trends=';
})
arrowBtn.addEventListener('click', () => {
    location.hash = 'home';
})





window.addEventListener("DOMContentLoaded", navigator, false);
window.addEventListener("hashchange", navigator, false);
//navigator es la funcion
function navigator() {
    console.log({ location });

    if (location.hash.startsWith("#trends")) {
        console.log("TRENDS!!")
        trendsPage();
    }
    else if (location.hash.startsWith("#search")) {
        console.log("Search!!")
        searchPage();
    }
    else if (location.hash.startsWith('#movie')) {
        console.log("Movie!!")
        movieDetailPage();
    }
    else if (location.hash.startsWith("#category=")) {
        console.log("Categories!!")
        categoriesPage();
    }
    else {
        console.log("Home!!")
        homePage();
    }

    location.hash

}

function homePage() {
    console.log("Home!!")

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = " ";
    arrowBtn.classList.add('inactive')
    headerTitle.classList.remove('inactive')
    headerCategoryTitle.classList.add('inactive')
    searchForm.classList.remove('inactive')


    trendingPreviewSection.classList.remove('inactive')
    categoriesPreviewSection.classList.remove('inactive')
    genericSection.classList.add('inactive')
    movieDetailSection.classList.add('inactive')


    getTrendingMoviesPreview();
    getCategoriesPreview();
}

function categoriesPage() {
    console.log('categories!!')

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = " ";
    arrowBtn.classList.remove('inactive')//-----
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.remove('inactive')
    searchForm.classList.add('inactive')


    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive')
    movieDetailSection.classList.add('inactive')
}

function movieDetailPage() {
    console.log("Movie!!")

    headerSection.classList.add('header-container--long');
    //headerSection.style.background = " ";
    arrowBtn.classList.remove('inactive')
    arrowBtn.classList.add('header-arrow--white')
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.add('inactive')
    searchForm.classList.add('inactive')


    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.add('inactive')
    movieDetailSection.classList.remove('inactive')
}

function searchPage() {
    console.log("Search!!")

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = " ";
    arrowBtn.classList.remove('inactive')//-----
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.remove('inactive')
    searchForm.classList.remove('inactive')


    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive')
    movieDetailSection.classList.add('inactive')
}

function trendsPage() {
    console.log("Trends!!")

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = " ";
    arrowBtn.classList.remove('inactive')//-----
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.remove('inactive')
    searchForm.classList.remove('inactive')


    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive')
    movieDetailSection.classList.add('inactive')
}

