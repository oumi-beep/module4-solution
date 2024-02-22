var names = ["John", "Jane", "Jack", "Alice"];

// Loop over each name
names.forEach(function(name) {
    // Check if the name starts with "J" or "j"
    if (name.charAt(0) === "J" || name.charAt(0) === "j") {
        console.log("Goodbye J" + name);//"Goodbye JSomeName"
    } 
    else {
        console.log("Hello " + name); //"Hello SomeName"

    }
});
