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


//It can be replaced with nav_sections[i].getBoundingClientRect().y with the corrected scroll adjusted with (window.pageYOffset)
var nav_sections_position = [];

//Add the scroll offset to correct the position of the elements for future calculations
for(var i= 0; i <= nav_sections.length-1; i++)
    nav_sections_position.push(nav_sections[i].getBoundingClientRect().y 
                             + window.pageYOffset);


//Everytime there's a scroll action, check and update if the next section has been reached
document.addEventListener('scroll', () => {

    //General case to check for the position
    for(var i = 0; i <= nav_sections_position.length-2; i++)
    {       
        if(window.pageYOffset >= nav_sections_position[i] &&
        window.pageYOffset < nav_sections_position[i+1])
        {
            highlightNavItem(i);
        }        
    }
    //Case for the last element of the navigation item's list
    if(i == nav_sections_position.length -1)
        if(window.pageYOffset >= nav_sections_position[i]){
             highlightNavItem(i);
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

