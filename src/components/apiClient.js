const API_KEY = "AIzaSyC5tBMa3doUHs6V4Vf4ZOR1hVUpR6FHlAU";

const serialize = function(obj) {
  if(Object.keys(obj).length > 0) {
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return "?"+str.join("&");
  }
}
    
  
const wikiSearch = async (term="") => {
  const updatedData = {
      action: "query",
      list: "search",
      origin: "*",
      format: "json",
      srsearch: term
  }

  let url="https://en.wikipedia.org/w/api.php"+serialize(updatedData);
  const response = await fetch(url);
  return response.json();
}

const translateAPI = async (language, text) => {
  const updatedData = {
    q: text,
    target: language.value,
    key: API_KEY
  }

  let url="https://translation.googleapis.com/language/translate/v2"+serialize(updatedData);
  const response = await fetch(url, {
    method: 'POST'
  });

  return response.json();
}
  
export { wikiSearch, translateAPI };