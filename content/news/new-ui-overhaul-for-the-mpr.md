---
title: "New UI Overhaul for the MPR"
date: 2022-03-06T15:05:38-06:00
authors: ["Hunter Wittenborn"]
keywords: ["MPR"]
---

After a month and a half of work, I'm very pleased to announce the new UI overhaul for the makedeb Package Repository is finally complete!

This change comes as part of [a bigger plan to make all of makedeb's websites feel more in line with each other](https://{{< github_url >}}/makedeb/mprweb/issues/23). The end goal is to make the end-user experience across makedeb's websites more cohesive, instead of it just being a jumbled mess of UI styles.

## Changes

Besides the glaring change of the UI styling, there were also some notable changes within such:

- The website was made entirely mobile-friendly! 🎉
- The homepage was redone, and now includes both newest and popular packages.
- Searches on package and account pages got redone.
- Cgit was dropped in favor of a custom UI for viewing Git files and commits.
- Syntax highlighting was added in places code is written, including in the new Git UI.

I also learned a lot about the MPR codebase in the process, which was and still is rooted in that of the [AUR](https://aur.archlinux.org/). Reworking the code as I completed the port has made me feel much more comfortable with making my own changes in the future, and is making me hopeful in making more changes in the future to better serve users of the makedeb ecosystem.

## Where we're going

Now that the MPR is ported to the new UI, all that's left to move is [the documentation site](https://{{< github_url >}}/makedeb/makedeb-docs/issues/13), after which all of makedeb's websites should have matching themes.

There's also still some work to be done in the MPR's UI as well, such as adding some missing buttons (such as RSS icons on the homepage) and figuring out if there's any tweaks I want made to the current UI. There's some things I have in mind in that regard, but those will be addressed and fixed with time.

## Closing remarks

You can view the new UI right now on the MPR at [https://mpr.{{< makedeb_url >}}](https://mpr.{{< makedeb_url >}}). If you have any thoughts or feedback about the new interface, feel free to send a message in [makedeb's support rooms](https://docs.makedeb.org/support/getting-support/) or on the [MPR issue tracker](https://{{< github_url >}}/makedeb/mprweb).
