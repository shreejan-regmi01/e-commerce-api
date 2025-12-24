import { validationResult } from "express-validator";

const validatePayload = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: "Payload validation failed",
      errors: errors.array(),
    });
  }

  next();
};

export default validatePayload;
