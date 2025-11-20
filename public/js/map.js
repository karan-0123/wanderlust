// mapboxgl.accessToken = mapToken;
// const map = new mapboxgl.Map({
//     container: 'map', // container ID
//     style: "mapbox://styles/mapbox/streets-v12", 
//     center: [77.2088, 28.6139],
//     zoom: 9 // starting zoom
// });



// console.log(coordinates);


// // const marker = new mapboxgl.Marker()
// //     .setLngLat(coordinates)
// //     .addTo(map);

// const marker = new mapboxgl.Marker({ color: "red" })
//     .setLngLat([73.8786, 18.5246])
//     .setPopup(
//       new mapboxgl.Popup({ offset: 25 }).setHTML(
//         "<h6>Exact location provided after booking!</h6>"
//       )
//     ).addTo(map);

mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map',
    style: "mapbox://styles/mapbox/streets-v12",
    center: listing.geometry.coordinates,
    zoom: 9,
});

const marker = new mapboxgl.Marker({color: "red "})
    .setLngLat(listing.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<h4> ${listing.title} </h4><p>Exact location will be provided after booking!</p>`
      )
    )
    .addTo(map);