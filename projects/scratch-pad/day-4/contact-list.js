// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
// return a contact object 
// with key of id
// key: nameFirst; 
// key nameLast
// has to use the api
return {id: id, nameFirst: nameFirst, nameLast: nameLast};
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
     // need an array to hold the contacts so it can eventually have a length
     // should return an object that manages contact-list
     // need an addContact that takes a contact object to be added to the list
     //need a findContact that takes the fullname and looks trough to see if it exist
     // need a remove contact that takes a contact object to be removed from the list
    var contacts = [];

 
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length
        },
        // add contact takes a param of contact and add it to the contacts array
        addContact: function (contact){
             contacts.push(contact)
        },
        // need to loop over our contacts array an and check if the key of nameFirst and nameLast equals fullname
        // if it does need to return that contact object
        findContact: function(fullName){
            for(var i = 0; i < contacts.length; i++){
                if(contacts[i].nameFirst + " " + contacts[i].nameLast === fullName){
                    return contacts[i];
                }
            } 
            return undefined;
        },
        // for remove contact is the name in contact matches the name in the contacts array we want to remove that contact
        
        removeContact: function(contact){
            // we need to first loop over the contacts array
            for(var i = 0; i < contacts.length; i++){
        // next we want to check if the name in the contacts array matches the name in the contact param
        // if true we want to splice off that name 
                if(contacts[i] === contact){
                    contacts.splice(i,1)
                }
            }
        },
        printAllContactNames: function(){
            var hey = [];
            // return a string with all the full names sepertated by a new line
            // first we need to create an array litera and then iterate over the array 
           
          for(var i = 0; i < contacts.length; i++){
               // we need to push the contacts first name and last name into the array
              hey.push(contacts[i].nameFirst +" " + contacts[i].nameLast)
             // we need to seperate the names by a newLine  character so i will use join my array with the newline character
             // this will give us just the string of names joined by the new line character
                
        } return hey.join("\n")
        
    }
     
}
}





// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
