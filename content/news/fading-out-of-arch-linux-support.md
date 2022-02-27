---
title: "Fading Out of Arch Linux Support"
date: 2022-02-27T16:24:54-06:00
authors: ["Hunter Wittenborn"]
keywords: ["makedeb"]
---

After some discussion among makedeb's core team and TUs, we have come to the conclusion that we would like to drop support for makedeb on Arch Linux based distributions. Mentions of Arch Linux in makedeb's repositories and websites is already being done, and full support will be dropped on March 12, CDT.

This is due to some factors that make it harder to proceed with Debian integration if we continue with Arch support:

Dependencies in control files support numerous features that simply aren't supported on Arch, such as pipe characters (i.e. `Depends: golang-go | go-bin`) and restrictors of dependencies to specific architectures (i.e. `Depends: golang-go [amd64]`).

Currently, [makedeb uses the Python APT library to resolve dependencies](https://github.com/makedeb/makedeb/blob/alpha/src/makedeb/utils/missing_apt_dependencies.py), and while the ALPM library could be used for such on Arch Linux, it just doesn't feel like it's going to add much gain in the longer term.

Coming from that, there just hasn't seemed to be many benefits to using makedeb on an Arch Linux based system. Yes, you get the ability to create a Debian package using a format that's familiar to those that use Arch Linux, but you can continue to do so easily without Arch Linux via use of makedeb's [Docker images](#transition-path-for-arch-users).

The dropping of Arch Linux support has been something that's been on my mind for quite a while. I don't use the distribution which also makes it a bit harder to support, and I ultimately just haven't seen many benefits to using makedeb on Arch recently.

## Transition path for Arch users

The current transition path for users who do use makedeb on Arch Linux is to use makedeb's [official Docker images](https://docs.makedeb.org/home/installing/docker/). These provide access to makedeb via use of Docker, and also provide native support for building via a Debian or Ubuntu based environment, which also makes for better compatibility in the built packages (e.g. with shared libaries). Note that the `:archlinux-latest` image variant will be removed after this transition is complete.

## Feedback

If you have any objection to this change, please file an issue in makedeb's [issue tracker on GitHub](https://github.com/makedeb/makedeb/issues).
