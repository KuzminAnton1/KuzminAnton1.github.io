"use strict";var observerOne=new IntersectionObserver(function(e){e.forEach(function(e){e.isIntersecting&&e.target.classList.add("label-anime-one")})});observerOne.observe(document.querySelector("#bar-one"));var observerTwo=new IntersectionObserver(function(e){e.forEach(function(e){e.isIntersecting&&e.target.classList.add("label-anime-two")})});observerTwo.observe(document.querySelector("#bar-two"));var observerThree=new IntersectionObserver(function(e){e.forEach(function(e){e.isIntersecting&&e.target.classList.add("label-anime-three")})});observerThree.observe(document.querySelector("#bar-three"));