var storyTemplate = _.template(
  "<article class='story'>" +
  "<p><span class='year'><%= year %></span> " +
  "<span class='state'><%= state %></span></p>" +
  "<p class='body'><%= body %></p>" +
  "<p class='author'>-<%= initials %></p>" +
  "</article>"
)
