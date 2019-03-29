/* 
    glide.js code
    carousel code 
    */
    var glide = new Glide('#intro', {
      type: 'carousel',
      perView: 3,
      autoplay: 1500,
      breakpoints: {
        800: {
          perView: 3
        },
        480: {
          perView: 1
        }
      }
    })

    var glide1 = new Glide('#intro1', {
      type: 'carousel',
      perView: 3,
      autoplay: 1500,
      breakpoints: {
        800: {
          perView: 3
        },
        480: {
          perView: 1
        }
      }
    })

    glide.mount()
    glide1.mount()