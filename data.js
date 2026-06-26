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
                { to: "Thiruvananthapuram Palayam", distance: 3, road: "MG Road", toward: "MC Road" },
                { to: "Thampanoor Road Fork", distance: 0.1, road: "Railway Station Road", toward: "Thycaud" }
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
            ],

            "Thampanoor Road Fork": [
                { to: "Thiruvananthapuram", distance: 0.1, road: "Railway Station Road", toward: "Ayurveda College Junction" },
                { to: "Thycaud Junction North", distance: 0.3, road: "New Theatre Road", toward: "Nedumangad" },
                { to: "Thycaud Junction South", distance: 0.3, road: "Residency Road Over Bridge", toward: "Kanyakumari" }
            ],

            "Thycaud Junction North": [
                { to: "Thampanoor Road Fork", distance: 0.3, road: "New Theatre Road", toward: "Ayurveda College Junction" },
                { to: "Thycaud Junction South", distance: 0.1, road: "CV Raman Pillai Road", toward: "Kanyakumari" },
                { to: "Vazhuthacaud", distance: 2.0, road: "CV Raman Pillai Road", toward: "Nedumangad" }
            ],

            "Vazhuthacaud": [
                { to: "Thycaud Junction North", distance: 2.0, road: "CV Raman Pillai Road", toward: "Kanyakumari" },
                { to: "Edappazhanji Junction", distance: 1.2, road: "Cotton Hill Road", toward: "Pallimukku" },
                { to: "Vellayambalam", distance: 1.1, road: "CV Raman Pillai Road", toward: "Kowdiar" }
            ],

            "Edappazhanji Junction": [
                { to: "Vazhuthacaud", distance: 1.2, road: "Cotton Hill Road", toward: "CV Raman Pillai Road" },
                { to: "Alakapuri Convention Centre Junction", distance: 0.5, road: "Kochar Road", toward: "Sasthamangalam" },
                { to: "Jagathy", distance: 0.5, road: "Kochar Road", toward: "Thycaud" }
            ],

            "Alakapuri Convention Centre Junction": [
                { to: "Edappazhanji Junction", distance: 0.5, road: "Kochar Road", toward: "Thycaud" },
                { to: "Sasthamangalam", distance: 0.5, road: "Sankar Road", toward: "" }
            ],

            "Sasthamangalam": [
                { to: "Alakapuri Convention Centre Junction", distance: 0.5, road: "Sankar Road", toward: "Thycaud" },
                { to: "Vellayambalam", distance: 1.0, road: "Sasthamangalam - Vellayambalam Road", toward: "" }
            ],

            "Vellayambalam": [
                { to: "Sasthamangalam", distance: 0.5, road: "Vellayambalam - Sasthamangalam Road", toward: "Pangode" },
                { to: "Vazhuthacaud", distance: 1.1, road: "CV Raman Pillai Road", toward: "Kanyakumari" }
            ],

            "Jagathy": [
                { to: "Edappazhanji Junction", distance: 0.5, road: "Kochar Road", toward: "Sasthamangalam" }
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
