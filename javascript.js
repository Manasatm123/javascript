const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor =  "#" + randomColor;
    bgclr.innerHTML = "Background Color #" + randomColor;
  }
  
  btn.addEventListener("click", setBg);
  setBg()