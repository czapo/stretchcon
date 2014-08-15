module.exports = {

    prompts: false,
    outPath: "www/",

    // These are variables will be accessible via our templates
    templateData: {

        // Conference info
        conf: {
        name: "Engineering Powerdays 2014   -   Prezi engineers unite!  -   5-7 November",
            tagline: "Leadership and management conference",
            description: "An event to bring Prezi engineers closer to each other. We are around 100 already which makes it harder and harder to still be aware who is working on what. The goal is to get to know fellow engineers from other teams/clusters. Also there is a great amount of knowledge in this group so why not share it with each other? Our assumption is that we can have more relevant and more interesting presentations than any other conference! However we need you to prove this :)",
            date: "December 4-5, 2014",
            price: "$???",
            venue: "Prezi House of Ideas",
            address: "1065 Nagymezo Way 54-56",
            city: "Budapest",
            state: "Hungary",
            latitude: "47.495632",
            longitude: "19.065138"
        },

        // Site info
        site: {
            theme: "stretchcon",
            url: "http://stretchcon.com/2014/",
            googleanalytics: "UA-43412556-1"
        },

        // Active sections on the website
        // to deactivate comment out with '//'
        // you can also change order here and it will reflect on page
        sections: [
            //'summary',
            //'photos',
            'about',
            'schedule',
            'contact',
            'speakers',
            'location'
            // 'tickets',
            //'sponsors',
            //'organizers',
            
        ],

        // Labels which you can translate to other languages
        labels: {
            about: "About",
            location: "Location",
            speakers: "Speakers",
            schedule: "Schedule",
            tickets: "Tickets",
            sponsors: "Sponsors",
            organizers: "Organizers",
            contact: "Call for action"
        },

        schedule: [
            {
                header: "Day 1 (Conference)",
                slots: [
                    {
                    time: "09:30 - 09:45",
                    title: "Welcome"
                    },
                    {
                    time: "09:45 - 10:30",
                    title: "2015 Prezi Engineering strategy - P. Halacsy"
                    },
                    {
                    time: "10:30 - 10:40",
                    title: "Break"
                    },
                    {
                    time: "10:40 - 11:00",
                    title: "Presentation"
                    },
                    {
                    time: "11:00 - 11:20",
                    title: "Presentation"
                    },
                    {
                    time: "11:20 - 11:40",
                    title: "Presentation"
                    },
                    {
                    time: "11:40 - 11:50",
                    title: "Break"
                    },
                    {
                    time: "11:50 - 12:10",
                    title: "Presentation"
                    },
                    {
                    time: "12:10 - 12:30",
                    title: "Presentation"
                    },
                    {
                    time: "12:30 - 12:50",
                    title: "Presentation"
                    },
                    {
                    time: "12:50 - 14:00",
                    title: "Lunch"
                    },
                    {
                    time: "14:00 - 14:20",
                    title: "Presentation"
                    },
                    {
                    time: "14:20 - 14:40",
                    title: "Presentation"
                    },
                    {
                    time: "14:40 - 15:00",
                    title: "Presentation"
                    },
                    {
                    time: "15:00 - 15:10",
                    title: "Break"
                    },
                    {
                    time: "15:10 - 15:30",
                    title: "Presentation"
                    },
                    {
                    time: "15:30 - 15:50",
                    title: "Presentation"
                    },
                    {
                    time: "15:50 - 16:10",
                    title: "Presentation"
                    },
                    {
                    time: "16:10 - 16:20",
                    title: "Break"
                    },
                    {
                    time: "16:20 - 16:40",
                    title: "Presentation"
                    },
                    {
                    time: "16:40 - 17:00",
                    title: "Presentation"
                    },
                    {
                    time: "17:00 - 17:15",
                    title: "Closing"
                    }



                        ]
            },
                {
                   header: "Day 2-3 (Hackathon)",
                   slots: [
                           {
                           time: "09:30 - 09:45",
                           title: "Welcome"
                           },
                           {
                           time: "09:45 - 02:45",
                           title: "Hackathon"
                           },
                           {
                           time: "16:00 - 16:15",
                           title: "Closing"
                           }
                           ]
                   },
        ],

        // Speakers and talks
        speakers: [
            {
                anchor: "PeterHalacsy",
                name: "Peter Halacsy",
                photo: "themes/stretchcon/img/peterhalacsy.jpg",
                bio: "<p>I'm CTO and founder of Prezi, a fast growing startup changing how people share ideas.  I build the organization, stretch engineers, and code in Haskell for a better life. I care about entrepreneurship in Europe especially in Hungary. I believe that Budapest is going to be a one of the best places for high-tech startup.</p>",
                company: "Prezi",
                link: {
                    href: "http://twitter.com/halacsy",
                    text: "@halacsy"
                },
                presentation: {
                    title: "2015 Prezi Engineering strategy",
                    description: "",
                    day: "Day 1",
                    time: "9:45 - 10:30",
                }
            }
        ],

        eventorganizers: [
            {
                name: "Medea Baccifava, event organizer",
                photo: "themes/stretchcon/img/medeabaccifava.jpg",
                bio: "I am an innovative professional working in advisory and international marketing positions in Europe and Asia. In current position at Prezi, I deliver small- and large-scale projects, from optimization to communication, handling international events like mloc.js, RAMP and Stretch.",
                company: "Prezi",
                link: {
                    href: "http://twitter.com/Medea_Baccifava",
                    text: "@Medea_Baccifava"
                },
            },
            {
                name: "Gábor Török, program chair, chief organizer",
                photo: "themes/stretchcon/img/gabortorok.jpg",
                bio: "I'm engineer manager at Prezi. I work on creating company culture and scaling engineering. I enjoy working in agile teams. I'm passionate about process improvements, continuous delivery and acceptance test driven development, and people management. I strongly believe knowledge belongs to everyone hence I regularly organise tech meetups in Budapest to help people share ideas.",
                company: "Prezi",
                link: {
                    href: "http://twitter.com/processpirate",
                    text: "@processpirate"
                },
            },
            {
                name: "Gergely Hodicska, program committee",
                photo: "themes/stretchcon/img/gergelyhodicska.jpg",
                bio: "I am the Senior Engineering Manager at Ustream and I oversee all site, streaming, and infrastructure teams. Early on, I specialized in building and operating large scale web applications, including the design and development of several Alexa Top 100 sites. Nowadays I focus on improving the way we develop at Ustream, creating effective processes and building a culture where our engineers can not just continuously deliver but also continuously improve. I strongly believe in teamwork, devops and lifelong learning.",
                company: "Ustream",
                link: {
                    href: "http://twitter.com/felhobacsi",
                    text: "@felhobacsi"
                },
            },
            {
                name: "Gábor Vészi, program committee",
                photo: "themes/stretchcon/img/gaborveszi.jpg",
                bio: "I'm responsible for the teams that manage Prezi's critical backend systems. I'm passionate about availability, scalable architectures, automation, metrics, and bridging the gap between development and operations.",
                company: "Prezi",
                link: {
                    href: "http://twitter.com/veszig",
                    text: "@veszig"
                },
            },
            {
                name: "Péter Halácsy, program committee",
                photo: "themes/stretchcon/img/peterhalacsy.jpg",
                bio: "I'm CTO and founder of Prezi, a fast growing startup changing how people share ideas.  I build the organization, stretch engineers, and code in Haskell for a better life. I care about entrepreneurship in Europe especially in Hungary. I believe that Budapest is going to be a one of the best places for high-tech startup.",
                company: "Prezi",
                link: {
                    href: "http://twitter.com/halacsy",
                    text: "@halacsy"
                },
            },
        ],

        // List of Sponsors
        sponsors: [
            {
                name: "LogMeIn",
                logo: "themes/stretchcon/img/logmein.jpg",
                url: "http://www.logmein.com/"
            },
            {
                name: "UPC",
                logo: "themes/stretchcon/img/upcbusiness.jpg",
                url: "http://www.upc.hu/"
            },
            {
                name: "avec accelerator",
                logo: "themes/stretchcon/img/avec.png",
                url: "http://avecincubator.com/"
            },
            {
                name: "Kürt Akadémia",
                logo: "themes/stretchcon/img/kurtakademia.png",
                url: "http://www.kurt-akademia.hu/"
            }
        ],

        // List of Partners
        partners: [
            {
                name: "InfoQ",
                logo: "themes/stretchcon/img/infoq.png",
                url: "http://infoq.com"
            },
            {
                name: "Software Lead Weekly",
                logo: "themes/stretchcon/img/softwareleadweekly.jpg",
                url: "http://softwareleadweekly.com/"
            },
            {
                name: "ComputerWorld Számítástechnika",
                logo: "themes/stretchcon/img/computerworld.jpg",
                url: "http://computerworld.hu/"
            },
            {
                name: "popforms",
                logo: "themes/stretchcon/img/popforms_logo.png",
                url: "https://popforms.com/"
            },
            {
                name: "O'Reilly",
                logo: "themes/stretchcon/img/oreilly.jpg",
                url: "http://www.oreilly.com/"
            },
            {
                name: "Napi.hu",
                logo: "themes/stretchcon/img/napihu.jpg",
                url: "http://www.napi.hu/"
            },
            {
                name: "Budapest Business Jourbnal",
                logo: "themes/stretchcon/img/bbj_logo.jpg",
                url: "http://www.bbj.hu/"
            },
            {
                name: "Figyelő",
                logo: "themes/stretchcon/img/figyelo.jpg",
                url: "http://figyelo.hu/"
            },
            {
                name: "HWSW",
                logo: "themes/stretchcon/img/hwsw.jpg",
                url: "http://www.hwsw.hu/"
            },
            {
                name: "VS",
                logo: "themes/stretchcon/img/vslogo.png",
                url: "http://vs.hu/"
            },
            {
                name: "Haszon",
                logo: "themes/stretchcon/img/haszon.png",
                url: "http://www.haszon.hu/"
            },
            {
                name: "Üzlet & Pszichológia",
                logo: "themes/stretchcon/img/upszi.png",
                url: "http://www.upszi.hu/"
            }
        ],

        // List of Organizers
        organizers: [
            {
                name: "Prezi",
                logo: "themes/stretchcon/img/prezi.jpg",
                url: "http://prezi.com"
            },
            {
                name: "USTREAM",
                logo: "themes/stretchcon/img/ustream.jpg",
                url: "http://ustream.com/"
            }
        ],

        // Theme path
        getTheme: function() {
            return "themes/" + this.site.theme;
        }
    }
};
