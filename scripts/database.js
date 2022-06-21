const database = {

    guests: [{
        id: 1,
        firstName: "Brittany",
        lastName: "Mangum"
    }, {
        id: 2,
        firstName: "Kyle",
        lastName: "Mangum",
    }, {
        id: 3,
        firstName: "Juliet",
        lastName: "Mangum",
    }, {
        id: 4,
        firstName: "Penelope",
        lastName: "Mangum",
    }, {
        id: 5,
        firstName: "Elliot",
        lastName: "Mangum",
    }, {
        id: 6,
        firstName: "Kitty",
        lastName: "Cats",
    }],

    areas: [{
        id: 1,
        name: "Chamfort River",
        location: "northeast",
    }, {
        id: 2,
        name: "Lost Wolf Hiking Trail",
        location: "northern",
    }, {
        id: 3,
        name: "Lodge",
        location: "northwest",
    }, {
        id: 4,
        name: "Gander River",
        location: "southwest",
    }, {
        id: 5,
        name: "Campgrounds",
        location: "southern",
    }, {
        id: 6,
        name: "Pine Bluffs Trails",
        location: "southeast",
    }
    ],

    services: [{
        id: 1,
        name: "rafting",

    },
    {
        id: 2,
        name: "canoeing",

    },
    {
        id: 3,
        name: "fishing",

    },
    {
        id: 4,
        name: "hiking",

    },
    {
        id: 5,
        name: "picnicking",

    },
    {
        id: 6,
        name: "rock climbing",

    },
    {
        id: 7,
        name: "lodging",

    },
    {
        id: 8,
        name: "parking",

    },
    {
        id: 9,
        name: "information",
    },
    {
        id: 10,
        name: "zip lines",
    }
    ],

    ammenities: [{
        id: 1,
        name: "hotel"
    },
    {
        id: 2,
        name: "food vendors"
    },
    {
        id: 3,
        name: "play area"
    },
    {
        id: 4,
        name: "office park"
    },
    {
        id: 5,
        name: "restaurant"
    }
    ],

    //each service and park connection will have its own object. until you have joined all services to the park area
    parkServices: [{
        id: 1,
        parkAreaId: 1,
        servicesId: 1
    },
    {
        id: 2,
        parkAreaId: 1,
        servicesId: 2
    },
    {
        id: 3,
        parkAreaId: 1,
        servicesId: 3
    },
    {
        id: 4,
        parkAreaId: 2,
        servicesId: 4
    },
    {
        id: 5,
        parkAreaId: 2,
        servicesId: 5
    },
    {
        id: 6,
        parkAreaId: 2,
        servicesId: 6
    },
    {
        id: 7,
        parkAreaId: 3,
        servicesId: 7

    },
    {
        id: 8,
        parkAreaId: 3,
        servicesId: 8

    },
    {
        id: 9,
        parkAreaId: 3,
        servicesId: 9

    },
    {
        id: 10,
        parkAreaId: 3,
        servicesId: 5

    },
    {
        id: 11,
        parkAreaId: 4,
        servicesId: 3

    },
    {
        id: 12,
        parkAreaId: 4,
        servicesId: 4

    },
    {
        id: 13,
        parkAreaId: 5,
        servicesId: 7

    },
    {
        id: 14,
        parkAreaId: 5,
        servicesId: 8

    },
    {
        id: 15,
        parkAreaId: 5,
        servicesId: 9

    },
    {
        id: 16,
        parkAreaId: 6,
        servicesId: 4

    },
    {
        id: 17,
        parkAreaId: 6,
        servicesId: 5

    },
    {
        id: 18,
        parkAreaId: 6,
        servicesId: 10

    }
    ],

    joinParkWithAmmenities: [
        {
            id: 1,
            parkAreaId: 5,
            extraAmmenitiesId: 3
        },
        {
            id: 2,
            parkAreaId: 5,
            extraAmmenitiesId: 4
        },
        {
            id: 3,
            parkAreaId: 3,
            extraAmmenitiesId: 1
        },
        {
            id: 4,
            parkAreaId: 3,
            extraAmmenitiesId: 5
        },
        {
            id: 5,
            parkAreaId: 6,
            extraAmmenitiesId: 2
        }
    ]
}

/*
database- functions that make copies of the data in database
export const getAreas = () => {database.areas.map(area => ({...area}))
} //returns a copy of park areas
-do same for park services and  guests and joining
getServices()
getParkServices()
getGuests()
*/

export const getAreas = () => {database.areas.map(area => ({...area}))
} //returns a copy of park areas

export const getServices = () => {database.services.map(service => ({...service}))
} //returns a copy of services

export const getParkServices = () => {database.parkServices.map(parkService => ({...parkService}))
} //returns a copy of services and their park area

export const getGuests = () => {database.guests.map(guest => ({...guest}))
} //returns a copy of guests