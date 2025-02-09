let friends = [];

// Esta función se encarga de agregar un amigo a la lista
function addFriend() {
    // Se limpia el amigo sorteado
    if(friends.length === 0){
        showFriends('resultado');
    }
    // validar que el nombre no esté vacío y que no exista en la lista
    let nameFriend = document.getElementById('amigo').value;
    if(nameFriend === undefined || nameFriend === null || nameFriend === '') {
        alert('El nombre no puede estar vacío');
        clearElement();
        return;
    }else if(alreadyExist(nameFriend)) {
        alert('El amigo ya existe');
        clearElement();
        return;
    }

    // Agregar el amigo a la lista
    friends.push(nameFriend);
    showFriends('listaAmigos');
    clearElement();
    return;
}

// Esta función se encarga de limpiar el input
function clearElement(){
    document.getElementById('amigo').value = '';
    return;
}

// Esta función se encarga de verificar si el amigo ya existe en la lista
function alreadyExist(name) {
    return friends.includes(name);
}

// Esta función se encarga de mostrar los amigos en pantalla
function showFriends(element) {
    // Mostrar los amigos en la lista '<li>'
    let list = document.getElementById(element);
    list.innerHTML = '';
    friends.forEach(friend => {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(friend));
        list.appendChild(li);
    })
}

// Esta función se encarga de sortear un amigo
function dodgeFriend(){
    // Validar que existan amigos y que sean más de 1
    if(friends.length === 0){
        alert('No hay amigos para sortear');
        return;
    }else if(friends.length === 1){
        alert('No se puede sortear un amigo');
        return;
    }

    // Sortear un amigo
    let friend = friends[Math.floor(Math.random() * friends.length)];

    // Mostrar el amigo sorteado
    let list = document.getElementById('resultado');
    list.innerHTML = '';

    let li = document.createElement('li');
    li.appendChild(document.createTextNode(friend));
    list.appendChild(li);

    // Limpia la lista de amigos
    deleteFriends();
    return;
}

function deleteFriends(){
    friends = [];
    showFriends('listaAmigos');
    return;
}