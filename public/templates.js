var storyTemplate = _.template(
  "<article>" +
  "<p class='year'><%= year %></p>" +
  "<p class='state'><%= state %></p>" +
  "<p class='body'><%= body %></p>" +
  "<p class='author'><%= initials %></p>" + 
  "</article>"
)
