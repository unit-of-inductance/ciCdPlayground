import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "Henry Ruben Fischer",
    // In the following fiels you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: ["Too many yaml files that are just small wrappers around bash scripts"],
    // Which CI/CD tools do you use in your project?
    tools: "None :/",
    // What do you want to learn in this workshop?
    expectations: ["Some good overview wrt tooling"],
  },
});
