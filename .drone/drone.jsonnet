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
        image: "proget.hunterwittenborn.com/docker/makedeb/makedeb:ubuntu-focal",
        volumes: [{name: "deploy-dir", path: "/var/www/makedeb.org"}],
        commands: [
            "sudo apt-get update",
            "sudo apt-get install git -y",
            "git clone \"https://$${mpr_url}/go-bin\"",
            "git clone \"https://$${mpr_url}/hugo\"",
            "cd go-bin/; makedeb -si; cd ../",
            "cd hugo/; makedeb -di; cd ../",
            "hugo -d /var/www/makedeb.org"
        ]
    }]
};

[buildAndPublish()]

// vim: set syntax=javascript ts=4 sw=4 expandtab:
