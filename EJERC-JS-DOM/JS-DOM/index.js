// Crear lista principal
let refUl = document.createElement("ul");
refUl.className = "teacher-list";

// Crear tarjeta
let refLi_0 = document.createElement("li");
refLi_0.className = "teacher-card";

// Crear contenedores internos
let divPhoto = document.createElement("div");
divPhoto.className = "teacher-card__photo";

let divInfo = document.createElement("div");
divInfo.className = "teacher-card__info";

let divActivity = document.createElement("div");
divActivity.className = "teacher-card__activity";

let divChat = document.createElement("div");
divChat.className = "teacher-card__chat";

// Estructura interna de spans
let img = document.createElement("img");
img.src = "imagenes/usuario3.png";
divPhoto.append(img);

// Info
let name = document.createElement("span");
name.innerHTML = "<strong>Carter Weigt</strong>";
let students = document.createElement("span");
students.innerHTML = "6 students";
divInfo.append(name, students);

// Activity
let activity = document.createElement("span");
activity.innerHTML = "<strong>Last activity on</strong>";
let date = document.createElement("span");
date.innerHTML = "June 5, 2022 - 14:30 PM";
divActivity.append(activity, date);

// Chat
let chat = document.createElement("span");
chat.innerHTML = "Had a chat with <strong>Nolan Franci</strong>";
let messages = document.createElement("span");
messages.innerHTML = "7 messages";
divChat.append(chat, messages);

// Armar la tarjeta
refLi_0.append(divPhoto, divInfo, divActivity, divChat);
refUl.append(refLi_0);

// Insertar en el body
document.body.append(refUl);
