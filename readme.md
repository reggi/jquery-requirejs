# jQuery & RequireJS

I used the following command to download the appropriate libraries.

    bower install jquery requirejs git://github.com/carhartl/jquery-cookie.git -S
    
To install all the components from a git clone just issue `bower install` from the project directory.

---

## Summary

I'm trying to do two things:

1. Keep jQuery out of the local variable scope, that means when you enter `$` or `jQuery` into a browser-side console the values for those variables come back as undefined.
2. Incorperate a jQuery-plugin, in this example I've been using jquery-cookie.