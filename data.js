const DATASETS = {

    "Kerala Roads": {

        important: new Set([
            "Thiruvananthapuram"
        ]),

        graph: {
            "Thiruvananthapuram Kesavadasapuram": [
                { to: "Thiruvananthapuram Palayam", distance: 3, road: "PMG Road", toward: "Thampanoor" },
                { to: "Vembayam", distance: 15, road: "MC Road", toward: "Kottarakkara" },
                { to: "Kazhakkoottam", distance: 10, road: "Kazhakkoottam Road", toward: "NH66" }
            ],

            "Thiruvananthapuram Palayam": [
                { to: "Thiruvananthapuram Kesavadasapuram", distance: 3, road: "PMG Road", toward: "MC Road" },
                { to: "Thiruvananthapuram", distance: 3, road: "MG Road", toward: "Vazhuthacaud" },
                { to: "Thiruvananthapuram Airport", distance: 4, road: "Palayam Airport Road", toward: "TRV Intl Airport" }
            ],

            "Thiruvananthapuram": [
                { to: "Thiruvananthapuram Palayam", distance: 3, road: "MG Road", toward: "MC Road" }
            ],

            "Thiruvananthapuram Airport": [
                { to: "Thiruvananthapuram Palayam", distance: 4, road: "Palayam Airport Road", toward: "Palayam" },
                { to: "Kazhakkoottam", distance: 10, road: "NH66", toward: "Ernakulam" }
            ],

            "Vembayam": [
                { to: "Thiruvananthapuram Kesavadasapuram", distance: 15, road: "MC Road", toward: "Thiruvananthapuram" }
            ],

            "Kazhakkoottam": [
                { to: "Thiruvananthapuram Airport", distance: 10, road: "NH66", toward: "Kanyakumari" },
                { to: "Thiruvananthapuram Kesavadasapuram", distance: 10, road: "Unnamed Road", toward: "Thiruvananthapuram" }
            ]
        }
    },

    "Kerala Rail": {

        important: new Set([
            "TVM",
            "Kollam",
            "Kayamkulam",
            "Ernakulam",
            "Thrissur"
        ]),

        graph: {

            TVM: [
                { to: "Kollam", distance: 65, road: "Rail", toward: "Ernakulam" }
            ],

            Kollam: [
                { to: "TVM", distance: 65, road: "Rail", toward: "TVM" },
                { to: "Kayamkulam", distance: 36, road: "Rail", toward: "Ernakulam" }
            ],

            Kayamkulam: [
                { to: "Kollam", distance: 36, road: "Rail", toward: "Kollam" },
                { to: "Ernakulam", distance: 110, road: "Rail", toward: "Ernakulam" }
            ],

            Ernakulam: [
                { to: "Kayamkulam", distance: 110, road: "Rail", toward: "Kayamkulam" },
                { to: "Thrissur", distance: 75, road: "Rail", toward: "Thrissur" }
            ],

            Thrissur: [
                { to: "Ernakulam", distance: 75, road: "Rail", toward: "Ernakulam" }
            ]
        }
    }

};
