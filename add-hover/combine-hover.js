//Get all the elements that have card-link class
let cards = document.getElementsByClassName('card-link')

//loop through those elements
for (item of cards) {
    //define a function that fires when the mouseover event happens to this element
    item.onmouseover = function () {
        let button = this.getElementsByClassName('hover-special') // grab the anchor tag
        //add the hover style
        $(button).addClass("trigger-hover-special"); //the $() is a jquery function
    }

    //remove hover style on mouseout
    item.onmouseout = function () {
        let button = this.getElementsByClassName('hover-special')
        $(button).removeClass("trigger-hover-special");
    }

    //trigger anchor tag click when parent is clicked
    item.onclick = function () {
        this.getElementsByClassName('hover-special')[0].click()
    }
}





