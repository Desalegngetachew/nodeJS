const fs = require("fs");
const express = require("express");
const path = require("path");
const multer = require("multer");

fs.readFile('file.txt', (err, data) => {
    if (err) return console.error(err);
    console.log(data.toString());
});

let i = 1;
while (i <= 5) {
    console.log("The number is " + i);
    i++;
}