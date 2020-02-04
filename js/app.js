(function(){
  const filterBtn = document.querySelectorAll(".filter-btn");
  const searchItem = document.querySelector("#search-item");
  const storeItems = document.querySelectorAll(".store-item");
// filter btn
  filterBtn.forEach(function(btn){
    btn.addEventListener("click", function(e){
      e.preventDefault();
      const value = e.target.dataset.filter;
      console.log(value)

      storeItems.forEach(function(item){

        if(value === "all"){
          item.style.display = "block";
        }else{
          if(item.dataset.item === value){
            item.style.display = "block";
          } else{
            item.style.display = "none"
          }
        }

      })
      
    })
  })
// end filter btn 
// searchItem
  searchItem.addEventListener("keyup", function(e){
    const value = e.target.value.trim().toLowerCase();
    
    storeItems.forEach(function(item){
// CACH 1
      // console.log(item.dataset.item.includes(value))
      // if(item.dataset.item.includes(value)){
      //   item.style.display = "block";
      // } else{
      //   item.style.display = "none"
      // }

// CACH2

      if(item.dataset.item.slice(0, value.length)=== value){
        item.style.display = "block"
      } else{
        item.style.display = "none"
      }
    })
    
  })
// end search Item
})();

(function() {
  let imageList = [];
  let counter = 0;
  const images = document.querySelectorAll(".store-img");
  const container = document.querySelector(".lightbox-container");
  const item = document.querySelector(".lightbox-item");
  const closeIcon = document.querySelector(".lightbox-close");
  const btnLeft = document.querySelector(".btnLeft");
  const btnRight = document.querySelector(".btnRight");
  // add all images to the modal
  images.forEach(function(img) {
    imageList.push(img.src);
  });
  console.log("hello")
  //add event listener to open modal and show image
  images.forEach(function(img) {
    img.addEventListener("click", function(event) {
      // show modal
      container.classList.add("show");
      // get source
      let src = event.target.src;
      // change counter
      counter = imageList.indexOf(src);

      // show modal with image
      item.style.backgroundImage = `url(${src})`;
    });
  });
  // hide modal
  closeIcon.addEventListener("click", function() {
    container.classList.remove("show");
  });
  // loop back
  btnLeft.addEventListener("click", function() {
    counter--;
    if (counter < 0) {
      counter = imageList.length - 1;
    }
    item.style.backgroundImage = `url(${imageList[counter]})`;
  });
  btnRight.addEventListener("click", function() {
    counter++;
    if (counter > imageList.length - 1) {
      counter = 0;
    }
    item.style.backgroundImage = `url(${imageList[counter]})`;
  });
})();
