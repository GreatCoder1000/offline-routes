const DATASETS = {

    "Kerala Roads": {

        important: new Set([
            "Thiruvananthapuram"
        ]),

        graph: {
            "Kesavadasapuram": [
                { to: "PMG", distance: 2600, road: "PMG Road", toward: "Palayam" },
                { to: "Nalanchira", distance: 2200, road: "MC Road", toward: "Kottarakkara" },
                { to: "Kazhakkoottam", distance: 10000, road: "Kazhakkoottam Road", toward: "NH66" }
            ],

            "Palayam": [
                { to: "PMG", distance: 400, road: "PMG Road", toward: "MC Road" },
                { to: "Thiruvananthapuram", distance: 3000, road: "MG Road", toward: "Vazhuthacaud" },
                { to: "Thiruvananthapuram Airport", distance: 4000, road: "Palayam Airport Road", toward: "TRV Intl Airport" },
                { to: "LMS", distance: 400, road: "MG Road", toward: "LMS Vellayambalam Road" }
            ],

            "Thiruvananthapuram": [
                { to: "Palayam", distance: 3000, road: "MG Road", toward: "MC Road" },
                { to: "Thampanoor Road Fork", distance: 100, road: "Railway Station Road", toward: "Thycaud" }
            ],

            "Thiruvananthapuram Airport": [
                { to: "Thiruvananthapuram Palayam", distance: 4000, road: "Palayam Airport Road", toward: "Palayam" },
                { to: "Kazhakkoottam", distance: 10000, road: "NH66", toward: "Ernakulam" }
            ],
                 
            "Jagathy": [
                { to: "Edappazhanji Junction", distance: 500, road: "Kochar Road", toward: "Sasthamangalam" }
            ],

            "Vembayam": [
                { to: "Nalanchira", distance: 12800, road: "MC Road", toward: "Thiruvananthapuram" },
                { to: "Pazhakutty", distance: 8000, road: "SH47", toward: "" }
            ],

            "Nalanchira": [
                { to: "Kesavadasapuram", distance: 2200, road: "MC Road", toward: "Thiruvananthapuram" },
                { to: "Vembayam", distance: 12800, road: "MC Road", toward: "Angamaly" }
            ],

            "Kazhakkoottam": [
                { to: "Thiruvananthapuram Airport", distance: 10000, road: "NH66", toward: "Kanyakumari" },
                { to: "Kesavadasapuram", distance: 10000, road: "Unnamed Road", toward: "Thiruvananthapuram" }
            ],

            "Thampanoor Road Fork": [
                { to: "Thiruvananthapuram", distance: 100, road: "Railway Station Road", toward: "Ayurveda College Junction" },
                { to: "Thycaud Junction North", distance: 300, road: "New Theatre Road", toward: "Nedumangad" },
                { to: "Thycaud Junction South", distance: 300, road: "Residency Road Over Bridge", toward: "Kanyakumari" }
            ],

            "Thycaud Junction North": [
                { to: "Thampanoor Road Fork", distance: 300, road: "New Theatre Road", toward: "Ayurveda College Junction" },
                { to: "Thycaud Junction South", distance: 100, road: "CV Raman Pillai Road", toward: "Kanyakumari" },
                { to: "Vazhuthacaud", distance: 2000, road: "CV Raman Pillai Road", toward: "Nedumangad" }
            ],

            "Thycaud Junction South": [
                { to: "Thycaud Junction North", distance: 100, road: "CV Raman Pillai Road", toward: "Vellayambalam" },
                { to: "Thampanoor Road Fork", distance: 300, road: "Residency Road Over Bridge", toward: "Ayurveda College Junction" }
            ],

            "Vazhuthacaud": [
                { to: "Thycaud Junction North", distance: 2000, road: "CV Raman Pillai Road", toward: "Kanyakumari" },
                { to: "Edappazhanji Junction", distance: 1200, road: "Cotton Hill Road", toward: "Pallimukku" },
                { to: "Vellayambalam", distance: 1100, road: "CV Raman Pillai Road", toward: "Kowdiar" }
            ],

            "Edappazhanji Junction": [
                { to: "Vazhuthacaud", distance: 1200, road: "Cotton Hill Road", toward: "CV Raman Pillai Road" },
                { to: "Alakapuri Convention Centre Junction", distance: 500, road: "Kochar Road", toward: "Sasthamangalam" },
                { to: "Jagathy", distance: 500, road: "Kochar Road", toward: "Thycaud" }
            ],

            "Alakapuri Convention Centre Junction": [
                { to: "Edappazhanji Junction", distance: 500, road: "Kochar Road", toward: "Thycaud" },
                { to: "Sasthamangalam", distance: 500, road: "Sankar Road", toward: "" }
            ],

            "Sasthamangalam": [
                { to: "Alakapuri Convention Centre Junction", distance: 500, road: "Sankar Road", toward: "Thycaud" },
                { to: "Vellayambalam", distance: 1000, road: "Sasthamangalam - Vellayambalam Road", toward: "" }
            ],

            "Vellayambalam": [
                { to: "Sasthamangalam", distance: 500, road: "Vellayambalam - Sasthamangalam Road", toward: "Pangode" },
                { to: "Vazhuthacaud", distance: 1100, road: "CV Raman Pillai Road", toward: "Kanyakumari" },
                { to: "Kowdiar", distance: 1300, road: "Kowdiar Avenue", toward: "Nedumangad" },
                { to: "LMS", distance: 1300, road: "LMS Vellayambalam Road", toward: "Palayam" }
            ],

            "Kowdiar": [
                { to: "Vellayambalam", distance: 1300, road: "Kowdiar Avenue", toward: "Thampanoor" },
                { to: "Nedumangad", distance: 12000, road: "SH2", toward: "Palode" }
            ],

            "Nedumangad": [
                { to: "Kowdiar", distance: 12000, road: "SH2", toward: "Thiruvananthapuram" },
                { to: "Pazhakutty", distance: 1200, road: "SH2", toward: "Palode" }
            ],

            "LMS": [
                { to: "Vellayambalam", distance: 1300, road: "LMS Vellayambalam Road", toward: "Sasthamangalam" },
                { to: "Palayam", distance: 400, road: "MG Road", toward: "Thampanoor" },
                { to: "PMG", distance: 300, road: "LMS Vellayambalam Road", toward: "PMG" }
            ],

            "PMG": [
                { to: "Kesavadasapuram", distance: 2600, road: "PMG Road", toward: "Angamaly" },
                { to: "LMS", distance: 300, road: "LMS Vellayambalam Road", toward: "Vellayambalam" },
                { to: "Palayam", distance: 400, road: "PMG Road", toward: "Thampanoor" }
            ],

            "Pazhakutty": [
                { to: "Nedumangad", distance: 1200, road: "SH2", toward: "Thiruvananthapuram" },
                { to: "Chullimanoor", distance: 5000, road: "SH2", toward: "Palode" },
                { to: "Vembayam", distance: 8000, road: "SH47", toward: "" }
            ],

            "Chullimanoor": [
                { to: "Pazhakutty", distance: 5000, road: "SH2", toward: "Thiruvananthapuram" },
                { to: "Nanniyode", distance: 8400, road: "SH2", toward: "Palode" }
            ],

            "Nanniyode": [
                { to: "Chullimanoor", distance: 8400, road: "SH2", toward: "Thiruvananthapuram" },
                { to: "Palode", distance: 3100, road: "SH2", toward: "Thenmala" }
            ],

            "Palode": [
                { to: "Nanniyode", distance: 3100, road: "SH2", toward: "Thiruvananthapuram" }
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
                { to: "Kollam", distance: 65000, road: "Rail", toward: "Ernakulam" }
            ],

            Kollam: [
                { to: "TVM", distance: 65000, road: "Rail", toward: "TVM" },
                { to: "Kayamkulam", distance: 36000, road: "Rail", toward: "Ernakulam" }
            ],

            Kayamkulam: [
                { to: "Kollam", distance: 36000, road: "Rail", toward: "Kollam" },
                { to: "Ernakulam", distance: 110000, road: "Rail", toward: "Ernakulam" }
            ],

            Ernakulam: [
                { to: "Kayamkulam", distance: 110000, road: "Rail", toward: "Kayamkulam" },
                { to: "Thrissur", distance: 75000, road: "Rail", toward: "Thrissur" }
            ],

            Thrissur: [
                { to: "Ernakulam", distance: 75000, road: "Rail", toward: "Ernakulam" }
            ]
        }
    }

};
