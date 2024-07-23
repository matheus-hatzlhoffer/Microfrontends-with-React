# Micro frontend architecture

In this project I will try to practice the micro-frontend capabilities and check what is possible and the cost. The ideia is to document the process, try new ideias and do it understanding the concpets and how it works.

[] Create a micro frontend application
[] Connect multiple frontends
[] Deploy it
[] Create a new product with different technology
[] Check how authentication and autorization would work
[] Make it plug and play kind of application
[] Create a customization type

## Concepts

- **Build Time Integration** - Before the shell gets loaded in the browser, it gets access to micro frontends sources
- **Run Time Integration** - After the shell gets loaded in the browser, it gets acess to micro frontend sources
- **Server Integration** - Server side rendering of the micro frontend. The services are loaded in the page before the server sends the js

## First Approach

The first approach is a run time integration using webpack module federation as is the most common stack to this architecture.
