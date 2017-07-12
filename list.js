

        $.getJSON("http://www.reddit.com/r/StarWars/.json?jsonp=?", function(data) {
    $.each(data.data.children, function(i,item){
        $("<img/>").attr("src", item.data.url).appendTo("#images");
    });
});

var heading = document.createElement('h2');
heading.innertext = post.data.tile;  