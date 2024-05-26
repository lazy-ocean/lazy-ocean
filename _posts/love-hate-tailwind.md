---
title: "Love, Hate, and Tailwind CSS"
excerpt: "Recently, I finally got my hands dirty with Tailwind CSS, which I (used to?) hate. Has anything changed?"
coverImage: "stickers/hate.png,stickers/tailwind.png,stickers/styles.png"
date: "2024-04-26T19:43:45.322Z"
meta:
  description: "Love, Hate, and Tailwind CSS"
color: "#96cee7"
tags: "frontend"
---

<div id='contents' class='contents'> 
<h2>Contents</h2>

1. [First and last Tailwind experience](#first-try)
2. [2024 experience: is it better?](#2024-try)
3. [Feelings: bad stuff](#feelings-bad)
4. [Feelings: good stuff](#feelings-good)
5. [Tools that helped](#tools)

</div>

<div id='main'>
<p>It's April 2024, and even after working for quite some time both on personal and commercial projects, it is literally the first time I needed/was required to use Tailwind. Here's how it went, from a person who used to be really optionated about how bad it is and <i>"why don't we just use CSS instead like normal people who know what they're doing"</i>.</p>

## First and last Tailwind experience {#first-try}

The first and last time I tried Tailwind CSS was to showcase all the JS + HTML code snippets I had at the very beginning of my career as a frontend dev. It was mostly a calculated rather than an educated decision: at this point, just before landing your first job, you try to cram as many buzzword frameworks, tools and languages into your terribly empty CV as possible. You MUST show everything, anything - and if some code snippets are just not big enough for a pet project, you throw them in as a codepen. So I "polished" a few snippets with Tailwind, and honestly, I felt nothing but incredibly frustrated:

- Huge amount of tokens - can be overwhelming if you have no plan for what you are doing. As a learner, this is sometimes the case, especially at the very beginning of whatever technology you're working with. Not good if your first impression is "whaaat the heck, this is slowing me down!"
- I had learned _enough_ CSS by then - well enough to enjoy writing it (that powerful feeling of your first layouts!). It just seemed _weird_ to try to write a whole new, not-at-all-pretty syntax for the things I'd probably like to find out how to write in vanilla CSS
- Docs are confusing. I will talk about this later, because for me they are just as confusing still, but maaan, it is really annoying not to be able to make sense of the official docs that are supposed to help!

<figure class='centered zoomhandler'>
    <img src="/blog/tailwind/tailwind-2020.png"
         alt="Tailwind 2.0 release notes" style='width: 70%;margin-bottom: 1rem;box-shadow: 0 4px 16px rgb(0 0 0 / 41%);' class='zoomhandler'>
    <figcaption>Tailwind 2.0, which I used at the time, was released in 2020 😥</figcaption>
</figure>

In short, I did what I needed to do and felt "wow, let's not do that again", obviously without thinking about how that might work for a different kind of project, task, team and even mindset. But...

## 2024 experience: was it any different? {#2024-try}

Without going into too much detail, I needed to get some work done, FAST (plus Tailwind CSS was one of the prerequisites).
The workload was not heavy at all - a backoffice CMS-like page (basically pretty forms), a page with a user card and a related content grid, plus a landing page - but just a simplified version of one, nothing extreme.

Forms is what really made me reach for the Tailwind - obviously, with <a target='_blank' href='https://ui.shadcn.com/'>shadcn/ui</a> being pretty much everywhere, especially Next.js related, this brain association is practically involuntary at this point.

<figure class='centered'>
    <img src="/blog/tailwind/shadcn.png"
         alt="shadcn/ui dashboard component" style='width: 50%;margin-bottom: 1rem;box-shadow: 0 4px 16px rgb(0 0 0 / 41%);'>
    <figcaption>I mean, I've nothing against it, clean and pretty. But it is everywhere now, like a new Bootstrap!</figcaption>
</figure>

A lot of webdev creators I follow swear by Tailwind, and as I try not to have very strong opinions on technology lately, it felt natural, even FOMO-like, to give it a try.

How it progressed:

**Step 1, denial:** _\*looks at shadcn/ui, questions everything, thinks about running into the woods\*_

**Step 2, anger:** jesus, why is it STILL overwhelming to read Tailwind docs? 😭

**Step 3, bargaining:** this sounds perfect for my pal gpt-3.5, "hey chatgpt whats grid, 3 columns, indefinite rows in tailwind", "how do i make a focus color change in tailwind", "what is height: max-content in tailwind"

**Step 4, depression:** I will literally go insane before I figure out how to do this animation in Tailwind, let's just put vanilla CSS in here.

**Step 5, acceptance:** OK, that makes sense, let's just reuse this and that. And this, in here. Wait, why the heck I need 15 different classes for this silly little container... Oh it is responsible already, gotcha. Wow, now that we're done, it turns out it WAS fast. I guess I hate it a little less now?

## Feelings: bad stuff {#feelings-bad}

Unfortunately, I still have very strong opinions, but now both _for_ and _against_ Tailwind.

Let's start with bad things:

### 👎 Docs

Docs are annoying: for me it is not organised in a good way to set you up and off you go. It is too deep and complicated for each example, which is a good thing - docs should be comprehensive! - but do you really need to have everything everywhere at once, every use case mentioned on the same page? I don't know, it's just really hard to navigate, you have to use search all the time.

### 👎 A new-ish syntax to grasp

It is a proper language you need to learn: the primitives are easy to grasp, but when using Tailwind you are not learning/writing CSS - you are writing Tailwind code. As a result, even though it has allowed me to build everything quickly, I am so unsure of the quality of the code I have produced. I know CSS, but now I'm separated from it by primitives, which is sort of the point, but makes it confusing to debug things sometimes.

### 👎 Look and feel 😭

Still looks awful, sorry not sorry!!!: not sure if there's anything to be done though, conceptually it is what it is, if you don't like endless lines of classes that are impossible to read, well, tough luck. I feel like after a while you get used to it enough to quickly understand it without reading, but that requires some experience.

This is an example Card component from <a target='_blank' href="https://flowbite.com/docs/components/card/">Flowbite</a>. You won't convince me this is ok:

```jsx
<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Noteworthy technology acquisitions 2021
    </h5>
  </a>
  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
    Here are the biggest enterprise technology acquisitions of 2021 so far, in
    reverse chronological order.
  </p>
  <a
    href="#"
    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Read more
  </a>
</div>
```

<br/>

### 👎 Learning curve

The learning curve is deceptive, not flat at all: I needed all the help I could get to get decent results, especially at the beginning: ChatGPT + Bing, cheatsheets, shadcn/ui, other websites using Tailwind... On the one hand, this means that DX is good enough for a lot of people to use it and build an ecosystem around it. On the other hand, really, cheat sheets? It shouldn't be that complicated.

### 👎 DevTools and fooling around

Playing around with styles in DevTools is no longer easy: complex token classes contain multiple style declarations, and what do you do with them? You cannot remove the class if you only need to remove one rule, you cannot uncheck the rule because all other elements using that class will break. Styles are not grouped under a class, you have to scroll and scroll and scroll until you find the one you want. Not critical, but sometimes annoying.

<figure class='centered'>
    <img src="/blog/tailwind/turbo.gif"
         alt="Example of DevTools output for the h1 on Turbo website" style='width: 70%;margin-bottom: 1rem;box-shadow: 0 4px 16px rgb(0 0 0 / 41%);'>
    <figcaption>All of this to make h1, cmon man</figcaption>
</figure>

### 👎 Semantics

Skill issue, I guess, but I found myself dropping a lot more wrapper divs than usual, sometimes just because there were so many classes on inner elements already that it was hard to try and change anything. Not junior-friendly at all in the sense that you learn bad practices from the start.

## Feelings: good stuff {#feelings-good}

Some things surprised me, some were cool to realise now, with several years of experience behind me.

### 👍 Maintainability

Going back to my old, really old CSS-in-JS code sometimes feels like torture, like girl, what is going on here? and are we reusing it anywhere else? Tailwind CSS stays the same, which gives you a much better chance of picking up quickly.

### 👍 Predictability of the bundle size + performance 🚀

As your project grows, CSS modules or CSS-in-JS have nothin' on Tailwind, unless you do insane customizations your CSS bundle will not grow (but your resentment to life can though, so be careful out there...). <a target='_blank' href="https://tailwindcss.com/docs/optimizing-for-production">Tailwind is very performant and optimised to generate only the CSS you use</a>, so unless you have absolutely no idea what you're doing, you're probably all set on the CSS perf side of things.

### 👍 DX and ecosystem

Even if I don't personally enjoy Tailwind's DX, the ecosystem around it makes it a lot easier: ready-to-use components, v0 + shadcn, Prettier plugin, helper websites - all of these help immensely, especially at the very beginning.

<figure class='centered'>
    <img src="/blog/tailwind/state-of-css.png"
         alt="State of CSS 2023 graphics showing the prevailance of Tailwind among users" style='width: 90%;margin-bottom: 1rem;box-shadow: 0 4px 16px rgb(0 0 0 / 41%);'>
    <figcaption>It's Tailwind's world and we're just living in it (from <a target='_blank' href="https://2023.stateofcss.com/en-US/css-frameworks/#css_frameworks_experience_marimekko">State of CSS 2023</a>)</figcaption>
</figure>

<br/>

### 👍 Teamwork

There are different approaches to CSS, and I'm not talking about CSS-in-JS or SASS or whatever, I'm talking about everyone's mental model. You're relatively free to do crazy things with the language, and even with the box model, different people see the same layout in different ways. Tailwind CSS is the same for everyone, the same primitive language. Easy to code review (_IF_ you know the Tailwind language though), pick up work from other devs, or even adjust styles without knowing much CSS (like backend/fullstack developers, designers, QAs or whoever).

### 👍 Setting up

Setup is easy: the primitives are there, you probably just need to adjust some colours, fonts and gradients. The rest is ready to use, while you have to set everything up yourself with CSS variables, theme variables or your own token classes. Dark/light theming is also quite nice out of the box, which is painful most of the time.

### 👍 Run fast, <span style="text-decoration: line-through">break</span> build things

It _IS_ helping you bootstrap everything fast, especially if you don't care about code quality and/or have worked with Tailwind before. Ideal for POCs, MVPs and other shiny hot things you want to ship ASAP.

## Tools {#tools}

There are several things that have really helped me on this journey:

- **<a target='_blank' href='https://chat.openai.com/'>ChatGPT</a>**: I used AI help a lot. It was much easier to edit what ChatGPT gave me, excluding the classes I didn't see the need for, than to write them all myself and search for them one by one. Also, by reading the output, you gradually learn to use tokens in similar cases further down.
- **<a target='_blank' href='https://ui.shadcn.com/'>shadcn/ui</a>**: I didn't really need its full-blown component functionality, just picked up bits and pieces from here and there, incredibly helpful library of ready-to-use components with a clean and sleek design.
- **<a target='_blank' href="https://v0.dev/">v0 by Vercel</a>**: I am a Vercel's fangirl, now what? 😭 But seriously, if you don't have any designs and/or a sense of UI beauty, this is really helpful: it generated a handful of interfaces that I used right away with little to no tweaking.
- **<a target='_blank' href='https://tailwind-gradient-generator.vercel.app/'>Tailwind Gradients Generator</a>**: gradients are hard to get right! With this generator it was easy to play around with colours and directions to get results in several classes.
- **<a target='_blank' href='https://nerdcave.com/tailwind-cheat-sheet'>Tailwind Cheat Sheet</a>**: much easier to use than official docs to search for specific classes
- **<a target='_blank' href='https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss'>Tailwind CSS IntelliSense extension</a>** and **<a href='https://github.com/tailwindlabs/prettier-plugin-tailwindcss'>prettier-plugin-tailwindcss</a>**: is a must if you use Tailwind on a daily basis. It'll definitely make your 100+ character classes tidier.

## Closing thoughts

I don't regret working with Tailwind CSS at all: it was useful to shake up some very strong feelings and beliefs. TBH I am still leaning against Tailwind CSS, especially for my personal projects, but I will probably be fine with using it in teams and for something like landings. Only now it is an educated choice!

</div>
