---
title: "Introducing the New makedeb Homepage"
date: 2022-02-14T19:02:25-06:00
author: ["Hunter Wittenborn", "hwittenborn.png"]
keywords: ["makedeb"]
draft: false
---

Welcome! This website, [makedeb.org](/), is the new homepage for the makedeb project, and is only the beginning of a new series of changes to the web-faced world of the makedeb ecosystem.

There's still a lot to be done, but this article goes over all of that, as well as everything that's going to be changing in the near future for end users of the MPR and other makedeb projects.

## History - What we had before
Before now, the homepage for the makedeb project was what is now the [documentation website](https://docs.{{< makedeb_url >}}). In all reality, the website worked quite fine as a landing page for the makedeb project, but it had a few issues.

### Limitations with styling
For one thing, the website (which is currently powered by [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)) didn't allow for the customization I desired. As makedeb's websites became settled for a while, I started wanting all of makedeb's websites to have a more uniform style in how everything looked, and using that system simply didn't allow for it.

It was a bit after that that I would start concreting out the idea of the documentation site (which again, was the homepage at the time) and the [MPR website](https://docs.{{< makedeb_url >}}) to have some sort of similar look.

### First impressions
This leads into point two - using a documentation website as the first-impression page just isn't the best option out there.

Having a homepage allows us to talk about what makes makedeb so great, and **only focus on that**. The homepage also allows users to get a quick breakdown on what makedeb does and if it'll work for them, all without having to get into documentation or anything of the sort.

## Where we're going
As of now, the homepage for the makedeb project is pretty much complete. There's probably some UI bugs floating around on here somewhere, but those will get fixed as they present themselves.

With the basic UI styling of the makedeb homepage complete, both the MPR and documentation websites will now need to be ported to the new styling.

The end goal is that users will feel like they're on the same website, whether they're on the homepage, vising the MPR, or checking out the documentation. It should help with making things feel quite a bit more simple for end users (and hopefully get rid of that pesky annoyance in my head knowing that everything mismatches so chaotically).

And that's not it either! There's also quite a bit of other things within the makedeb ecosystem that are yet to be finished but are planned for the close future:

- Set up bridges to Discord and IRC for the Matrix rooms
- Continue development of the [Matrix bot](https://{{< github_url >}}/makedeb/makedeb-matrix)
- Set up PrebuiltMPR integration for the MPR [(#6)](https://{{< github_url >}}/makedeb/mprweb/issues/6)
- Set up a status page to monitor makedeb's websites [(#17)](https://{{< github_url >}}/makedeb/mprweb/issues/17)

There's plenty to keep everyone that's working on the makedeb project busy, and I see plenty of advancements being made as we progress in the future.

Overall, I'm looking forward to the future that makedeb holds. Special kudos to all the users who continue to use makedeb day after day - you guys are the ones who help me to keep going at it and stay motivated!

Thanks for reading! Look forward to more posts popping up in the future as project development continues to unfold ;)
