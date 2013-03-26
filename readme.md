# jQuery & RequireJS

I used the following command to download the appropriate libraries.

    bower install jquery requirejs git://github.com/carhartl/jquery-cookie.git -S
    
To install all the components from a git clone just issue `bower install` from the project directory.

---

## Summary

I posted a [question](http://stackoverflow.com/questions/15574500/stop-global-jquery-with-plugin-in-requirejs/15577738?noredirect=1#comment22160548_15577738) on stack overflow regarding jQuery and RequireJS.

I'm trying to do two things:

1. Keep jQuery out of the local variable scope, that means when you enter `$` or `jQuery` into a browser-side console the values for those variables come back as undefined.
2. Incorperate a jQuery-plugin, in this example I've been using jquery-cookie.

