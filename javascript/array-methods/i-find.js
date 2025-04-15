let mixed = [1, "apple", true, 42];

let result = mixed.find(item => typeof item === "number" && item > 10);
console.log(result);