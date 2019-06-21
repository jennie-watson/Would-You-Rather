const cards = [
  {
    id: 1,
    description: 'Go on a date with a mime artist.'
  },
  {
    id: 2,
    description: 'Sing everything you say.'
  },
  {
    id: 3,
    description: 'Never be able to open your mouth.'
  },
  {
    id: 4,
    description: 'Be in an outdoors jacuzzi in -40 weather.'
  },
  {
    id: 5,
    description: 'Poop out a ninja blade.'
  },
  {
    id: 6,
    description: 'Have the power to explode anything you touch.'
  },
  {
    id: 7,
    description: 'Never be able to close your eyes.'
  },
  {
    id: 8,
    description: 'Sit in first class on a long-haul flight next to the smelliest person on the planet.'
  },
  {
    id: 9,
    description: 'Live in Antarctica for the rest of your life.'
  },
  {
    id: 10,
    description: 'Do the macarena when someone says your name.'
  },
  {
    id: 11,
    description: 'Marry your cousin.'
  },
  {
    id: 12,
    description: 'Live rent free in a flat next to Māngere Wastewater Treatment Plant.'
  },
  {
    id: 13,
    description: 'Have out of control body hair.'
  },
  {
    id: 14,
    description: 'Rob a liquor store with a bagel.'
  },
  {
    id: 15,
    description: 'Have bark for skin.'
  },
  {
    id: 16,
    description: 'Go on a date with Dua Lipa.'
  },
  {
    id: 17,
    description: 'Give a wedgie to anyone wearing a green shirt.'
  },
  {
    id: 18,
    description: "Sleep in PJ's made from skin-tight leather."
  },
  {
    id: 19,
    description: 'Shout everything you say.'
  },
  {
    id: 20,
    description: 'Spend a weekend in Chernobyl.'
  },
  {
    id: 21,
    description: 'Poop out 400,000 litres of mayonnaise.'
  },
  {
    id: 22,
    description: 'Have swords for hands.'
  },
  {
    id: 23,
    description: 'Make out with your sibling.'
  },
  {
    id: 24,
    description: "Marry the world's richest 80 year old with no prenup."
  },
  {
    id: 25,
    description: 'Lick the drain of your own shower for 5 seconds.'
  },
  {
    id: 26,
    description: 'Speak in reverse sentences.'
  },
  {
    id: 27,
    description: 'Have feet for hands.'
  },
  {
    id: 28,
    description: "Be a fly on Kanye's bedroom wall."
  },
  {
    id: 29,
    description: 'Live on the sun.'
  },
  {
    id: 30,
    description: 'Have sausages for fingers.'
  },
  {
    id: 31,
    description: 'Have a strong, pungent body odour.'
  },
  {
    id: 32,
    description: 'Be the royal nanny.'
  }, {
    id: 33,
    description: 'Only ever watch horror movies again.'
  },
  {
    id: 34,
    description: 'Be unable to use social media.'
  },
  {
    id: 35,
    description: 'Wear short shorts as the only piece of legwear in winter.'
  },
  {
    id: 36,
    description: 'Be flipped in the red chair by Graham Norton.'
  },
  {
    id: 37,
    description: 'Be compelled to slap to everyone you meet.'
  },
  {
    id: 38,
    description: 'Never use Google again.'
  },
  {
    id: 39,
    description: 'Smell so bad people can smell you a kilometre away.'
  },
  {
    id: 40,
    description: "Get 9 weeks of training by Jaqen H'ghar."
  },
  {
    id: 41,
    description: 'Have skin that changes colour based on your emotions.'
  },
  {
    id: 42,
    description: 'Put pineapple on your pizza.'
  },
  {
    id: 43,
    description: 'Lick a public toilet seat for 5 seconds.'
  },
  {
    id: 44,
    description: 'Have no toenails.'
  },
  {
    id: 45,
    description: 'Have to always read aloud.'
  },
  {
    id: 46,
    description: "Be Ant-Man and fly up Thanos' bum."
  },
  {
    id: 47,
    description: 'Have no fingernails.'
  },
  {
    id: 48,
    description: 'Have to burp after every kiss.'
  },
  {
    id: 49,
    description: 'Have to fart loudly every time you have a serious conversation.'
  },
  {
    id: 50,
    description: 'Have tattoos that appear all over your body depicting your dreams.'
  },
  {
    id: 51,
    description: 'Only wear lime green for the rest of your life.'
  },

  {
    id: 52,
    description: 'Be covered in scales.'
  },
  {
    id: 53,
    description: 'Have snakes for hair.'
  },
  {
    id: 54, description: 'Have inside out skin.'
  },
  {
    id: 55, description: 'Never be able to eat.'
  },
  {
    id: 56, description: 'Be able to eat tonnes but never be able to go to the toilet.'
  },
  {
    id: 57, description: 'Always have to sleep on a pile of Lego.'
  },
  {
    id: 58, description: 'Always have a slow internet connection.'
  },
  {
    id: 59, description: 'Always miss the bus by 10 seconds.'
  },
  {
    id: 60, description: 'Always have to eat cold food.'
  },
  {
    id: 61, description: 'Have tastebuds on your butthole.'
  },
  {
    id: 62, description: 'Always be itchy.'
  },
  {
    id: 63, description: 'Always be sticky.'
  },
  {
    id: 64, description: 'Eat a potato and feel it’s pain.'
  },
  {
    id: 65, description: 'Know how you’re going to die.'
  },
  {
    id: 66, description: 'Listen to baby shark on repeat for the rest of your life.'
  },
  {
    id: 67, description: 'Fight a gorilla in the jungle.'
  },
  {
    id: 68, description: 'Fight a shark in the sea.'
  },
  {
    id: 69, description: 'Shave off your eyebrows.'
  },
  {
    id: 70, description: 'Only ever have 2% battery on your phone.'
  },
  {
    id: 71, description: 'Always have wet socks.'
  },
  {
    id: 72, description: 'Never be able to see your family again.'
  },
  {
    id: 73, description: 'Marry Donald Trump.'
  },
  {
    id: 74,
    description: 'Always be chased by an angry flock of pigeons.'
  }
]

export default cards
