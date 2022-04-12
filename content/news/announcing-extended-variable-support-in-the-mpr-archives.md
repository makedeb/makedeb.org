---
title: "Announcing Extended Variable Support in the MPR Archives"
date: 2022-04-12T17:22:20-05:00
authors: ["Hunter Wittenborn"]
keywords: []
---

Starting today, extended variables for things such as dependencies are now supported in the [MPR Archives](https://mpr.{{< makedeb_url >}}/mpr-archives).

The new archive can be accessed at [`/packages-meta-ext-v2.json.gz`](https://mpr.{{< makedeb_url >}}). This new archive also **deprecates** the old `/packages-meta-ext-v1.json.gz` archives, and users of the MPR archives should move over to the new archives as possible (the old version will be updated for the indefinitely future, though it will be dropped eventually).

If you have any questions about the changes made here or anything in general, feel free to send a message in the [MPR support room](https://docs.{{< makedeb_url >}}/support/obtaining-support).
