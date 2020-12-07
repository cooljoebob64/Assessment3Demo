// Assesment Demo
function inventoryList() {
  // write your code here
  let theList = [];
  let bigList = {
        
        add : name => {
            if(!theList.includes(name)){
                theList.push(name);
            } else {
                console.log("Already an entry on the list named: " + name);
            }
        },

        remove : name => {
            if(theList.includes(name)){
                theList.splice(theList.indexOf(name),1);    
            } else console.log("No entry on list by the name of: " + name);
        },
                    
        getList : () => {
            return theList;
        },   
    }
    return bigList;
}

// Test it out!! Everything below this line is just for testing. Console is logged after each step.

// Make a new list, and see what's in it
let SantasList = new inventoryList;
console.log(SantasList.getList());

// Add an item
SantasList.add("Shirt");
console.log(SantasList.getList());

// Add a different item
SantasList.add("Tie");
console.log(SantasList.getList());

// Try to add a duplicate item
// Should "do nothing"
SantasList.add("Shirt");
console.log(SantasList.getList());

// Remove an item from the list
SantasList.remove("Shirt");
console.log(SantasList.getList());

// Try to remove an item that isn't on the list
SantasList.remove("Shoes");
console.log(SantasList.getList());
