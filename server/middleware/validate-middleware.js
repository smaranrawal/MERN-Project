const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    const status = 422;
    const message = "Fill the gap properly";
    const extraDetails = err.issues?.[0]?.message || "Validation failed";
    // const message = err.issues?.[0]?.message || "Validation failed";
    const error = {
      status,
      message,
      extraDetails,
    };
    // console.log(message);
    // res.status(400).json({ msg: message });
    next(error);
  }
};

module.exports = validate;

/*const validate = (schema) => async (req, res, next) => {
  try {
    const parsedBody = await schema.parseAsync(req.body);
    req.body = parsedBody;
    next();
  } catch (err) {
    // Ensure we use Zod error messages
    const status = 422;
    const errorMessage = err?.issues?.[0]?.message || "Validation failed";

    return res.status(status).json({
      status,
      message: errorMessage
    });
  }
};

module.exports = validate;
*/
