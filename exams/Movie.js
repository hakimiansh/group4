function Movie(title,poster,imdbID)
{
    this.title=title;
    this.poster=poster;
    this.imdbId=imdbID;
    this.imdbLink="";
    setImdbLink();
}

function setImdbLink()
{return "https://www.imdb.com/title/"+this.imdbId}

