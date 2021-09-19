const API_KEY = "b3756a01debddb20e96d7c901b2f7131";

const requests = {
  fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en=us`,
  fetchNetflixOriginals : `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en=us`,
  fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_generes=28`,
}

export default requests;