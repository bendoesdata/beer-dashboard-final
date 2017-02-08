var quotes = [
    ("Oh, Lisa, you and your stories: Bart’s a vampire, beer kills brain cells. Now let’s go back to that … building … thingie … where our beds and TV … is. – Homer Simpson"),
    ("Why do beer companies bother with an expiration date… It is never going to make it anywhere near that. - Unknown"),
    ("I don't like the word 'alcoholic'. I like to think of myself as an advanced drinker. ― Chelsea Handler"),
    ("You can't be a real country unless you have a beer and an airline - it helps if you have some kind of football team, or some nuclear weapons, but in the very least you need a beer. - Frank Zappa"),
    ("Beauty is in the eye of the beerholder. - Kinky Friedman"),
    ("I have respect for beer. - Russell Crowe"),
    ("Apu, I need a keg and a six-pack to hold me until I tap the keg. - Homer Simpson"),
    ("I feel sorry for people who don't drink. When they wake up in the morning. That's as good as they're going to feel all day. - Frank Sinatra"),
    ("The church is near, but the road is icy. The bar is far, but we will walk carefully. - Russian proverb"),
    ("Homer no function beer well without. - Homer Simpson"),
    ("Remember I before E, except in Budweiser. - Anonymous"),
    ("This is grain, which any fool can eat, but for which the Lord intended a more divine means of consumption… Beer! - Robin Hood"),
    ("Make sure that the beer goes to the troops before any of the parties in the rear get a drop. - Winston Churchill"),
    ("I am not so think as you drunk I am!  - Anonymous"),
    ("Reality is an illusion caused by a lack of good beer. - Anonymous"),
    ("When I read about the evils of drinking, I gave up reading. - Henny Youngman"),
    ("I went out with a guy who once told me I didn't need to drink to make myself more fun to be around. I told him, I'm drinking so that you're more fun to be around. - Chelsea Handler"),
    ("A guy sitting with his girlfriend, drinking beer says, 'I love you'. Girl asks 'Is it you or the beer talking?'. Boy replies, 'Its me. Talking to my beer.' - Anonymous"),
    ("But the greatest lovethe love above all loves, Even greater than that of a mother...Is the tender, passionate, undying love, Of one beer drunken slob for another. - Anonymous"),
    ("Beer is the reason I get out of bed every afternoon. Anonymous"),
    ("No officer, my speech isn't slurred. I'm just talking in cursive. - Anonymous"),
    ("Isn’t beer the holy libation of sincerity? The potion that dispels all hypocrisy, any charade of fine manners? The drink that does nothing worse than incite its fans to urinate in all innocence, to gain weight in all frankness? - Milan Kundera"),
("Whoever drinks beer, he is quick to sleep; whoever sleeps long, does not sin; whoever does not sin, enters Heaven! Thus, let us drink beer! - Martin Luther"),
("Fill with mingled cream and amber, I will drain that glass again. Such hilarious visions clamber Through the chambers of my brain. Quaintest thoughts — queerest fancies, Come to life and fade away: What care I how time advances? I am drinking ale today. - Edgar Allan Poe"),
("There is an ancient Celtic axiom that says ‘Good people drink good beer.’ Which is true, then as now. Just look around you in any public barroom and you will quickly see: Bad people drink bad beer. Think about it. - Hunter S. Thompson"),
("Give me a woman who loves beer and I will conquer the world. - Kaiser Wilhelm, Last King of Prussia "),
];

function randomQuote() {
  var length = quotes.length;
  var rand = Math.round(Math.random() * (length - 1));
  document.getElementById("quote").innerHTML = quotes[rand];

  setTimeout (randomQuote, 10000);
}

$(function(){

    $('#quote').hide();

    setTimeout(function(){
        $('#quote').fadeIn('slow');
    },2000);

});
