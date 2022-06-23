/*
main.js
*import areas from parkAreas.js
import services, availableServices from services.js
import guests from guests.js
*/

import { Areas } from "./parkAreas.js"
import { Services } from "./services.js"
import { Guests } from "./guests.js"

/*
create a const called mainContainer = document.querySelector("#container")
"container" is the id from index.html-- this is how we connect the js and html representation
*/
const mainContainer = document.querySelector("#container")

/*
create a const applicationHTML= `
<h1>Title of Park Here</h1>
<article class="guests">
<h2>Guests</h2>
${Guests()} ---this is the function from the guests modual. The function creates an html representation of the list of guests
</article>

<article class="details">
<h2>Park Services</h2>
<section class="detail--details_areas">
<h3>${area.name}</h3>
<div class="detail--details_services">
${availableServices()}
</div>
</section> 

<aside class="detail--details_guests">
<h2>Guests</h2>
<h3 class="guests_names">
${getGuests}</h3>
</article>

`
//this is my attempt to inculde the services under the area name. By nesting the services in a div, in a section, in an article

mainContainer.innerHTML = applicationHTML
*/

const applicationHTML = `
<h1>Cider Falls</h1>
<article class="details">
<section class="detail--column details_services">
    <h2>Park Services</h2>
        <div class="services_name">
            ${Services()}
            </div>
</section>
    <section class="detail--column details_areas">
        <h2>Park Areas</h2>
            <div class="areas_names">
                ${Areas()}
                </div>
    </section>
    <section class="detail--column details_guests">
        <h2>Guests</h2>
            <div class="guests_names">
                ${Guests()}
                </div>
    </section>
</article>
`


mainContainer.innerHTML = applicationHTML



