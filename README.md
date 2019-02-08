# to-do-list-SSR-Static

## SSR

This example demostrate how to do SSR (or more precisely USR) using Nextjs plus Styled Component and Unstated.

This is a pure JS example, no HTML and CSS needed in source file.

No CSS file send to client side. (It is not recommended to put everything in html file, but I did it just for the sake of example and this example shows that if you write base 64 ttf font in js, the size of both html and js increase so think twice before you write base 64 font in js).

visit live demo: https://todo-wppbeebyxs.now.sh/

Tech stack:  
UI rendering: Next
CSS: Styled Component (CSS in JS)
Bootstrap: Styled Component Bootstrap (this is a bad library, dont use it)
State Management: Unstated
Server: Zeit Now (Serverless)

Looking for CSR example?  
https://github.com/tylim88/to-do-list-CSR

## Static File

Because this example has no dynamic data, you can also generate equivalent static files by using `npm run export` command.

In the generated `index.html`, Change all `/_next` keywords to `_next` and you are good to go.

visit live demo: https://pensive-knuth-aacf4f.netlify.com/
