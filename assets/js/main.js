"use strict";
const $toursMap = document.getElementById("toursMap");
const $contactMap = document.getElementById("contactMap");
const $destinationsMap = document.getElementById("destinationsMap");

const mapStyles = [
    {
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "weight": "2.00"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#9c9c9c"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#eeeeee"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#7b7b7b"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#46bcec"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#c8d7d4"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#070707"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    }
];

window.initGoogleMaps = function() {
    {
        // Single tour map with directions API
        if($toursMap) {
            const directionsService = new google.maps.DirectionsService();
            const directionsRenderer = new google.maps.DirectionsRenderer();
            const tourMap = new google.maps.Map($toursMap, {
                zoom: 7,
                center: { lat: 41.85, lng: -87.65 },
                styles: mapStyles,
                disableDefaultUI: true,
            });
            directionsRenderer.setMap(tourMap);
            directionsService
                .route({
                    origin: 'Tokyo',
                    destination: 'Yamanashi',
                    waypoints: [
                        {
                            location: 'Kanagawa',
                            stopover: true
                        },
                        {
                            location: 'Shizuoka',
                            stopover: true
                        }
                    ],
                    travelMode: google.maps.TravelMode.DRIVING,
                })
                .then((response) => {
                    directionsRenderer.setDirections(response);
                })
                .catch((e) => window.alert("Directions request failed due to " + status));
        }

        // Contact us page with office location marker
        if($contactMap) {
            const contactMap = new google.maps.Map($contactMap, {
                zoom: 14,
                center: { lat: 41.85, lng: -87.67 },
                styles: mapStyles,
            });
            const marker = new google.maps.Marker({
                position: { lat: 41.85, lng: -87.65 },
                map: contactMap,
                icon: '../../assets/img/pin.png'
            });
        }

        // Destinations page map
        if($destinationsMap) {
            const destinationsMap = new google.maps.Map($destinationsMap, {
                zoom: 3,
                center: { lat: 50, lng: 0 },
                styles: mapStyles,
            });

            // Create Markers for Google Maps
            const infoWindow = new google.maps.InfoWindow();
            const markers = [
                {
                    city: 'Los Angeles',
                    description: 'Los Angeles is a sprawling Southern California city and the center of the nation’s film and television industry.',
                    image: `${window.location.origin}/assets/img/los-angeles.jpg`,
                    price: '249',
                    lat: 34.052235,
                    lng: -118.243683,
                    marker: new google.maps.Marker({
                        position: { lat: 34.052235, lng: -118.243683 },
                        map: destinationsMap,
                        icon: `${window.location.origin}/assets/img/pin.png`,
                        title: 'Los Angeles'
                    })
                },
                {
                    city: 'Moscow',
                    description: 'Moscow, on the Moskva River in western Russia, is the nation’s cosmopolitan capital.',
                    image: `${window.location.origin}/assets/img/moscow.jpg`,
                    price: '199',
                    lat: 55.755825,
                    lng: 37.617298,
                    marker: new google.maps.Marker({
                        position: { lat: 55.755825, lng: 37.617298 },
                        map: destinationsMap,
                        icon: `${window.location.origin}/assets/img/pin.png`,
                        title: 'Moscow'
                    })
                },
                {
                    city: 'New York',
                    description: 'New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. ',
                    image: `${window.location.origin}/assets/img/new-york.jpg`,
                    price: '549',
                    lat: 40.712776,
                    lng: -74.005974,
                    marker: new google.maps.Marker({
                        position: { lat: 40.712776, lng: -74.005974 },
                        map: destinationsMap,
                        icon: `${window.location.origin}/assets/img/pin.png`,
                        title: 'New York'
                    })
                },
                {
                    city: 'Paris',
                    description: 'Paris, France\'s capital, is a major European city and a global center for art, fashion, gastronomy and culture. ',
                    image: `${window.location.origin}/assets/img/paris.jpg`,
                    price: '279',
                    lat: 48.856613,
                    lng: 2.352222,
                    marker: new google.maps.Marker({
                        position: { lat: 48.856613, lng: 2.352222 },
                        map: destinationsMap,
                        icon: `${window.location.origin}/assets/img/pin.png`,
                        title: 'Paris'
                    })
                },
                {
                    city: 'Egypt',
                    description: 'Egypt, a country linking northeast Africa with the Middle East, dates to the time of the pharaohs. ',
                    image: `${window.location.origin}/assets/img/egipt.jpg`,
                    price: '319',
                    lat: 26.820553,
                    lng: 30.802498,
                    marker: new google.maps.Marker({
                        position: { lat: 26.820553, lng: 30.802498 },
                        map: destinationsMap,
                        icon: `${window.location.origin}/assets/img/pin.png`,
                        title: 'Paris'
                    })
                },
            ];

            markers.forEach(({ map, city, image, price, description, lat, lng, marker }) => {
                google.maps.event.addListener(marker, 'click', function() {
                    infoWindow.setContent(`
                    <div>
                        <div class="bg-primary mb-5 rounded-xl bg-cover bg-center" style="width: 300px; height: 200px; background-image: url(${image})"></div>
                        <div class="bg-primary text-secondary rounded-xl" style="width: 300px;">
                            <div class="flex justify-between items-center border-b border-white/30 px-5 py-3">
                                <span class="font-heading font-bold text-base">${city}</span>
                                <span onclick="document.querySelector('#destinationsMap .gm-style .gm-ui-hover-effect').click()" class="transition iconify hover:text-white cursor-pointer" data-icon="eva:close-fill" data-height="20" data-width="20"></span>
                            </div>
                            <div class="px-5 py-5">
                                <p class="mb-3 font-body font-medium leading-6">${description}</p>
                                <div class="flex justify-between items-center">
                                    <a class="btn btn-secondary bg-white text-xs px-4 py-2" href="/single-tour">Tour Details</a>
                                    <p>
                                        <span class="block mb-1">From:</span>
                                        <span class="font-bold">$${price}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
        `)
                    infoWindow.open(destinationsMap, this);
                });
            });
        }
    }
}

// Alpine Init
document.addEventListener('alpine:init', () => {
    Alpine.prefix('data-x-');

    // Toggle logic for mobile navigation
    Alpine.data('mobileNav', () => ({
        mobileMenuOpen: false,
        triggerHamburgerClick: {
            ['data-x-on:click']() {
                this.mobileMenuOpen = !this.mobileMenuOpen
            }
        },
        toggleNavVisibility: {
            ['data-x-bind:class']() {
                return { 'block' : this.mobileMenuOpen , 'hidden' : !this.mobileMenuOpen}
            }
        },
    }));

    // Toggle logic for mobile submenu
    Alpine.data('mobileNavSubmenuCollapse', () => ({
        isOpen: false,
        trigger: {
            ['data-x-on:click']() {
                this.isOpen = !this.isOpen
            }
        },
        toggleSubmenuVisibility: {
            ['data-x-bind:class']() {
                return { 'block' : this.isOpen , 'hidden' : !this.isOpen, '-mb-4': this.isOpen }
            }
        }
    }));



    // Toggle logic for search bar | Destination button
    Alpine.data('searchBarDestination', () => ({
        isOpen: false,
        destination: 'Where you are?',
        trigger: {
            ['data-x-on:click.prevent']() {
                this.isOpen = !this.isOpen
            },
            ['data-x-bind:class']() {
                return { 'bg-green-medium': this.isOpen, 'bg-primary': !this.isOpen }
            }
        },
        iconClass: {
            ['data-x-bind:class']() {
                return { 'rotate-180': this.isOpen }
            }
        },
        dropdown: {
            ['data-x-show']() {
                return this.isOpen;
            },
            ['data-x-on:click.away']() {
                this.isOpen = false;
            },
            ['data-x-bind:class']() {
                return { 'block': this.isOpen, 'hidden': !this.isOpen }
            }
        },
        dropdownItemClick: {
            ['data-x-on:click.prevent']($event) {
                this.destination = $event.target.textContent;
                this.isOpen = false;
            },
        }
    }));

    // Toggle logic for search bar | Activity button
    Alpine.data('searchBarActivity', () => ({
        isOpen: false,
        activity: 'All Activity',
        trigger: {
            ['data-x-on:click.prevent']() {
                this.isOpen = !this.isOpen
            },
            ['data-x-bind:class']() {
                return { 'bg-green-medium': this.isOpen, 'bg-primary': !this.isOpen }
            }
        },
        iconClass: {
            ['data-x-bind:class']() {
                return { 'rotate-180': this.isOpen }
            }
        },
        dropdown: {
            ['data-x-show']() {
                return this.isOpen;
            },
            ['data-x-on:click.away']() {
                this.isOpen = false;
            },
            ['data-x-bind:class']() {
                return { 'block': this.isOpen, 'hidden': !this.isOpen }
            }
        },
        dropdownItemClick: {
            ['data-x-on:click.prevent']($event) {
                this.activity = $event.target.textContent;
                this.isOpen = false;
            },
        }
    }));

    // Toggle logic for search bar | Date button
    Alpine.data('searchBarDate', () => ({
        date: 'Date from',
        init() {
            new Pikaday({ field: this.$el, trigger: this.$refs.datepicker, onSelect: selectedDate => this.date = `${selectedDate.getDate()}/${selectedDate.getMonth() + 1}/${selectedDate.getFullYear()}`  })
        },
        iconClass: {
            ['data-x-bind:class']() {
                return { 'rotate-180': this.isOpen }
            }
        },
        dateClick: {
            ['data-x-on:click.prevent']() {
                return true;
            },
        }
    }));

    // Toggle logic for search bar | Guests button
    Alpine.data('searchBarGuests', () => ({
        isOpen: false,
        guests: 0,
        adults: 0,
        youth: 0,
        children: 0,
        trigger: {
            ['data-x-on:click.prevent']() {
                this.isOpen = !this.isOpen
            },
            ['data-x-bind:class']() {
                return { 'bg-green-medium': this.isOpen, 'bg-primary': !this.isOpen }
            }
        },
        dropdown: {
            ['data-x-show']() {
                return this.isOpen;
            },
            ['data-x-on:click.away']() {
                this.isOpen = false;
            },
            ['data-x-bind:class']() {
                return { 'block': this.isOpen, 'hidden': !this.isOpen }
            }
        },
        decreaseAdults: {
            ['data-x-on:click.prevent']() {
                this.adults = this.adults <= 0 ? this.adults : this.adults - 1
            }
        },
        increaseAdults: {
            ['data-x-on:click.prevent']() {
                this.adults = this.adults + 1
            }
        },
        decreaseYouth: {
            ['data-x-on:click.prevent']() {
                this.youth = this.youth <= 0 ? this.youth : this.youth - 1
            }
        },
        increaseYouth: {
            ['data-x-on:click.prevent']() {
                this.youth = this.youth + 1
            }
        },
        decreaseChildren: {
            ['data-x-on:click.prevent']() {
                this.children = this.children <= 0 ? this.children : this.children - 1
            }
        },
        increaseChildren: {
            ['data-x-on:click.prevent']() {
                this.children = this.children + 1
            }
        },
        iconClass: {
            ['data-x-bind:class']() {
                return { 'rotate-180': this.isOpen }
            }
        },
    }));

    // Accordion logic
    Alpine.data('accordionInit', () => ({
        selected: null,
        trigger(index) {
            return {
                ['data-x-on:click']() {
                    this.selected !== index ? this.selected = index : this.selected = null
                }
            }
        },
        iconStyle(index) {
            return {
                ['data-x-bind:style']() {
                    return this.selected === index ? 'transform: rotate(180deg)' : '';
                }
            }
        },
        containerStyle(index) {
            return {
                ['data-x-bind:style']() {
                    return this.selected === index ? 'max-height: ' + this.$refs[`container-${index}`].scrollHeight + 'px' : ''
                }
            }
        }
    }));

    // Testimonials slider
    Alpine.data('testimonialsSlider', () => ({
        swiper: null,
        init() {
            this.swiper = new Swiper(this.$refs.container, {
                loop: true,
                slidesPerView: 1,
                spaceBetween: 20,
                autoplay: true,
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    1280: {
                        slidesPerView: 3,
                        spaceBetween: 40
                    }
                },
                grabCursor: true,
                keyboard: true,
                pagination: {
                    el: this.$refs.pagination,
                    clickable: true,
                    dynamicBullets: true
                }
            })
        },
    }));

    // Blog slider
    Alpine.data('blogSlider', () => ({
        swiper: null,
        init() {
            this.swiper = new Swiper(this.$refs.container, {
                loop: true,
                autoplay: true,
                slidesPerView: 1,
                grabCursor: true,
                keyboard: true,
                pagination: {
                    el: this.$refs.pagination,
                    clickable: true,
                    dynamicBullets: true
                }
            })
        },
        prevSlide: {
            ['data-x-on:click']() {
                this.swiper.slidePrev();
            }
        },
        nextSlide: {
            ['data-x-on:click']() {
                this.swiper.slideNext();
            }
        }
    }));

    // Recent posts slider
    Alpine.data('recentPostsSlider', () => ({
        swiper: null,
        init() {
            this.swiper = new Swiper(this.$refs.container, {
                loop: true,
                autoplay: true,
                slidesPerView: 1,
                spaceBetween: 20,
                breakpoints: {
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 30
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    1280: {
                        slidesPerView: 3,
                        spaceBetween: 40
                    }
                },
                grabCursor: true,
                keyboard: true,
                pagination: {
                    el: this.$refs.pagination,
                    clickable: true,
                    dynamicBullets: true
                }
            })
        }
    }));
});

( function( $ ) {
    'use strict';
    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
}( jQuery ) );

