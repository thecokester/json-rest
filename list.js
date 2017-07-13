// $.getJSON("http://www.reddit.com/r/StarWars/.json?jsonp=?", function(data) {
//     $.each(data.data.children, function(i,item){
//         $("<img/>").attr("src", item.data.url).appendTo("#images");
//     });

// $.getJSON("https://www.reddit.com/r/StarWars/.json?jsonp=?",
//        function subRed(data) {
//            $.each(data.data.children.slice(0, 20),
//            function (i, item) {
//              $("#reddit-content").append( '<br>' + item.data.title );
//              $("#reddit-content").append( '<br>' + item.data.url );            
//              $("#reddit-content").append( item.data.title + item.data.url ); //Trying to turn post title into link
//              $("<img/>").attr("src", item.data.url).appendTo("#reddit-content");
//              $("#reddit-content").append( '<hr>' );
//            }
//          )
//        }
//      )




var httpRequest = new XMLHttpRequest();
var star = "http://www.reddit.com/r/art.json";

httpRequest.open("GET", star);
httpRequest.send();
httpRequest.addEventListener("readystatechange", processRequest);
function processRequest(e) {
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        var data = e.target.response;
        var parsedData = JSON.parse(data);
console.log(parsedData)
        var posts = parsedData.data.children;

        posts.forEach(function(post) {
            var heading = document.createElement('h2');
            heading.innerText = post.data.title;
            document.body.appendChild(heading);
            var postBody = document.createElement('img');
            postBody.src = post.data.url;
            document.body.appendChild(postBody);

        var link = document.createElement('a')
       link.setAttribute('href', 'single.html?url=https://www.reddit.com' + post.data.permalink );
       link.style.width = '300px';
       document.body.appendChild(link);
       link.appendChild(heading);
       console.log(post.data.permalink)
        });


        
    }

}


