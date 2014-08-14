module.exports = {

    prompts: false,
    outPath: "www/",

    // These are variables will be accessible via our templates
    templateData: {

        // Conference info
        conf: {
        name: "Engineering Powerdays 2014 — Prezi engineers unite!",
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
            //'speakers',
            'location',
            // 'tickets',
            //'sponsors',
            //'organizers',
            'contact'
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
            contact: "Contact"
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
                    time: "09:30 - 10:30",
                    title: "2015 Prezi Engineering strategy - P. HALACSY"
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
                anchor: "AndrewStellman",
                name: "Andrew Stellman",
                photo: "themes/stretchcon/img/andrewstellman.jpg",
                bio: "<p>Andrew is a bestselling O'Reilly author (Beautiful Teams, Head First C#, Head First PMP, Applied Software Project Management), developer, architect, speaker, agile coach, project manager, and general all-around expert in building better software. He has been a Vice President at a major investment bank, architected large-scale real-time back end systems, managed large international software teams, and consulted for companies, schools, and organizations, including Microsoft, the National Bureau of Economic Research, and MIT. He’s had the privilege of working with some pretty amazing programmers during that time, and likes to think that he’s learned a few things from them. Andrew's upcoming book, \"Learning Agile\", will be published by O'Reilly in early 2014.</p>",
                company: "Bestselling O'Reilly Author",
                link: {
                    href: "http://twitter.com/AndrewStellman",
                    text: "@AndrewStellman"
                },
                presentation: {
                    title: "Great teams start with great people, goals, and practices... but is that enough?",
                    description: "What makes great teams great? What brings them together to build great products? Ask a product manager and a project manager, and you'll get two different answers. Ask a hardcore developer and a team lead and you'll get two more. Great teams start with great people, with leaders and visionaries who set challenging and elevating goals, and tough-minded organizers who choose the right practices to build quality software. But is this enough to make a great product? What does it take to make a team gel into a truly collaborative mindset? Find out how great teams are built in this engaging talk from the bestselling O'Reilly author of <i>Beautiful Teams</i>.",
                    day: "Day 1 (Thursday)",
                    time: "15:00 - 15:40",
                }
            },
            {
                anchor: "MichaelLopp",
                name: "Michael Lopp",
                photo: "themes/stretchcon/img/michaellopp.jpg",
                bio: "<p>Michael Lopp is a Silicon Valley-based engineering leader who builds both people and software at companies such as Borland, Netscape, Apple, and Palantir. While he's not worrying about staying relevant, he writes about pens, bridges, people, poker, and werewolves at the popular weblog, Rands in Repose.</p><p>Michael has written two books. \"Being Geek\" is a career handbook for geeks and nerds alike. His first book \"Managing Humans, 2nd Edition\" is a popular guide to the art of engineering leadership and clearly explains that while you might be rewarded for what you build, you will only be successful because of your people. </p><p>Michael surfs, plays hockey, and drinks red wine in the redwoods of Northern California whenever he can because staying sane is more important than staying busy.</p>",
                company: "Author of Managing Humans",
                link: {
                    href: "http://twitter.com/rands",
                    text: "@rands"
                },
                presentation: {
                    title: "Non-intuitive strategies for success",
                    description: "You have a deep desire to build. Every so often, a thing you build creates unexpected value and you discover success. In this talk, I will argue that while your success is satisfying and perhaps profitable, continued success is often dependent on two non-intuitive strategies: hiring people who are willing to disrupt that success and your willingness to throw your success away.",
                    day: "Day 1 (Thursday)",
                    time: "10:00 - 10:40",
                }
            },
            {
                anchor: "AndrewClayShafer",
                name: "Andrew Clay Shafer",
                photo: "themes/stretchcon/img/andrewclayshafer.jpg",
                bio: "<p>Andrew Clay Shafer is regarded as a contributor to whatever 'devops' is and helping spread the body of knowledge now known by this name. As cofounder of Puppet Labs, Andrew help transformed the way people manage IT infrastructure. He popularized the concept of \"infrastructure as code\", and helps to improve IT with both tools and culture. Andrew is most happy when he is learning or teaching.</p>",
                company: "Thought Leaker",
                link: {
                    href: "http://twitter.com/littleidea",
                    text: "@littleidea"
                },
                presentation: {
                    title: "Leading a learning organization",
                    description: "Many management techniques are attempts to maximize productivity or predictability, but most fail to recognized, much less deal with, uncertainty. How good is fast feedback if nothing is learned? What does it mean to learn? People love to measure what they can measure, but does that necessarily lead to better decisions? better understanding? better outcomes? What are the true factors of success and failure?<br/><br/>This presentation will share new and not so new ideas about leadership and organizational learning as a competitive advantage, combining literature and personal experiences with a random walk through Agile, devops, lean startup, cynefin, anti-fragile, game theory, systems thinking, organizational learning and whatever other goodness can be squeezed in.",
                    day: "Day 1 (Thursday)",
                    time: "10:40 - 11:20",
                }
            },
            {
                anchor: "Spotify",
                name: "Brendan Marsh, Kristian Lindwall",
                photo: "themes/stretchcon/img/spotify.jpg",
                bio: "<p><strong>Brendan Marsh</strong> — <a href=\"http://twitter.com/brendanmarsh\">@brendanmarsh</a> — is an Agile Coach in the Infrastructure &amp; Operations tribe at Spotify. An Australian expat, Brendan now lives in Stockholm and coaches teams that build and maintain Spotify's big data infrastructure. Brendan has been coaching &amp; growing teams for the past 5 years.</p><p><strong>Kristian Lindwall</strong> — <a href=\"https://twitter.com/klindwall\">@klindwall</a> — is a Chapter Lead and Agile Coach at Spotify. Kristian has been coaching agile teams for the last 5 years, he is an experienced scrum master, agile coach and development manager.</p>",
                company: "Spotify",
                presentation: {
                    title: "How Agile Coaches help us win—the Agile Coach role at Spotify",
                    description: "At Spotify, we believe that we will win if we can iterate on our product faster than the competition. If we can build our product faster, we can learn faster and thus improve &amp; grow as a company faster than our competitors. We are growing rapidly to make this happen, but how do we ensure that our development teams are happy, high performing and constantly improving? How do we share these learnings with the rest of the business? One of the crucial roles in this endeavour are our Agile Coaches. In this talk, we will present what we believe an Agile Coach is, give some insight into the daily life of an Agile Coach at Spotify &amp; explain why we believe that Agile Coaches help us win.",
                    speakers: [
                        "Brendan Marsh",
                        "Kristian Lindwall"
                    ],
                    day: "Day 1 (Thursday)",
                    time: "12:20 - 13:00",
                }
            },
            {
                anchor: "OrenEllenbogen",
                name: "Oren Ellenbogen",
                photo: "themes/stretchcon/img/orenellenbogen.jpg",
                bio: "<p>Oren Ellenbogen is the curator of the successful newsletter SoftwareLeadWeekly and author of TeamLeadToolbox.</p><p>Oren is also an Engineer at Commerce Sciences (#2 employee), where he focuses on building the company's data infrastructure. Prior to Commerce Sciences, Oren served as Director of Engineering at Delver (acquired by Sears), where he was responsible for the development process, delivering kick-ass products and growing the next generation of Team Leads in his group.</p>",
                company: "Commerce Sciences, Software Lead Weekly",
                link: {
                    href: "http://twitter.com/orenellenbogen",
                    text: "@orenellenbogen"
                },
                presentation: {
                    title: "People don't quit their job, they quit their boss",
                    description: "Ever wondered if there is a way to systematically get better as a manager? What if you could apply concepts such as \"code reviews\" to your managerial decisions? Or--what can you do create happier work environment and better relationship with your teammates?<br/><br/>Managing people is hard, I know because I’m a practitioner, not a theorist. Learn from detailed insights, based on building, growing and mentoring teams and managers over the last 6 years. In this talk, you will learn 5 pragmatic and actionable ways to boost your management skills.",
                    day: "Day 1 (Thursday)",
                    time: "16:00 - 16:40",
                }
            },
            {
                anchor: "DarioNardi",
                name: "Dario Nardi",
                photo: "themes/stretchcon/img/darionardi.jpg",
                bio: "<p>Dario Nardi, PhD is a research fellow and teaching award winner at University of California, Los Angeles. He also heads Radiance House, a books, media, and training company. Dario does hands-on brain research, conducts workshops around the world, and has authored numerous books on personality for organizational development including \"Neuroscience of Personality: Brain-Savvy Insights for All Types of People\". His background includes programming and game design.</p>",
                company: "Radiance House, University of California",
                link: {
                    href: "http://twitter.com/DarioNardi22",
                    text: "@DarioNardi22"
                },
                presentation: {
                    title: "Getting our brains to sing together",
                    description: "How can we make the best use of individuals' talents? Practical knowledge of the brain helps us do that. In my lab, I study people's brain activity as they engage in various solo and group tasks. While we are all equipped with a similar toolkit, we each hone our favorites. Ideally, like a great orchestra, we use our favorites together in highly creative, productive, and friendly ways. As a trainer and a fellow business owner, I will share some key insights and brain-savvy suggestions for working together.",
                    day: "Day 1 (Thursday)",
                    time: "14:20 - 15:00",
                },
            },
            {
                anchor: "SarahNovotny",
                name: "Sarah Novotny",
                photo: "themes/stretchcon/img/sarahnovotny.jpg",
                bio: "<p>Sarah Novotny has recently resigned in order to pursue some personal projects.  She was most recently the CIO for Meteor Entertainment. Novotny has run large scale technology infrastructures as a Systems Engineer and a Database administrator for Amazon.com and the ill fated Ads.com.  In 2001, she founded Blue Gecko, a remote database administration company with two peers from Amazon. Blue Gecko, was sold to DatAvail in 2012. </p><p>Novotny regularly talks about technology infrastructure and geek lifestyle.  She is additionally a program chair for O'Reilly Media's OSCON.   Her technology writing and adventures as well as her more esoteric musings are found at <a href=\"http://sarahnovotny.com\">http://sarahnovotny.com</a>.</p>",
                company: "Meteor Entertainment",
                link: {
                    href: "http://twitter.com/sarahnovotny",
                    text: "@sarahnovotny"
                },
                presentation: {
                    title: "Offer hope to your staff: build a culture of learning",
                    description: "Frustration and disengagement cost businesses real money in lost productivity and turnover everyday.  In the technology industry, we know that skills we have today will be obsoleted in a year and entire new disciplines will exist in three years.   We also know that happy, growing, engaged staff are the best path to success.  Let's talk about how you as a leader encourage and foster an environment that rewards learning while meeting business needs.",
                    day: "Day 2 (Friday)",
                    time: "10:00 - 10:40",
                }
            },
            {
                anchor: "AlexanderGrosse",
                name: "Alexander Grosse",
                photo: "themes/stretchcon/img/alexandergrosse.jpg",
                bio: "<p>Alexander is currently VP Engineering at SoundCloud, the world’s leading social sound platform. Before SoundCloud he worked as R&amp;D director at Nokia, where he headed Places Development at Nokia’s Location Services and had overall responsibility for the Operations department. Alexander has worked in a wide range of positions (Development, Consulting, CTO) in the software industry since 1996, including co-founding two start-ups.He holds a Masters in computer science from the University of Oldenburg and an Executive MBA from FOM Berlin. Besides computer science Alexander works(ed) as a techno DJ in Berlin’s party scene.</p>",
                company: "SoundCloud",
                link: {
                    href: "http://twitter.com/klangberater",
                    text: "@klangberater"
                },
                presentation: {
                    title: "CANCELLED—Lessons learned from scaling SoundCloud",
                    description: "SoundCloud has grown from 40 to over 200 employees in a little more than 2 years while more than doubling the traffic to the site each year. How do you keep and develop a company culture while growing that fast? How do you make sure that you build the best teams? Additionally there is suddenly something called management. This talk will give an overview of the successes and failures experienced during that time.",
                    day: "Day 2 (Friday)",
                    time: "12:20 - 13:00"
                }
            },
            {
                anchor: "AnnemieRess",
                name: "Annemie Ress",
                photo: "themes/stretchcon/img/annemieress.jpg",
                bio: "<p>Annemie Ress is the Founder of PurpleBeach, which is a forum that encourages diversity of thinking and promotes the topic of people innovation. Accepting that innovation in business is underpinned by people, PurpleBeach acts as catalyst for change at the intersection between business and people.</p><p>Annemie has wide ranging experience in designing and implementing significant organizational change and transformation in multi-national businesses including: innovation and people and focusing on future trends as they specifically impact leadership, talent, culture, diversity and complexity.</p>",
                company: "Purple Beach",
                link: {
                    href: "",
                    text: ""
                },
                presentation: {
                    title: "PostCards from the Future: Tipis for overcoming barriers to innovation",
                    description: "In August 2013 PurpleBeach locked 10 people in a room for 10 hours. Their purpose was to identify 10 new, actionable insights to help organisations unlock and embed sustainable innovation in their day-to-day operations. The taskforce comprised a diverse group of innovators, business leaders, academics and authors. Each participant was an expert in the field of innovation, having worked in and led some of the world’s most dynamic and creative organisations.<br/><br/>The group was tasked with filtering, analysing and responding to opinion shared through The PurpleBeach Innovation Garden, an open-access research project that used social technologies to source insight into the barriers organisations face driving innovation and solutions for overcoming them. This new way of uncovering opinion through a collaborative approach is helping to change the way forward thinking businesses engage in discussions and is in itself a demonstration of innovation in action.<br/><br/>The session with Annemie will  detail 10 new actions that will help unlock innovation in any organisation, it points to three additional themes – fear, language and motivation – that have a major impact on the ability of organisations to unlock or sustainably embed a culture of innovation.",
                    day: "Day 2 (Friday)",
                    time: "11:40 - 12:20",
                }
            },
            {
                anchor: "SarivanPoelje",
                name: "Sari van Poelje",
                photo: "themes/stretchcon/img/sarivanpoelje.jpg",
                bio: "<p>Sari has 25 years experience of innovation on the interface of leadership and organizational development, executive coaching and transactional analysis both as a director within several multinationals and as an international consultant. Her specialties are organizational development, leadership development, performance management, and executive coaching.</p>",
                company: "Intact",
                link: {
                    href: "http://twitter.com/Intact1com",
                    text: "@Intact1com"
                },
                presentation: {
                    title: "Building great agile teams",
                    description: "The time of the great leader is over. In these turbulent times a great team is needed to lead a company to success. I will talk about the five conditions to build a team: purpose, interdependency, cooperation, anticipation and innovation.",
                    day: "Day 2 (Friday)",
                    time: "14:20 - 15:00"
                }
            },
            {
                anchor: "AndreasEhn",
                name: "Andreas Ehn",
                photo: "themes/stretchcon/img/andreasehn.jpg",
                bio: "<p>Andreas is Wrapp's co-founder and chief technology officer (CTO). Previously he was Spotify’s first employee and CTO, where he brought together the world-class tech team that designed and built the platform and product for the music service. Before that he worked for the Swedish online-gaming company Stardoll. Andreas is a board member and angel investor in several companies, and he is frequently hired as an advisor by promising Internet start-ups and venture capital funds.</p>",
                company: "Wrapp",
                link: {
                    href: "http://twitter.com/ehn",
                    text: "@ehn"
                },
                presentation: {
                    title: "The role of the manager in modern tech organizations",
                    description: "Traditionally decisions were made by managers and implemented by workers, but as more and more teams discover, that's not always the best way to get great results. As creativity becomes more important, systems more complex and a new generation of engineers demand more influence over their work, the benefits increase of pushing decision making to the people with the most domain knowledge rather than the generalist managers. But what, then, becomes the role of the manager, and how do you still work together towards a common goal and keep all the departments in a company on the same page?",
                    day: "Day 2 (Friday)",
                    time: "10:40 - 11:20",
                }
            },
            {
                anchor: "DenesKemeny",
                name: "Dénes Kemény",
                photo: "themes/stretchcon/img/kemenydenes.jpg",
                bio: "<p>Dénes Kemény is a former Hungarian water polo player who was the trainer and president of the Hungarian National Men Water Polo Team from 1997 to 2012. During his reign the Hungarian team won three Olympic golds in a row between 2000 and 2008. He was granted Hungarian Sport President of the Year award five times. He's the author of the book \"Kemény üzenetek\" where he shares his thoughts on team building and leadership.</p>",
                company: "former president of the Hungarian National Men Water Polo Team",
                presentation: {
                    title: "CANCELLED—The Kemény method",
                    description: "",
                    day: "Day 2 (Friday)",
                    time: "15:50 - 16:30"
                }
            },
            {
                anchor: "EPAM",
                name: "Attila Bozsó, Balázs Fejes",
                photo: "themes/stretchcon/img/balazsfejes.jpg",
                bio: "<p><strong>Attila Bozso</strong> is the Director of Hungarian Operations at EPAM Systems. He is managing the Hungarian entity and was one of the key driver to  build EPAM Hungary from 160 small company to over an 1000+ people operation as of today. His current focus is how to scale the growth further and how to introduce and roll out new or best practices to 10,000 organization spread over several countries and different cultures.</p><p><strong>Balazs Fejes</strong> (FB2) is the Director of Product Management at EPAM Systems, leading internal product development efforts at EPAM as well as advising a wide range of international clients on project planning, product design, and development processes. His current focus is on building xPMC, EPAM’s next-gen software development lifecycle management toolchain.</p><p>EPAM is the #1 software services and solutions provider from Central and Eastern Europe, listed on the NYSE since 2012. It has been named #2 on the list of America’s Best Small Companies: 20 Fast-Growing Tech Stars released by Forbes on October 9, 2013.</p><p>You might also know Balazs from his podcasts, recorded in his home studio, where he's producing some of the most popular online radio shows in Hungary, including the technology-focused interview show 01beszélgetések, the literary podcast Hármas Könyvelés, and Konnektor, the weekly gaming podcast.</p>",
                company: "EPAM Systems",
                presentation: {
                    title: "The EPAM way managing from 0 to the Dow Jones",
                    description: "Attila and Balazs will share their experiences about growing EPAM’s Hungarian presence from zero to almost a thousand employees, and the key challenges along the way, focusing on regional particularities, working from the local talent pool. How do you kickstart a startup and recruit key talent before you have a business? How do you transition rockstar developers into leadership roles? How do you build out middle management in an international organization? Scaling, growing, stretching everybody’s comfort zone along the way.",
                    day: "Day 2 (Friday)",
                    time: "15:00 - 15:40",
                    speakers: [
                        "Balázs Fejes",
                        "Attila Bozsó"
                    ]
                }
            },
            {
                anchor: "FrancoisMazoudier",
                name: "Francois Mazoudier",
                photo: "themes/stretchcon/img/francoismazoudier.jpg",
                bio: "<p>Francois Mazoudier is the co-founder and Managing Partner of Tech Leaders Capital, a tech CEO co-investment club. He has 20 years+ experience in TMT (Technology, Media and Telecom), early stage Venture Capital and M&amp;A.</p><p>He spent half of his career in operational roles (from product management to customer services to sales and marketing) then senior management functions, all within TMT firms. Examples include Central Point Software (sold to Symantec - Product Marketing), RealNetworks (IPO – Head of Marketing, founding team, from startup to IPO), The Cloud (WiFi operator network, sold to SKY CORP - Marketing Head) and PictureTel (Videoconferencing, Channel Marketing, Business Development - IPO, now Polycom).</p><p>He spent the second part of his career in Private Equity. He was the co-founder of Speed Ventures, a $100m pan-European seed stage Venture Capital firm backed by Soros Partners and Permira (sold in 2001), then helped VC funds with the operational turnaround of underperforming investments before setting up EQUATE, a specialist boutique advisory firm helping TMT firms through growth, funding and strategic transactions. Francois also remains a Venture Partner for LD&amp;A, a pan-European tech M&amp;A advisory and corporate finance firm.</p><p>Francois is an active advisor, board mentor and early stage investor.</p><p>Francois speaks French, English, German and some Spanish and has lived in even more countries; he holds a BA in Sales &amp; Marketing from the University of Paris. He loves tennis, travel, epicurean pleasures and constant change. He hates stagnation, London’s weather, his total lack of work-life balance and pomp.</p>",
                company: "EQUATE, LD&A",
                link: {
                    href: "http://twitter.com/franco1s",
                    text: "@franco1s"
                },
                presentation: {
                    title: "Does your team fit? From Idea to International Success, practical tips and lessons learnt",
                    description: "Getting a business off the ground and lead it to a successful take-off is tough. Real tough. The late nights, the cheap food, the ever changing business models and the many disappointments. Yet one of the most valuable, and rewarding, parts of being the CEO is the construction of the team. I’ve built some companies, some from the very inception all the way to an IPO, and some straight into the proverbial wall. I will share some of the stories I’ve come across, some academic models I’ve come to develop and some real life examples.",
                    day: "Day 1 (Thursday)",
                    time: "11:40 - 12:20",
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
