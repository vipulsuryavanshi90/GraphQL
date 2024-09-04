
    let games = [
      {
        "id": "1",
        "title": "The Legend of Zelda: Breath of the Wild",
        "platform": ["Nintendo Switch", "Wii U"],
      },
      {
        "id": "2",
        "title": "The Witcher 3: Wild Hunt",
        "platform": ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"]
      },
      {
        "id": "3",
        "title": "Cyberpunk 2077",
        "platform": ["PC", "PlayStation 4", "Xbox One", "Stadia"]
      }
    ];

    let reviews =  [
      {
        "id": "101",
        "rating": "9.5",
        "content": "A masterpiece of open-world design with a gripping story and deep gameplay.",
        "game_id": "2",
        "author_id": "201"
      },
      {
        "id": "102",
        "rating": "8.0",
        "content": "An ambitious game that falls short of its potential due to technical issues.",
        "game_id": "1",
        "author_id": "202"
      },
      {
        "id": "103",
        "rating": "9.0",
        "content": "Excellent storytelling and gameplay, though the controls can be a bit tricky.",
        "game_id": "3",
        "author_id": "201"
      },
      {
        "id": "104",
        "rating": "9.0",
        "content": "love it, bit tricky.",
        "game_id": "3",
        "author_id": "203"
      }
    ]; 
    
    let authors =  [
      {
        "id": "201",
        "name": "John Doe",
        "verified": true,
        "reviews": ['101', '103']
      },
      {
        "id": "202",
        "name": "Jane Smith",
        "verified": false,
        "reviews": ['102']
      },
      {
        "id": "203",
        "name": "Alex Johnson",
        "verified": true,
        "reviews": ['104']
      }
    ];
  
export default {games, reviews, authors};