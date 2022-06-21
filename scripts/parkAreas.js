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
    let html = `<ul>`

    for (const area of areas) {
        html += `<li id="area--${area.id}">${area.name}</li>`
    }
    html += `</ul>`
    return html
    }


