/************************************************************************************************************/
/*****************************************CUSTOMIZATION SECTION**********************************************/
/************************************************************************************************************/
//Get the navigation links
var nav_links = document.querySelectorAll('nav > ul > li > a');
//Get the link's corresponding sections
var nav_sections = document.querySelectorAll('h2');
/************************************************************************************************************/
/*****************************************CUSTOMIZATION SECTION**********************************************/
/************************************************************************************************************/

//This constant adds extra Y offset to the scroll so that the navigation link is highlighted when clicked. 
//Without this offset, if the menu is clicked from the navigation bar, it does not highlight until page is scrolled a bit
//further down.
const SCROLL_EXTRA_OFFSET = 10;

//Everytime there's a scroll action, check and update if the next section has been reached
document.addEventListener('scroll', () => {

    //General case to check for the position
    for(var i = 0; i <= nav_sections.length-2; i++)
    {       
        if(window.pageYOffset + SCROLL_EXTRA_OFFSET  >= nav_sections[i].getBoundingClientRect().y + window.pageYOffset &&
            window.pageYOffset + SCROLL_EXTRA_OFFSET < nav_sections[i+1].getBoundingClientRect().y + window.pageYOffset)
        {
            highlightNavItem(i);
        }        
    }
    //Case for the last element of the navigation item's list
    if(i == nav_sections.length -1)
    {
        if(window.pageYOffset + SCROLL_EXTRA_OFFSET  >= nav_sections[i].getBoundingClientRect().y + window.pageYOffset)
        {
             highlightNavItem(i);
        }
    }
});

/************************************************************************************************************/
/*****************************************CUSTOMIZATION SECTION**********************************************/
/************************************************************************************************************/
//Function highlights the element where scroll bar is currently at
function highlightNavItem(index)
{
    nav_links[index].style.color = "red";

    //Remove highlight from other elements
    for(var i=0; i<=nav_links.length-1; i++)
    {
        if(i != index)
        {
            nav_links[i].style.color = "black";
        }
    }
}
/************************************************************************************************************/
/*****************************************CUSTOMIZATION SECTION**********************************************/
/************************************************************************************************************/

