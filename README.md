# sierpinski-chaos-game

[![Greenkeeper badge](https://badges.greenkeeper.io/hugojosefson/sierpinski-chaos-game.svg)](https://greenkeeper.io/)

Implementation of the [Chaos game](https://en.wikipedia.org/wiki/Chaos_game) way of drawing a [Sierpinski triangle](https://en.wikipedia.org/wiki/Sierpinski_triangle).

## How to run

    npm install
    npm start

## What it does

On startup or window resize, it draws a Sierpinski triangle on the entire window.

When the mouse pointer is moved within the window, it uses the mouse pointer's position instead of one of the precalculated corners.