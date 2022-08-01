var navMenuAnchorTags=document.querySelectorAll('.nav-menu a');
console.log(navMenuAnchorTags);
var targetSection;
var interval;
for(var i=0;i<navMenuAnchorTags.length;i++)
{
    navMenuAnchorTags[i].addEventListener('click',function(event)
    {
        event.preventDefault();
        var targetSectionID=this.innerHTML.trim().toLowerCase();
        // console.log(targetSectionID);
         targetSection=document.getElementById(targetSectionID);
        // console.log(targetSection);
         interval=setInterval(scrollInterval,50);
    })    
}

function scrollInterval()
{
    var targetSectionCoordinates=targetSection.getBoundingClientRect();
    if(targetSectionCoordinates.top<=0)
    {
        clearInterval(interval);
        return;
    }
    window.scrollBy(0,50);

}








