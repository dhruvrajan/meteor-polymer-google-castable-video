Package.describe({
  name: 'dhruv:polymer-google-castable-video',
  version: '0.0.1',
  summary: 'Adds the google-castable-video (video viewer with google cast support) Web Component to Meteor',
  git: 'https://github.com/dhruvrajan/meteor-polymer-google-castable-video.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('webapp', 'server');
  api.use(['templating'], 'client');
  api.use(['underscore'], ['client', 'server']);
  api.versionsFrom('0.9.0');
  api.addFiles('polymer-google-castable-video.js', 'server');
});

Npm.depends({
  bower: '1.3.12'
});