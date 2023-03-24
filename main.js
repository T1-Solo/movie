
const template = renderElement("template").content
const cards = renderElement(".cards")
const search_input = renderElement(".search_input")
const tmdb_key = "api_key=1a49eb75e8643c1875849abe788f93a0"
const base_url = `https://api.themoviedb.org/3`
const img_key = "/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"
const img_url = "https://image.tmdb.org/t/p/w500"
const search_url = `${base_url} + 'search/movie?api_key=' + ${tmdb_key}`
const Api_url = base_url+`/discover/movie?sort_by=popularity.desc&${tmdb_key}`
const page = renderElement(".page")
const getMovie = async  () => {
    const jsons = await  axios.get(Api_url).catch((error) => console.log(error))
    let response = await jsons.data
    console.log(response.results)
    console.log(response.total_pages)
    renders(response.results)
}
let minus = renderElement(".minus")
let count  = renderElement(".count")
let plus = renderElement(".plus")
let index = 1
const handeleCount = (arr)=>{
  count.textContent = index
  arr.preventDefault()
  index = count.textContent
  const countApi = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&${tmdb_key}&page=${index}`
  axios.get(countApi).then((response) => {
    let info = response.data.results
    renders(info)
  })
}

const handleMinus = (arr) => {
  count.textContent = index
  arr.preventDefault()
  if(index <= 1){
    index.index
  } else {
    count.textContent = index--
    const countApi = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&${tmdb_key}&page=${index-1}`
    axios.get(countApi).then((response) => {
      let info = response.data.results 
      renders(info)
    })
  }
}

const  handlePlus = (arr) => {
  count.textContent = index++
  arr.preventDefault()
  
    const countApi = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&${tmdb_key}&page=${index}`
    axios.get(countApi).then((response) => {
      let info = response.data.results 
      renders(info)
    })
  
}
count.addEventListener("click" , handeleCount)
plus.addEventListener("click" , handlePlus)
minus.addEventListener("click" , handleMinus)
const Errors = () => {
    cards.innerHTML = null
    let h1 = createTag("h1")
    h1.textContent = "Topilmadi"
    cards.appendChild(h1)
}
getMovie()
const renders = (arr) => {
    cards.innerHTML = null
    for(let i =0 ; i<arr.length; i++){
        let clone = template.cloneNode(true)
        let img = clone.querySelector("img")
        img.src = img_url+arr[i].poster_path
        let h5 = clone.querySelector("span")
        h5.className = "text text-secondary"
        h5.textContent = arr[i].original_language
        let h3 = clone.querySelector("h4")
        h3.className = "text text-danger"
        h3.textContent = arr[i].title
        let h6 = clone.querySelector("h6")
        h6.textContent = arr[i].release_date
        h6.className = "text text-secondary"

        cards.appendChild(clone)
    }
}

const handleKey = async (event) => {
    search_input.innerHTML = null
    let search_value = search_input.value
    let json = await axios.get(`
    https://api.themoviedb.org/3/search/movie?${tmdb_key}&language=en-US&query=${search_value}&page=1&include_adult=false`).catch((error) => {
        Errors()
    })

    let response = await json.data
    renders(response.results)
    if(search_value <= 0){
        getMovie()
    }
    }
    
search_input.addEventListener("keyup" , handleKey)
  let form = renderElement("form")
  let select = renderElement(".select")

// const handleSub = async (event) =>{    
//     event.preventDefault()
//     let json = await axios.get(Api_url).catch((error) => {
//         Error()
//     })
//     let response = await json.data
//     renders(response.results)

//     let selectsort = await select.value;
//     filter = await renders.sort(sortObject[selectsort]);
//   } 
// form.addEventListener("click" , handleSub)

const user = JSON.parse(window.localStorage.getItem("user"))
const user_profile = renderElement(".users_profile")
console.log(user);
console.log(user.name);
user_profile.textContent = (user.name)
// user_profile.textContent = response.name.charAt(0) + response.last_name.charAt(0)
// ;(function(){
//   axios.get(`http://localhost:3000/users${user.id}`).then((response)=> console.log(response))
// }())
