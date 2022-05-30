class Person {

    constructor(name, surname, gender, dob) {
        this.name = name;
        this.surname = surname;
        this.gender = gender;
        this.dob = dob;
    }
    getFiscal(){
        return new Fiscal(this).generate_Fiscal();
    }


}
class Fiscal {
    constructor(object) {
        this.object = object;
    }

    //Codice Fiscale
    generate_Fiscal() {
        var code = "";
        //calls for code
        code += this.code_Surname(this.object.surname);
        code += this.code_Name(this.object.name);
        code += this.code_Year(this.object.dob.getFullYear());
        code += this.code_Month(this.object.dob.getMonth()+1);
        code += this.code_Day(this.object.dob.getDate(), this.object.gender);
        return code;
    }

    //tofind consonent
    find_Consonant(text) {

        var tsm = "";
        for (var i = 0; i < text.length; i++) {
            if (text[i] != 'A' && text[i] != 'E' && text[i] != 'I' && text[i] != 'O' && text[i] != 'U' && text[i] != 'a' && text[i] != 'e' && text[i] != 'i' && text[i] != 'o' && text[i] != 'u') {
                tsm += text[i].toUpperCase();

            }
        }

        return tsm;

    }

    //generate code from surname
    code_Surname(name) {
        var codeFromSur = "";
        var cons = this.find_Consonant(name);

        if (name.length < 3) {//name <3
            for (var i = 0; i < name.length && cons.length < 3; i++) {
                if (name[i] == 'A' || name[i] == 'E' || name[i] == 'I' || name[i] == 'O' || name[i] == 'U' || name[i] == 'a' || name[i] == 'e' || name[i] == 'i' || name[i] == 'o' || name[i] == 'u') {
                    cons += name[i].toUpperCase(); //add vowel after consonant
                }
            }
            if (cons.length < 3) {
                while (cons.length < 3) //must be length in 3.if not fill up with 'X'
                    cons += "X";
            }
            codeFromSur += cons;
        }

        else if (cons.length > 2)
            codeFromSur += cons[0] + cons[1] + cons[2];//collect 1st three consonants
        else if (cons.length < 3) {   //add next vowel.
            for (var i = 0; i < name.length && cons.length < 3; i++) {
                if (name[i] == 'A' || name[i] == 'E' || name[i] == 'I' || name[i] == 'O' || name[i] == 'U' || name[i] == 'a' || name[i] == 'e' || name[i] == 'i' || name[i] == 'o' || name[i] == 'u') {
                    cons += name[i].toUpperCase();

                }

            }
            codeFromSur += cons;
        }
        return codeFromSur;


    }
    //generate code from name
    code_Name(name) {
        var codeFromeNam = "";
        var cons = this.find_Consonant(name);
        if (name.length < 3) {//name <3
            for (var i = 0; i < name.length && cons.length < 3; i++) {
                if (name[i] == 'A' || name[i] == 'E' || name[i] == 'I' || name[i] == 'O' || name[i] == 'U' || name[i] == 'a' || name[i] == 'e' || name[i] == 'i' || name[i] == 'o' || name[i] == 'u') {
                    cons += name[i].toUpperCase(); //add vowel after consonent
                }
            }
            if (cons.length < 3) {
                while (cons.length < 3) //must be length in 3.if not fill up with 'X'
                    cons += "X";
            }
            codeFromeNam += cons;
        }
        else if (cons.length == 3) codeFromeNam += cons; //3 consonent

        else if (cons.length > 3) codeFromeNam += cons[0] + cons[2] + cons[3];

        else if (cons.length < 3) {   //add next vowel.
            for (var i = 0; i < name.length && cons.length < 3; i++) {
                if (name[i] == 'A' || name[i] == 'E' || name[i] == 'I' || name[i] == 'O' || name[i] == 'U' || name[i] == 'a' || name[i] == 'e' || name[i] == 'i' || name[i] == 'o' || name[i] == 'u') {
                    cons += name[i].toUpperCase();

                }

            }
            codeFromeNam += cons;
        }
        return codeFromeNam;
    }

    //generate 2 digit from birth year
    code_Year(year) {
        return year%100==0 ? "00":year%100;

    }

    //generate code from month
    code_Month(month) {

        switch (month) {
            case 1:
                return "A";
            case 2:
                return "B";
            case 3:
                return "C";
            case 4:
                return "D";
            case 5:
                return "E";
            case 6:
                return "H";
            case 7:
                return "L";
            case 8:
                return "M";
            case 9:
                return "P";
            case 10:
                return "R";
            case 11:
                return "S";
            case 12:
                return "T";
        }
    }
    //generate code from day
    code_Day(day, gen) {
        
        if (gen == "F")
            return day + 40;
        else {
            if (day < 10)
                return "0" + day;
            
            return day;
        }

    }

}