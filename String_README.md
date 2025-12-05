# String In JavaScript

### Length of a String
```javascript
let firstName = "Vaishali";
console.log(firstName.length);
```

### Access String Element
```javascript
console.log(firstName.charAt(2)); // i
console.log(firstName[2]); // i
console.log(firstName.charCodeAt(2)); // 115 (Ascii Code)
```

### Check Presence of Character
```javascript
console.log(firstName.includes("r")); // false (& if present it return true)
console.log(firstName.indexOf("i")); // 2 (& if not present it return -1)
console.log(firstName.lastIndexOf("i")); // 7 
```

### Compare Two Strings
```javascript
let anotherName = "Vishal";
console.log(firstName.localeCompare(anotherName)); // -1 (& if strings are equal it return 0)
```

### Replace Substring
```javascript
const str = "Vishal is Best Frontend Developer. Vishal is Best Developer. ";
console.log(str.replace("Vishal", "Sujit")); // "Sujit is Best Frontend Developer. Vishal is Best Developer. "
console.log(str.replaceAll("Vishal", "Sujit")); // "Sujit is Best Frontend Developer. Sujit is Best Developer. "
```

### Substring of a String
```javascript
console.log(str.substring(6, 30)); 
console.log(str.slice(-10, -1));
```

### Split and Join
```javascript
console.log(str.split(""));
const subString = str.split(" ");
console.log(subString.join(" "));
```

### String Start and End
```javascript
console.log(str.startsWith("Vishal")); // true
console.log(str.endsWith("Developer")); // true
```

### Trim and Case Conversion
```javascript
const trimStr = str.trim();
const trimStrStart = str.trimStart();
const trimStrEnd = str.trimEnd();
console.log(trimStr, trimStr.length);
console.log(str.toLowerCase());
console.log(str.toUpperCase());
```

### Convert Number and Object to String
```javascript
const num = 123;
console.log(num, num.toString());

const obj = {
    name: "Vishal",
    course: "DSA with Vishal"
};
console.log(obj, JSON.stringify(obj));
```

### Concatenate Strings
```javascript
const lastName = "Rajput";
console.log(firstName + lastName);
console.log(`${firstName} ${lastName} is a Best Developer`);
console.log(firstName.concat(lastName, " is a", " Best"));
```

## Practice Questions

- [Find the Index of the First Occurrence in a String]
- [Reverse String]
- [Valid Anagram]
- [Longest Common Prefix]
- [Merge Strings Alternately]
- [Length of Last Word]
- [Valid Palindrome]
- [String Compression]
- [Reverse Words in a String]
- [Reverse Vowels of a String]
- [Rotate String]

- ✅ 1. Find the Index of the First Occurrence in a String

👉 Return the first index where needle appears in haystack.

✔ Solution
function strStr(haystack, needle) {
    return haystack.indexOf(needle);
}

console.log(strStr("hello", "ll")); // 2
console.log(strStr("abc", "d"));    // -1

✅ 2. Reverse String

👉 Reverse the characters in a string.

✔ Solution
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // "olleh"

✅ 3. Valid Anagram

👉 Two strings are anagrams if both contain the same characters in the same frequency.

✔ Solution
function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    return s.split("").sort().join("") === t.split("").sort().join("");
}

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false

✅ 4. Longest Common Prefix

👉 Find the longest prefix shared by all strings.

✔ Solution
function longestCommonPrefix(strs) {
    strs.sort();
    let first = strs[0];
    let last = strs[strs.length - 1];
    let i = 0;

    while (i < first.length && first[i] === last[i]) {
        i++;
    }
    return first.slice(0, i);
}

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"

✅ 5. Merge Strings Alternately

👉 Merge characters one-by-one from two strings.

✔ Solution
function mergeAlternately(a, b) {
    let result = "";
    let i = 0;

    while (i < a.length || i < b.length) {
        if (i < a.length) result += a[i];
        if (i < b.length) result += b[i];
        i++;
    }
    return result;
}

console.log(mergeAlternately("abc", "pqr")); // "apbqcr"

✅ 6. Length of Last Word

👉 Return the length of the last word in a string.

✔ Solution
function lengthOfLastWord(s) {
    return s.trim().split(" ").pop().length;
}

console.log(lengthOfLastWord("Hello World")); // 5

✅ 7. Valid Palindrome

👉 Check if string is same when reversed (ignore symbols & spaces).

✔ Solution
function isPalindrome(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    return s === s.split("").reverse().join("");
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true

✅ 8. String Compression

👉 Compress repeated characters like:
aabbccc → a2b2c3

✔ Solution
function compress(chars) {
    let i = 0, ans = "";

    while (i < chars.length) {
        let char = chars[i];
        let count = 0;

        while (i < chars.length && chars[i] === char) {
            count++;
            i++;
        }

        ans += char + (count > 1 ? count : "");
    }
    return ans;
}

console.log(compress("aabbccc")); // a2b2c3

✅ 9. Reverse Words in a String

👉 Example:
" hello world " → "world hello"

✔ Solution
function reverseWords(s) {
    return s.trim().split(/\s+/).reverse().join(" ");
}

console.log(reverseWords("  hello world  ")); // "world hello"

✅ 10. Reverse Vowels of a String

👉 Only reverse vowels (a, e, i, o, u).

✔ Solution
function reverseVowels(s) {
    let vowels = "aeiouAEIOU";
    let arr = s.split("");
    let left = 0, right = arr.length - 1;

    while (left < right) {
        if (!vowels.includes(arr[left])) left++;
        else if (!vowels.includes(arr[right])) right--;
        else {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    return arr.join("");
}

console.log(reverseVowels("hello")); // "holle"

✅ 11. Rotate String

👉 Check if string can be rotated to become another string.

Example:
"abcde" rotated → "cdeab"

✔ Solution
function rotateString(s, goal) {
    return s.length === goal.length && (s + s).includes(goal);
}

console.log(rotateString("abcde", "cdeab")); // true

 

