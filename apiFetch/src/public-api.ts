
const API_BASE_URL = new URL(
    `https://newsapi.org/v2/top-headlines`
    );
    
interface DataEntry {

    country: string, 
    category:string,
    source: string

}
    
interface Article{

    source: Source,
    author: string,
    title: string,
    description: string | null,
    url: string
    
}

interface DataMsg{

    source: string,
    author: string,
    title: string,
    description: string | null,
    url: string
    
}

interface Source{

    name: string

}

interface Error {
    
    message: string

}

function createObj (obj: Article){

    let newArticle: DataMsg = {
        source: obj.source.name,
        author: obj.author,
        title: obj.title,
        description: obj.description,
        url: obj.url
    }

    return newArticle

}

async function fetchData (data: DataEntry): Promise <DataMsg[] | Error > {
    
    const {country, category, source} = data

    if(country) API_BASE_URL.searchParams.append('country', country)
    if(category) API_BASE_URL.searchParams.append('category', category)
    
    let API_KEY = '64b8a73f88064c898539139cdf32bf6e';
    API_BASE_URL.searchParams.append('apiKey', API_KEY)
    console.log("🚀 ~ fetchData ~  API_BASE_URL:",  API_BASE_URL)
    
    try{

        const response = await fetch(API_BASE_URL)
        const data = await response.json()



        let result:DataMsg[] = []
        
        data.articles.forEach((article: Article) => {

            if(article.source.name == source){
                result.push(createObj(article))
            }

        })

        return result


    }catch (error){

        return { message: `${error}`}
        
    }
    
}

export default fetchData