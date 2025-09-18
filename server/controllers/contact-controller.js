const contactForm = async (req, res, next) => {
  try {
    const { username, email, message } = req.body;
    const newContact = await Contact.create({ username, email, message });
    return res.status(201).json({ message: "Message sent successfully", data: newContact });
  } catch (error) {
    next(error); // Pass error to your global error handler
  }
};

module.exports=contactForm;