require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
app.get("/", (req, res) => {
  res.send("checking the connection");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login to AnxCode</h1>");
});
const githubData = {
  login: "anjumhere",
  id: 123456789,
  avatar_url: "https://avatars.githubusercontent.com/u/123456789?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/anjumhere",
  html_url: "https://github.com/anjumhere",
  followers_url: "https://api.github.com/users/anjumhere/followers",
  following_url:
    "https://api.github.com/users/anjumhere/following{/other_user}",
  gists_url: "https://api.github.com/users/anjumhere/gists{/gist_id}",
  starred_url: "https://api.github.com/users/anjumhere/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/anjumhere/subscriptions",
  organizations_url: "https://api.github.com/users/anjumhere/orgs",
  repos_url: "https://api.github.com/users/anjumhere/repos",
  events_url: "https://api.github.com/users/anjumhere/events{/privacy}",
  received_events_url: "https://api.github.com/users/anjumhere/received_events",
  type: "User",
  site_admin: false,
  name: "Adnan Anjum",
  company: null,
  blog: "",
  location: "Rawalpindi, Pakistan",
  email: null,
  bio: "Web Developer",
  twitter_username: null,
  public_repos: 12,
  public_gists: 0,
  followers: 45,
  following: 23,
  created_at: "2023-05-10T10:30:00Z",
  updated_at: "2026-05-12T16:30:00Z",
};
app.get("/github", (req, res) => {
  res.json(githubData);
});
app.listen(port, () => {
  console.log(`App is listening to the port ${port}`);
});
