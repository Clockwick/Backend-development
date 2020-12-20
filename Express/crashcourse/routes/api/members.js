const express = require('express')
const router = express.Router();
const members = require("../../Members");
const uuid = require('uuid');


router.get('/:id', (req,res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if (found) {
      res.json(members.filter(member => member.id === parseInt(req.params.id)))
    } else {
      res.status(400).json({ msg : `No member with the id of ${req.params.id}`});
    }
  })
  
router.get("/", (req, res) => {res.json(members);});

// Create members
router.post("/",(req,res) => { 
    const newMember = {
        id : uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }
    if (!newMember.name || !newMember.email) 
    {
        return res.status(400).json({ msg: "Please include a name and email ."});
    }
    members.push(newMember);
    res.json(members); 
});

// Update member
router.put("/:id",(req,res) => { 
    const found = members.some(member => member.id === parseInt(req.params.id));
    
    if (found) {
        const updatedMember = req.body;
        
        members.forEach(member => {
            if (member.id === parseInt(req.params.id))
            {
                member.name = updatedMember.name ? updatedMember.name : member.name;
                member.email = updatedMember.email ? updatedMember.email : member.email;

                res.json({ msg: 'Member updated', member});
            }
        })
    } 
    members.push(newMember);
    res.json(members); 
});

// Delete members
router.delete("/:id",(req,res) => { 
    const found = members.some(member => member.id === parseInt(req.params.id));
    
    if (found) {
        members.filter(member => member.id !== parseInt(req.params.id));
        res.json({
            msg: `Deleted member ${req.params.id}`,
            members: members.filter(member => member.id !== parseInt(req.params.id))  
        })
    } else {
        res.status(400).json({msg : `You cannot delete non-existed member of ${req.params.id}`});
    }
    res.json(members); 
});


  
module.exports = router;