$.ajax({
      method: 'GET',
      url: ''
  })
  .then(function(sucess){
      console.log(sucess)
  })

  var request = new XMLHttpRequest().
  request.open('GET','https://www.google.com/#q=javascript+promise+executor')
  request.send();
  request.addEventListener('readystatechange', function(e) {
      if (request.readyState === 4 && request.statys ===200){
          console.log(e);
      }
  })