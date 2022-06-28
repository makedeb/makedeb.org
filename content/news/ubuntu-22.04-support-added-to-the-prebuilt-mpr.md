---
title: "Ubuntu 22.04 Support Added to the Prebuilt-MPR"
date: 2022-06-28T12:53:03-05:00
authors: ["Hunter Wittenborn"]
keywords: []
---

Ubuntu 22.04 support has been added to the Prebuilt-MPR. This enables users to use the Prebuilt-MPR without needing to stay on Ubuntu 20.04, which was previously needed by certain packages.

To set up the Prebuilt-MPR on your system, follow the [Getting Started](https://docs.{{< makedeb_url >}}/prebuilt-mpr/getting-started) guide.

If you already have the Prebuilt-MPR on your system and are upgrading from Ubuntu 20.04 to 22.04, just replace the `focal` keyword with `jammy` in `/etc/apt/sources.list.d/prebuilt-mpr.list` on your system. Alternatively, you may also run the following:

```sh
sudo sed -i 's|focal|jammy|' /etc/apt/sources.list.d/prebuilt-mpr.list
sudo apt update
```
