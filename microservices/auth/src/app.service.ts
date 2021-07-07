import {BadRequestException, Injectable} from '@nestjs/common';
import { User } from "./entities/user.entity";
import { UserService } from "./user.service";

@Injectable()
export class AppService {

  constructor(private readonly userService: UserService) {}

  async getUserEvent(user: User) {
    const newUser = await this.userService.addUser(user);

    if (newUser) {
      return {status: "OK"}
    }
    else {
      throw new BadRequestException("User insertion failed");
    }
  }
}
