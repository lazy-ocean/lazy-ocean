---
title: "Generative AI + Frontend development: how to stay relevant"
excerpt: "In the light of Devin AI and similar tools, here're 4 ways to pivot your frontend development career. "
coverImage: "stickers/ai.png,stickers/programmer.png,stickers/speed.png"
date: "2024-03-18T20:30:34.322Z"
meta:
  description: "Generative AI + Frontend development: how to stay relevant"
color: "#f9bec4"
tags: "ai,frontend"
embeds: true
---

<div id='contents' class='contents'> 
<h2>Contents</h2>

1. [What is Devin AI?](#devin)
2. [This is the worst of AI... so far](#AI-worst)
3. [What is cool, now](#cool-things)
4. [The ugly AI side, where you can shine](#ugly-side)
5. [Final thoughts](#final-thoughts)
</div>

<div id='main'>
<p>In the light of Devin AI and similar tools emerging (and sure many more to come), here's my view on to stay relevant and secure your job as a frontend engineer.

Will AI take our jobs? In short, there's evidence that it might, over some time, but there are also issues that AI is so notoriously bad at that having significant expertise in any of them could save your career.

TL;DR: We're probably _mostly_ fine. But "<a href="https://www.tate.org.uk/press/press-releases/ilya-and-emilia-kabakov-not-everyone-will-be-taken-future"  target='_blank'>Not Everyone Will Be Taken Into the Future.</a>"

</p>

## What is Devin AI? {#devin}

<a target='_blank' href='https://www.cognition-labs.com/blog'>Devin AI</a>, to quote its makers, is a "world's first fully autonomous AI software engineer", created by Cognition, an applied AI lab. Which, judging by the press release, is pretty darn good: Devin is claimed to be an independent pal for you to solve complex engineering tasks using a wide context window; a collaborative colleague who is able to refactor code and take feedback; a swiss army knife equiped for modern development with a code editor, shell and a browser.

We've _kind of_ seen these, or similar, or combinations of these things before, but here's what's compelling: it is said that Devin can independently and autonomously a) deploy b) _find_ and fix bugs, including creating bugfixes pull requests in Github 🤯 c) tune its models d) and even complete very real Upwork projects (which is somehow the least impressive to me.)

<blockquote class="twitter-tweet centered"><p lang="en" dir="ltr">Today we&#39;re excited to introduce Devin, the first AI software engineer.<br><br>Devin is the new state-of-the-art on the SWE-Bench coding benchmark, has successfully passed practical engineering interviews from leading AI companies, and has even completed real jobs on Upwork.<br><br>Devin is… <a href="https://t.co/ladBicxEat">pic.twitter.com/ladBicxEat</a></p>&mdash; Cognition (@cognition_labs) <a href="https://twitter.com/cognition_labs/status/1767548763134964000?ref_src=twsrc%5Etfw">March 12, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Cool cool cool cool cool...

<div class="centered">
<iframe src="https://giphy.com/embed/4NnSe87mg3h25JYIDh" width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
<a target='_blank' class="hiddenLink" href="https://giphy.com/gifs/4NnSe87mg3h25JYIDh">via GIPHY</a>
</div>

<br/>

## This is the worst of AI... so far {#AI-worst}

The problem is, it's pretty hard not to focus on the fact that this is literally the worst level of AI we've ever seen, and it's only going to get higher, stronger, better, whatever. We've only known ChatGPT for about a year +/- a few months and look at us now!

It somehow _feels_ right to think that generative AI should develop exponentially: with the ability to tune models, it seems logical that every new step, every new version or product will be a breakthrough.As we saw last year with <a target='_blank' href="https://www.popsci.com/technology/chatgpt-human-inaccurate/">the ChatGPT meltdown of sorts</a> (which some users called <a target='_blank' href='https://community.openai.com/t/chat-gpt-4-is-getting-worse-on-content-generating-from-july-2023/308019'>the 'Alzheimer's edition'</a>, and even one <a target='_blank' href="https://arxiv.org/pdf/2307.09009v2.pdf">UC Berkeley study paper</a>), the real grouth doesn't really look linear, and might even be logarithmic? But I'm not going to give any estimates here - I'm not good at it anyway, but if there's a risk of losing my job, I'd better assess the situation, right? Starting with the good stuff.

## What is cool, now {#cool-things}

I use AI in one way or another pretty much everyday. It is by no means independent, but it is really helpful in some niche things:

1. AI is quite awesome at **bootstraping things** to give you a quick start without the whitelist anxiety: whether you are starting a feature implementation, need a quick POC, or maybe just a bare layout, you can just ask AI for a skeleton and extend it with styles and logic yourself. _Sometimes_ it's much easier to fix or refactor than to start from scratch, so this is where you get an advantage.

Same here: generating **pure utility functions**, when you have a definite idea of what your arguments are and what the end result should be. Straightforward things = easiest AI success.

2. AI is **a very patient teacher**, even if it halucinates 🫠: you can ask for any concept and any separate ideas of that concept to be explained in as much detail and with as many examples as you like, at any time. You can insert the whole docs sections and ask to elaborate some information.

You can also ask stupid or **incredibly obscure** questions without having to formulate your thoughts in a concise manner: imagine you have an idea of a concept, but don't know what it's called, or maybe you've forgotten the word. Google is absolutely rubbish in this case, whereas ChatGPT seems to understand me even if I'm not 100% sure that what I'm trying to explain is a real thing.

3. Reading someone else's or **legacy code**: this is probably my favourite use when I need to deal with configs, legacy code, or to quickly understand what the backend does. Once at work I needed to understand what a piece of code in the Terraform config did, and it was a matter of one ChatGPT question. Incredibly useful stuff.

4. Generate some **mocks, test data, placeholder texts**: if you need data, quickly + include some corner cases in it (empty values, wrong types, etc), this is an easy task for a generative AI. Or, alternatively, if you want to modify the existing data: remove whitespace, convert strings to numbers, that sort of thing.

5. Building things with **new languages, tools or frameworks** has never been faster: AI can guide you through every step of building a relatively simple thing in a new technology, and in most cases it will be much faster than any learning curve. Depending on your needs, this may even be enough without you having to figure anything out yourself, but if not, having AI at your side to ask questions and give you code snippets is a huge help.

## The ugly AI side, where you can shine {#ugly-side}

Now, there are several things that AI is notoriously bad at. And I mean **reaaaly bad**. The tiny, ugly truth is - it is, of course, what it has learnt from training on our code... So if you feel you need to do something to secure your job in the future, I'd suggest focusing on these things:

1. ♿ Accessibility
2. 🔐 Security
3. ✨ Rich interactions/animations
4. 🚀 Performance
5. 🙊 (A bonus! which AI is not really bad at, but we need to get better still) Communications.

Let's talk about these in detail.

1. **Accessibility**

AI is just... not good at all at accesibility. And it is not getting better. One of the best examples is described in this <a target='_blank' href="https://www.scottohara.me/blog/2023/01/31/ai-a11y-maybe-no.html">year-old article</a>, where the author asks ChatGPT to generate an accessible button. Should be easy, and I say it with a bit of a learning behind. What ChatGPT did, and does still (I checked at the moment of writing this article), is adding all sorts of unnecessary attributes to a perfectly normal `<button>` (at least not a `<div>`).

<figure class='centered'>
    <img src="/blog/devin/gpt-btn.png"
         alt="A ChatGPT code snippet with button tag having tabindex=0 attribute" style='width: 70%;margin-bottom: 1rem;box-shadow: 0 4px 16px rgb(0 0 0 / 41%);'>
    <figcaption>Completely unnecessary if you are using < button/></figcaption>
</figure>

<figure class='centered'>
    <img src="/blog/devin/gpt-btn2.png"
         alt="A ChatGPT code snippet with button tag having aria-label attribute" style='width: 70%;margin-bottom: 1rem;box-shadow: 0 4px 16px rgb(0 0 0 / 41%);'>
    <figcaption>Only makes sense if there's no text inside button, or, if the label significantly enhances the understanding of the button function</figcaption>
</figure>

There are a <a target='_blank' href="https://intopia.digital/articles/using-chatgpt-to-make-chatgpts-experience-more-accessible/">handful</a> of <a target='_blank' href="https://www.divotion.com/blog/chatgpt-accessible-html">examples</a> of the same issue, but here's one more with Devin specifically: on this <a target='_blank' href="https://snazzy-vacherin-45a697.netlify.app/">example React TODO app</a>, built by Devin with Chakra UI components, you

- won't be able to submit a todo using the keyboard (because it's not coded as a `<form>` at all, and/or there're no keyboard actions tracked)
- with VoiceOver, won't be able to understand what the theme switcher does - there're no labels, no alt text, just an SVG icon
- using dark theme, won't be able to see the placeholder text
- using dark theme, won't be able to see the the tasks' texts

<figure class='centered'>
    <img src="/blog/devin/devin.gif"
         alt="Devin TODO app theme switching, where it is not possible to see the tasks text" style='width: 70%;margin-bottom: 1rem;box-shadow: 0 4px 16px rgb(0 0 0 / 41%);'>
    <figcaption>Why r u white?</figcaption>
</figure>

These are small things, but you probably do them all by default when coding something similar.

Please care about accessibility. Please educate yourself more on the subject. Accessibility is not about the small obscure group of people, it's about all of us - it's annoying when you can't use your keyboard or see the text, isn't it? (And I'm not even going to get into the legal implications.) AI can't do much about it. We can.

2. **Security**

Security is always a thing that you learn from (hopefully someone else's) mistakes. I seriously think the only reason AI involvement in development will slow down significantly is because companies are very cautious, and the reason GitHub Copilot is already integrated is because Microsoft vouches for it. BUT there are many, many issues with the security side of the generated code.

To name a few: <a target='_blank' href="https://www.theregister.com/2021/07/06/github_copilot_autocoder_caught_spilling/">API keys and secrets are leaked</a>, <a target='_blank' href="https://www.theregister.com/2022/12/21/ai_assistants_bad_code/">encryption/decryption is buggy</a>, <a target='_blank' href="https://www.theregister.com/2023/04/21/chatgpt_insecure_code/">user input isn't validated and/or sanitised</a> in any way, there're no rate limits by default and errors aren't handled cause happy path!!!. You have to specifically ask your chatbot to ensure AI puts some safety net for those risks, which is kind of _fine_, but you _have to know those risks to ask for the precautions_. We're getting into the "give better prompts" territory, but that just proves the point - to give yourself an edge, you need to learn more and care about security.

<blockquote class="twitter-tweet centered" data-conversation="none"><p lang="en" dir="ltr">Devin just embedded API keys directly into the python file 👍🏻 Devin is a champ with security! <a href="https://t.co/ROUgcQY6ON">pic.twitter.com/ROUgcQY6ON</a></p>&mdash; Ananay (@ananayarora) <a href="https://twitter.com/ananayarora/status/1767696123379224873?ref_src=twsrc%5Etfw">March 12, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

3. **Rich interactions/animations/transition in web interfaces**

In my personal experience, ChatGPT/Bing, whatever I've tried, all suck at creating CSS animations, even when you give them explicit instructions. To be perfectly fair, so do I - that's why I ask for help almost every time I need to animate something, and I'm sorry to say that GenAI is not helpful.

<figure class="centered">
<iframe src="https://giphy.com/embed/5eFp76zhsq3uw" width="400"  frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    <figcaption style="margin-top: 10px;">Me, wiring up ChatGPT created animations (<a class='hiddenLink' href="https://giphy.com/gifs/5eFp76zhsq3uw">GIPHY</a>)</figcaption>
</figure>

Every example I saw describing how "ChatGPT created a complex animation" was either <a target='_blank' href="https://twitter.com/kristoferlund/status/1705120249115238838">something self-contained with no user-driven interactions</a> (like background colour changes), extremely common (like modal window opacity or <a target='_blank' href="https://twitter.com/dontqq/status/1626680309826703367">something pulsating</a>), or from an existing library (e.g. Tailwind code + Tailwind animations). In my experience, it totaly sucks at creating things you want/need to animate in real interfaces, like onclick actions: carousel switching, sliding in/out drawer, on-scroll events. Also, it is incredibly hard to get a GenAI to add transitions to an existing layout, so if you have some components in place, it might be even more difficult.

Complex animations are the kind of code you have to try and tweak over and over again until you start to see the pattern. By default, it requires an extensive context window, which any existing AI currently lacks, so it falls to you to go back and forth, changing your prompt <=> and running the code to check the effect, which is incredibly frustrating after several interactions. This is the area where I _really-really_ want the AI to get better.

4. **Performance**

I've had my share of trying to tweak the performance of a (rather large) React app, and there are obviously two main approaches:

1. Build _something_, improve later: generative AI cannot help you with that. Sure, it might give you some suggestions on where to look and what to tweak, but that's for you to look at a Lighthouse report, network monitoring results, devtools performance insights, your dependencies analytics, the size of the JS codebase, third-party dependencies, React rerenders, backend speed... The list goes on and on.

2. Care about performance from the very beginning: that is a bit like TDD - it sure exists, but chances are, it is not your project and/or it is difficult to oversee some issues at the start. Plus, it is very difficult to be consistent about performance at the team level. As GenAI learns from our not-so-perfect code, it is absolutely not going to produce flawlessly-performing experiences by default, and so here we go with the first point: trying things by yourself.

Web performance is a whole niche to specialise in, you have to learn where to look and what to look for. From personal experience, once you've got the idea, you take best practices everywhere, but it takes time and effort to educate yourself. But I think it is worth it on every level, with or without AI as a helper.

5. **Communications**

A short one: I don't think you'll get far without soft skills. It may be my delusional thinking, but I say that the first and most affected group of developers by AI would be the ones who do not communicate with the user/client/colleagues and go by written instructions / technical tasks alone. Maybe not ChatGPT yet, but Devin seems to be just fine with this approach.

Good software is made by good teams that communicate well, both internally and externally, when different people with different skills, experiences and views come up with the best by sharing them. Generative AI has collected ideas/code from all of us (even if we didn't want that), but it is unable to decide what's good the way we do, by thinking critically, learning and talking, working together. So don't take your team for granted!

## Final thoughts {#final-thoughts}

I feel both intimidated and unimpressed by AI every day. I think it will threaten our job security, but only in the long term. Today, it is actually really helpful in supporting you in whatever you are doing, so it is better to have the best of both worlds - rely on AI for tasks and new topics, but nurture your own expertise.

</div>
