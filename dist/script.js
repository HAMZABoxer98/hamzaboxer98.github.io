/**
 * toggle dropdown
 * @param {event} event 
 */
function toggleDropDown(event) {
  event.preventDefault();

  // in case the slected node is not the parent (container, div)
  let element = event.target.id !== 'dropdown-container' ? event.target.parentNode : event.target

  // contains the dropdown
  let dropdown = element.querySelector('#dropdown')

  // hidden
  if(dropdown.getAttribute('class').includes('hidden')) {
    dropdown.className = dropdown.className.replace('hidden','')  
    
    // close all the other opened dropdown
    let dropdowns = document.querySelectorAll('#dropdown')
    setTimeout(() => {
      dropdowns.forEach(elem => {
        // except the current dropdown
        if(elem != dropdown && !elem.className.includes('hidden')) {
          elem.className += ' hidden'
        }
      })
    }, 100);
    
  } else {
    dropdown.className += ' hidden'      
  }

}

/**
 * show hidden elements by removing "hidden" from className
 * @param {string} id document.getElementById() 
 */
function show(id) {
  /**
   * hide the overflow of body is useful for showing the modal in a proper way
   * because it allow us disable the scrolling bar 
   */
  if(id === 'video-modal') { 
    document.body.className += ' overflow-y-hidden' 
  }

  let element = document.getElementById(id)
  // becareful to the white space
  element.className = element.className.replace(/(\shidden\s|^hidden\s|\shidden$)/, ' ')
}

/**
 * hide elements by adding "hidden" to className
 * @param {string} id document.getElementById() 
 */
function hide(id) {
  /**
   * hide the overflow of body is useful for showing the modal in a proper way
   * because it allow us disable the scrolling bar 
   */
  if(id === 'video-modal') { 
    document.body.className = 
      document.body.className.replace('overflow-y-hidden', ' ') 
  }

  // becareful to the white space before 'hidden'
  document.getElementById(id).className += ' hidden '
}

/**
 * toggle elements using show() and hide()
 * @param {string} id document.getElementById() 
 */
function simpleToggle(id) {
  // becareful to the space before and after 'hidden'
  // because we need to distinguish between hidden and lg:hidden, md:hidden
  if(document.getElementById(id).className.search(/(\shidden\s|^hidden\s|\shidden$)/) !== -1) {
    show(id)
  }else {
    hide(id)
  }
}


/**
 * used by doScrolling()
 */
function getElementY(query, padding) {
  return window.pageYOffset + document.querySelector(query).getBoundingClientRect().top-padding
}
/**
 * scrolls to an element
 * @param {string} query css query selector
 * @param {integer} duration milliseconds
 * @param {integer} padding top padding
 */
function doScrolling(query, duration, padding) {
	var startingY = window.pageYOffset
  var elementY = getElementY(query, padding)
  // If element is close to page's bottom then window will scroll only to some position above the element.
  var targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY
	var diff = targetY - startingY
  // Easing function: easeInOutCubic
  // From: https://gist.github.com/gre/1650294
  var easing = function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 }
  var start

  if (!diff) return

	// Bootstrap our animation - it will get called right before next frame shall be rendered.
	window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp
    // Elapsed miliseconds since start of scrolling.
    var time = timestamp - start
		// Get percent of completion in range [0, 1].
    var percent = Math.min(time / duration, 1)
    // Apply the easing.
    // It can cause bad-looking slow frames in browser performance tool, so be careful.
    percent = easing(percent)

    window.scrollTo(0, startingY + diff * percent)

		// Proceed with animation as long as we wanted it to.
    if (time < duration) {
      window.requestAnimationFrame(step)
    }
  })
}
