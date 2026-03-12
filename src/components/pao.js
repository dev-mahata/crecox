const ispalindrome = () => {
    let string = "A pan 28, 72 nap a";
    let newString = "";
    for (let i of string) {
        if (/[a-zA-Z0-9]/.test(i)) {
            newString += i.toLowerCase()
        }
    }
    let left = 0, right = newString.length-1;
    while (left < right) {
        if  (newString[left] !== newString[right]) return false
        left++;
        right--
    }
    return true;

}
console.log(ispalindrome())
