


function btnLogin(){
    //variabel
    let container = document.getElementsByClassName('container')[0]
    let username = document.getElementById('user').value
    let password = document.getElementById('pw').value
    let massage = document.createElement('h1')

    // ilangin form login
    console.log('hello world')
    container.innerHTML = ''
    
    // admind dan bukan admind
    if(username == "fairuz" && password == "123"){
        massage.textContent = 'anda admind'
    }else{
        massage.textContent = 'anda bukan admind'
    }
    container.appendChild(massage)
    
    //button logout
    let btnlogOut = document.createElement('button')
    btnlogOut.textContent = 'Logout';
    btnlogOut.type = 'button'
    btnlogOut.onclick = btnLogout
    container.appendChild(btnlogOut)
}
function btnLogout(){
    let container = document.getElementsByClassName('container')[0]
    container.innerHTML = `
    <form action="" id="form">
        <h1>Login In Here</h1>
        <input type="text" placeholder="Username" id="user">
        <input type="password" placeholder="password" id="pw">
        <button onclick="btnLogin()" type="button">Login</button>
    </form>
    `
}
