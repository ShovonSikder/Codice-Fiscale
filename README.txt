Each person in Italy has a unique identifying ID code issued by the national tax
office after the birth registration: The Fiscal Code (Codice Fiscale).

Run the html file
*****************************************************************************
Given a JavaScript object containing the personal data of a person (name, surname, gender and date of birth) return the 11 code characters as a string following these steps:  Generate 3 capital letters from the surname, if it has: o At least 3 consonants then the first three consonants are used. (Newman -

NWM). o Less than 3 consonants then vowels will replace missing characters in the same order they appear (Fox -> FXO | Hope -> HPO). o Less than three letters then "X" will take the third slot after the consonant and the vowel (Yu -> YUX).  Generate 3 capital letters from the name, if it has: o Exactly 3 consonants then consonants are used in the order they appear (Matt -> MTT). o More than 3 consonants then first, third and fourth consonant are used (Samantha -> SNT | Thomas -> TMS). o Less than 3 consonants then vowels will replace missing characters in the same order they appear (Bob -> BBO | Paula -> PLA). o Less than three letters then "X" will take the the third slot after the consonant and the vowel (Al -> LAX).  Generate 2 numbers, 1 letter and 2 numbers from date of birth and gender: o Take the last two digits of the year of birth (1985 -> 85). o Generate a letter corresponding to the month of birth (January -> A | December -> T) using the table for conversion included in the code. o For males take the day of birth adding one zero at the start if is less than 10 (any 9th day -> 09 | any 20th day -> 20). o For females take the day of birth and sum 40 to it (any 9th day -> 49 | any 20th day -> 60)

o For females take the day of birth and sum 40 to it (any 9th day -> 49 | any 
20th day -> 60)