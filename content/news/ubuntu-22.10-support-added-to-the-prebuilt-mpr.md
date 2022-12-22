---
title: "Ubuntu 22.10 Support Added to the Prebuilt-MPR"
date: 2022-06-28T12:53:03-05:00
authors: ["Hunter Wittenborn"]
keywords: []
---

Ubuntu 22.10 support has been added to the Prebuilt-MPR, increasing the amount of users who can have access to the Prebuilt-MPR's quick and easy-to-setup APT repository.

To set up the Prebuilt-MPR on your system, follow the [Getting Started](https://docs.{{< makedeb_url >}}/prebuilt-mpr/getting-started) guide.

If you already have the Prebuilt-MPR on your system and are upgrading from Ubuntu 22.04 to 22.10, just replace the `jammy` keyword with `kinetic` in `/etc/apt/sources.list.d/prebuilt-mpr.list` on your system. Alternatively, you may also run the following:

```sh
sudo sed -i 's|focal|jammy|' /etc/apt/sources.list.d/prebuilt-mpr.list
sudo apt update
```

Note that not all packages are currently available in the Prebuilt-MPR for Ubuntu 22.10, but are being added in the coming days.
