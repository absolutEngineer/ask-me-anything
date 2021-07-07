import { Injectable } from '@nestjs/common';
import { User } from "./entities/user.entity";

const axios = require('axios').default;

@Injectable()
export class AppService {
  async publishNewUser(newUser: User): Promise<boolean> {
      const resp = await axios.post("http://localhost:4000/publishAsync", {
        channel: "users",
        message: { type: "new-user", item: newUser }
      });

      return resp.status === 204;
  }
}
