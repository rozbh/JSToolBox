/*
 *   This class gets a phone number and checks if it is valid or not.
 *
 *   Also it can check and return the phone type:
 *       s -> Sabet (City Code) ; h -> Hamrah Aval ; i -> Irancell ; t -> Talya ; r -> Rightel ;
 *
 *   And can check the state of phone number for s and h typed phones.
 *   **********************************************
 *   When i am writing this codes, only me and god understand what is going on! but after a while
 *   only god will understand what is going on! so dont waste your time changing it!
 */

class phone_check {
  constructor(phone) {
    // Get phone number and delete zero from begining
    this.phone = phone.toString();
    while (this.phone[0] == "0") {
      this.phone = this.phone.substring(1);
    }

    // Get the CODE
    this.code = this.phone.slice(0, 3);

    //Pre Codes
    this.all_pre_codes = {
      // ------Hamrah Aval------
      910: { type: "h" },
      911: { type: "h", state: "گلستان-گیلان-مازندران" },
      912: { type: "h", state: "البرز-زنجان-سمنان-قزوین-قم-تهران-مرکزی" },
      913: { type: "h", state: "یزد-چهارمحال و بختیاری-کرمان - اصفهان" },
      914: {
        type: "h",
        state: "آذربایجان غربی - اردبیل - اصفهان - آذربایجان شرقی",
      },
      915: {
        type: "h",
        state: "خراسان شمالی - خراسان جنوبی - سیستان و بلوچستان - خراسان رضوی",
      },
      916: { type: "h", state: "لرستان - فارس - اصفهان - خوزستان" },
      917: {
        type: "h",
        state: "بوشهر - کهگیلویه و بویر احمد - هرمزگان - فارس",
      },
      918: { type: "h", state: "کردستان - ایلام - کرمانشاه - همدان" },
      919: { type: "h", state: "تهران - البرز - سمنان - قم - قزوین - زنجان" },
      990: { type: "h" },
      991: { type: "h" },
      992: { type: "h" },
      993: { type: "h" },
      994: { type: "h" },

      // ------Irancell------
      901: { type: "i" },
      902: { type: "i" },
      903: { type: "i" },
      904: { type: "i" },
      905: { type: "i" },
      930: { type: "i" },
      933: { type: "i" },
      935: { type: "i" },
      936: { type: "i" },
      937: { type: "i" },
      938: { type: "i" },
      939: { type: "i" },

      // ------Rightel------
      920: { type: "r" },
      921: { type: "r" },
      922: { type: "r" },

      // ------Talya------
      932: { type: "t" },
    };
  }

  /*
   *
   *   Validation of the phone number!
   *
   */
  validate() {
    var phone = this.phone;

    // validation check result
    var check = 0;

    // The regex pattern for numbers only
    var regex = /^[0-9]*$/gm;

    // Check if phone number length is true
    if (phone.length < 10 || phone.length > 11) {
      // If length was not true set false
      check = 0;
    } else {
      // Check REGEX
      var ok_regex = regex.exec(phone);
      if (!ok_regex) {
        check = 0;
      } else {
        // If Regex was true AND phone number length was good set to 1
        check = 1;
      }
    }

    return check;
  }

  /*
   *
   *   Get Operator
   *
   */
  get_operator() {
    var phone_type;
    if (this.validate()) {
      switch (this.all_pre_codes[this.code].type) {
        case "h":
          phone_type = "همراه اول";
          break;
        case "i":
          phone_type = "ایرانسل";
          break;
        case "r":
          phone_type = "رایتل";
          break;
        case "t":
          phone_type = "تالیا";
          break;
        default:
          phone_type = "اپراتور محلی";
          break;
      }
      return phone_type;
    } else {
      return "0";
    }
  }

  /*
   *
   *   Get Phone Code Location
   *
   */
  get_location() {
    if (this.validate()) {
      if (this.all_pre_codes[this.code].state) {
        return this.all_pre_codes[this.code].state;
      } else {
        return "سراسری";
      }
    } else {
      return "0";
    }
  }
}