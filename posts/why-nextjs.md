---
layout: post
title: "Why your next website should be built with Next.js"
author: Matthew Ewan-Laws
created: 2020-08-04
isPublished: true
---

Let's start with a (short) history lesson.

In the early days of the Web, life was simple, the websites were programmed by the developer, who uploaded it to a server, which is served from the ... server, then finally presented to the user on their Web browser as-is.

But then we realised the power that could be tapped into if we allowed change to happen, so we made the server capable of modifying the content, by accessing databases, rest APIs, and running server-side code. This allows for things like Wikipedia, WordPress, Facebook, etc.

Unfortunately this transition from static to dynamic websites has a few drawbacks:

- **Speed**, your customers are an fickle and impatient lot, if they're sitting there for over one second looking at a blank page, chances are you've lost them forever to their social media platform of choice. Website load times have been proven to have a large imapact on bounce rate.
- **Cost**, whereas once a servers job was to simply send a few files to the user, they now perform a large number of duties, including 
- **Security**, more complexity, more "moving parts" means more opportunities for the nefarious to potentially exploit your website and gain access to stuff they really shouldn't.
- **Scalability**, as the number of users to a website grows, its toll on resources grows quickly too, we need load balancing, caching, better hardware. These each introduce more complexity, more areas to maintain, more time spent by your team, more cost to the business.

With those pain points listed, you've most likely worked out that I'll next be showing you how [Next.js](https://nextjs.org/) goes towards fixing those issues.

## Static site generation (SSR)

Fast forward until quite recently, a new trend has appeared: *static site generation*. This allows us to take a specification of a website with its contents, and build a good old fashioned static website. Much like the old days, this can now be sent to the user using a "dumb" server. These can be in the form of a CDN (content delivery network), that can serve static sites "blazingly fast".

If we want ourselves a blog, or a simple marketing website this is perfect, change is infrequent and the side isn't rebuilt often, so if that's all you need, great, you can stop here, that's all you need.

However with more complex web applications, with more updates, it would be terribly inconvenient to have to rebuild after every content change, this can become computationally expensive and counter productive. Imagine a complete rebuild of Facebook every time someone hit a like button on a post.

Before version 9.3, Next.js took a hybrid approach and used something called Server-side Rendering, what this means is on the pages that were heavily dynamic, the data is fetched on the server and the page is built there before sending it to the client, but this approach has much of the same issues I listed above.

## Enter static optimisation

With the release of [v9.3](https://nextjs.org/blog/next-9-3) and then [v9.5](https://nextjs.org/blog/next-9-5) we saw some fantastic static optimisation features added. No longer are static pages limited to creation at build time, e.g. when you hit the "Publish Post" button on WordPress, but now at runtime, so it's possible to have all the benefits of static generation with highly dynamic data, like comments on a post, recent tweets, or the weather forecast.

In conclusion, the features Next.js provides give you the potential to build scalable, performant, secure websites with lower costs and maintainence.

Worried you can't use your favourite CMS? For the most part you needn't, any CMS that runs in headless mode with work with Next.js, this includes WordPress and Drupal.
