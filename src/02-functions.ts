import { colleagues, friends } from './01-basics'
import {Friend, Colleague } from './myTypes'

function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

function allOlder(f: Friend[]): string[]{
    var output: string[] =[]
   f.forEach(x=> output.push(`${x.name} is now ${x.age+1}`))
   return output
    
}

function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }

function addColleague(cs: Colleague[],name: string,department:string,email:string){
    var collegue: Colleague = {name: name,
        department: department,
        contact: {
          email: email,
          extension: highestExtension(cs).contact.extension+1
        } }
    colleagues.current.push(collegue)
}
 

console.log(older(friends[0]))
console.log(allOlder(friends))
console.log(highestExtension(colleagues.current));
addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

