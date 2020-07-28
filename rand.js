var quote = ['Work like there is someone working twenty four hours a day to take it away from you', 'Dont live the same year 75 times and call it a life',
    'Hustle in silence and let your success make the noise.', 'Leaders can let you fail and yet not let you be a failure.', 'The hard days are what make you stronger.',
    'Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.', 'Never stop doing your best just because someone doesn’t give you credit.',
    'Nothing will work unless you do.', 'Sometimes when you’re in a dark place you think you’ve been buried but you’ve actually been planted.',
    'Don’t limit your challenges. Challenge your limits.', 'Whenever you find yourself doubting how far you can go, just remember how far you have come.',
    'Don’t quit yet, the worst moments are usually followed by the most beautiful silver linings. You have to stay strong, remember to keep your head up and remain hopeful.',
    'Start where you are. Use what you have. Do what you can.', 'Good. Better. Best. Never let it rest. ‘Til your good is better and your better is best.',
    'If you cahse two rabbits you will not get either one.'
]

function display() {
    let limit = quote.length;
    var randnum = Math.floor(Math.random() * limit);
    document.getElementById("quotes").innerHTML = quote[randnum];
}