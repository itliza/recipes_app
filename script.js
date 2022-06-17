const inputField = document.querySelector('.search__field');

const recipeItem = document.querySelectorAll('.content__item');

const hoverButton = document.querySelectorAll('.content__hover');



hoverButton.forEach(hover => {
    hover.addEventListener('click', ()=> {
        console.log('test')
    })
})


inputField.addEventListener('keyup', event =>{
    let data = event.target.value.toLowerCase();

    recipeItem.forEach(item => {

        item.querySelector('.content__text').textContent.toLowerCase().includes(data) ? (item.style.display = 'flex') : (item.style.display = 'none');
        
     })
})



let recipes = [
    {
        name: 'Okroshka',
        ingridients: ['potato', 'chicken', 'eggs', 'green', 'kefir'],
        category: ['meat', 'soup']
    },
    {
        name: 'Ramen',
        ingridients: ['pork', 'fish', 'eggs', 'green', 'pasta', 'soya sauce', 'corn'],
        category: ['meat', 'fish', 'soup']
    },
    {
        name: 'Mohito',
        ingridients: ['sprite', 'mint', 'ice', 'brown sugar', 'lime'],
        category: ['drinks']
    },
    {
        name: 'Apple Pie',
        ingridients: ['eggs', 'apples', 'flour', 'sugar', 'cinnamon powder'],
        category: ['baking']
    }
]

let test = recipes.filter(item => item.name.includes('Okroshka'))

console.log(test);