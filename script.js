class Password {
  constructor() {
    this.Uchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    this.Lchar = "abcdefghijklmnopqrstuvwxyz"
    this.num = "0123456789"
    this.sym = "!@#$%^&*()?{}[]~"
  }
  funnyPassword() {
    let arr = ["ChangeMe", "incorrect","HelloWorld", "password","Dusre_counter_pe_jaiye", "iforgot", "secret", "Whydoialwaysforget", "nothing", "KhulJaChimChim", "maiNahiBataunga", "Sorry", "passwordIs1234", "KyuChahiyePassword", "NehiBataungaPassword", "WrongPassword","NehiPata"]
    let i = Math.floor(Math.random() * arr.length)
    return arr[i]
  }
  weakPassword() {
    let arr = [this.Uchar, this.Lchar]
    let pass = ""
    for (let k = 0; k < 8; k++) {
      let i = Math.floor(Math.random() * arr.length)
      let j = Math.floor(Math.random() * arr[i].length)
      pass += arr[i][j]
    }
    return pass
  }
  strongPassword() {
    let arr = [this.Uchar, this.Lchar, this.num]
    let pass = ""
    for (let k = 0; k < 10; k++) {
      let i = Math.floor(Math.random() * arr.length)
      let j = Math.floor(Math.random() * arr[i].length)
      pass += arr[i][j]
    }
    return pass
  }
  superStrongPassword() {
    let arr = [this.Uchar, this.Lchar, this.num, this.sym]
    let pass = ""
    for (let k = 0; k < 12; k++) {
      let i = Math.floor(Math.random() * arr.length)
      let j = Math.floor(Math.random() * arr[i].length)
      pass += arr[i][j]
    }
    return pass
  }
}
let pw = new Password()

let disp = document.getElementById("disp");
let radio = document.getElementsByClassName("redio");
let btn = document.getElementById("btn");
let copy = document.getElementById("copy");

btn.addEventListener("click", () => {
  let b
  if (radio[0].checked) {
    b = pw.funnyPassword()
  }
  else if (radio[1].checked) {
    b = pw.weakPassword()
  }
  else if (radio[2].checked) {
    b = pw.strongPassword()
  }
  else if (radio[3].checked) {
    b = pw.superStrongPassword()
  }
  disp.value = b
})

