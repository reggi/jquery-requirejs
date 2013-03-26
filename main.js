require.config({
    paths: {
        'jquery': './components/jquery/jquery',
        'jquery-cookie': './components/jquery-cookie/jquery.cookie'
    },
    map: {
        'jquery-cookie': { 'jquery': 'nc-jquery' }
    }
});

define('nc-jquery', ['jquery'], function (jq) {
    return jq.noConflict( true );
});

require(['nc-jquery', 'jquery-cookie'], function(myNonGlobaljQuery) {
    console.log(myNonGlobaljQuery().jquery);
    console.log(myNonGlobaljQuery.cookie("hello"));
});