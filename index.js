const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(data, alert) {
      const newData = Array.isArray(data) ? data : Object.values(data)
      
      for (let value=0;value<newData.length;value++) 
        alert(newData[value])
      
      return data
    },

    map: function(data, func) {
      if (!Array.isArray(data)) 
        data = Object.values(data)
      
      let newData = new Array
      
      for (let i=0; i<data.length; i++) 
        newData.push(func(data[i]))
      
      return newData
    },

    reduce: function(array, func, starting) {
      let accumulator, index 

      accumulator = !starting ? array[0] : starting
      index = !starting ? 1 : 0 

      while (index < array.length)  {
        accumulator = func(accumulator, array[index], array)
        index++
      }
      return accumulator
    },
    
    functions: function() {

    },

    find: function(data, func) {
      if (!Array.isArray(data)) 
        data = Object.values(data)
      let idx = 0
      for (idx; idx < data.length; idx++) {
        if (func(data[idx])) return data[idx]
      }
      return undefined
    },

    filter: function(data, func) {
      const newArray = new Array

      if (!Array.isArray(data))
        data = Object.values(data)

      let idx = 0
      for (idx; idx < data.length; idx++) {
        if (func(data[idx])) newArray.push(data[idx])
      }
      return newArray
    },

    size: function(data) {
      if (!Array.isArray(data))
        data = Object.keys(data)

      return data.length
    },

    first: function(data, n=false) {
      const values = n ? data.slice(0, n) : data[0]
      return values
    },

    last: function(data, n=false) {
      const values = n ? data.slice(-n, data.length) : data[data.length-1]
      return values
    },

    compact: function(data) {
      return data.filter(Boolean)
    },

  }
})()

fi.libraryMethod()
