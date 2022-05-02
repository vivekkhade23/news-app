// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

let getdata=async ()=>{
    try{
    let query=document.getElementById("search_input").value;
    console.log(query);
 let res =await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query} `);
 let data=await res.json();
 console.log(data);
return data.articles;


    }catch(err){
        console.log(err);
    }
}
getdata();