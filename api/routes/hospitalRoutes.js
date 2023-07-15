const express = require('express');
const Hospital = require('../models/Hospital');
const NewHospital = require('../models/NewHospital');

const router = express.Router();

router.post("/addhospital", async (req, res) => {
  const newHospital = new NewHospital({
    hospitalName: req.body.hospitalName,
    email: req.body.email,
    password: req.body.password,
    address: req.body.address,
    contact: req.body.contact,
  })

  try {
    const hospital = await newHospital.save();
    res.status(201).json(hospital)
  }
  catch (err) {
    res.status(500).json(err)
  }
})


//LOGIN  **hospital login**

router.post("/login", async (req, res) => {

  try {
      const hospital = await NewHospital.findOne({ email: req.body.email });
      !hospital && res.status(401).json("Wrong password or username");

      const originalPassword = hospital.password


      originalPassword !== req.body.password &&
          res.status(401).json(("Wrong password or username"));


      const { password, ...info } = hospital._doc;

      res.status(200).json({ ...info });



  } catch (error) {
      res.status(500).json(error);
  }



});

router.put("/:id", async (req, res) => {

  try {
    const updatedHospital = await Hospital.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedHospital);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get("/viewhospital", async (req, res) => {
  try {
    var criteria = { $or: [{ doctorID: '62619082db191327ddd10430' }] }

    Hospital.find(criteria, function (err, foundHospital) {
      res.status(200).json(foundHospital)
    });
  }
  catch (err) {
    res.status(500).json(err)
  }
})

router.get("/hospitalslist", async (req, res) => {
  try {
    const hospital = await Hospital.find();
    res.status(200).json(hospital);
  } catch (err) {
    res.status(500).json(err);
  }
})

//deletedoctor
router.delete("/:id", async (req, res) => {
  try {

    await Hospital.findByIdAndDelete(req.params.id);
  } catch (err) {
    res.status(500).json(err);
  }
})

//add doctor to hospital
router.put("/adddepartment", async (req, res) => {

      try {
        const hospital = await Hospital.findById(req.params.id);
        hospital.updateMany(
          {},
          {$push:{"departmentsList": req.body.departmentid}})
        res.status(200).json(info);
      } catch (err) {
        res.status(500).json(err);
      }
});

//add doctor to hospital
router.put("/adddoctor", async (req, res) => {

  try {
    const hospital = await Hospital.findById(req.params.id);
    hospital.updateMany(
      {},
      {$push:{"doctorsList": req.body.doctorid}})
    res.status(200).json(info);
  } catch (err) {
    res.status(500).json(err);
  }
});

//add doctor to hospital
router.put("/addtreatment", async (req, res) => {

  try {
    const hospital = await Hospital.findById(req.params.id);
    hospital.updateMany(
      {},
      {$push:{"treatmentList": req.body.treatmentid}})
    res.status(200).json(info);
  } catch (err) {
    res.status(500).json(err);
  }
});


//remove department from hospital
router.put("/removedepartment", async (req, res) => {

  try {
    const hospital = await Hospital.findById(req.params.id);
    hospital.updateMany(
      {},
      {$pull:{"departmentsList": req.body.departmentid}})
    res.status(200).json(info);
  } catch (err) {
    res.status(500).json(err);
  }
});

//remove doctor from hospital
router.put("/removedoctor", async (req, res) => {

try {
const hospital = await Hospital.findById(req.params.id);
hospital.updateMany(
  {},
  {$pull:{"doctorsList": req.body.doctorid}})
res.status(200).json(info);
} catch (err) {
res.status(500).json(err);
}
});

//delete treatment from hospital
router.put("/removetreatment", async (req, res) => {

try {
const hospital = await Hospital.findById(req.params.id);
hospital.updateMany(
  {},
  {$pull:{"treatmentList": req.body.treatmentid}})
res.status(200).json(info);
} catch (err) {
res.status(500).json(err);
}
});


module.exports = router