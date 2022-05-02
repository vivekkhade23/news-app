// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();


import { sidebar } from "../components/sidebar.js";
document.getElementById("sidebar").innerHTML=sidebar();



// let url="https://masai-mock-api.herokuapp.com/news/top-headlines?country=in";
const trending=async()=>{
    try{
        let res =await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`);
 let data=await res.json();
 console.log(data);
 appendtrend(data.articles);
    }catch(err){
        console.log(err);
    }
}
trending();
let appendtrend=async(data)=>{
    let result=document.getElementById("results");
    result.innerHTML=null;
    data.forEach((el) => {
        var div=document.createElement("div");
        let title=document.createElement("h3");
        let news=document.createElement("p");
        let img=document.createElement("img");
        news.innerText="NEWS:  "+ el.content;
       title.innerText="Title: "+ el.title;
       img.src=el.urlToImage;
       img.setAttribute("class","img")
        div.append(title,img,news);    
        result.append(div);    
    });

}
document.getElementById("us").addEventListener("onclick",countries)

let countries=async()=>{
    let res =await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=us`);
    let data=await res.json();
    console.log(data);
    appendtrend(data.articles);
}
document.getElementById("nz").addEventListener("click",countries1)

let countries1=async()=>{
    let res =await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=nz`);
    let data=await res.json();
    console.log(data);
    appendtrend(data.articles);
}
document.getElementById("uk").addEventListener("click",countries2)

let countries2=async()=>{
    let res =await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=uk`);
    let data=await res.json();
    console.log(data);
    appendtrend(data.articles);
}
document.getElementById("ch").addEventListener("click",countries3)

let countries3=async()=>{
    let res =await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=us`);
    let data=await res.json();
    console.log(data);
    appendtrend(data.articles);
}
document.getElementById("us").addEventListener("click",countries4)

let countries4=async()=>{
    let res =await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`);
    let data=await res.json();
    console.log(data);
    appendtrend(data.articles);
}