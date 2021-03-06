import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from "./entities/user.entity";
import { InjectEntityManager } from "@nestjs/typeorm";
import { EntityManager } from "typeorm";

@Injectable()
export class AppService {

  constructor(@InjectEntityManager() private manager: EntityManager) {}

  // getUserEvent handles a message indicating that a new user has been created.
  async getUserEvent(user: User) {
    const newUser = await this.manager.save(User, user);

    if (newUser) {
      return {status: "OK"}
    }
    else {
      throw new BadRequestException("User insertion failed");
    }
  }
}
