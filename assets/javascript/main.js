$(document).ready(function() {
  // initialize the nav bar
  $(".button-collapse").sideNav();
});

// build the tutorial cards automatically with jQuery
function tutorialCards() {
  var tutorials = [
    {
      title: "Gain",
      summary: "Gain Summary",
      image: "#",
      imageAlt: "alt",
      tutorialLink: "#"
    },
    {
      title: "Equlization",
      summary: "Equlization, or EQ, is one of the most commonly used audio processing tools. EQ units range from very simple high and low shelves to large 31 band graphic units. This tutorial slowly builds complexity while teaching you the basics of EQ.",
      image: "#",
      imageAlt: "alt",
      tutorialLink: "#"
    },
    {
      title: "Compression",
      summary: "Compression summary",
      image: "#",
      imageAlt: "alt",
      tutorialLink: "#"
    },
    {
      title: "Distortion",
      summary: "Distortion summary",
      image: "#",
      imageAlt: "alt",
      tutorialLink: "#"
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
      var x = j + (loopCnt * 2);
      // make sure the thing exists or risk an error
      if (tutorials[x]) {
        // first do the image
        var image = $('<img/>');
        image.attr({
          "alt": tutorials[x].imageAlt,
          "src": tutorials[x].image
        });
        // now the card title
        var span = $('<span/>');
        span.attr("class", "card-title")
          .text(tutorials[x].title);
        // create a div for the top of the card
        var cardTop = $('<div/>');
        cardTop.attr("class", "card-image");
        // now make the card content
        var p = $('<p/>');
        p.text(tutorials[x].summary);
        // make a div for the content
        var content = $('<div/>');
        content.attr("class", "card-content");
        // now make the link to go to the tutorial
        var link = $('<a/>');
        link.attr("href", tutorials[x].link);
        link.text("Learn more about " + tutorials[x].title);
        // make a div for the Link
        var linkDiv = $('<div/>');
        linkDiv.attr("class", "card-action");
        // now make the card itself
        var card = $('<div/>');
        card.attr("class", "card tutorial-card");
        // make the column
        var col = $('<div/>');
        col.attr("class", "col s12 m6");
        // now put it all together
        row.append(col);
        col.append(card);
        card.append(cardTop);
        card.append(content);
        card.append(linkDiv);
        cardTop.append(image);
        cardTop.append(span);
        content.append(p);
        linkDiv.append(link);
      };
    };
    $("#tutorial-cards-col").append(row);
    loopCnt++;
  };
};
