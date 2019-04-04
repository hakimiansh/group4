function searchMovie(){
var input=document.getElementById("movie_title").value;
var vaild=validation(input);
if(vaild)
{
    var result=getData(input);
    console.log(result);
   
}
else
    {
        document.getElementById("errorname").innertextL="worng input";
    }
}
function loadMovies(){
    document.createElement("div")
}

function validation(input){
    return input.length>=3;
}

function getData(input) {

    fetch("http://www.omdbapi.com/?apikey=74fed2a7&t="+input+"&type=movie&page=1")
    .then(response => response.json()).then(data => {
        var movie=new Movie(data.Title,data.Poster,data.imdbID);
       
    })
    return movie;
}