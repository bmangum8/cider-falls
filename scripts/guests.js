/*
guests
*import getGuests from database
create a const to invoke getGuests()
*export and create function with const of Guests
function should create html representation of a list of all the guests in the park
*create a let variable with <ul> tag
*create a for of loop, for guest of guests
*use string interpolation to add guests to html
for example html += `<li id="guest--${guest.id}">${guest.firstName}${guest.lastName}</li>`
add </ul> tag outside of the for of loop
*return the html
*/

import { getGuests } from "./database.js"

const guests = getGuests()

export const Guests = () => {
    let html = `<ul>`
    for (const guest of guests) {
        html += `<li id="guest--${guest.id}">${guest.firstName} ${guest.lastName}</li>`
    }
    html += `</ul>`
    return html
}