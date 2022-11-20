---
title: "Security Incident on the MPR"
date: 2022-11-19T23:25:07-06:00
authors: ["Hunter Wittenborn"]
keywords: []
---

It's been discovered that a database leak has occurred on the MPR during some period over the past two days. I have enforced a mandatory password reset for all users before they can log in again, and all API keys have been revoked. In addition, all package maintainers will be required to re-add their SSH public key to their account before they can continue publishing packages.

## What got exposed
Everything that was in the MPR database has been potentially leaked. This data includes:

- Usernames
- Passwords (though only the salted hash was stored - a mandatory password has been enforced as a precautionary measure as stated above)
- Emails (including backup emails)
- Real names
- Language preferences
- Timezones
- Homepages
- IRC nicknames
- Registered PGP keys
- Time of the last HTTP and SSH Login
- IP addresses of the last HTTP and SSH Login
- Date of registration
- API Keys (these have been revoked as stated above)
- Timestamps that any package comments were edited
- IPs for any requests made to API endpoints


## What happened
As part of some local development on the [MPR rewrite](https://{{< github_url >}}/makedeb/mpr.makedeb.org), I was taking some database dumps from the production instance to feed into a local instance to make sure everything was working correctly.

After looking at some things (of which some details will remain private as to not aid any attackers finding anything), it was found that someone had gained control of the local database copy.

Doing some further digging revealed that the exposed ports on my machine had the database port exposed publicly. With me erroneously thinking it was only exposed locally (as well as me often recreating the database in fresh Docker containers, such as when something goes janky during development), the database username and password were both set to easily guessable strings, and the database was thus exposed for anyone to get ahold of.

## Going forward
I've since realized the potential danger of using production databases in local development, and will ensure that both myself and others will avoid such behavior in the future. Necessary tooling will also be put in place so that database dumps won't be needed in the first place, eliminating the temptation to even use them.

These kind of incidents are never hoped upon by the makedeb developers and end users alike, but going forward, lessons have been learned that will help to keep this kind of event from happening again.