const inquirer = require('inquirer')
const fs = require("fs")
// const manager = require('./lib/manager')
// const engineer = require('./lib/engineer')
// const intern = require('./lib/intern')

const genTeam = []

const compileAll = () => {
  const mgrs = data.filter((data) => data.position === "Manager").map((data) => compileManager(data) = () => {
    return`
      <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${data.position}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${data.name}</h6>
        <p class="card-text">${data.email}</p>
        <p class="card-text">Office Number: ${data.officeNumber}</p>
        <p class="card-text">employee id: ${data.id}</p>
        </div>
    </div>`
  })
  console.log(compileManager)
  const engs = data.filter((data) => data.type === "Engineer").map((data) => compileEngineer(data) = () => {
    return`
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${data.position}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${data.name}</h6>
      <p class="card-text">${data.email}</p>
      <a href="${data.github}" class="card-link">${data.github}</a>
      <p class="card-text">employee id: ${data.id}</p>
    </div>
  </div>`
  })
  console.log(compileEngineer)
  const ints = data.filter((data) => data.type === "Intern").map((data) => compileIntern(data) = () => {
    return`
      <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${data.position}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${data.name}</h6>
        <p class="card-text">${data.email}</p>
        <p class="card-text">${data.school}</p>
        <p class="card-text">employee id: ${data.id}</p>
      </div>
    </div>`
  })
  console.log(compileIntern)

  const output = [...compileManager, ...compileEngineer, ...compileIntern].join();
  console.log(output);
}


let basicTemp = [
  { type: "input", name: "name", message: "what is their name?" },
  { type: "input", name: "id", message: "what is their employee ID?" },
  { type: "input", name: "email", message: "What is their email?" },
]

start()
function start(){
  basicTemp = [
    { type: "input", name: "name", message: "what is their name?" },
    { type: "input", name: "id", message: "what is their employee ID?" },
    { type: "input", name: "email", message: "What is their email?" },
  ]
inquirer.prompt([
    {
      type: 'list',
      name: 'teamInit',
      message: 'what position would you like to fill',
      choices: ["Add Manager","Add Engineer","Add Intern", "Finished"]
    },])
    
  .then((choice) => {
    console.log(choice)
    switch (choice.teamInit) {
      case "Add Manager":
        addMananager()
        break
      case "Add Engineer":
        addEngineer()
        break
      case "Add Intern":
        addIntern()
        break
      case "Finished":
        genHTML()
        break
  }})
}

function addMananager() {
  basicTemp.push({
    type: "input",
    message: "What is their office number?",
    name: "officeNumber",
  })
  inquirer.prompt(basicTemp).then((data) => {
    genTeam.push({position:"Manager", name:data.name, id:data.id, email:data.email, officeNumber:data.officeNumber});
    console.log(`Manager Position Filled`)
    start()
})}

function addEngineer() {
  basicTemp.push({
    type: "input",
    message: "What is their github?",
    name: "github",
  });
inquirer.prompt(basicTemp).then((data) => {
  genTeam.push({position:"Engineer", name:data.name, id:data.id, email:data.email, github:data.github});
  console.log(`Engineer Position Filled`)
  start()
})}

function addIntern() {
  basicTemp.push({
    type: "input",
    message: "What school are they attending?",
    name: "school",
  });
inquirer.prompt(basicTemp).then((data) => {
  genTeam.push({position:"Intern", name:data.name, id:data.id, email:data.email, school:data.school});
  console.log(`Intern Position Filled`)
  start()
})}

function genHTML() {

  // const compileAll = () => {
  //   const mgrs = data.filter((data) => data.position === "Manager").map((data) => compileManager(data) = () => {
  //     return`
  //       <div class="card" style="width: 18rem;">
  //       <div class="card-body">
  //         <h5 class="card-title">${data.position}</h5>
  //         <h6 class="card-subtitle mb-2 text-muted">${data.name}</h6>
  //         <p class="card-text">${data.email}</p>
  //         <p class="card-text">Office Number: ${data.officeNumber}</p>
  //         <p class="card-text">employee id: ${data.id}</p>
  //         </div>
  //     </div>`
  //   })
  //   console.log(compileManager)
  //   const engs = data.filter((data) => data.type === "Engineer").map((data) => compileEngineer(data) = () => {
  //     return`
  //     <div class="card" style="width: 18rem;">
  //     <div class="card-body">
  //       <h5 class="card-title">${data.position}</h5>
  //       <h6 class="card-subtitle mb-2 text-muted">${data.name}</h6>
  //       <p class="card-text">${data.email}</p>
  //       <a href="${data.github}" class="card-link">${data.github}</a>
  //       <p class="card-text">employee id: ${data.id}</p>
  //     </div>
  //   </div>`
  //   })
  //   console.log(compileEngineer)
  //   const ints = data.filter((data) => data.type === "Intern").map((data) => compileIntern(data) = () => {
  //     return`
  //       <div class="card" style="width: 18rem;">
  //       <div class="card-body">
  //         <h5 class="card-title">${data.position}</h5>
  //         <h6 class="card-subtitle mb-2 text-muted">${data.name}</h6>
  //         <p class="card-text">${data.email}</p>
  //         <p class="card-text">${data.school}</p>
  //         <p class="card-text">employee id: ${data.id}</p>
  //       </div>
  //     </div>`
  //   })
  //   console.log(compileIntern)
  // }

const finalstring = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" 
  integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
  <link rel="stylesheet" href="">
  <title>Team Roster</title>
</head> 

<body>

  <div class="container">
    <div class="row cardContainer manager">${compileManager}</div>
  
    <div class="row cardContainer engineer">${compileEngineer}</div>
  
    <div class="row cardContainer intern">${compileIntern}</div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
</body>
</html>`
    compileAll()
    console.log(finalstring);

    fs.writeFile("Teamroster.html", finalstring, (err) =>
      err ? console.log(err) : console.log('success'));
  };
