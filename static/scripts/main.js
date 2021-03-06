(function(){

    var hasLoaded = false;
    var grid = document.querySelector('.post-previews-inner-wrapper');
    var isotope;

    if (!grid) {
        return;
    }

    window.onload = function(){

        isotope = new Isotope( grid, {
          itemSelector: '.post-preview',
          columnWidth: 1,
          layoutMode: 'masonry'
        });
    }

}());
