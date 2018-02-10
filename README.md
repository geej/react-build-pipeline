# react-build-pipeline
Because the biggest barrier to me coding for fun is setting up Webpack. 'But why don't you use create-react-app?' ¯\\_(ツ)_/¯

## Goals
This repository aims to be a one-stop-build-pipeline shop for a simple React app that adheres to a few conventions.

## What are the conventions?
Well, the conventions are pretty reasonable things, I think. For example:

1. All of your source code lives in /src
2. All of your static assets live in /public
3. The entry point for your app is App.js

## How do I use it.
1. ```npm install --save-dev react-build-pipeline``` (not yet released on npm)
2. Use the utils ```rbp-lint``` ```rbp-bundle``` ```rbp-server``` to lint your code, bundle your code, and run a dev server.
