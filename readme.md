![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# MapleStory 2 Interactive Skill Charts

MapleStory 2 Interactive Skill Charts is a set of web components which, with very little effort, let you add an interactive skill chart to your website or blog. This way your viewers can interact with the chart and see exactly what bonuses your chosen skill gives. So much better than just a screenshot!

[Try it out!](http://bodinaren.github.io/maplestory-skills)


## How do I put this on my site or blog?

Head over to the [website](http://bodinaren.github.io/maplestory-skills) and use the editor to generate your own skill chart. Just paste the resulting code into your website or blog and you're good to go!


## Advanced usage (editable)

So you want the editor on your site? Not a problem, my own site above use exactly these steps shown below. But first, let's start with a warning. 

>This repository use semver versioning, but **only for basic charts usage**! Breaking changes to the below usages can happen between any minor version (but not patch).

If you want to use the editor, it's recommended to import the scripts with a minor version (make sure you check for the most recent version).

Before:
```html
<script src="https://unpkg.com/maplestory-skills@^2/dist/maplestory-skills/maplestory-skills.esm.js" type="module"></script>
<script src="https://unpkg.com/maplestory-skills@^2/dist/maplestory-skills/maplestory-skills.js" nomodule></script>
```
After:
```html
<script src="https://unpkg.com/maplestory-skills@~2.0/dist/maplestory-skills/maplestory-skills.esm.js" type="module"></script>
<script src="https://unpkg.com/maplestory-skills@~2.0/dist/maplestory-skills/maplestory-skills.js" nomodule></script>
```

With that out of the way, you can make the skill chart editable by simply adding the attribute `editable` to the chart.

Before:
```html
<ms-archer arrow-stream="3" arrow-barrage="3" rapid-shot="10"></ms-archer>
```
After:
```html
<ms-archer editable arrow-stream="3" arrow-barrage="3" rapid-shot="10"></ms-archer>
```

### Skill points counter

There's also another component which helps you keep track of the amount of points left to distribute.
```html
<ms-extra-counter></ms-extra-counter>
```
All this does is print the number of points left, it's up to you to position and style it wherever you want on your site.


### Get data from the editor

Every time the user makes a change the chart emits a `skillchanged` event with an object containing an array of all the skills and how many points are put (or not) into it, as well as any possible extra values (e.g. runeblade sigil). Subscribe to this event to get the data you want:

```js
document.querySelector("ms-archer").addEventListener("skillchanged", function(evt) {
  console.log(evt.detail);
});
```
`evt.detail` is of type [SkillChangeEvent](src/components/charts/skill-change-event.ts).


## Contributing

Create a [New Issue](https://github.com/bodinaren/maplestory-skills/issues/new) where you outline your intentions. After an agreement fork this repository, create a new branch, make your changes and then submit a pull request.
