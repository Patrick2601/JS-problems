function ipValidation(ip) {
  let s = ip.split(".");
  console.log(s)
  let count ;
  
  for (let i = 0; i < s.length; i++) {
    count=0
    if (0 < s[i].length && 4 > s[i].length && 0 <= s[i] && s[i] < 255) {
      count = 1;
    } else {
      break
    }
  }

  if (count === 1) {
    console.log("Valid Ip address");
  } else {
    console.log("Invalid Ip address");
  }
}

ipValidation("140.204.33.3600");
