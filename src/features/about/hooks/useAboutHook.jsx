import React from 'react'

const useAboutHook = () => {
    const arrayHistory = [
        { id: 1, year: '1940s', url: '/about/1940s' },
        { id: 2, year: '1950s', url: '/about/1950s' },
        { id: 3, year: '1960s', url: '/about/1960s' },
        { id: 4, year: '1970s', url: '/about/1970s' },
        { id: 5, year: '1980s', url: '/about/1980s' },
        { id: 6, year: '1990s', url: '/about/1990s' },
        { id: 7, year: '2000s', url: '/about/2000s' },
        { id: 8, year: '2010s', url: '/about/2010s' },
        { id: 9, year: '2020s', url: '/about/2020s' }
    ]

    const flatpackData = [
        {
            image: 'https://ikeamuseum.com/wp-content/uploads/2021/05/im-1950_flatpack_feed_43_article-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D',
            title: 'Flatpacks',
        },
        {
            image: 'https://ikeamuseum.com/wp-content/uploads/2021/05/im-1950_flatpack_feed_43_game-768x580.png?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D',
            title: 'Flatpacks challenge',
        },
    ];

    
    const historyData = [
        {
            id: 1,
            title: 'Cześć, Polsko!',
            description: 'Swedish manufacturers did not have the capacity to meet Ingvar Kamprad’s demand. And a lot of the Swedish...',
            imageUrl: 'https://ikeamuseum.com/wp-content/uploads/2021/06/im-1960-czesc-polsko-01-ft-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'
        },
        {
            id: 2,
            title: 'First store abroad',
            description: 'IKEA went international and opened a store in Norway. But how did that decision come about? Through a...',
            imageUrl: 'https://ikeamuseum.com/blobiicsikeamu4941109594/wp-content/uploads/2021/06/im-1960-first-store-abroad-01-ft-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'
        },
        {
            id: 3,
            title: 'Dear Brita!',
            description: 'At the end of the 1950s, the IKEA catalogues looked completely different to the later editions, with their styled home...',
            imageUrl: 'https://ikeamuseum.com/blobiicsikeamu4941109594/wp-content/uploads/2022/09/im-1960-roomsettingsbrita-01-ft-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'
        },
        {
            id: 4,
            title: 'Quality',
            description: 'In September 1964, a sensational article was published in a Swedish interior design magazine, claiming that a 33...',
            imageUrl: 'https://ikeamuseum.com/blobiicsikeamu4941109594/wp-content/uploads/2021/04/ikea-testing-room-furniture-durability-store-1960s-768x432.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'
        },
        {
            id: 5,
            title: 'More than a low price',
            description: 'IKEA is a balancing act between seemingly conflicting ambitions. Sales machine or inspiration? Business or...',
            imageUrl: 'https://ikeamuseum.com/blobiicsikeamu4941109594/wp-content/uploads/2021/05/fd-morethanalowprice-featured-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'
        },
        {
            id: 6,
            title: 'Ingvar in America',
            description: 'In the early 1960s, Ingvar Kamprad started planning for further expansion of IKEA in Scandinavia and the wider world...',
            imageUrl: 'https://ikeamuseum.com/blobiicsikeamu4941109594/wp-content/uploads/2021/06/im-1960-ingvar-in-america-01-ft-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'
        }
    ];

    const mediaData = [
        {
            id: 1,
            src: 'https://ikeamuseum.com/wp-content/uploads/2021/05/fd-1960s-productstories-featured-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D',
            alt: 'Product Stories 1960s',
            title: 'Product Stories 1960s',
            width: 2000,
            height: 2000,
        },
        {
            id: 2,
            src: 'https://ikeamuseum.com/wp-content/uploads/2021/06/im-1960-interiors-01-ft-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D',
            alt: 'Life at home 1960s',
            title: 'Life at home 1960s',
            width: 1000,
            height: 1000,
        },
        {
            id: 3,
            src: 'https://ikeamuseum.com/wp-content/uploads/2023/06/1960-1-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D',
            alt: '1960s IKEA catalogues',
            title: '1960s IKEA catalogues',
            width: 1000,
            height: 1000,
        },
    ];

    const ikeaImages = [
        {
            title: "IKEA in Stockholm",
            description: "A king, a fire, and a brand new IKEA.",
            src: "https://ikeamuseum.com/wp-content/uploads/2021/04/aerial-photo-ikea-kungens-kurva-stockholm-sweden-1960s-768x432.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D"
        },
        {
            title: "Textile Revolution",
            description: "Hanging on by a thread.",
            src: "https://ikeamuseum.com/wp-content/uploads/2023/03/ikea-textil-tyg-overkast-monster-daisy-1974-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D"
        },
        {
            title: "Textiles at IKEA 1965–1984",
            description: "That’s not terribly ugly.",
            src: "https://ikeamuseum.com/wp-content/uploads/2023/03/im-1960-textiles-at-ikea-1965-1984-01-ft-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D"
        }
    ];

    
    
    return {
        arrayHistory, flatpackData,

    }
}

export default useAboutHook
