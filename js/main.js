
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel')
  var elemsmodal = document.querySelectorAll('.materialboxed')
  const navBar = document.querySelector('nav')
  var arrowright = document.querySelector('.arrowright')
  var arrowleft = document.querySelector('.arrowleft')
  var instance = M.Carousel.init(elems, {
    fullWidth: true,
    indicators: true
  })
  
  arrowright.addEventListener('click', () => {
    var instances = M.Carousel.getInstance(elems[0])
    instances.next()
  })
  arrowleft.addEventListener('click', () => {
    var instances = M.Carousel.getInstance(elems[0])
    instances.prev()
  })
  var instancesmodal = M.Materialbox.init(elemsmodal)
  window.addEventListener('scroll', () =>{
    if(window.scrollY>0) navBar.classList.add('is-down')
    else navBar.classList.remove('is-down')
  })
})

document.addEventListener('DOMContentLoaded', function() {


  var options = {
    data: {
      "html": null,
      "css": null,
      "Google": 'https://placehold.it/250x250'
    },
    onAutocomplete: function(texto){
      console.log('diste clic ${texto}')
    }
  }
  
  var elemsinput = document.querySelectorAll('.autocomplete');
  var instancesinput = M.Autocomplete.init(elemsinput, options);
})
AOS.init();

