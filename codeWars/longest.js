/*Take 2 strings s1 and s2 including only letters from ato z. Return a new
sorted string, the longest possible, containing distinct letters,

each taken only once - coming from s1 or s2. #Examples: ```
a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"
a = "abcdefghijklmnopqrstuvwxyz" longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
``*/


function longest(s1, s2) {
  // your code
  //create two arrays with dinstinct letters
  s1_array=[]
  s2_array=[]

  for(i=0;i<s1.length;i++)
    if (!s1_array.includes(s1[i])){
      s1_array.push(s1[i])
      s1_array.sort()

    }

  for(i=0;i<s2.length;i++)
    if (!s2_array.includes(s2[i])){
      s2_array.push(s2[i])
      s2_array.sort()

    }

    if(s1_array.length>s2_array.length){
      return s1_array.join('')

    }else{
      return s2_array.join('')

    }
}


longest("adasdxcvbxcbcxvbxcvb","asdfbvbcxadfgwrwrwer")
