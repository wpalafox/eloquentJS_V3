/*Take 2 strings s1 and s2 including only letters from ato z. Return a new
sorted string, the longest possible, containing distinct letters,

each taken only once - coming from s1 or s2. #Examples: ```
a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"
a = "abcdefghijklmnopqrstuvwxyz" longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
``*/


function longest(s1, s2) {
  // your code
  
  s_array=[]
 

  for(i=0;i<s1.length;i++)
    if (!s_array.includes(s1[i])){
      s_array.push(s1[i])
      s_array.sort()

    }

  for(i=0;i<s2.length;i++)
    if (!s_array.includes(s2[i])){
      s_array.push(s2[i])
      s_array.sort()

    }
    
    return s_array.join('')

   
}


longest("adasdxcvbxcbcxvbxcvb","asdfbvbcxadfgwrwrwer")
