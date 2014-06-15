(function(){

    console.log("I'm running!");

    var hasLoaded = false;
    var grid = document.querySelector('.post-preview-inner-wrapper');
    var isotope;

    window.onload = function(){

        isotope = new Isotope( grid, {
          itemSelector: '.post-preview',
          columnWidth: 1,
          layoutMode: 'masonry'
        });
    }

}());
