/**
 * toggle dropdown
 * @param {event} event 
 */
function toggle(event) {
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

var intro = new Vue({
  el: '#intro',
  data: {
    carousel2: [
      {
        image: './dist/images/algeria.jpg',
        title: 'Algeria: the new world',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum est lobortis, auctor leo eget volutpat....'
      },

      {
        image: './dist/images/alone.jpg',
        title: 'alone (2019)',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum est lobortis, auctor leo eget volutpat....'
      },

      {
        image: './dist/images/love and sunset.jpg',
        title: 'love and sunset',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum est lobortis, auctor leo eget volutpat....'
      },

      {
        image: './dist/images/train.jpg',
        title: 'train in the winter of russia',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum est lobortis, auctor leo eget volutpat....'
      },

      {
        image: './dist/images/with police.jpg',
        title: 'one day with police',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum est lobortis, auctor leo eget volutpat....'
      },
    ]
  }
})

var groupBy = new Vue({
  el: '#groupBy',
  data: {
    list: [
      {
        image: './dist/images/algeria.jpg',
        company: 'tipaza movies',
        title: 'Algeria: the new world',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum est lobortis, auctor leo eget volutpat....'
      },

      {
        image: './dist/images/alone.jpg',
        title: 'alone (2019)',
        company: 'oran prod',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum est lobortis, auctor leo eget volutpat....'
      },

      {
        image: './dist/images/love and sunset.jpg',
        title: 'love and sunset',
        company: 'holywood roma',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum est lobortis, auctor leo eget volutpat....'
      },

      {
        image: './dist/images/train.jpg',
        title: 'train in the winter of russia',
        company: 'disney',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum est lobortis, auctor leo eget volutpat....'
      },

    ]
  }
})

var topWatching = new Vue({
  el: '#topWatching',
  data: {
    list: [
      {
        image: './dist/images/the hacker of night.jpg',
        company: 'science fiction',
        title: 'the hacker of night',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum est lobortis, auctor leo eget volutpat....'
      },

      {
        image: './dist/images/the beautiful.jpg',
        title: 'the beautiful',
        company: 'life',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum est lobortis, auctor leo eget volutpat....'
      },

      {
        image: './dist/images/mickey moose.jpg',
        title: 'mickey moose',
        company: 'comedy',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum est lobortis, auctor leo eget volutpat....'
      },

      {
        image: './dist/images/train.jpg',
        title: 'train in the winter of russia',
        company: 'disney',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum est lobortis, auctor leo eget volutpat....'
      },

    ]
  }
})

var topWatching = new Vue({
  el: '#topWatching',
  data: {
    list: [
      {
        image: './dist/images/the hacker of night.jpg',
        company: 'science fiction',
        title: 'the hacker of night',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum est lobortis, auctor leo eget volutpat....'
      },

      {
        image: './dist/images/the beautiful.jpg',
        title: 'the beautiful',
        company: 'life',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum est lobortis, auctor leo eget volutpat....'
      },

      {
        image: './dist/images/mickey moose.jpg',
        title: 'mickey moose',
        company: 'comedy',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum est lobortis, auctor leo eget volutpat....'
      },

      {
        image: './dist/images/train.jpg',
        title: 'train in the winter of russia',
        company: 'disney',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum est lobortis, auctor leo eget volutpat....'
      },

    ]
  }
})

var trailers = new Vue({
  el: '#trailers',
  data: {
    current: {
      title: 'The best one - season 5',
      image: './dist/images/the best one.jpg',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum est lobortis, auctor leo eget volutpat....',
      video: '',
      rating: 8.6,
      category: 'romantic',
      created_at: '24 Mars 2019'
    },
    otherSeasons: [
      {
        image: './dist/images/the hacker of night.jpg',
        title: 'the hacker of night',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum est lobortis, auctor leo eget volutpat....',
        video: '',
        rating: 8.1,
        category: 'romantic',
        created_at: '24 Mars 2018'
      },

      {
        image: './dist/images/the beautiful.jpg',
        title: 'the beautiful',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum est lobortis, auctor leo eget volutpat....',
        video: '',
        rating: 7.6,
        category: 'romanitc',
        created_at: '24 Mars 2017'
      },

      {
        image: './dist/images/mickey moose.jpg',
        title: 'mickey moose',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum est lobortis, auctor leo eget volutpat....',
        video: '',
        rating: 9.5,
        category: 'romantic',
        created_at: '24 Mars 2016'
      },

      {
        image: './dist/images/train.jpg',
        title: 'train in the winter of russia',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum est lobortis, auctor leo eget volutpat....',
        video: '',
        rating: 8.4,
        category: 'romantic',
        created_at: '24 Mars 2015'
      },

    ]
  }
})

var categories = new Vue({
  el: '#categories',
  data: {
    selected: false,

    categories: [
      {
        id: 1,
        content: 'all'
      },
      {
        id: 2,
        content: 'action'
      },
      {
        id: 3,
        content: 'science fiction'
      },
      {
        id: 4,
        content: 'comedy'
      }
    ]
  },

  methods: {
    /**
     * select an item
     */
    select(event, item) {
      event.preventDefault()
      this.selected = item.id
      
      this.toggleAlert()
      
    },

    toggleAlert() {
      // open alert
      document.getElementById('alert-success').className = 
        document.getElementById('alert-success').className.replace('hidden', '')

      // close it afte 2s
      setTimeout(() => {
        document.getElementById('alert-success').className += ' hidden'
      }, 2000);
    }
  }
})

var boxOffice = new Vue({
  el: '#boxOffice',
  data: {
    list: [
      {
        image: './dist/images/train.jpg',
        title: 'The best one - season 5',
        rating: 8.6,
      },
      {
        image: './dist/images/alone.jpg',
        title: 'Breaking Somthing',
        rating: 8.5,
      },
      {
        image: './dist/images/mickey moose.jpg',
        title: 'Alone (2019)',
        rating: 9.1,
      },
      {
        image: './dist/images/algeria.jpg',
        title: 'The beautiful',
        rating: 9.2,
      }
    ]
  }
})