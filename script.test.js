const {describe, expect, it, beforeEach} = require('@jest/globals');

const inquirer = require('inquirer')
const script = require('./script.js')

// {start, addManager, addEngineer, addIntern, genHTML, genTeam}

describe("Script tests",() =>{
  let backup;
  beforeEach(() => {
    backup = inquirer.prompt;
    inquirer.prompt = (questions) => Promise.resolve({email: 'test'})
  })

  it("addManager function test",() =>{
  script.genTeam = []
  script.start = () => {}
  inquirer.prompt = (_) => Promise.resolve({name:"test", id:"1", email:"email", officeNumber:"77"})
  script.addManager()
  console.log(script)
  // expect(script.genTeam.length).toBe(1)
  }) 

  it("addEngineer function test",() =>{
    script.genTeam = []
    script.start = () => {}
    inquirer.prompt = (_) => Promise.resolve({name:"test", id:"2", email:"email", github:"url"})
    script.addEngineer()
    console.log(script)
  //   expect(script.genTeam.length).toBe(1)
    }) 

    it("addIntern function test",() =>{
      script.genTeam = []
      script.start = () => {}
      inquirer.prompt = (_) => Promise.resolve({name:"test", id:"2", email:"email", school:"Somewhere"})
      script.addIntern()
      console.log(script)
    //   expect(script.genTeam.length).toBe(1)
      }) 

      it("genHTML function test",() =>{
        script.genTeam = []
        script.start = () => {}
        script.genHTML()
        console.log(script)
      //   expect(script.genTeam.length).toBe(1)
        }) 
}) 