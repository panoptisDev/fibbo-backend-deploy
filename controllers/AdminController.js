import {
  findUser,
  findUserByToken,
  getOldBalance,
  getOldGasStation,
} from "../utils/admin.js";
import { addCategory } from "../utils/categories.js";

export default class AdminController {
  constructor() {}

  static async getLastBalance(req, res) {
    try {
      //Buscaremos primero en los títulos de los items

      const oldBalance = await getOldBalance();

      res.send({ balance: oldBalance.balance });
    } catch (e) {
      res.status(500).send(e);
    }
  }

  static async getLastGasStation(req, res) {
    try {
      //Buscaremos primero en los títulos de los items

      const oldBalance = await getOldGasStation();

      res.status(200).send({ balance: oldBalance.balance });
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.query;
      //Buscaremos primero en los títulos de los items

      const user = await findUser(email, password);
      if (user) {
        res.status(200).send(user);
      } else {
        res.status(205).send(null);
      }
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  }

  static async loginToken(req, res) {
    try {
      const { token } = req.query;
      //Buscaremos primero en los títulos de los items

      const user = await findUserByToken(token);
      if (user) {
        res.status(200).send(user);
      } else {
        res.status(205).send(null);
      }
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  }

  static async newCategory(req, res) {
    try {
      const { espName, engName, identifier, icon } = req.body;
      //Buscaremos primero en los títulos de los items

      const doc = {
        name: {
          eng: engName,
          esp: espName,
        },
        identifier,
        icon,
      };

      const newCat = await addCategory(doc);
      res.status(200).send(newCat);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  }
}
