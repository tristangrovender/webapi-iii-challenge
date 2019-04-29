const uppercaseName = (req, res, next) => {
    let { name } = req.body;
    if (!name) {
      res.status(400).json({ error: "No name detected, please enter a name" });
    }
    let uppercaseName = name.toUpperCase();
  
     console.log(uppercaseName);
  
     req.body.name = uppercaseName;
    next();
  };
  
   module.exports = {uppercaseName};