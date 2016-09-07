/**
 * A set of functions that validate an input (string) and return a
 * boolean value indicating whether the provided string matches the
 * specified pattern.
 */
module.exports = {
    /**
     * A valid name includes alphabetic characters or hyphens, and must
     * be at least two characters long.
     */
    name: function (input) {
        let addr = new RegExp('^[a-zA-Z]{2,}[ -]?[a-zA-Z]*[ -]?[a-zA-Z]*$');
        return addr.test(input);
    },

    /**
     * A valid phone number may or may not include an area code. If it
     * does, it should be a total of ten digits. If it doesn't, it should
     * be a total of seven digits.
     */
    phone: function (input) {
        let addr = new RegExp('^\(?([0-9]){0,3}\)?[- ]?([0-9]){3}[- ]?([0-9]){4}$');
        let addrArray = [];
        let count = 0;
        addrArray.push(addr.exec(input));
        for (i = 1; i < addrArray.length; i++) {
            count = count + parseInt(addrArray[i]);
        }
        return (count === 7 || count === 10);
    },
    /**
     * A valid email address includes alphanumeric characters, underscores, 
     * or periods before the @ symbol, followed by an @, followed by a valid
     * domain name.
     */
    email: function (input) {
        let addr = new RegExp('^[a-zA-Z0-9_\.]+@[a-zA-Z]+\.[a-z]+\.?[a-z]*$');
        return addr.test(input);
    },
    /**
     * A valid street address includes a building number, followed by a 
     * street name, followed by either {Ave, St, Park, Lane, Blvd}. It 
     * does not include city name, state name, country, zip code, or any
     * other information.
     */
    address: function (input) {
        let addr = new RegExp('^[0-9]+ [A-Z]{1}[a-zA-Z]+ [A-Z]?[a-zA-Z]*[ ]?[Ave|St|Lane|Blvd]{2,4}$');
        return addr.test(input);
    },
    /**
     * A valid username is between four and sixteen characters long and
     * can contain numbers or letters. It must start with a letter.
     */
    username: function (input) {
        let addr = new RegExp('^[a-zA-Z]{1}[a-zA-Z0-9]{3,15}$');
        return addr.test(input);
    },
    /**
     * A valid URL contains the protocol (http, https) as well as a valid
     * domain name. It can include any number of subdirectories, and may or
     * may not end with a file name.
     */
    url: function (input) {
        let addr = new RegExp('^[http://|https://]{7,8}[a-zA-Z0-9]+\.[com|org|net|biz|info]{3,4}[/a-zA-Z0-9+]*[\.a-zA-Z0-9]*$');
        return addr.test(input);
    },

    /**
     * A valid IPv4 address is split into four sections with a period between
     * each section. Each section can include from one to three digits.
     */
    ipaddr: function (input) {
        let addr = new RegExp('^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$');
        return addr.test(input);
    },
};