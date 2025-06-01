const config = {
    domain: "stoic.so",
    title: "Stoic Labs | Venture Studio",
    description: "Stoic Labs is an indie venture studio of micro-saas products and Shopify Apps.",

    socials: {
        linkedin: "https://www.linkedin.com/company/stoiclabs/",
    },

    contents: {
        title: "Indie Venture Studio",
        markOfTitle: "Stoic Labs", // its for marking the title. The text must contain on title. If not, it will be ignored.
        description: `Stoic Labs is an indie venture studio of micro-SaaS products and Shopify Apps.`,

        about: [
            {
                id: 1,
                emoji: "⚒️",
                title: "Buy > Build",
                description: "We mostly focus on buying existing assets, improve them and grow them to be profitable."
            },
            {
                id: 2,
                emoji: "🚀",
                title: "Improve Go-To-Market",
                description: "We improve the go-to-market strategy of the acquired companies to increase the chances of success."
            },
            {
                id: 3,
                emoji: "🌱",
                title: "Long-term Thinking",
                description: "We're not looking for quick exits. We're looking for long-term value creation."
            }
        ],

        howWorks: [
            {
                title: "Ideation & Validation",
                description: "We identify market opportunities and validate ideas through rigorous research and Stoic-inspired strategic thinking."
            },
            {
                title: "Company Formation",
                description: "Our team works hands-on to build companies from the ground up, providing initial capital, talent, and operational expertise."
            },
            {
                title: "Growth & Scale",
                description: "We support our portfolio companies with continued investment, strategic guidance, and access to our network of advisors and partners."
            },
            {
                title: "Philosophy Integration",
                description: "We help embed Stoic principles into company culture and decision-making processes for sustainable, ethical growth."
            },
            {
                title: "Exit Strategy",
                description: "When the time is right, we help our companies achieve successful exits while maintaining their core values and mission."
            },
        ],

        price: {
            description: "Partner with us to build the next generation of philosophy-driven companies. We're always looking for exceptional founders and innovative ideas.",
            price: "Partnership",

            advantages: ['Hands-on venture studio support', 'Access to experienced operators and advisors', 'Philosophy-driven company culture', 'Long-term strategic thinking', 'Sustainable growth focus', 'Network of like-minded entrepreneurs']
        },

        faq: [
            {
                question: "What price point are you focusing on?",
                answer: "Generally focused on assets below $200k."
            },
            {
                question: "Do you have any revenue requirements?",
                answer: "We usually look for at least $40k in ARR. We sometimes considere pre-rev assets depending on the potential and how well it aligns with our strategy."
            },
            {
                question: "What multiples do you pay?",
                answer: "Usually 3-3.5x on revenue."
            },
            {
                question: "B2B or B2C?",
                answer: "We only focus on B2B at the moment. If you have a B2C asset but can be easily pivoted to B2B, we're still interested."
            },
            {
                question: "Are you looking for any specific verticals or niches?",
                answer: "We're primarily interested in small edtech and prop-tech SaaS, and Shopify apps"
            },
        ]
    }
}


export default config;