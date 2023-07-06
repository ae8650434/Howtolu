window.addEventListener('load', function () {
    var mediaQuery = window.matchMedia('(min-width: 394px) and (hover: hover)');

    function handleScroll() {
        var scrollDistance = 250;
        var myDiv = document.getElementById('categories');

        if (window.pageYOffset > scrollDistance) {
            myDiv.style.display = 'none';
        } else {
            myDiv.style.display = 'block';
        }
    }

    function checkMediaQuery() {
        if (mediaQuery.matches) {
            window.addEventListener('scroll', handleScroll);
        } else {
            window.removeEventListener('scroll', handleScroll);
        }
    }

    checkMediaQuery();

    window.addEventListener('resize', checkMediaQuery);
});

var x = 2
function apple() {
    var y = document.getElementById('xx')
    if (x % 2 == 0) {
        y.style.display = "block";
        console.log(x)
    } else {
        y.style.display = "none";
    }
    x++;
    
}