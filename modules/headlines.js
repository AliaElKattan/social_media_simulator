

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
	

	['USA Today', 'The case is the Supreme Court\'s\n first chance to weigh \nin on the state laws restricting \nabortion that have gone into \neffect since overturning\n Roe v. Wade.','twitter/images/usatoday-image.png'],
	['USA Today', 'Five Maryland high school\n students were injured \nin a shooting at Schrom Hill \nPark during a senior skip \nday event, Greenbelt Police \nDepartment said.','twitter/images/usatoday-image.png'],
	
	['ABC News', 'Five teenagers were \ninjured after gunfire rang \nout at a large gathering \nof high school students \ntaking part in a senior \nskip day in Maryland,\n police said.','./twitter/images/abc-image.png'],
	['ABC News', 'A Supreme Court decision \n that stripped protections \nfrom America\'s wetlands \nwill have reverberating impacts \non rivers that supply \ndrinking water all over\n the U.S., according to a report.','./twitter/images/abc-image.png'],


	['NBC News', 'For the second time\n in two weeks, Arizona\n Republican lawmakers rejected \nan attempt to repeal a near-total \nban on abortion from 1864 \n that was upheld by the \nbattleground state\’s Supreme Court.', 'twitter/images/nbc-image.png'],
	['NBC News', 'Impending abortion restrictions\n in Arizona could create a lack \nof access that spans into\n neighboring Mexican states \n— where abortion is banned \nwith few exceptions.', './twitter/images/nbc-image.png'],
	
	['Reuters', 'Climate change damage \ncould cost $38 trillion\n per year by 2050, study finds', './twitter/images/reuters-image.jpeg'],
	['Reuters', 'US stocks ended mixed, \nwith the tech-heavy Nasdaq \nposting its biggest weekly \ndecline since October 2022,\n while growing pessimism \n that the Federal Reserve \nwould cut interest rates \nsoon also dented sentiment ', './twitter/images/reuters-image.jpeg'],
	

	['AP', 'Climate change concerns \ngrow, but few think \nBiden\'s climate law \nwill help, AP-NORC \n poll finds', './twitter/images/ap-image.jpeg'],
	['AP','Sweeping gun legislation \napproved by Maine lawmakers \nafter deadliest shooting \nin state history', './twitter/images/ap-image.jpeg'],
	
	['Bloomberg', 'Rents are a main reason\n why inflation is still \ncurrently around 2.5\%,\n and the problem is more \nacute in the Northeast and \nMidwest than in the West \nand South, where new construction \nis off the charts and inflation \nis coming down fast', './twitter/images/bloomberg-image.jpeg'],
	['Bloomberg', 'The US economy’s surprising\n strength is carrying\n global growth, but global\n finance leaders warn it\'s\n also making life difficult \nfor everyone else', './twitter/images/bloomberg-image.jpeg'],
	
	['Pop Base', 'Childish Gambino announces \nhe has two albums \ncoming — one of which \n will be the final \nChildish Gambino album.', './twitter/images/popbase.jpeg'],
	['Pop Base', 'Post Malone jumps 32 spots \nto \#4 on Spotify Global\'s\n Daily Top Artists chart, \nfollowing the release of \'Fortnight.\'', './twitter/images/popbase.jpeg'],
	
	['NBA', 'Damian Lillard just recorded\n the most points in a half \nin Bucks playoff history \n\n35 PTS  \n\n6 3PM \n\n11-19 FGM\n', './twitter/images/nba-image.png'],

	['Bleacher Report', 'Yuta Watanabe announces\n on IG live that he plans \nto deny his player \noption with the Grizzlies \nand go play in Japan \nfor the 2024-25 season, \n ending his 6-year NBA career', './twitter/images/bleacher.jpeg'],
	['Bleacher Report', 'Ryan Garcia and Devin Haney \n agreed to betting $500K \n per pound if either man is \nover the 140-pound \nlimit at weigh-ins. \n\n Garcia ended up being \n3 pounds over','./twitter/images/bleacher.jpeg'],

	['NFL', 'Eagles, WR DeVonta\n Smith agree on a 3-year\n, \$75M contract extension \nthat includes \$51M guaranteed.', './twitter/images/nfl.jpeg'],


	['PopCrave', '\'What Was I Made For?\'\n by Billie Eilish has \nreached 800 MILLION \nstreams on Spotify.\n It\’s her 13th song \nto achieve this.','./twitter/images/popcrave.jpeg'],
	['PopCrave', '\'COWBOY CARTER\' by Beyoncé is \n #2 on the Billboard 200 \nthis week, with 98K \nunits earned in its \nthird week. It previously \nspent two weeks at #1.','./twitter/images/popcrave.jpeg'],


	['Researcher', ' This is an attention check. \n Write down the code RBT202 \n and enter it in the \n attention question in the \n upcoming final survey.','./twitter/images/nyu-image.jpeg']
	

	

];


// var shuffled_headlines = all_headlines;
var shuffled_headlines = shuffle(all_headlines);