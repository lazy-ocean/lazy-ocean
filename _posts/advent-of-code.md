---
title: "Advent of Code: become a better dev in a month"
excerpt: "Advent of Code is one of the key things that shaped my code knowledge and discipline. Here's why."
coverImage: "stickers/advent-calendar.png,stickers/santa-hat.png,stickers/christmas-day.png"
date: "2024-12-01T15:30:34.322Z"
meta:
  description: "Advent of Code: become a better dev in a month"
color: "#b3dcfd"
tags: "frontend"
embeds: true
---

<div id='contents' class='contents'> 
<h2>Contents</h2>

1. [What is Advent of Code?](#what)
2. [What are the tasks?](#tasks)
3. [What is the deal with first-second tasks business?](#second-task)
4. [Wait, your machine? Isn't there a code runner or something?](#input)
5. [But why doing it at all?](#why)
6. [No prizes at all? 🥺](#leaderboard)
7. [How is it going for the fifth time?](#me)
</div>

<div id='main'>
<p>Have you heard of <a target="_blank" href='https://adventofcode.com/'>Advent of Code</a>? one of the most important things that has shaped me as a developer. There are just so many awesome things about it that I'm still excited about starting it for the 5th time.

</p>

## What is Advent of Code? {#what}

In a nutshell, <a target="_blank" href='https://adventofcode.com/'>Advent of Code</a> is just a series of challenges grouped around a Christmas story - it's usually fairy tale like, mostly elves in weird situations like space, underwater, that sort of thing, but to be honest, the story doesn't matter much if you're not into that sort of thing.

Some ground rules:

- Every day from the 1st to the 25th of December, there will be two challenges, starting at midnight EST.
- The second challenge will be open once you have solved the first part. The second part is more complex than the first _while using the same input_.
- You get a ⭐ star ⭐ for completing each challenge. 49 in total, the last one is on the house ✨
- It's _not_ mandatory to complete each and every one, but the second challenge will not open until you've completed the first.
- Each challenge consists of a text description and rules, sample input, task input, answer field. Input is a sequence of characters that you'll need to parse and use for your task.

<figure class='centered'>
    <img src="/blog/advent/input-example.png"
         alt="Example of the string input for one of the tasks" style='width: 70%;margin-bottom: 1rem;box-shadow: 0 4px 16px rgb(0 0 0 / 41%);'>
    <figcaption>Example of the string input for one of the tasks</figcaption>
</figure>

<br/>

## What are the tasks? {#tasks}

Puzzles are usually intentionally tricky. It's not LeetCode, there are no hints or anything to prompt you to try and solve the challenge using this or that particular algorithm. From my experience, you will definitely have to use things like:

- tree traversal
- depth-/breadth-first search
- shortest path algorithms
- recursions
- effective sorting/filtering
- dynamic programming
- 3d geometry
- loops
- string manipulation

and probably many other things, and most definitely you'll need to figure out data structures to work with the input, which is just a string.

_A lot_ of times you’ll need to use a combination of various problem solving strategies and algorithms, so it is really a good way to train your algo muscles.

<blockquote class="reddit-embed-bq centered" style="height:500px" data-embed-height="519"><a href="https://www.reddit.com/r/adventofcode/comments/zjpp38/2022_day_12_its_that_time_of_the_year_again/">[2022 day 12] It's that time of the year again.</a><br> by<a href="https://www.reddit.com/user/Gumbernator/">u/Gumbernator</a> in<a href="https://www.reddit.com/r/adventofcode/">adventofcode</a></blockquote><script async="" src="https://embed.reddit.com/widgets.js" charset="UTF-8"></script>

<br/>

## What is the deal with first-second tasks business? {#second-task}

As I said, the second task is usually tricky - in most cases it will _force_ you to find the most efficient algorithm if you didn't pay enough attention to it in the first part. Remember that the input is the same for both tasks? Well, for example, in the first part you have to iterate over the input 5 times, which could be done nicely with some recursion. Easy-peasy. But in the second part, well guess what, you're going to have to do the same thing 5000000 times, and will your machine be able to handle that? So you're learning to think about performance right from the get-go.

<figure class='centered'>
    <img src="/blog/advent/p2.png"
         alt="Meme showing the complexity of the second task" style='width: 100%;margin-bottom: 1rem;box-shadow: 0 4px 16px rgb(0 0 0 / 41%);'>
    <figcaption>This is fine</figcaption>
</figure>

<br/>

## Wait, your machine? Isn't there a code runner or something? {#input}

There's no code runner or sandbox or anything of the kind. It is just an input that takes numerical values. There's no time limit, no memory requirements, no nothing, just vibezzzz.

... But what does it actually mean?
Basically, you can do whatever you want with the challenge. For example:

- **You can complete a challenge in any programming language.**

JS, TS, Python, Ruby? Use whatever.

<blockquote class="twitter-tweet centered"><p lang="en" dir="ltr">Here&#39;s something fun; of the 125,000 <a href="https://twitter.com/hashtag/AdventOfCode?src=hash&amp;ref_src=twsrc%5Etfw">#AdventOfCode</a> repositories on GitHub, this is the language breakdown: <a href="https://t.co/rUFkNE1ct6">pic.twitter.com/rUFkNE1ct6</a></p>&mdash; Eric Wastl (@ericwastl) <a href="https://twitter.com/ericwastl/status/1602073232538206208?ref_src=twsrc%5Etfw">December 11, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

- **Some people try new programming language each year**

In fact, it is a good way to learn other programming languages if you have at least some experience in another language. You probably know what to do when you read the task, so the hardest part is done. You probably even know the logic of the algorithms, so you just need to code them - the language doesn't matter.

- **Some people try different challenges in different languages**

... based on the language abilities. Or try a new language every day!
Python is better for complex data parsing, Rust is insanely fast, Haskell is good for recursion. So why shouldn't you use appropriate tools for specific tasks?

<blockquote class="reddit-embed-bq centered" style="height:500px" data-embed-height="526"><a href="https://www.reddit.com/r/adventofcode/comments/zfw6mw/2022_day_17_going_for_1_language_per_day_looking/">[2022 Day 1-7] Going for 1 language per day, looking good so far</a><br> by<a href="https://www.reddit.com/user/witcherofriviageralt/">u/witcherofriviageralt</a> in<a href="https://www.reddit.com/r/adventofcode/">adventofcode</a></blockquote><script async="" src="https://embed.reddit.com/widgets.js" charset="UTF-8"></script>

- **Some people do it in Excel.**

Or brainfuck. Or Matlab. Or bash. Or use other software tools to visualise solutions. You can do whatever really, the world is your oyster 🦪

- **You can brute force things.**

Why would you though, but who cares anyway?

- **Aaaand you can use AI.**

Just... please don't? Ok you can use it if you're learning and that's the most efficient way for you. I just don't see the point of solving the Advent with AI, like what are you trying to achieve, relax bro, it's all for you anyway?

## But why doing it at all? {#why}

Going into my 5th year, I can say for sure that AoC made me a better, more thoughtful, skilled and disciplined developer.

### 1. That’s just fun to code 🥳

If coding does NOT bring you joy, I feel for you. But then again, you wouldn't be reading this. So yes, it's fun FOR ME to solve puzzles, what are you gonna do about it? And, to be honest, as a FE developer, it is just _nice_ to do something that has nothing to do with CSS from time to time. Relaxing, even.

### 2. You are learning without LeetCode 💡

I'm not going to say I hate LeetCode. But I dread opening it for sure. Not so with AoC - you actually look forward to seeing what each day will bring. I've learnt and practised a lot of algorithms just by looking at someone else's code - believe me, it just hits different when you've just spent a few hours trying to come up with your own solution.

### 3. You can try new things 🪩

Like algorithms, languages, language features: you can set yourself a task, for example, to consciously use new ECMAScript features that you always forget at work. But the math is simple: if you are going to spend significant effort and time on something as pointless as AoC, do it wisely and find a way to get some real results out of it.

### 4. Community, personal brand 🫂

There’s a huge community on <a target="_blank" href='https://www.reddit.com/r/adventofcode/'>r/adventofcode</a> or Twitter or wherewher the cool kids are these days. You can meet new people, share and stream your solutions, or simply fill in your GH with non-work related green squares. 🟩

### 5. Discipline 😤

There's simply no better way to improve any skill than to work on it every day. Advent gently forces you to do this (if you are gullable enough...). Even when the tasks were terribly hard and there was no motivation to do A N Y T H I N G on like, 23rd of December, there was _not_ one year when I felt frustrated and wanted to stop programming after such a streak.

## No prizes at all? 🥺 {#leaderboard}

There's a global leaderboard based on how quickly you solve both of the day's challenges. The puzzles open at midnight EST (USA), so speaking from Europe 🇪🇺, getting to the top could be _difficult_, unless you want to wake up at night and solve the puzzle first thing in the morning. You wouldn't, would you? Nerd. (kidding!)

<figure class='centered'>
    <img src="/blog/advent/leaderboard.png"
         alt="2023 Leaderboard" style='width: 50%;margin-bottom: 1rem;box-shadow: 0 4px 16px rgb(0 0 0 / 41%);'>
    <figcaption>2023 leaderboard</figcaption>
</figure>

## I love CSS. Is there something for me? {#ui-advents}

If you fancy a challenge, but rather be doing some UI, there’re advents for you as well: <a target="_blank" href='https://www.adventofcss.com/'>Advent of CSS</a> and <a target="_blank" href='https://www.adventofjs.com/'>Advent of JS</a> are at your disposal. They are 100% UI centric, you get some JS logic without any in the first case, some styles and classes without JS in the second case, and you practically need to make the UI work.

<figure class='centered'>
    <img src="/blog/advent/css-js.gif"
         alt="A rundown of CSS-JS challenges" style='width: 50%;margin-bottom: 1rem;box-shadow: 0 4px 16px rgb(0 0 0 / 41%);'>
    <figcaption>A rundown of challenges from previous years</figcaption>
</figure>

## How is it going for the fifth time? {#me}

I started doing AoC in 2020, when I was just learning JS. As you can see, I might be getting dumber as time goes on? Honestly, I love it very much, although as you can see, there are many tasks I couldn't solve. Various reasons: gave up after a few hours, was travelling and couldn't be bothered to catch up later, or just couldn't get my head around it (mostly 3D stuff, which is NOT my cup of tea at all). TBH, there are definitely some tasks that I've skipped right away - like when I feel like it's just too much for the 19th of December :D

<figure class='centered'>
    <img src="/blog/advent/history.png"
         alt="My 2022 results" style='width: 80%;margin-bottom: 1rem;box-shadow: 0 4px 16px rgb(0 0 0 / 41%);'>
    <figcaption>My dashboards through the years</figcaption>
</figure>

Personal stats:

⭐ 2020 - 38
⭐ 2021 - 32
⭐ 2022 - 35
⭐ 2023 - 33

I would 100% encourage you to at least give it a try. But please code responsibly - December is for chilling out, spending time with yourself and whoever you want to hang out with, drinking and eating awesome things and have a smashing holiday time. If you can fit coding for free into that, you will have an even cooler month.

Happy coding!

</div>
