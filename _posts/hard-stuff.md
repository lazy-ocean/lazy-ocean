---
title: "My toughest frontend battles (and lessons learned)"
excerpt: "In three years in frontend development, I've done some complex stuff. Here's some memorable pieces. "
coverImage: "stickers/fire.png,stickers/stress.png,stickers/success.png"
date: "2024-07-07T15:30:12.322Z"
meta:
  description: "Hardest things I've done as a frontend dev"
color: "#fac17a"
tags: "frontend"
embeds: true
---

<div id='contents' class='contents'> 
<h2>Contents</h2>

1. [Operation "debugging-enhancing": am I brave enough for this CSS?](#carousels)
2. [Operation "learning": This does not look promising...](#hexlet-promises)
3. [Operation "major feature": what do you mean you hate videos?](#video)
4. [Operation "a11y": you haven't had enough of carousels, have you?](#a11y-carousel)
5. [Operation "feature branches": rebase is my best friend](#rebase)
6. [Operation "AOC": literally could not care less](#aoc)
</div>

<div id='main'>
<p>I recently passed the three-year mark as a front-end developer (yay!). Add in another year of learning, and you've got four years of building, debugging, collaborating, figuring things out on the fly, overcomplicating pet projects with as much hyped up tech as possible, and patching things in prod. I'm really enjoying this journey, and to celebrate, here's a little list of 6 things that have been difficult/frustrating/rewarding enough for me to remember:</p>

## Operation "debugging-enhancing": am I brave enough for this CSS? {#carousels}

Let's start with basics: CSS is a proper programming language, whether you agree with it or not. Dead serious: the amount of logic, complex calculations, fallbacks and conditions you can have cannot lie. Problem is, a lot of people don't treat CSS that way, so to actually implement something _complex_ in CSS you'd either have to be very skilled or delusional. Personally, even investing time in learning CSS, I get scared of complexity quite fast, prefering to move real hard logic/maths to JS if possible.
For example, this might make me sweat nervously if I had to work with it anyhow (it is absolutely brilliant though):

<p class="codepen" data-height="300" data-default-tab="css,result" data-slug-hash="wvybyMo" data-pen-title="Animated Möbius strip using CSS mathematical functions (Safari/ Firefox/ Chrome 111+)" data-user="thebabydino" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/thebabydino/pen/wvybyMo">
  Animated Möbius strip using CSS mathematical functions (Safari/ Firefox/ Chrome 111+)</a> by Ana Tudor (<a href="https://codepen.io/thebabydino">@thebabydino</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

<br>

Calculations in CSS are extremely powerful and badass - that is, until you have to debug them. And that is exactly what I had to do on one of my previous projects, Ted Baker. Essentially, we had written a component library to be used within the headless CMS (carousel, accordion, text with/on image/video etc), where users could set params such as actual content, paddings, gaps, text placement and so on.
So, for example, the carousel setup included (nothing is mandatory):

- spacings: top/bottom/left/right paddings/margins (any of these in any combinations), in any unit: could be 14px or 1rem or 5% or even `small`, which is a component library token
- number of slide slots on the screen (e.g. 5 slides configured in total, only show 3 in viewport, rest on swipe)
- gap/no gap between slides
- some/all slides can span across multiple slide-slots!
- overall carousel placement within the website grid system: should it take up the whole row? 3 of 4 columns? 1 of 2 columns?

All this is a bit crazy to implement, especially within a tight deadline (as usual).
I wasn't the one who built it in the first place. It's hard to remember in detail, but: _I suspect_ that due to the sheer number of custom params and what they might be, the logic for calculating each slide's width took pretty much all of them into account to come up with something like this:

<figure class='centered'>
    <img src="/blog/hard-stuff/carousel.png"
         alt="Example of a carousel with dev tools open" class='blogImg' style='width: 100%;margin-bottom: 1rem;box-shadow: 0 4px 16px rgb(0 0 0 / 41%);'>
    <figcaption>This is just a regular one, 3x3 sildes and same spacings</figcaption>
</figure>

Which isn't bad, I suppose... But when you have to implement something new, or have a nasty bug, it just feels like a minefield trying not to break anything. It didn't help that we had no comments or useful variable names in this function, you just had to try and work it out for yourself.
<br>

> Lesson learned: complex logic and calculations are fine! Just make sure it is readable: self-explanatory code is perfect (naming, clarity, decomposition, separation of logic), but if it is still hard to understand, at least leave some comments.

<br>
<br>

## Operation "learning": This does not look promising... {#hexlet-promises}

I started my journey of learning frontend development with the <a href='https://hexlet.io/programs/frontend' target="_blank">Hexlet Frontend course</a>. It's been 4 years and I can't vouch for it now (not sure how things have changed), but back then it was INCREDIBLE. It was almost academic - no jumping straight to frameworks, no "just repeat this and that", just grinding through JavaScript, patterns, data structures, OOP, testing, architectural principles and tools.

There's a learning path with articles and exercises, and there are challenges for those who want to go deeper. There was a whole module on asyncronous programming - what is it, what do you do with it. It seems like normal stuff now, but it was very scary at the time.
But there was one particular challenge that made my head spin, even though it is not complex at all:

```javascript
// Task: Write promisify() function that promisifies asynchronous functions with callbacks.
// Example of callback-based function
const fs = require("fs");
const readFile = (path, callback) => {
  fs.readFile(path, "utf8", callback);
};

// Example of promisify() use
const readFileAsync = promisify(readFile);

(async () => {
  try {
    const data = await readFileAsync("example.txt");
    console.log(data);
  } catch (err) {
    console.error(err);
  }
})();
```

All you need to do is wrap this thing in promise and handle callbacks. Solution:

```javascript
const promisify = (f) => {
  return function (...args) {
    return new Promise((resolve, reject) => {
      f(...args, (err, data) => (err ? reject(err) : resolve(data)));
    });
  };
};
```

For some reason, promises are scary to novice devs, and I remember just staring at it, not _wanting_ to understand what I had to do. Of course, it clicks and you start to feel comfortable with async programming when you get to fetching data for your things, but having that thing above in the middle of a course was just bizarrely demotivating. It's fine not to solve all the challenges when you're learning, of course, but when you hit a blank wall, it's very uncomfortable and it messes with you head!
<br>

> Lesson learned: sometimes you just have to keep going. There will be strange, difficult and frustrating things in programming, everywhere, all the time. It will one day be clear and easy if you keep going, it will never be if you stop.

<br>
<br>

## Operation "major feature": what do you mean you hate videos? {#video}

Back to Ted Baker, on to the features: I present to you my precious child that I have been working on for a few months: a mighty video component.

<figure class='centered'>
    <img src="/blog/hard-stuff/videocomp.gif"
         alt="Example of the video component on Ted Baker website" style='width: 80%;margin-bottom: 1rem;box-shadow: 0 4px 16px rgb(0 0 0 / 41%);'>
    <figcaption>Short loop version -> full video</figcaption>
</figure>

<summary>Basically, the requirements were:</summary>
  <ul>
    <li>YouTube (embed) or CDN (Cloudinary) links supported</li>
    <li>Should adhere to the overall grid (e.g. span across the whole row, 5 out of 8 columns, etc)</li>
    <li>Can be a full video, a short looped video (gif-like), or both: loop -> click play -> full</li>
    <li>Settings: if autoplayed, is there sound, display/hide controls, if on loop</li>
    <li>Play button: svg source, placement (in absolute units or statically placed top/middle/bottom + left/centre/right), colours, paddings</li>
    <li>Text!: on the video, near the video, if aligned with the Play button and placed left-right-top-bottom or below it</li>
    <li>Support for injecting external HTML, CSS and JS to modify anything related to the video ad hoc</li>
    <li>And certainly something else I cannot remember...</li>
  </ul>

Safe to say it was a journey, both from a business and coding perspective: there was _a lot_ of back and forth with the client on API, frontend implementation and use cases, endless testing alongside the QA team, writing, refactoring and debugging.

Whole lotta challenges:

- Modern browsers are alright - supporting a moderately evergreen browser world, I honestly rarely had cases where I needed to modify something for a specific engine. Not with video, noo - it was _a pain_ to get most of the above to work as intended on Safari.

> Lesson learned: yeah it is nice to support new browsers and to be able to rely on Interop to consistently support new browser features, but still - plsss test in Safari, always!

<br>

- It ended up being a humongous component, sadly. Lots of logic, conditions, refactoring. I spent hours trying to reuse some existing stuff and utils, in many cases eventually giving up on DRY because it just added more complexity to things. Also, the more universal you want your components and utils to be, the more you're going to love/hate TypeScript. Like, seriously.

<figure class='centered'>
    <img src="/blog/hard-stuff/ts-meme.jpg"
         alt="Meme with cat scratched woman still loving her cat, with cat being signed as TypeScript" style='width: 50%;margin-bottom: 1rem;box-shadow: 0 4px 16px rgb(0 0 0 / 41%);'>
    <figcaption>Translated from Russian: my sweet kitty!!!</figcaption>
</figure>

> Lesson learned: KISS DRY yeah whatever, that's all well and good, but trust your judgement! it's much better to repeat the logic in a modified way than to overcomplicate existing code for the sake of writing fewer bites of code.

<br>

- Some requirements were a bit out of touch and needed to be discussed with the client. For example, no, a YouTube video will not be fully customisable with all the YT branding hidden. No, we cannot (and frankly should not) set a video to autoplay with sound. And personally, as a hater of video on websites, are we really going to rely on video content that much? 😭 (and yes, we were, big time)

> Lesson learned: talk through fishy requirements and raise doubts early. The people you work with are not stupid (at least I hope not), they are willing to work with you to deliver the best possible things without bending over backwards.

<br>
<br>

## Operation "a11y": you haven't had enough of carousels, have you? {#a11y-carousel}

A few years ago, I took a fantastic <a href='https://accessibilityunity.com/en/' target="_blank">accessibility learning course</a>. Our final project was to create a landing page that was fully accessible taking into account everything we'd learned. This included things like voice-assisted tech support, full keyboard navigation and less obvious things like validating HTML markup.

This is all fun and games and pretty cool to implement until you get to the real stuff™ - the carousel. If you've ever implemented a carousel - I feel for you. There were deadlines, of course, and at the moment I practically had to implement everything on the road due to some personal stuff - in hotel rooms and on trains - so I thought I'd just install an external library and have a great time. yeah right, HARD NOPE.

> Note: there was no <a href='https://react-spectrum.adobe.com/react-aria/' target="_blank">react-aria</a> back then. Now, if you have the same task, just use it. It is probably the best a11y library out there.

I've tried every React-friendly carousel library out there. I even tried some Vanila JS ones. It was absolutely freaking awful! Trying to balance accessibility + customisability (at least to some extend) + supportability (Next.js + TypeScript, yep, again) was almost impossible.

Most common accessibility issues across all libraries, even those that claim to be "a11y friendly":

- Quite difficult to navigate with the keyboard: often skipped or borderline impossible as the keyboard navigation is getting lost somewhere in there / illogical focus jumps. Due to the way it is built, extremely difficult to write your own navigation on top of that.
- It is developed in SUCH a complex fashion that it is not valid HTML markup.
- No option to add alts for images or any other way of describing a slide. E.g. preset "Slide 1", "Slide 2" announcements - wow, not really helpful.
- Controls are not customisable/accessible (both arrows and breadcrumbs) - and this is _very_ basic and important!

Just an example of what I ended up with (and was extremely pleased with myself, although it could certainly be done better):

<figure class='centered'>
    <img src="/blog/hard-stuff/museum-carousel.png"
         alt="Screenshot of my carousel with VoiceOver output visible, which is explaining the slide content" style='width: 80%;margin-bottom: 1rem;box-shadow: 0 4px 16px rgb(0 0 0 / 41%);'>
    <figcaption>You can see the VoiceOver output - it is (hopefully) easy to understand what is going on</figcaption>
</figure>

The same from one of the popular libraries:

<figure class='centered'>
    <img src="/blog/hard-stuff/other-carousel.png"
         alt="Screenshot of some other carousel from one of the libs, with VoiceOver output being a hot mess" style='width: 80%;margin-bottom: 1rem;box-shadow: 0 4px 16px rgb(0 0 0 / 41%);'>
    <figcaption>I don't even know what is going on here...</figcaption>
</figure>

> Lesson learned: unfortunately, the bigger the component, the more thought, time and strategy you should put into accessibility. External libraries _might_ be the answer - but don't blindly trust anything just because it says "accessibility first" or whatever.

<br>

Also, there was a minor issue of Next.js `<Image/>` component being a pain in the ass (I think it still is tho, but that's another story): it was shipping invalid HTML markup:

<figure class='centered'>
    <img src="/blog/hard-stuff/invalid-markup.png"
         alt="Validation error of Next.js image generated markup" style='width: 80%;margin-bottom: 1rem;box-shadow: 0 4px 16px rgb(0 0 0 / 41%);'>
    <figcaption>Not great, that</figcaption>
</figure>

That was only resolved with bumping Next.js version. Ah well. At least I still used `<Image/>`.

<br>

## Operation "feature branches": rebase is my best friend {#rebase}

Short'n'sweet! Unfortunately, release processes are not always easy-peasy-lemon-squeezy: I once worked in a rather chaotic one, but for various reasons there was nothing we could do about it: 7+ frontend devs working on the same codebase, unclear releases scope, and a branching strategy that was inappropriate for the testing pace. Some things were developed and added to the scope, then asked to be removed, later added back, yadda yadda. As you can imagine, it is messy conflicts aaall the way through, it is messy git history, it is pretty much messy everything.

<figure class='centered'>
    <img src="/blog/hard-stuff/sick-prs.jpeg"
         alt="Meme with a boxer ready to fight, then giving up, saying Imma merge these sick PRs -> damn these conflicts got hands" style='width: 50%;margin-bottom: 1rem;box-shadow: 0 4px 16px rgb(0 0 0 / 41%);'>
    <figcaption>me irl</figcaption>
</figure>

The answer is unfortunate for some, given recent git discourse: familiarising yourself with `git rebase` will save you precious time, nerves and the stress of "what the heck is that???? i will just start all over again". Seriously, it is my favourite way to interact with git. No merge commits, no messy history, no alarms and no surprises - I will _fight_ for rebase. 😤

> Lesson learned: get comfortable with `git rebase`. If your code/org/repo policy does not allow this, then just get comfortable with git. I've met people who are afraid of git, and I kinda get it - it's STRESSFUL to not know your escape routes. But there's nothing to be afraid of, git is your best friend.

<br>
<br>

## Operation "AOC": literally could not care less {#aoc}

Every year, I do the <a href='https://adventofcode.com/' target='_blank'>Advent of Code</a>. If you are as stupid as I am, it will be both fun and incredibly frustrating for you, but it is so much fun!

If you don't know what it is: you start on 1 December, each day you have two puzzles to solve. They are not _exactly_ code or algorithmic challenges, you can do it in any language and/or in any way (<a href='https://www.youtube.com/playlist?list=PLsLuABDrJ7ME3vJEOCwGZ97__ZlHFgHvp' target='_blank' class='youtubeLink'>lots of people do it in MS Excel!</a>). The right answer will get you a star. A second part is related, but just more complex than the first - bigger puzzle input, more extreme conditions, or some sneaky catch added to the first task. The puzzles are silly and fun, but very cleverly put together to really test your skills (and sometimes your chosen language toolset). You can use ChatGPT and whatever, but that's cheating, obv. I never do.

<figure class='centered'>
    <img src="/blog/hard-stuff/aoc-2021.jpeg"
         alt="Intro to one of the Advent of Code tasks" style='width: 80%;margin-bottom: 1rem;box-shadow: 0 4px 16px rgb(0 0 0 / 41%);'>
    <figcaption>This is a regular AoC task for you!</figcaption>
</figure>

Over the past 4 years I've been doing AoC, I've written some _incredibly bad_ code with very dubious logic - and I'm happy to say that I'm absolutely proud of every line I've written, if it got me to a correct answer. We do it in DECEMBER. It is TWO tasks a day, outside the usual job. It is always INTENTIONALLY frustrating. It adds twists and turns that annoy you for no damn reason and make you rethink your code three times. Hell yeah, I'm proud of it!

I don't want to share specific examples, you can easily check my <a href='https://github.com/lazy-ocean/coding_challenges/tree/main/advent-of-code' target='_blank' class='githubLink'>repo</a>. But it looks like the largest file has over 200 lines of code - like, jeez, this is a very weird thing to do for fun during the Christmas season... But I feel like I've learnt a lot - some of the algo stuff you just don't do in your day-to-day job, and it's nice to write some JS without React every now and then.

> Lesson learned: it is always better to like what you do for a living. If you're tired of coding but still have to do it, try to find new ways to enjoy it. Silly, funny, frustrating puzzles may not be the answer, but it could be something else. Many chances to try!

<br>
<br>

## Closing thoughts

Programming is quite fun, I still can't believe sometimes that my job is solving puzzles and telling computers to draw boxes on screens. I hope I can still do it for a while before AI takes all the programming jobs...

</div>
