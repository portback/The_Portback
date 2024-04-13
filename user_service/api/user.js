const { validateUserSchema, cleanPayload } = require("../config/dto/User.dto");
const {
  validateLoginSchema,
  validateOnBoardingSchema,
  validateResetSchema,
} = require("../config/dto/login.dto");
const { UserService } = require("../services");
const { CustomeError } = require("../utils");
const { VerifyToken, auth } = require("./middlewares");

module.exports = (app) => {
  const userService = new UserService();

  app.get("/followers", auth, async (req, res, next) => {
    try {
      const followers = await userService.getUserData(
        "_id name avatar",
        req.user._id,
        "followers",
        req
      );

      res.status(200).send({ data: followers, error: null });
    } catch (error) {
      next(error);
    }
  });

  app.get("/following", auth, async (req, res, next) => {});

  app.post("/create-account", async (req, res, next) => {
    const { email, password, name } = req.body;

    if (await validateUserSchema({ email, password, name })) {
      const errMessage = await validateUserSchema({ email, name, password });
      return res.status(400).send({
        data: null,
        error: errMessage,
      });
    } else {
      try {
        const newUser = await userService.Signup(name, email, password);

        res.status(201).send({ data: newUser, error: null });
         } catch (error) {
        next(error);
      }
    }
  });

  app.post("/login", async (req, res, next) => {
    const { email, password } = req.body;

    if (await validateLoginSchema({ email, password })) {
      const errMessage = await validateLoginSchema({ email, password });
      return res.status(400).send({ data: null, error: errMessage });
    } else {
      try {
        const SignIn = await userService.SignIn(email, password);

        res.status(200).json({ data: SignIn, error: null });
      } catch (error) {
        next(error);
      }
    }
  });

  app.post("/forgot-password", async (req, res, next) => {
    const { email } = req.body;

    if (!email?.length) {
      return res
        .status(400)
        .send({ data: null, error: "email field is required" });
    } else {
      try {
        const forgotPassword = await userService.RecoverPassword(email);
        res.status(200).send({ data: forgotPassword, error: null });
      } catch (error) {
        next(error);
      }
    }
  });

  app.post("/reset-password", async (req, res, next) => {
    const { email, otp, password } = req.body;

    if (await validateResetSchema({ email, password, otp })) {
      const errMessage = await validateResetSchema({ email, password, otp });
      throw CustomeError(errMessage, 400);
    } else {
      try {
        const resetPassWord = await userService.ResetPassword(
          otp,
          password,
          email
        );

        res
          .status(200)
          .send({ data: "password reset succesfully ", error: null });
      } catch (error) {
        next(error);
      }
    }
  });

  app.post("/onboarding", auth, async (req, res, next) => {
    const { bio, location, role, playerName } = req.body;
    try {
      if (await validateOnBoardingSchema({ bio, location, role, playerName })) {
        const errMessage = await validateOnBoardingSchema({
          bio,
          location,
          role,
          playerName,
        });
        throw new CustomeError(errMessage, 400);
      } else {
        try {
          const onboard = await userService.OnboardUser(
            bio,
            location,
            role,
            playerName,
            req.user._id
          );
          res
            .status(200)
            .send({ data: cleanPayload(onboard?.toJSON()), error: null });
        } catch (error) {
          next(error);
        }
      }
    } catch (error) {
      next(error);
    }
  });
  app.post("/follow/:id", auth, async (req, res, next) => {
    const { id } = req.params;

    try {
      const following = await userService.FollowUser(req.user._id, id);

      res.status(200).send({ data: following, error: null });
    } catch (error) {
      next(error);
    }
  });

  app.post("/unfollow/:id", auth, async (req, res, next) => {
    const { id } = req.params;

    try {
      const following = await userService.UnfollowUser(req.user._id, id);

      res.status(200).send({ data: following, error: null });
    } catch (error) {
      next(error);
    }
  });

  app.get("/user/:id", auth, async (req, res, next) => {
    try {
      const user = await userService.getMe(req.params.id);
      res.status(200).send({ data: user, error: null });
    } catch (error) {
      next(error);
    }
  });

  app.patch("/:id", (req, res, next) => {});

  app.delete("/delete/:id", (req, res, next) => {});
};
