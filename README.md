# Running the Server

In our second weekend challenge, we started to interact with the server using AJAX calls. A whole new world opened up!

---

## Weekend Challenge 02

Refer to the [jQuery AJAX lecture notes](https://github.com/kdszafranski/prime-ajax-intro) for installing and running the server.

Welcome to your second weekend challenge! We're going to build a common web user interface app called a Carousel.

### Setup

Download or fork [this repo](https://github.com/kdszafranski/sigma_weekend2_start/).

Open the repo in terminal and run `npm install`.

### Challenge Overview

I created a new JSON data file and inside it you will find an array of objects. Each object, is each one of you!

#### AJAX Request

Your first task is to make an AJAX call from the client side `client.js` using the `.ajax` method. The AJAX call will be a `GET` request that accesses the `/data` URL. Upon success, it should bring the data back down.

#### On the DOM

On the DOM should be:

- One person's information
- A series of 22 (or the number of people in the data array) index points with the first person's index highlighted or called out in style differently than the others.
- A 'Next' button and a 'Previous' button
  - Clicking on the Next button should navigate to the next person, clicking on the Previous button should navigate to the previous person. The highlighted index point should update also as you click through to other people.

#### Person Display

When a person is displayed, show their name, their GitHub link, and their piece of shoutout feedback. Only one person should be showcased at any given time.

### Working Example

Here is a similar example from Zeta so you can see the functionality. It's really ugly, however. The code is also minified (no cheating!): [polar-ravine-37299.herokuapp.com](https://polar-ravine-37299.herokuapp.com/)

## Hard Mode

Include a fade out and fade in animation in-between transitioning people.

## Pro Mode

Include a timer that moves to the next person if the user is not clicking on next or prev. If the user clicks on next or prev, the timer should be reset. The timer should transition between people every 10 seconds.
