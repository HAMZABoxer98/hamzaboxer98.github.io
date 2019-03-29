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

