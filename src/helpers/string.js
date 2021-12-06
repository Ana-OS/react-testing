export function capitalize(word) { 
    
  return !word ? word : `${word[0].toUpperCase()}${word.substr(1).toLowerCase()}`;
    // if(word === word.toUpperCase()){return word[0] + word.substr(1).toLowerCase()}

    // if(word[0] === word[0].toLowerCase()){return word[0].toUpperCase() + word.substr(1).toLowerCase()}

//    return word[0].toUpperCase() + word.substr(1).toLowerCase()
// 

}
