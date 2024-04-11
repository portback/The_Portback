const { cleanPayload } = require("../config/dto/User.dto");
const { UserRepository } = require("../database");
const {
  SerializePassword,
  GenerateToken,
  CustomeError,
  testPassword,
  generateOTPSecret,
  generateOTP,
  sendMail,
  verifyOtp,
} = require("../utils");
const CustomError = require("../utils/app-errors");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async Signup(username, email, password) {
    const hashedPassword = await SerializePassword(password);

    const newUser = await this.userRepository.CreateUser(
      email,
      hashedPassword,
      username
    );

    return newUser;
  }

  async SignIn(email, password) {
    try {
      const isUserExist = await this.userRepository.getUserByEmail(email);
      if (isUserExist) {
        const checkPassword = await testPassword(
          password,
          isUserExist.password
        );

        if (checkPassword) {
          const token = GenerateToken("password", { _id: isUserExist._id });

          return { ...cleanPayload(isUserExist), token };
        } else {
          throw new CustomeError("Incorrect Password", 400);
        }
      } else {
        throw new CustomeError("User doesnt Exist", 400);
      }
    } catch (error) {
      throw error;
    }
  }

  async RecoverPassword(email) {
    try {
      const userExist = await this.userRepository.getUserByEmail(email);

      if (userExist) {
        const { secret, expires } = generateOTPSecret();

        console.log(secret, expires);

        const updateUser = await this.userRepository.updateUser(userExist._id, {
          otpKey: secret.base32,
          otpExpires: expires,
        });

        const otp = generateOTP(secret);

        const data = await sendMail(
          email,
          "Portback Password Reset",
          `Your otp pin for pasword reset  is ${otp}`
        );

        if (data?.error) {
          throw new CustomeError(
            `Error sending one-time-password   ${data?.error}`,
            400
          );
        } else {
          return "One time password has been  sent to mail";
        }
      } else {
        throw CustomeError(`user with email ${email}  doens't exist`, 400);
      }
    } catch (error) {
      throw error;
    }
  }

  async ResetPassword(otp, password, email) {
    try {
      const isuser = await this.userRepository.getUserByEmail(email);

      if (!isuser) {
        throw new CustomeError(`User with email ${email} doens't exist `);
      } else {
        const verify = verifyOtp(isuser.otpKey, otp);

        if (verify) {
          const hashedPassword = await SerializePassword(password);

          const update = await this.userRepository.updateUser(isuser._id, {
            password: hashedPassword,
            otpKey: null,
            otpExpires: null,
          });

          return update;
        }
      }
    } catch (error) {
      throw error;
    }
  }

  async FollowUser(userId, followId) {
    try {
      const follow = await this.userRepository.followUser(userId, followId);

      return follow;
    } catch (error) {
      throw error;
    }
  }

  async UnfollowUser(userId, followId) {
    try {
      const follow = await this.userRepository.UnfollowUser(userId, followId);

      return follow;
    } catch (error) {
      throw error;
    }
  }

  async OnboardUser(bio, location, role, playerName, _id) {
    try {
      const onBoardUser = await this.userRepository.updateUser(_id, {
        role,
        playerName,
        location,
        bio,
        onBoarded: true,
      });

      return onBoardUser;
    } catch (error) {
      throw new CustomeError("Failure OnBoarding User", 500);
    }
  }

  async getUserData(fields, _id, populate, req) {
    try {
      const get = await this.userRepository.getUserData(
        fields,
        _id,
        populate,
        1,
        req
      );
      return get;
    } catch (error) {
      throw error;
    }
  }

  async getMe(_id) {
    try {
      const user = await this.userRepository.getUserById(_id);
      return user;
    } catch (error) {
      throw error;
    }
  }

  subscribeEvents(payload) {
    const { event, data } = payload;

    switch (event) {
    }
  }
}

module.exports = UserService;
