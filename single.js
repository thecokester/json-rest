var url = location.search.substring(1).split('=')[1]+'.json';
console.log(url)

// $.get("http://www.reddit.com/r/art.json" + url + '.json')
// .then(function(success) {
//     var data = success[0];
//     var post = configureResponse(data);
// });

var httpRequest = new XMLHttpRequest();
var star = "http://www.reddit.com/r/art.json";

httpRequest.open("GET", url);
httpRequest.send();
httpRequest.addEventListener("readystatechange", processRequest);
function processRequest(e) {
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        var data = e.target.response;
        var parsedData = JSON.parse(data);

console.log(parsedData)
        var posts = parsedData[0].data.children[0];

        // posts.forEach(function(post) {
            var heading = document.createElement('h2');
            heading.innerText = parsedData[0].data.children[0].data.title;
            document.body.appendChild(heading);
            var postBody = document.createElement('img');
            postBody.src = parsedData[0].data.children[0].data.url;
            document.body.appendChild(postBody);

    //     var link = document.createElement('a')
    //    link.setAttribute('href', 'single.html?url=https://www.reddit.com', + post.data.permalink );
    //    link.style.width = '300px';
    //    document.body.appendChild(link);
    //    link.appendChild(heading);
    //    console.log(post.data.permalink)
        


        
    }

}


