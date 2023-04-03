// Задание №1

// Используя API со странами выведите список со всеми странами:
// API: https://restcountries.com/v3.1/all


let arr = document.querySelector("#list")
let z = fetch('https://restcountries.com/v3.1/all')

z.then((res)=>{
    return res.json();
}).then((info)=>{
    console.log(info)
    info.forEach(elem => {
        arr.innerHTML  += "";
        `
        <div id="list"></div>
        <h1>${elem.continents}</h1>
    
        `
    });
})


// Задание №2

// Сделайте запрос на адрес 'https://rickandmortyapi.com/api/character'.
// Используйте fetch. Отобразите на странице имена персонажей из
// Рика и Морти в list.
let arr1 = document.querySelector(".list");
let a = fetch('https://rickandmortyapi.com/api/character')
 a.then((res)=>{
    return res.json();
 }).then((info)=>{
    info.forEach(elem=>{
        arr1.innerHTML +="";
        `
        <ul class="list"></ul>
        <h2>${elem.name}</h2>
        <img src="${elem.image}>
        `
    })
 })


// Задание №3

// Рядом с именами отобразите все изображения
// которые вы получили со второго задания
