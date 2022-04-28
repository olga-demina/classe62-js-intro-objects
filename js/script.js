// Inizializzazione dell'oggetto
const person = {
    name: "Stefano",
    age: 21,
    matricola: 12,
    friends: ["Marco", "Maria"],
};

// 
// // Accedere alle proprietà di un oggetto
// // 1. Dot notation
// console.log(person.name);
// console.log(person.age + " " + person.name);
// console.log(person.age);
// 
// // 2. Braket notation
// console.log(person["name"]);

// Il nome della chiave alla quale devo accedere è salvato in una variabile
// // name? age? matricola? 
// const key = prompt("Dimmi a quale chiave vuoi accedere"); // -> "age" 
// //           person["age"]
// console.log(person[key]);


// Scrivere i valori all'interno delle proprietà
// 1. Dot notation
// person.age = 24;

// // Breaket notation
// person["age"] = 24;
// 
// console.log(person);
// 

// console.log(person);
// 
// // Ciclo per scorrere tutti i chiavi dell'oggetto
// for (let key in person) {
//     // Stampa tutti i vhiavi e valori tranne matricola
//     if (key !== "matricola") {
//         console.log(key, person[key]);
//     }
// }
// 
// // Devo stampare l'età della persona
// console.log(person.age);
// 
// // Prelevo dall'oggetto l'array di amici
// const personFriends = person.friends;
// console.log(personFriends);
// 
// // Scorro l'array per stampare un nome alla volta
// for (let index = 0; index < personFriends.length; index++) {
//    console.log(personFriends[index]);
// }


// Array di Array
// const classe62 = ["Vitantonio", "Karolina", "Taha"];
// 
// const classiBoolean = [
//     ["Vitantonio", "Karolina", "Taha"],
//     ["Marco", "Giuseppe", "Maria"],
// ];
// //         ["Vitantonio", "Karolina", "Taha"]
// //             (classiBoolean[0]) ->
// 
// for (let index = 0; index < classiBoolean.length; index++) {
//     const innerArray = classiBoolean[index];
//     console.log(innerArray);
//     for (let i = 0; i < innerArray.length; i++) {
//         console.log(innerArray[i]);
//     }
// }

// Array di oggetti
const classe62 = [
    {
        name: "Federico",
        age: 23,
        matricola: 16
    },
    {
        name: "Davide",
        age: 32,
        matricola: 18
    },
];

// Inserire questi valori in modo dinamico tramite prompt

const studentName = prompt("Dimmi il nome dello studente");
const studentAge = parseInt(prompt("L'età"));
const studentMatricola = parseInt(prompt("Dimmi la matricola"));

console.log(studentName, studentAge, studentMatricola);

const newStudent = {
    name: studentName,
    age: studentAge,
    matricola: studentMatricola
}

classe62.push(newStudent);


// Stampare i nomi di tutti i studenti
for (let i = 0; i < classe62.length; i++) {
    const currentStudent = classe62[i];
    console.log(currentStudent);
    console.log(currentStudent.name);
}