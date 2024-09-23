let toogle = document.getElementById("toogle")
toogle.addEventListener("click",()=>{
  let link = document.getElementById("link")
  if(link.className === "link"){
    link.removeAttribute("class")
    link.setAttribute("class","links")
  }
  else{
    link.className = "link"
  }
})
setInterval(()=>{
  let thursday = document.getElementById("thursday")
  var th = [
    "Tasty Thursday",
    "Delicious Burger"
  ]
  let num = 0
 let clear =  setInterval(()=>{
    thursday.innerHTML = th[num]
    num+=1
    if (num >= th.length) {
      clearInterval(clear)
    }
  },1000)
    
  
},2000)
setInterval(()=>{
  let thursday = document.getElementById("thursday1")
  var th1 = [
    "pizaa days"
    ,"monday sale"
  ]
  let num = 0
 let clear1 =  setInterval(()=>{
    thursday.innerHTML = th1[num]
    num+=1
    if (num >= th1.length) {
      clearInterval(clear1)
    }
  },1000)
    
  
},2000)

// form validation
// let username = document.getElementById("username").value
// let emails = document.getElementById("emails").value
// let numbers = document.getElementById("numbers").value

// const suubmition = (e)=>{
// e.preventDefault()
// if(username == ""){
//   console.log("user error")
// }
// if(numbers == ""){
//   console.log("num error")
// }
// if(emails == ""){
// console.log("error")
// }
// }
