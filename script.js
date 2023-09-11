x=document.querySelector("img")
// console.log(x.value)
x.style.border="10px solid #ffe83b"
function sap()
{
    spacing_ele=document.querySelector(".range2").value
    color_is=document.querySelector(".range3").value
    x.style.border=`${spacing_ele}px solid ${color_is}`
}
function blury()
{
    blur_ele=(1-(document.querySelector(".range").value)/100)
    x.style.opacity=`${blur_ele}`
}
function colory()
{
    color_is=document.querySelector(".range3").value
    console.log(color_is)
    x.style.borderColor=`${color_is}`
    document.querySelector("span").style.color=`${color_is}`
}