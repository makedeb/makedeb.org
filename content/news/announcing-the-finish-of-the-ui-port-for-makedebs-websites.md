---
title: "Announcing the Finish of the UI Port for makedeb's Websites"
date: 2022-04-06T21:58:50-05:00
authors: ["Hunter Wittenborn"]
keywords: []
---

After two months of hard word, all of makedeb's websites are now using the same styling! This is the result of over two months of work, but has resulted in a very polished experience for end users, and allows the entire ecosystem of makedeb to feel more cohesive than it ever has before.

## Where we started
makedeb's websites started out as a bit of a jumbled mess. We didn't have the four sections that you can now see in the footer (the homepage, documentation, MPR, and news page), but it still felt clunkly nonetheless.

### The MPR
The [makedeb Package Repository](https://mpr.{{< makedeb_url >}}) (MPR) started out with way different styling than what you see now.

If you couldn't tell, the MPR was originally based on the source code for the [Arch User Repository](https://aur.archlinux.org/) (AUR). Likewise, the MPR also originally contained the same styling that you see on the AUR (with some very cleverly-placed orange coloring instead of blue seen on the AUR).

This was the first website that makedeb ever had, with it being the first web project in the makedeb ecosystem that was made after makedeb itself was created.

### The makedeb Docs
The [documentation for the makedeb project](https://docs.{{< makedeb_url >}}) was the next website that was created. Like the MPR, this website also started out with it's own unique styling that wasn't really tied to anything in particular. At it's original point, it was using [MkDocs](https://www.mkdocs.org/) with the [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) theme.

That served pretty well for the time being, but as time went on I started wanting makedeb's websites to have a more uniformed look. I also wanted makedeb to start having it's own identity with its websites, which just wasn't being done with the current system.

### The makedeb Homepage
This brings us to the [makedeb Homepage](/), the website you're on right now! This website served as not only the frontface for the makedeb project, but also introduced a little section for [news](/news), allowing me to bring the makedeb community updates like these in a more streamlined manner.

This is the website that layed the foundation for what makedeb's web UIs would look like, with it being the first one to get the UI styling. This was also the first one that was made by scratch too, which gave it a nice opportunity to do such.

Following the completion of the homepage, the MPR was then ported about a month later, followed by the documentation about a month after. After that everything was finished up, and I finally got to rest in the joy of a long task finally being completed.

## Wrapping up
The road here was a long one, but it feels well worth it considering the output that's been produced.

Who knows what might happen next! Maybe there'll be more websites? Maybe there'll be more services to add to the makedeb ecosystem in other areas (there are, keep your eyes open for them).

And of course, at the least there's always those bugs that need to be squashed. All of this is stuff to look forward to as makedeb and its surrounding products continue to evolve, get better, and continue serving the people that use them day after day.
