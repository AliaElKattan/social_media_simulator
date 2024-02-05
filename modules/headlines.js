

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

// Used like so

var all_headlines = [
	['NBC News', 'More Americans are accepting \n the reality that the Earth \n is getting warmer, but they’re \n still very much split on why \n and what to do about \n it, according to researchers.', '../twitter/images/nbc-image.png'],
	['USA Today', "Tens of thousands of \nrape victims became \n pregnant in states \n with abortion bans, \n study estimates",'../twitter/images/usatoday-image.png'],
	['USA Today', 'Dry, sunny San Diego was hit \n with damaging floods. \nWhat\'s going on?\n Is it climate change?','../twitter/images/usatoday-image.png'],
	['ABC News', 'Schools are now the third- \nhighest location for \n hate crimes in the US, \n with as much as 10% of all\n reported hate crimes in 2022 \n happening at schools across\n the country, according \n to a new report from the FBI.','../twitter/images/usatoday-image.png'],
	['ABC News', 'When a former college \n professor opened fire at \n the University of Nevada, \n Las Vegas, last month, \n he had with him \n two laminated cards with \n details about his targets','../twitter/images/usatoday-image.png'],
	['NBC News', 'Nearly 40,000 migrants have \n arrived in Denver over the \npast year and the city \nis becoming overwhelmed. \nStarting Feb. 5, Denver \nwill limit the number of days \n migrants can stay in shelters \n and send those who \nexceed their stay \nout onto the streets.', '../twitter/images/nbc-image.png'],
	['Reuters', 'A 2023 judicial decision that \n would curb access to \n the abortion pill threatens\n to disrupt the authority \nof the FDA and harm the \nAmerican healthcare system\n, President Biden\'s\n administration told the \nSupreme Court, urging \nthe justices to reverse \nthe ruling', '../twitter/images/reuters-image.jpeg'],
	['Reuters', 'Climate change is the main \nculprit for a record \ndrought in the Amazon \nrainforest that has\n drained rivers, killed \nendangered dolphins and \nupended life for \nmillions of people in \nthe region, according \n to a study released', '../twitter/images/reuters-image.jpeg'],
	['AP', 'BREAKING: A North Dakota \n judge won’t block a \n law that doctors say \n puts them at risk of \nprosecution if they \nperform an abortion \nto save a patient’s \nlife or health.', '../twitter/images/ap-image.jpeg'],
	['AP','Iowa promised $75 million \nfor school safety. \nTwo shootings later, \nthe money is largely unspent', '../twitter/images/ap-image.jpeg'],
	['Bloomberg', 'A key Republican senator \ndefended an emerging \nborder security deal \nas a step toward \npotentially halting \nillegal immigration', '../twitter/images/bloomberg-image.jpeg'],
	['Bloomberg', 'Texas Governor Greg Abbott \n vowed to add more razor \nwire along the border with \nMexico to crack down \n on illegal immigration', '../twitter/images/bloomberg-image.jpeg'],
	['Pop Base', 'SZA reveals a \n collaboration with \n Paramore is in the works.', '../twitter/images/popbase.jpeg'],
	['Pop Base', 'The live-action \‘Avatar: Last \n Airbender\’ series on Netflix \nremoved how sexist Sokka \nwas in the original show:\n  \'We took out the element of \n how sexist [Sokka] was...\n there were a lot of moments in \n the original show that were iffy.\'', '../twitter/images/popbase.jpeg'],
	['Pop Base', 'Taylor Swift has generated \n an equivalent brand value \nof $331.5 million for t\nhe NFL and the Chiefs, FOS \nreports. This includes \nprint, digital, radio, TV,\n highlights, and social media \nsince the first game\n she attended in September.', '../twitter/images/popbase.jpeg'],
	['NBA', 'STEPHEN vs. SABRINA \n\n Stephen Curry and Sabrina \nIonescu will go head-to-head\n in the first NBA vs. WNBA \n 3-point challenge during \n#StateFarmSaturday on TNT \nat #NBAAllStar 2024!', '../twitter/images/nbc-image.png'],
	['Bleacher Report', 'Mahomes is only ONE WIN AWAY \nfrom passing Peyton Manning\'s\n playoffs wins record... \n \n He has played TEN FEWER \n playoff games than Manning', '../twitter/images/bleacher.jpeg'],
	['Bleacher Report', 'Suns last 6 Games \n \n Jan 19: DBook scores 52\n Jan. 21: KD scores 40\nJan. 22: KD scores 43\n Jan. 24: DBook scores 46\nJan. 26: DBook scores 63 \nJan. 28: DBook scores 44','../twitter/images/bleacher.jpeg'],
	['NFL', 'If it\'s the AFC Championship,\n you know @tkelce will step up \nwith a big\-time performance: \n- 11 receptions \n- 116 yards \n- 1 TD','../twitter/images/nfl.jpeg'],
	['PopCrave', 'Elon Musk reveals the \nfirst human patient \nhas received a brain implant \nfrom his startup, Neuralink, \nwhich aims to let people \ncontrol computers with thoughts.','../twitter/images/popcrave.jpeg'],
['Researcher', ' This is an attention check. \n Write down the code RBT202 \n and enter it in the \n attention question in the \n upcoming final survey.','../twitter/images/nyu-image.jpeg']

];


// var shuffled_headlines = all_headlines;
var shuffled_headlines = shuffle(all_headlines);