---
title: "Information About the Outage on February 24th"
date: 2022-02-24T15:59:30-06:00
authors: ["Hunter Wittenborn"]
keywords: ["MPR"]
---

On February 24, 2022, the [makedeb Package Repository](https://mpr.{{< makedeb_url >}}) experienced an outage that brought the platform offline for about 12 hours. The backend server that was serving the MPR interface experienced some storage issues, and due to some factors on my part the issue wasn't able to be fixed until around 4:00 PM CDT.

The MPR is already being used by a wide variety of people and groups to publish their packages, with some being the primary source for their Debian packages. As the lead of the makedeb project, I'd like to apologize for the disturbance this may have caused for users of your software, as well as for users of the MPR as a whole.

Incidents like these are never good to go through for all parties involved, and while I can't go back to avoid the damage that's been done, I'd like to go through what caused the outage, and the remediations that are being done to help avoid such an incident in the future.

## The cause of the outage

The start of the outage is expected to have been around 3:00 AM CDT. At that time, scheduled nightly backups began to run, starting and stopping various services on the server as the data for each got copied to the backup location.

To further understand how this caused some issues, we need to look at some issues with Docker images on my server.

### Docker image caches

Being a teenager, my budget doesn't end up being very flexible. Likewise, everything that I use gets put on to a single server, including the MPR. Various other components are also hosted on the server, such as some basic static websites, as well as Drone for CI, ProGet for APT repositories (and Docker images), Mailcow for email, as well as some things that I run as part of my own homelab setup.

The main issue here is with Drone CI. Everything that goes through it runs as a Docker container, it being the highlighting feature of the service (at least for me anyway). This was highly liked by me, as it ensures builds are always isolated from anything running on my server.

Since everything on Drone has to run through a container though, cached images can start to build up *quick*.

Furthermore, some Docker images are also built through Drone CI through the use of [Docker in Docker](https://www.docker.com/blog/docker-can-now-run-within-docker/). Every time an image is built, more and more images get stored in the Docker cache. Some images can end up being rebuilt multiple times a day too, such as when changes are frequently pushed that end up requiring rebuilds.

No automatic pruner was in effect for the Docker image cache at the time, so these image caches just kept going up and up and up. The end result? Eventually the storage on my server capped out, triggering the start of the issues.

### The beginning of the outage

Last night when the backups were being run, one of those times when the server storage peaked out was hit. This didn't appear to show any notable issues towards people viewing things coming from the server, all until everything started to get restarted.

Presumably while restarting services, everything that was getting started couldn't obtain the resources they needed, key being access to storage. When attempting to bring up the MPR manually, this showed the services simply never finishing startup, thus causing the outage seen by end users.

Early this morning I noticed in makedeb's support rooms that users were complaining about the outage. I hopped on to my server quickly after, and noticed the extremely-spiked storage usage. I knew what the problem was, as the issue had happened once before, though with a much quicker fix that time. This time I was noticing the issue right as I was about to head off for my daytime tasks though, and I had to leave the server in its current state, with no other options being very feasible.

After I got home at about 3:20 PM, I got to my computer, issued the fix, and brought the MPR back up soon after.

## What's being done

There's already several changes planned to address this issue and prevent it from happening again. A [Docker cache pruner](https://github.com/hwittenborn/infrastructure/commit/0e5f7b6e12febde818c121fe6209d9bd31309356) has already been implemented so that storage numbers don't suddenly rise out of nowhere. A Statuspage for everything running on the server is also in the works, which should help a fair bit with reportages of outages when they do inevitably end up happening.

I'd also like to move to Hetzner for server hosting sometime in the short future. They have quite affordable rates that would allow me to put the MPR on its own machine as well, which would also make it easier to give trusted people access to the machine itself, allowing others to issue fixes at times when I'm not able to.

## Conclusion

My goal is to create a product that's able to be used in any environment, regardless of the size of groups of the people using it. While this outage was not ideal, I (and likely others too) have learned how to better cope and handle with it in order to continue making a better product for users in the future.
