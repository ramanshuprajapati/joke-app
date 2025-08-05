let button = document.querySelector('#get-joke');
let setup = document.querySelector('#setup');
let punchline = document.querySelector('#punchline')
let spinner = document.querySelector('#loader')



async function joke() {
    spinner.classList.remove('hidden')
    setup.textContent = "joke is generating..."
    punchline.textContent = ""
    let data = await fetch(`https://official-joke-api.appspot.com/random_joke`);
    let response = await data.json();
    console.log(response);
    setup.textContent = `${response.setup}`
    punchline.textContent = `${response.punchline}`

    setup.classList.add("opacity-100");
    punchline.classList.add("opacity-100");
     spinner.classList.add('hidden')
    
}




button.addEventListener('click',function(){

    joke()
})