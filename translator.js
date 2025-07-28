// translator.js

function translate() {
    const input = document.getElementById("inputText").value.toLowerCase();
    let output = "";

    // Simple dictionary (we expand this over time)
    const dictionary = {
        "hello": "wah gwan",
        "goodbye": "latah",
        "friend": "pardna",
        "party": "fete",
        "food": "grub",
        "drink": "rum",
        "police": "babylon",
        "crazy": "maco",
        "lazy": "mamaguy",
        "yes": "yeah man",
        "no": "nah"
    };

    // Check if input matches slang or English
    if (dictionary[input]) {
        output = dictionary[input];
    } else {
        // Reverse lookup for slang back to English
        let found = Object.keys(dictionary).find(key => dictionary[key] === input);
        output = found ? found : "Selan don't know that one yet, Sir!";
    }

    document.getElementById("outputText").innerText = output;
}