---
title: "Information About the Outage on June 23"
date: 2022-06-23T17:46:04-05:00
authors: ["Hunter Wittenborn"]
keywords: []
draft: false
---

The MPR had an outage earlier this morning, lasting until approximately 6 PM CDT. The outage is believed to have started around 3 AM CDT during nightly backups, which is the current guess at what started triggering everything to stop working.

## The cause of the outage
The MPR recently ran out of server space, which is believed to have started causing errors when MPR backend services went down, as they didn't have the needed resources to come back up. The server instance has since been upgraded to a bigger size to accomodate for this change.

This issue wasn't too hard to spot and resolve, but team resource were limited today, and with no one able to get to the MPR server the needed debugging to find the issue didn't take place until now.

## What can be changed
Server resource monitoring can probably be implemented somehow, and will likely be implemented shortly. [This has happened once before](information-about-the-outage-on-february-24th), and it's showing that proper automated notifying of these issues needs to be implemented so that the issue don't have a chance to happen at all.

## Wrapping up
As the lead of the makedeb team, I'd like to apologize for this outage and any issues it may have caused either for yourself or users of your software. These issues are never pleasant to deal with, but know that these issues are always proactively being acknowledged to help further prevent them in the future.
