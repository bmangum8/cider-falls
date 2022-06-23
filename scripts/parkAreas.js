/*
park areas
*import getAreas from database
*create a plural-named variable for example areas set to getAreas()
*then export a new function - for exaple Areas
*create a new let variable with HTML name = <html tag>, probably <ul>
*do a for of loop. loop over the area of areas (which is the new variable I created and set to getAreas)
*use string interpolation to add string to html.
*the string should include html <li> tag. and include an id for the tag. for example: 
*<li id="area--${area.id}">
*string should also include ${area.name} between the <li> tags
*outside of the for of loop, add closing </ul>
*return the html, close the function with curly bracket
*/


import { getAreas } from "./database.js"

const areas = getAreas()

export const Areas = () => {
    let html = `<section class="area_nameList">`

    for (const area of areas) {
        html += `<div class="areaName" id="area--${area.id}">${area.name}</div>`
    }
    html += `</section>`
    return html
    }


/*
    *add an event listener- click event
    *When the title of any area is clicked, the current number of park guests in that area should be displayed.
*/
    
    document.addEventListener(
        "click",
        (clickEvent) => {
            const areaClicked = clickEvent.target
            if (areaClicked.id.startsWith("area")) {
                const [, areaId] = areaClicked.id.split("--")
    
                for (const area of areas) {
                    if (area.id === parseInt(areaId)) {
                        window.alert(`There are ${area.guestNumber} guests in the ${area.name} area.`)
                    }
                }
            }
        }
    )
