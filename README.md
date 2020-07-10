# TrueLayer-designtest

![mockup](https://ibb.co/B6JQPF4)


### Libraries used
- Bootstrap 4.1 — because its fast and the site already uses it
- GSAP — to add some animation. Not really necessary tbh
- jQuery

# Process
I asked myself "what is the value of this page? what can make it useful for my user?".
I imagined my stakeholders: investors, people who already knows TrueLayer and people who don't know TrueLayer.

The porpouse of this page is to offer some kind of social proof. People want to know TrueLayer is trusted by big company and that a lot of newspaper say nice things about us.

## Page structure
We want to direction our user attention to reduce the choice overwhelming: we suggest the user first a big hero card. That is the article we are more proud of. If the user doesn't click it, down can he can find 3 other article we are proud of. 
If he is still scrolling, we show him some other articles. Although those articles are clickable, it's kinda unlikely he will click on one of them. The porouse of all article is not to make user click on an article, it's to show him there are *a lot*. And if he is not satisfied yet, he can find other more over the button.

A final CTA is essential — let's put those lead into the funnel.

### Flexibility
In this page the card flexibility its really important because you can't predict how many information you'll get. I tried to balance the right contraints with the right flexibility (in cards + in the layout)

### Will TrueLayer update this page frequently?
If the page is frequently updated it need to be easy to upload content.
A CMS will be nice.
Finding logo, set them up in size etc. is a tedious work — so only the first 4 article need it.

## Consideration
This page need to be component based soooo-much. Basicly my work was to cread the card component and set up bootstrap layout. I didn't do it because i'm not so confident in React and didn't want to slow down my process with some silly errors.

I didn't use any CSS Preprocessor (usually i use sass) because I didn't find it that necessary and wanted to understand better the BEM structure (it's my first approach to BEM)

### Other version
There was another version of the layout, but other people really advised me to stick with the classic version because card appear not clickable + it was really *tamarra* (sorry can't translate this italian word it means something like lame but has much more meaning)

![mockup version tamarro](https://ibb.co/xFJ3YXs)


## Figma Prototype
https://www.figma.com/file/cXhefOFH8KSLzlxPHxgvbK/TrueLayer?node-id=30%3A0
