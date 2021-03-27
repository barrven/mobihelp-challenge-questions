function custom_split(input, separator) {

    let output = []; //array we will push to
    // switch that we will use to check when to push the buffer contents to output
    let charIsSeparator = true;
    let buffer = ''; // stores string value between delimiters

    //loop through all the characters in the input string
    for (char of input) {
        //if the current character is not a delimiter, add it to the buffer
        if (char !== separator) {
            charIsSeparator = false;
            buffer += char;
        }
        else {
            //if the current char is a delimiter but the last one was, that means we can
            //push the buffer to a new spot in the array and then clear  it
            if (charIsSeparator === false) {
                output.push(buffer);
                buffer = '';
            }

            //flip the switch back when appropriate
            charIsSeparator = true;
        }
    }

    //when we get to the end of the string, check if there is anything left in the buffer
    if (buffer !== '')
        output.push(buffer);

    return output;
}

// function custom_split(input, separator) {

//     let output = []; //array we will push to
//     // switch that we will use to check when to push the buffer contents to output
//     let charIsSeparator = true;
//     let buffer = ''; // stores string value between delimiters

//     //loop through all the characters in the input string
    
//         //if the current character is not a delimiter, add it to the buffer
        
        
//             //if the current char is a delimiter but the last one was, that means we can
//             //push the buffer to a new spot in the array and then clear  it
            

//             //flip the switch back when appropriate
            
        
    

//     //when we get to the end of the string, check if there is anything left in the buffer
    

//     return output;
// }