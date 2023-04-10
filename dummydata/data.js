const bollywood=(req,res)=>{
res.send([
    {
        "id":1,
        "category":"bollywood",
        "imageurl":"https://m.media-amazon.com/images/M/MV5BM2QzM2JiNTMtYjU4Ny00MDZkLTk3MmUtYTRjMzVkZGJlNmYyXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg",
        "name":"pathaan",
        "discription":"Pathaan is a 2023 Indian Hindi-language action thriller film directed by Siddharth Anand and produced by Aditya Chopra of Yash Raj Films."
    },
    {
        "id":2,
        "category":"bollywood",
        "imageurl":"https://m.media-amazon.com/images/M/MV5BZjY2MmI1ZWItNmU0Yy00NTdkLWJiYmQtNzFlZWNlMzkxZTZjXkEyXkFqcGdeQXVyNjkwOTg4MTA@._V1_FMjpg_UX1000_.jpg",
        "name":"Brahmāstra",
        "discription":"Ranbir Kapoor as Shiva, Amrita's son; an orphan and newly recruited member of the Brahmānsh, who possesses the power of the Agniastra"
    },
    {
        "id":3,
        "category":"bollywood",
        "imageurl":"https://m.media-amazon.com/images/M/MV5BMWU1NDlkZGYtMDM4Yi00MGU5LWE0YzEtMjEyNjJkY2YxOGY1XkEyXkFqcGdeQXVyMTE0MTY2Mzk2._V1_.jpg",
        "name":"Ram Setu",
        "discription":"The bridge of Ramais a 2022 Indian Hindi-language action-adventure film directed by Abhishek Sharma."
    },
    {
        "id":4,
        "category":"bollywood",
        "imageurl":"https://i.ytimg.com/vi/VgGgYOzNWno/maxresdefault.jpg",
        "name":"HIT: The First Case",
        "discription":"HIT: The First Case is a 2022 Indian Hindi-language action suspense-thriller film written and directed by Sailesh Kolanu, being a remake of his 2020 Telugu film"
    },
    {
      "id":5,
      "category":"bollywood",
      "imageurl":"https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/RRR_Poster.jpg/220px-RRR_Poster.jpg",
      "name":"RRR",
      "discription":"RRR is a 2022 Indian Telugu-language epic action drama film directed by S. S. Rajamouli, who co-wrote the film with V. Vijayendra Prasad."
  },
  {
    "id":6,
    "category":"bollywood",
    "imageurl":"https://assets.gadgets360cdn.com/pricee/assets/product/202205/Gangubai_Kathiawadi_poster_1652093021.jpeg",
    "name":"Gangubai Kathiawadi",
    "discription":"Gangubai Kathiawadi is a 2022 Indian Hindi-language biographical crime drama film directed by Sanjay Leela Bhansali"
}

])
}

const hollywood=(req,res)=>{
    res.send([
        {
        "id":1,
        "category":"hollywood",
        "imageurl":"https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg",
        "name":"Avatar",
        "discription":"Avatar: The Way of Water is a 2022 American epic science fiction film directed and produced by James Cameron. He co-wrote the screenplay with Rick Jaffa and ..."
    },
    {
        "id":2,
        "category":"hollywood",
        "imageurl":"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/7e4a84be2222aa08a716323dcddaa060a66db7dd6bcfd969bf86cf37731baf1e._RI_V_TTW_.jpg",
        "name":"Hobs And Shaw",
        "discription":"Fast & Furious Presents: Hobbs & Shaw is a 2019 American buddy action comedy film directed by David Leitch and written by Chris Morgan and Drew Pearce"
    },
    {
        "id":3,
        "category":"hollywood",
        "imageurl":"https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
        "name":"Avengers",
        "discription":"Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers"
    },
    {
        "id":4,
        "category":"hollywood",
        "imageurl":"https://m.economictimes.com/thumb/height-450,width-600,imgsize-80252,msid-88317664/spider-man-no-way-home-is-also-driving-more-mentions-and-conversations-on-social-media-than-any-other-pandemic-era-release-.jpg",
        "name":"Spider Man",
        "discription":">Spider-Man: No Way Home is a 2021 superhero film, based on the Marvel Comics superhero of the same name. The film is a sequel to Spider-Man: Homecoming and ..."
    },
    {
        "id":5,
        "category":"hollywood",
        "imageurl":"https://lumiere-a.akamaihd.net/v1/images/p_drstrangeinthemultiverseofmadness_245_476cabb1.jpeg",
        "name":"Docter Strange",
        "discription":"Doctor Strange in the Multiverse of Madness is a 2022 American superhero film based on Marvel Comics featuring the character Doctor Strange."
    },
    {
        "id":6,
        "category":"hollywood",
        "imageurl":"https://lumiere-a.akamaihd.net/v1/images/pp_disney_blackpanther_wakandaforever_1289_d3419b8f.jpeg",
        "name":"Wakanda Forever",
        "discription":"Black Panther: Wakanda Forever is a 2022 American superhero film based on the Marvel Comics character Black Panther."
    }
    ])}

const technology=(req,res)=>{
    res.send([
       {
        "id":1,
        "category":"technology",
        "imageurl":"https://d1m75rqqgidzqn.cloudfront.net/wp-data/2019/09/11134058/What-is-data-science-2.jpg",
        "name":"Data Science",
        "discription":"Data science combines math and statistics, specialized programming, advanced analytics, artificial intelligence (AI), and machine learning with specific ..."
    },
    {
        "id":2,
        "category":"technology",
        "imageurl":"https://www.qualitydevs.com/wp-content/uploads/2017/12/desarrollador-1288x724.jpg",
        "name":"Developer",
        "discription":"Developers, also known as software developers or computer programmers, are responsible for developing, coding, installing, and maintaining software systems."
    },
    {
        "id":3,
        "category":"technology",
        "imageurl":"https://nypost.com/wp-content/uploads/sites/2/2022/02/artificial-intelligence-210713-comp.jpg?quality=75&strip=all",
        "name":"Artificial intelligence",
        "discription":"Artificial intelligence (AI) is intelligence—perceiving, synthesizing, and inferring information—demonstrated by machines, as opposed to intelligence ..."
    },
    {
        "id":4,
        "category":"technology",
        "imageurl":"https://cache.careers360.mobi/media/presets/860X430/presets/860X430/article_images/2020/4/3/B.tech-in-robotics-engineeirng.webp",
        "name":"Robotics",
        "discription":"Robotics is a branch of engineering that involves the conception, design, manufacture and operation of robots."
    },
    {
        "id":5,
        "category":"technology",
        "imageurl":"https://www.iiad.edu.in/wp-content/uploads/2022/02/1-1024x682.webp",
        "name":"UI/UX design",
        "discription":"UI/UX design aims to create a positive user experience that encourages customers to stick with a brand or product"
    }
    ])}

const fitness=(req,res)=>{
    res.send([
        {
        "id":1,
        "category":"fitness",
        "imageurl":"https://wallpaperaccess.com/full/1108004.jpg",
        "name":"WORKOUTS",
        "discription":"A gymnasium, also known as a gym, is an indoor location for athletics. The word is derived from the ancient Greek term "
    },
    {
        "id":2,
        "category":"fitness",
        "imageurl":"https://yoga.ayush.gov.in/public/assets/front/img/gallery/3.1.jpg",
        "name":"YOGA",
        "discription":"Yoga is a group of physical, mental, and spiritual practices or disciplines which originated in ancient India and aim to control (yoke) and still the mind"
    },
    {
        "id":3,
        "category":"fitness",
        "imageurl":"https://images.everydayhealth.com/images/consisten-exercise-helps-anxiety-and-stress-1440x810.jpg",
        "name":"EXCERSICE",
        "discription":"Moderate aerobic exercise includes activities such as brisk walking, biking, swimming and mowing the lawn. Vigorous aerobic exercise includes activities"
    },
    {
        "id":4,
        "category":"fitness",
        "imageurl":"https://i0.wp.com/skill-yoga.blog/wp-content/uploads/2021/07/balance1.jpg?resize=900%2C600&ssl=1",
        "name":"Flexibility and Balance",
        "discription":"Many people lose flexibility and balance with age,” Duffy says. “When your flexibility decreases the integrity of your joints are compromised leading to joint injuries"
    },
    {
        "id":5,
        "category":"fitness",
        "imageurl":"https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/b858f2bd-d574-4147-ad85-4fb7e6c397b6/how-to-find-your-optimal-running-paces.jpg",
        "name":"Running",
        "discription":"Running is a method of terrestrial locomotion allowing humans and other animals to move rapidly on foot."
    }
    ])}

const food=(req,res)=>{
    res.send([
        {
        "id":1,
        "category":"food",
        "imageurl":"https://assets.limetray.com/assets/user_images/menus/compressed/1636789829_Tandoorichickennew.jpg",
        "name":"Biryani",
        "discription":"Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent as a variety of Persian pilaf."
    },
    {
        "id":2,
        "category":"food",
        "imageurl":"https://cdn3.mydukaan.io/app/image/700x700/?url=https://mydukaan-prod-new.s3.amazonaws.com/404307/a32fce5e-7e7a-4c2c-806b-1e3d27694a5c.png",
        "name":"Mandi Biryani",
        "discription":"Mandi Arabic: مندي is a traditional dish that originated from Hadhramaut consisting mainly of meat and rice with a special blend of spices"
    },
    {
        "id":3,
        "category":"food",
        "imageurl":"https://kohinoor-joy.com/wp-content/uploads/2020/01/indo-chinese-food.jpg",
        "name":"Chinese",
        "discription":"Chinese cuisine encompasses the numerous cuisines originating from China, as well as overseas cuisines created by the Chinese"
    },
    {
        "id":4,
        "category":"food",
        "imageurl":"https://cdn.shopify.com/s/files/1/0273/4564/9738/products/meals.jpg?v=1571216142",
        "name":"South indian",
        "discription":"Kosambari (south Indian salad), Pickle, Palya (vegetable side dish), Raita or gojju (vegetable cooked in tamarind juice)."
    },
    {
        "id":5,
        "category":"food",
        "imageurl":"https://1tsp.in/wp-content/uploads/2021/07/image-1.jpg",
        "name":"Pizza",
        "discription":"Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various ..."
    }
    ])}

module.exports={bollywood, hollywood, technology, fitness, food}