// $.ajax({
//       method: 'GET',
//       url: ''
//   })
//   .then(function(sucess){
//       console.log(sucess)
//   })

//   var request = new XMLHttpRequest().
//   request.open('GET','https://gfycat.com/PoisedHairyAmurstarfish')
//   request.send();
//   request.addEventListener('readystatechange', function(e) {
//       if (request.readyState === 4 && request.statys ===200){
//           console.log(e);
//       }
//   })
// function httpGetAsync(theUrl, callback)
// {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.onreadystatechange = function() { 
//         if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
//             callback(xmlHttp.responseText);
//     }
//     xmlHttp.open("GET", 'https://gfycat.com/PoisedHairyAmurstarfish', true); // true for asynchronous 
//     xmlHttp.open("GET", true); // true for asynchronous 
//     xmlHttp.send(null);
// }
// function show_image(src, width, height, alt) {
//     var img = document.createElement("img");
//     img.src = src;
//     img.width = width;
//     img.height = height;
//     img.alt = alt;

//     // This next line will just add it to the <body> tag
//     document.body.appendChild(img);
// }

// window.onload = function(){
//     var http = new XMLHttpRequest();
//     http.open("GET" , "http://i.imgur.com/uos55n1.jpg" , true);
//     http.send();
//     console.log(http);
// }

$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?tags=cat&tagmode=any&format=json&jsoncallback=?",
        function(data){
          $.each(data.items, function(i,item){
            $("<img/>").attr("src", item.media.m).appendTo("#images");
            
          });
        });
  