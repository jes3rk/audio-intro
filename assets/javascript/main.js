$(document).ready(function() {
  // initialize the nav bar
  $(".button-collapse").sideNav();
});

function tutorialCards() {
  var tutorials = [
    {
      title: "Gain",
      summary: "Gain Summary",
      image: "url",
      imageAlt: "alt",
      tutorialLink: "url"
    },
    {
      title: "Equlization",
      summary: "Equlization, or EQ, is one of the most commonly used audio processing tools. EQ units range from very simple high and low shelves to large 31 band graphic units. This tutorial slowly builds complexity while teaching you the basics of EQ.",
      image: "url",
      imageAlt: "alt",
      tutorialLink: "url"
    },
    {
      title: "Compression",
      summary: "Compression summary",
      image: "url",
      imageAlt: "alt",
      tutorialLink: "url"
    },
    {
      title: "Distortion",
      summary: "Distortion summary",
      image: "url",
      imageAlt: "alt",
      tutorialLink: "url"
    }
  ];
  var loopCnt = 0;
  // first build each row
  for (var i = 0; i < Math.floor(tutorials.length / 2); i++) {
    // building rows
    var row = $('<div/>');
    row.attr("class", "row");
    // fill the rows using another loop
    for (var j = 0; j < 2; j++) {
      var y = j + (loopCnt * 2);
      // make sure the thing exists or risk an error
      if (tutorials[x]) {
        // first do the image
        var image = $('<img/>');
        image.attr("src", tutorials[x].image);
        // now the card title
        var span = $('<span/>');
        span.attr("class", "card-title")
          .text(tutorials[x].title);
        // create a div for it all
        var
      };
    };
  };
};
