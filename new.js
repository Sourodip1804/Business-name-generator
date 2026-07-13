/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub

*/

let rand = Math.random()
let first,second, third; //this is the names as adjectives, shop name and another word
// this can be divided into three parts by 0,0.33,0.66 and 1
// this program is done without the use of Array

// lets generate the first word 

if (rand<0.33){
    first = "Crazy"
}
else if(rand<0.66 && rand>=0.33){
    first = "Amazing"
}
else{
    first = "Fire"
}

// lets generate the second word 

if (rand<0.33){
    first = "Crazy"
}
else if(rand<0.66 && rand>=0.33){
    first = "Amazing"
}
else{
    first = "Fire"
}
