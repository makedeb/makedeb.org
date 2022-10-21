---
title: "Privacy Policy"
---

This document describes how the information that makedeb's services and applications obtained from your are collected and used.

Our goal is to **always** protect your privacy whenever possible, but sometimes certain data is collected to enhance and ensure the quality of the services we provide.

All services that collect data from you have a section below describing the data they collect, and for what purposes they're doing so.

## Internet services
Any action that connects to one of our servers is covered in this section. These services include, but are not limited to:
- The [makedeb Homepage](https://{{< makedeb_url >}})
- The [makedeb Package Repository](https://mpr.{{< makedeb_url >}})
- The [makedeb Docs](https://docs.{{< makedeb_url >}})

These services are ran via [Hetzner](https://www.hetzner.com), and are thus subject to their [data privacy terms](https://docs.hetzner.com/general/general-terms-and-conditions/data-privacy-faq), in addition to the product-specific terms specified in the sections below.

## makedeb Package Repository
The makedeb Package Repository (MPR) collects the following information that's given directly by you when making an account:

- Name
- Email Address
- Homepage

The full list of data that you directly provide can be viewed via your account page. Any data present on the page is the data that the MPR has collected directly from you.

The MPR also collects some information indirectly from you:

- Browser
- Browser Version
- Operating System
- IP Address

This information is collected in order to enhance the service quality of the MPR. Currently, this information is collected in order to report errors that occur in the service, and is collected via [Sentry](https://sentry.io).

All information is stored on a Sentry instance in control via makedeb's team on a Hetzner server instance, and is not stored on the publicly available Sentry cloud instance.

Sentry telemetry collection can be control for the web and HTTP Git interfaces by setting the `DNT` header in the requests your browser makes. This can be enabled in your browser by enabling the "Do Not Track" feature (see the support articles for [Google Chrome](https://support.google.com/chrome/answer/2790761) and [Firefox](https://support.mozilla.org/en-US/kb/how-do-i-turn-do-not-track-feature)). Note that Sentry telemetry collection can not currently be disabled in the SSH Git interface.