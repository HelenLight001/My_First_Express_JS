const express = require("express");
const {
  GetAllTask,
  CreateTask,
  GetSingleTask,
  UpdateSingleTask,
  DeleteSingleTask,

  //   DeleteTask,
} = require("../Controllers/TaskController");

const router = express.Router();
router.get("/", GetAllTask);
router.get("/:id", GetSingleTask);
router.post("/", CreateTask);
router.put("/:id", UpdateSingleTask);
router.delete("/:id", DeleteSingleTask);

// router.delete("/", DeleteTask);

// router.put("/", UpdateTask);

// router.get("/:id", (req, res)=>{
//     res.json({message: "Hello Cynthia"});
//   });

module.exports = router;
// export default router
