const DATASETS = {

    "Kerala Roads": {

        important: new Set([
            "Thiruvananthapuram",
            "Kollam",
            "Kayamkulam",
            "Adoor",
            "Kottarakkara",
            "Chengannur",
            "Thiruvalla",
            "Changanassery",
            "Kottayam",
            "Ettumannoor",
            "Ernakulam",
            "Angamaly",
            "Thrissur"
        ]),

        graph: {

            Thiruvananthapuram: [
                { to: "Kollam", distance: 65, road: "NH66", toward: "Ernakulam" }
            ],

            Kollam: [
                { to: "Thiruvananthapuram", distance: 65, road: "NH66", toward: "TVM" },
                { to: "Kayamkulam", distance: 42, road: "NH66", toward: "Ernakulam" },
                { to: "Kottarakkara", distance: 27, road: "MC Road", toward: "Kottayam" }
            ],

            Kayamkulam: [
                { to: "Kollam", distance: 42, road: "NH66", toward: "Kollam" },
                { to: "Ernakulam", distance: 105, road: "NH66", toward: "Ernakulam" }
            ],

            Kottarakkara: [
                { to: "Kollam", distance: 27, road: "MC Road", toward: "Kollam" },
                { to: "Adoor", distance: 25, road: "MC Road", toward: "Kottayam" }
            ],

            Adoor: [
                { to: "Kottarakkara", distance: 25, road: "MC Road", toward: "Kollam" },
                { to: "Chengannur", distance: 25, road: "MC Road", toward: "Kottayam" }
            ],

            Chengannur: [
                { to: "Adoor", distance: 25, road: "MC Road", toward: "Adoor" },
                { to: "Thiruvalla", distance: 11, road: "MC Road", toward: "Kottayam" }
            ],

            Thiruvalla: [
                { to: "Chengannur", distance: 11, road: "MC Road", toward: "Chengannur" },
                { to: "Changanassery", distance: 10, road: "MC Road", toward: "Kottayam" }
            ],

            Changanassery: [
                { to: "Thiruvalla", distance: 10, road: "MC Road", toward: "Thiruvalla" },
                { to: "Kottayam", distance: 18, road: "MC Road", toward: "Kottayam" }
            ],

            Kottayam: [
                { to: "Changanassery", distance: 18, road: "MC Road", toward: "Changanassery" },
                { to: "Ettumannoor", distance: 11, road: "MC Road", toward: "Ernakulam" }
            ],

            Ettumannoor: [
                { to: "Kottayam", distance: 11, road: "MC Road", toward: "Kottayam" },
                { to: "Ernakulam", distance: 55, road: "MC Road", toward: "Ernakulam" }
            ],

            Ernakulam: [
                { to: "Ettumannoor", distance: 55, road: "MC Road", toward: "Kottayam" },
                { to: "Kayamkulam", distance: 105, road: "NH66", toward: "Kayamkulam" },
                { to: "Angamaly", distance: 45, road: "NH544", toward: "Angamaly" }
            ],

            Angamaly: [
                { to: "Ernakulam", distance: 45, road: "NH544", toward: "Ernakulam" },
                { to: "Thrissur", distance: 68, road: "NH544", toward: "Thrissur" }
            ],

            Thrissur: [
                { to: "Angamaly", distance: 68, road: "NH544", toward: "Angamaly" }
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
