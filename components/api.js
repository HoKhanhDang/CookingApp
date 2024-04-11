let root = "https://www.omdbapi.com/?apikey=39c349f1"

exports.fetch = function(){
  let url = `https://www.omdbapi.com/?s=Batman&apikey=39c349f1`
  return fetch(url)
    .then((response)=> response.json())
    .then((json)=>{
      console.log(json)
      return json['Search'];
    })
}

exports.search = function(key){
  let url = `${root}&s=${key}`
  return fetch(url)
    .then((response)=> response.json())
    .then((json)=>{

      return json;
    })
}
exports.view = function(id){
  let url = `https://www.omdbapi.com/?apikey=39c349f1&i=${id}&plot=short&r=json`
  console.log(url)
  return fetch(url)
    .then((response)=> response.json())
    .then((json)=>{

      return json;
    })
}



