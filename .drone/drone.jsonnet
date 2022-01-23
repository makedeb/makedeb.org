local buildAndPublish() = {
    name: "build-and-publish",
    kind: "pipeline",
    type: "docker",
    volumes: [{name: "deploy-dir", host: {path: "/var/www/makedeb.org"}}],
    trigger: {
        branch: ["main"],
        repo: ["makedeb/makedeb.org"]
    },
    steps: [{
        name: "build-and-publish",
        image: "ubuntu:20.04",
        volumes: [{name: "deploy-dir", path: "/var/www/makedeb.org"}],
        commands: [
            "apt-get update",
            "apt-get install hugo -y",
            "hugo -d /var/www/makedeb.org"
        ]
    }]
};

[buildAndPublish()]

// vim: set syntax=javascript ts=4 sw=4 expandtab:
