"use strict";
/*
let message:( string | number | boolean ) = "welcome to your life";
    message = 555;
*/
// let message:any = "welcome to your life";
// let messages:string[] = ["welcome to your life","hello world", "how are you ? "];
let messages = ["welcome to your life", "hello world", "how are you ? "];
alert(messages[Math.floor(Math.random() * messages.length - 1)]);
