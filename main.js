const bikeData = [
    {
        name: "BMW R1300GS",
        type: "Adventure",
        price: 17,
        image: "",
    },
    {
        name: "BMW R1300GS",
        type: "Adventure",
        price: 17,
        image: "image/bike-2.png",
    },
    {
        name: "BMW R1300GS",
        type: "Adventure",
        price: 17,
        image: "",
    },
    {
        name: "BMW R1300GS",
        type: "Adventure",
        price: 17,
        image: "image/bike-4.png",
    },
    {
        name: "BMW R1300GS",
        type: "Adventure",
        price: 17,
        image: "image/bike-5.png",
    },
    {
        name: "BMW R1300GS",
        type: "Adventure",
        price: 17,
        image: "image/bike-6.png",
    },
    {
        name: "BMW R1300GS",
        type: "Adventure",
        price: 17,
        image: "image/bike-7.png",
    },
    {
        name: "BMW R1300GS",
        type: "Adventure",
        price: 17,
        image: "image/bike-8.png",
    },
    {
        name: "BMW R1300GS",
        type: "Adventure",
        price: 17,
        image: "image/bike-9.png",
    },
];
// Function to create bike box element 
const createBikeBox = (bike)=> `
<div class="bike-box">
    <img src="${bike.image}" alt="" class="box-img">
    <div class="title-data">
        <h2>${bike.name}</h2>
        <p>${bike.type}</p>
    </div>
     <h3 class="bike-price">€${bike.price}</h3> 
    </div>
    <a href="#" class="book-bt">BOOK BIKE</a>
</div>  
`; 
const bikeContent = document.querySelector('.bikes-content');

//bike-box and bike-content
bikeData.forEach((bike) =>{
const bikeBoxHTML= createBikeBox(bike);
bikeContent.insertAdjacentHTML('beforeend', bikeBoxHTML);
})
//Menu 
let menu = document.querySelector('.menu-icon');

menu.onclick = () => {
    menu.classList.toggle('move');
}
