/**
 * ☕ Chai Tapri Order System - String Basics
 *
 * Guddu ki chai tapri hai college ke bahar. Customers order dete hain,
 * aur Guddu ko string methods use karke orders handle karne hain.
 * Tu Guddu ka helper hai — basic string methods seekh aur orders process kar!
 *
 * Methods to explore: .length, .toUpperCase(), .toLowerCase(),
 *   .trim(), .includes(), .charAt(), .at()
 *
 * Functions:
 *
 *   1. getChaiOrderLength(order)
 *      - Pehle .trim() se extra spaces hatao, phir .length se count karo
 *      - Agar order string nahi hai, return -1
 *      - Example: getChaiOrderLength("  masala chai  ") => 11
 *
 *   2. shoutChaiOrder(order)
 *      - Guddu apne helper ko UPPERCASE mein order shout karta hai
 *      - Pehle .trim() karo, phir .toUpperCase()
 *      - Agar order string nahi hai ya trim ke baad empty hai, return ""
 *      - Example: shoutChaiOrder("masala chai") => "MASALA CHAI"
 *
 *   3. whisperChaiOrder(order)
 *      - Jab koi secretly order karta hai, lowercase mein likho
 *      - Pehle .trim() karo, phir .toLowerCase()
 *      - Agar order string nahi hai ya trim ke baad empty hai, return ""
 *      - Example: whisperChaiOrder("ADRAK CHAI") => "adrak chai"
 *
 *   4. hasSpecialIngredient(order, ingredient)
 *      - Check karo ki order mein koi special ingredient hai ya nahi
 *      - Dono ko .toLowerCase() karo, phir .includes() use karo
 *      - Agar koi bhi string nahi hai, return false
 *      - Example: hasSpecialIngredient("Elaichi Masala Chai", "elaichi") => true
 *
 *   5. getFirstAndLastChar(order)
 *      - .charAt(0) se pehla character aur .at(-1) se aakhri character nikalo
 *      - Pehle .trim() karo
 *      - Return: { first, last }
 *      - Agar order string nahi hai ya trim ke baad empty hai, return null
 *      - Example: getFirstAndLastChar("masala chai") => { first: "m", last: "i" }
 *
 * @example
 *   getChaiOrderLength("  masala chai  ")  // => 11
 *   shoutChaiOrder("masala chai")          // => "MASALA CHAI"
 *   hasSpecialIngredient("Elaichi Chai", "elaichi")  // => true
 */

export function getChaiOrderLength(order){
  if(typeof order !== 'string'){
    return -1
  }

 let userOrder = order.trim().length;
   return userOrder
}

export function shoutChaiOrder(order) {
  if(typeof order !== 'string'){
    return "";
  }
   
  let stdOrder = order.trim().toUpperCase()
  if(stdOrder === ""){
    return ""
  }
  return stdOrder
}

export function whisperChaiOrder(order) {
   if(typeof order !== 'string'){
    return ""
   }

   let secOrder = order.trim().toLowerCase()
   if(secOrder === ""){
    return ""
   }
   return secOrder
}

export function hasSpecialIngredient(order, ingredient) {

   if(typeof order !== 'string' || typeof ingredient !== 'string'){
    return false
   }

   let spclOrd = order.trim().toLowerCase()
   let ingdr = ingredient.trim().toLowerCase()

   if(spclOrd.includes(ingdr)){
    return true
   }else{
    return false
   }

}

export function getFirstAndLastChar(order) {
   if(typeof order !== 'string'){
    return null
   }

   let getChar = order.trim()

   if(getChar === ''){
    return null
   }

   let fChar = getChar.charAt(0);
   let lChar = getChar.at(-1)
   return {first : fChar, last: lChar}

}
