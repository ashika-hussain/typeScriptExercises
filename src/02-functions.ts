import { colleagues, friends } from './01-basics'
import {Friend, Colleague, EmailContact } from './myTypes'

function older(f: Friend){
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

function allOlder(f: Friend[]){
    var output: string[] =[]
   f.forEach(x=> output.push(`${x.name} is now ${x.age+1}`))
   return output
    
}

function highestExtension(cs: Colleague[]) {
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

function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number,
    max?: number
  ) {
    let end = colleagues.length
    if(max!= undefined)
      end = max < 2 ? 1 : max
    const sorted = colleagues.sort(sorter); // Colleague[] inferred
    const result = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return result.slice(0,end)
  }

function findFriends(
    friends : Friend[],
    criterion: (f : Friend) => boolean
){

    return friends.filter(criterion).map(x=> x.name)

}
 
function addInterest(
  friend: Friend,
  interest : string
){
  friend.interests = [...(friend.interests ?? []), interest];
  return friend.interests

}

console.log(older(friends[0]))
console.log(allOlder(friends))
console.log(highestExtension(colleagues.current));
addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));
console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length,1));
console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));
console.log(addInterest(friends[1], 'Politics'))
