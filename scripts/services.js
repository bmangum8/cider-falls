/*
services/join park areas with services
import getServices from database
import getParkServices from database
import areas from parkAreas.js
*/

import { getServices }


/*
create a plural-named variable, for example services and set to getServices
create a plural-named variable, for example parkServices and set to getParkServices
*/



/*
first: create a function that will find the services that exist at each park area

then export a new function - for example findServices
will need 2 parameters- the park area and services
in the function body, create a let variable, 
for example, servicesInArea and set to null??
create a for of loop- service of services
if statement- if the service.id === joinParkWithServices.servicesId
then the servicesInArea = service
and return servicesInArea

second:  
Remember that I have variables areas, services, and parkServices
will invoke the first function of this module
this fuction does not need parameters

create and export a function that returns HTML representation of services for each park area.
Name it for example, availableServices
create a let html variable and set it to an empty string

add a <ul> tag
do a for of loop-- for parkService of parkServices
create a const variable of areaservices = findServices(area, services)
in the for loop, create html representation
html += `<li id="service--${service.id}">${service.name}</li>
add </ul> tag
return html
*/