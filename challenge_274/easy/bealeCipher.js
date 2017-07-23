/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * construct dictionary
		 * @param {String} [text] - text for deciphering
		 *
		 * @return {Array} - dictionary
		 */
		function makeDictionary(text) {
			return text.split(" ").map(word => word[0].toLowerCase());
		}
		/**
		 * decipher the text
		 * @param {String} [text] - text for deciphering
		 * @param {String} [codes] - number codes for deciphering
		 *
		 * @return {String} - deciphered text
		 */
		function decipher(text, codes) {
			let dictionary = makeDictionary(text);
			return codes.split(", ").map(num => Number(num))
									.map(num => dictionary[num - 1]).join("");
		}
		//challenge input
		let text = "When in the course of human events it becomes necessary for one people to dissolve the political bands which have connected them with another and to assume among the powers of the earth the separate and equal station to which the laws of nature and of nature's god entitle them a decent respect to the opinions of mankind requires that they should declare the causes which impel them to the separation we hold these truths to be self evident that all men are created equal that they are endowed by their creator with certain unalienable rights that among these are life liberty and the pursuit of happiness that to secure these rights governments are instituted among men deriving their just powers from the consent of the governed that whenever any form of government becomes destructive of these ends it is the right of the people to alter or to abolish it and to institute new government laying its foundation on such principles and organizing its powers in such form as to them shall seem most likely to effect their safety and happiness prudence indeed will dictate that governments long established should not be changed for light and transient causes and accordingly all experience hath shown that mankind are more disposed to suffer while evils are sufferable than to right themselves by abolishing the forms to which they are accustomed but when a long train of abuses and usurpations pursuing invariably the same object evinces a design to reduce them under absolute despotism it is their right it is their duty to throw off such government and to provide new guards for their future security such has been the patient sufferance of these colonies and such is now the necessity which constrains them to alter their former systems of government the history of the present king of great Britain is a history of repeated injuries and usurpations all having in direct object the establishment of an absolute tyranny over these states to prove this let facts be submitted to a candid world he has refused his assent to laws the most wholesome and necessary for the public good he has forbidden his governors to pass laws of immediate and pressing importance unless suspended in their operation till his assent should be obtained and when so suspended he has utterly neglected to attend to them he has refused to pass other laws for the accommodation of large districts of people unless those people would relinquish the right of representation in the legislature a right inestimable to them and formidable to tyrants only he has called together legislative bodies at places unusual uncomfortable and distant from the depository of their public records for the sole purpose of fatiguing them into compliance with his measures he has dissolved representative houses repeatedly for opposing with manly firmness his invasions on the rights of the people he has refused for a long time after such dissolutions to cause others to be elected whereby the legislative powers incapable of annihilation have returned to the people at large for their exercise the state remaining in the meantime exposed to all the dangers of invasion from without and convulsions within he has endeavored to prevent the population of these states for that purpose obstructing the laws for naturalization of foreigners refusing to pass others to encourage their migration hither and raising the conditions of new appropriations of lands he has obstructed the administration of justice by refusing his assent to laws for establishing judiciary powers he has made judges dependent on his will alone for the tenure of their offices and the amount and payment of their salaries he has erected a multitude of new offices and sent hither swarms of officers to harass our people and eat out their substance he has kept among us in times of peace standing armies without the consent of our legislatures he has affected to render the military independent of and superior to the civil power he has combined with others to subject us to a jurisdiction foreign to our constitution and unacknowledged by our laws giving his assent to their acts of pretended legislation for quartering large bodies of armed troops among us for protecting them by a mock trial from punishment for any murders which they should commit on the inhabitants of these states for cutting off our trade with all parts of the world for imposing taxes on us without our consent for depriving us in many cases of the benefits of trial by jury for transporting us beyond seas to be tried for pretended offenses for abolishing the free system of English laws in a neighboring province establishing therein an arbitrary government and enlarging its boundaries so as to render it at once an example and fit instrument for introducing the same absolute rule into these colonies for taking away our charters abolishing our most valuable laws and altering fundamentally the forms of our governments for suspending our own legislature and declaring themselves invested with power to legislate for us in all cases whatsoever he has abdicated government here by declaring us out of his protection and waging war against us he has plundered our seas ravaged our coasts burnt our towns and destroyed the lives of our people he is at this time transporting large armies of foreign mercenaries to complete the works of death desolation and tyranny already begun with circumstances of cruelty and perfidy scarcely paralleled in the most barbarous ages and totally unworthy the head of a civilized nation he has constrained our fellow citizens taken captive on the high seas to bear arms against their country to become the executioners of their friends and brethren or to fall themselves by their hands he has excited domestic insurrections amongst us and has endeavored to bring on the inhabitants of our frontiers the merciless Indian savages whose known rule of warfare is an undistinguished destruction of all ages sexes and conditions in every stage of these oppressions we have petitioned for redress in the most humble terms our repeated petitions have been answered only by repeated injury a prince whole character is thus marked by every act which may define a tyrant is unfit to be the ruler of a free people nor have we been wanting in attention to our British brethren we have warned them from time to time of attempts by their legislature to extend an unwarrantable jurisdiction over us we have reminded them of the circumstances of our emigration and settlement here we have appealed to their native justice and magnanimity and we have conjured them by the ties of our common kindred to disavow these usurpations which would inevitably interrupt our connections and correspondence they too have been deaf to the voice of justice and of consanguinity we must therefore acquiesce in the necessity which denounces our separation and hold them as we hold the rest of mankind enemies in war in peace friends we therefore the representatives of the united states of America in general congress assembled appealing to the supreme judge of the world for the rectitude of our intentions do in the name and by authority of the good people of these colonies solemnly publish and declare that these united colonies are and of right ought to be free and independent states that they are absolved from all allegiance to the British crown and that all political connection between them and the state of great Britain is and ought to be totally dissolved and that as free and independent states they have full power to levy war conclude peace contract alliances establish commerce and to do all other acts and things which independent states may of right do and for the support of this declaration with a firm reliance on the protection of divine providence we mutually pledge to each other our lives our fortunes and our sacred honor";	
		let input = "115, 73, 24, 807, 37, 52, 49, 17, 31, 62, 647, 22, 7, 15, 140, 47, 29, 107, 79, 84, 56, 239, 10, 26, 811, 5, 196, 308, 85, 52, 160, 136, 59, 211, 36, 9, 46, 316, 554, 122, 106, 95, 53, 58, 2, 42, 7, 35, 122, 53, 31, 82, 77, 250, 196, 56, 96, 118, 71, 140, 287, 28, 353, 37, 1005, 65, 147, 807, 24, 3, 8, 12, 47, 43, 59, 807, 45, 316, 101, 41, 78, 154, 1005, 122, 138, 191, 16, 77, 49, 102, 57, 72, 34, 73, 85, 35, 371, 59, 196, 81, 92, 191, 106, 273, 60, 394, 620, 270, 220, 106, 388, 287, 63, 3, 6, 191, 122, 43, 234, 400, 106, 290, 314, 47, 48, 81, 96, 26, 115, 92, 158, 191, 110, 77, 85, 197, 46, 10, 113, 140, 353, 48, 120, 106, 2, 607, 61, 420, 811, 29, 125, 14, 20, 37, 105, 28, 248, 16, 159, 7, 35, 19, 301, 125, 110, 486, 287, 98, 117, 511, 62, 51, 220, 37, 113, 140, 807, 138, 540, 8, 44, 287, 388, 117, 18, 79, 344, 34, 20, 59, 511, 548, 107, 603, 220, 7, 66, 154, 41, 20, 50, 6, 575, 122, 154, 248, 110, 61, 52, 33, 30, 5, 38, 8, 14, 84, 57, 540, 217, 115, 71, 29, 84, 63, 43, 131, 29, 138, 47, 73, 239, 540, 52, 53, 79, 118, 51, 44, 63, 196, 12, 239, 112, 3, 49, 79, 353, 105, 56, 371, 557, 211, 505, 125, 360, 133, 143, 101, 15, 284, 540, 252, 14, 205, 140, 344, 26, 811, 138, 115, 48, 73, 34, 205, 316, 607, 63, 220, 7, 52, 150, 44, 52, 16, 40, 37, 158, 807, 37, 121, 12, 95, 10, 15, 35, 12, 131, 62, 115, 102, 807, 49, 53, 135, 138, 30, 31, 62, 67, 41, 85, 63, 10, 106, 807, 138, 8, 113, 20, 32, 33, 37, 353, 287, 140, 47, 85, 50, 37, 49, 47, 64, 6, 7, 71, 33, 4, 43, 47, 63, 1, 27, 600, 208, 230, 15, 191, 246, 85, 94, 511, 2, 270, 20, 39, 7, 33, 44, 22, 40, 7, 10, 3, 811, 106, 44, 486, 230, 353, 211, 200, 31, 10, 38, 140, 297, 61, 603, 320, 302, 666, 287, 2, 44, 33, 32, 511, 548, 10, 6, 250, 557, 246, 53, 37, 52, 83, 47, 320, 38, 33, 807, 7, 44, 30, 31, 250, 10, 15, 35, 106, 160, 113, 31, 102, 406, 230, 540, 320, 29, 66, 33, 101, 807, 138, 301, 316, 353, 320, 220, 37, 52, 28, 540, 320, 33, 8, 48, 107, 50, 811, 7, 2, 113, 73, 16, 125, 11, 110, 67, 102, 807, 33, 59, 81, 158, 38, 43, 581, 138, 19, 85, 400, 38, 43, 77, 14, 27, 8, 47, 138, 63, 140, 44, 35, 22, 177, 106, 250, 314, 217, 2, 10, 7, 1005, 4, 20, 25, 44, 48, 7, 26, 46, 110, 230, 807, 191, 34, 112, 147, 44, 110, 121, 125, 96, 41, 51, 50, 140, 56, 47, 152, 540, 63, 807, 28, 42, 250, 138, 582, 98, 643, 32, 107, 140, 112, 26, 85, 138, 540, 53, 20, 125, 371, 38, 36, 10, 52, 118, 136, 102, 420, 150, 112, 71, 14, 20, 7, 24, 18, 12, 807, 37, 67, 110, 62, 33, 21, 95, 220, 511, 102, 811, 30, 83, 84, 305, 620, 15, 2, 10, 8, 220, 106, 353, 105, 106, 60, 275, 72, 8, 50, 205, 185, 112, 125, 540, 65, 106, 807, 138, 96, 110, 16, 73, 33, 807, 150, 409, 400, 50, 154, 285, 96, 106, 316, 270, 205, 101, 811, 400, 8, 44, 37, 52, 40, 241, 34, 205, 38, 16, 46, 47, 85, 24, 44, 15, 64, 73, 138, 807, 85, 78, 110, 33, 420, 505, 53, 37, 38, 22, 31, 10, 110, 106, 101, 140, 15, 38, 3, 5, 44, 7, 98, 287, 135, 150, 96, 33, 84, 125, 807, 191, 96, 511, 118, 40, 370, 643, 466, 106, 41, 107, 603, 220, 275, 30, 150, 105, 49, 53, 287, 250, 208, 134, 7, 53, 12, 47, 85, 63, 138, 110, 21, 112, 140, 485, 486, 505, 14, 73, 84, 575, 1005, 150, 200, 16, 42, 5, 4, 25, 42, 8, 16, 811, 125, 160, 32, 205, 603, 807, 81, 96, 405, 41, 600, 136, 14, 20, 28, 26, 353, 302, 246, 8, 131, 160, 140, 84, 440, 42, 16, 811, 40, 67, 101, 102, 194, 138, 205, 51, 63, 241, 540, 122, 8, 10, 63, 140, 47, 48, 140, 288";
		console.log(decipher(text, input));
	});
})();		