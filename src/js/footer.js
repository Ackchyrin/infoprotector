ymaps.ready(init);

function init(){
    myMap = new ymaps.Map('map', {
        center: [55.888821, 37.632619],
        zoom: 16,
        controls: []
    }, {
        searchControlProvider: 'yandex#search'
    });

    myMap.geoObjects.add(new ymaps.Placemark([55.888821, 37.632619], {
        iconCaption: 'Чермянский проезд, 7'
    }, {
        preset: 'islands#redDotIconWithCaption'
    }))
}
