var storyTemplate = _.template(
  "<div class='story'>" +
  "<h3><span class='year'><%= year %></h3>" +
  "<p class='body'>\"<%= body %>\"</p>" +
  "<p>-<span class='author'><%= initials %></span>, <span class='state'><%= state %></span></p>" +
  "</div>"
)
