const windowLogin = document.querySelector('#loginIn')
const windowContent = document.querySelector('.row')
let privilege = false
if (localStorage.getItem('privilege')) {
    privilege = true
} else {
    privilege = false
}
const user = {
    firstName: 'Vasa',
    lastName: 'Pupkin',
    login: 'admin',
    password: '12345',
}

function windowLoginIn() {
    if (privilege) {
        localStorage.removeItem('privilege')
        privilege = false
        
        news()
    } else {
        const stringHtml = `
        <div id="my_modal" class="modal">
            <div class="modal_content">
                <img src="image/lock.png" alt="...">
                <h1><strong>LOG IN</strong></h1>
                <p id="loginError" style="color: red; display: none;">Имя пользователя или пароль введены не верно</p>
                <input id="login" class="form-control" type="text" placeholder="Username">
                <input id="password" class="form-control" type="password" placeholder="Password">
                <p class="checkBox"><input type="checkbox" id="checkBox">Remember me</p>
                <button onclick="loginIn()" class="btn btn-secondary" onClock type="button">Login</button>
            </div>
        </div>
        `
        windowLogin.innerHTML = stringHtml

        const modal = document.getElementById("my_modal")

        modal.style.display = "block";

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
    
}

const loginIn = () => {
    const login1 = document.querySelector('#login').value
    const password1 = document.querySelector('#password').value

    const {login, password} = user;

    if (login1 === login && password1 === password) {
        const checkBox = document.querySelector('#checkBox');
        if (checkBox.checked) {
            localStorage.setItem('privilege', true)
        }
        privilege = true
        const modal = document.getElementById("my_modal")
        modal.style.display = "none";
        profile()
    } else {
        const loginError = document.querySelector('#loginError')
        loginError.style.display = 'block'
        privilege = false
    }
}

function profile() {
    if (privilege) {
        const stringHtml = `
            <div class="card prof" style="width: 18rem;">
                <img src="image/avatar.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${user.firstName} ${user.lastName}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        `
        windowContent.innerHTML = stringHtml
        
    } else {
        windowLoginIn()
    }
} 

function news() {
    windowContent.innerHTML = ' '
    const stringHtml = `
        <div class="row no-gutters bg-light position-relative col-md-5 new">
            <div class="col-md-5 mb-md-0 p-md-4">
                <img src="image/news.jpg" class="w-100" alt="...">
            </div>
            <div class="col-md-7 position-static p-4 pl-md-0">
                <h5 class="mt-0">Nintendo Switch Production Has Almost Recovered From COVID-19, Says Nintendo</h5>
                <a href="#" class="stretched-link">Go somewhere</a>
            </div>
        </div>
    `
    for (let i = 0; i < 8; i++) {
        windowContent.innerHTML += stringHtml
    }
}

news()