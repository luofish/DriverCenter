import express = require("express");

import school = require("../services/school.service");

export var router = express.Router();



router.get("/schoolList", (req, res, next)=>{
    res.send(school.getSchoolList());
});
