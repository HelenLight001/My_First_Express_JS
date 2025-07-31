const express = require("express");
const {SignUp, Login} = require("../Controllers/UserController");

const router = express.Router();
router.post("/", SignUp);
router.post("/login", Login);

// router.get("/", GetAllTask);
// router.get("/:id", GetSingleTask);
// router.put("/:id", UpdateSingleTask);
// router.delete("/:id", DeleteSingleTask);

// router.delete("/", DeleteTask);

// router.put("/", UpdateTask);

// router.get("/:id", (req, res)=>{
//     res.json({message: "Hello Cynthia"});
//   });

module.exports = router;
// export default router
