/*
services/join park areas with services
*import getServices from database
*import getParkServices from database
*import getAreas from database
*/

import { getServices, getParkServices, getAreas } from "./database.js"

/*
*create a plural-named variable, for example services and set to getServices
*create a plural-named variable, for example parkServices and set to getParkServices
*/

const services = getServices()
const parkAreaServices = getParkServices()
const areas = getAreas()


/*
first: create a function that will return the html representation of the list of services
create and export function - for example Services
create a let variable with html name = <tag>
do a for of loop. loop over services (which is the variable I set to getServices)
use string interpolation to add string to html. The string should include an html tag. 
for example: <p class="services">${service.name}</p>
return html outside of for loop
close function with curly bracket
*/

export const Services = () => {
    let html = `<section class="services_nameList">`
    for (const service of services) {
        html += `<div class="serviceName" id="service--${service.id}">${service.name}</div>`
    }
    html += `</section>`
    return html
}


/*
second: create a function that will find the park Areas that support each service

create and export function - for example findAreas
parameter is the service we click on. parameter needs to be an object
for example, serviceObject
set a let html variable to ""
for of loop, for service of services
if service.id === parkservices.serviceId
for area of areas
if area.id === parkservice.areaId
add area.name to html string
need it to return a list of areas that support that service
return html string
*/

export const findArea = (service) => {
    let html = ""
    for (const parkAreaService of parkAreaServices) {
        if (parkAreaService.servicesId === service.id) {
            for (const area of areas) {
                if (parkAreaService.parkAreaId === area.id) {
                 html+= `${area.name}`
        }
    }
}
    }
    return html
}
  

    

/*
third: create a click event that invokes the second function in this module
//must have an id in html to connect the event listener to
*/

document.addEventListener(
    "click",
    (clickEvent) => {
        const serviceClicked = clickEvent.target
        if (serviceClicked.id.startsWith("service")) {
            const [, serviceId] = serviceClicked.id.split("--")

            for (const service of services) {
                if (service.id === parseInt(serviceId)) {
                    window.alert(`${service.name} is available in ${findArea(service)}`)
                }
            }
        }
    }
)


