var searchForm = document.querySelector('form');
var movieContainer = document.querySelector('.movie-container');
var inputBox = document.querySelector('.inputBox');

const getMovieInfo = async (movie) => {
    const myAPIkey = "382a22bd";
    const url = `https://www.omdbapi.com/?apikey=${myAPIkey}&t=${movie}`;

    const response =await fetch(url);
    const data = await response.json();

    showMovieData(data);



}


const showMovieData =(data) =>{

    movieContainer.innerHTML="";


    const {Title,imdbRating,Genre,Released,Runtime,Actors,Plot,Poster} = data;

    const movieElement = document.createElement('div');
    movieElement.classList.add('movie-info')
    movieElement.innerHTML = `<h2>${Title}</h2>
                              <p><Strong>Rating:</Strong>${imdbRating}</p>`;                   


    const movieGenreElement = document.createElement('div');
    movieGenreElement.classList.add('movie-genre');

    Genre.split(",").forEach(element => {
        const p = document.createElement('p');
        p.innerHTML = element;
        movieGenreElement.appendChild(p);      
    });

    movieElement.appendChild(movieGenreElement);

    movieElement.innerHTML +=` <p><Strong>Release Date:</Strong>${Released}</p>
                              <p><Strong>Duration:</Strong>${Runtime}</p>
                              <p><Strong>Cast:</Strong>${Actors}</p>
                              <p><Strong>Plot:</Strong>${Plot}</p>`;


    const moviePosterElement = document.createElement('div');
    moviePosterElement.classList.add('movie-poster');
    moviePosterElement.innerHTML=`<img src="${Poster}"/>`;

    movieContainer.appendChild(moviePosterElement);

    movieContainer.appendChild(movieElement);
    

}

searchForm.addEventListener('submit',(e)=>{
e.preventDefault();
const movieName = inputBox.value.trim();
if(movieName !== ''){
    getMovieInfo(movieName);
}
});
