import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async findByWhatsAppPhoneNumber(
    whatsappPhoneNumber: string,
  ): Promise<User | null> {
    return this.usersRepository.findOne({
      where: { whatsappPhoneNumber },
    });
  }

  async createUser(whatsappPhoneNumber: string): Promise<User> {
    const user = this.usersRepository.create({
      whatsappPhoneNumber,
      isActive: true,
      lastInteractionAt: new Date(),
    });

    return this.usersRepository.save(user);
  }

  async findOrCreateByWhatsAppPhoneNumber(
    whatsappPhoneNumber: string,
  ): Promise<User> {
    const existingUser =
      await this.findByWhatsAppPhoneNumber(whatsappPhoneNumber);

    if (existingUser) {
      return this.updateLastInteraction(existingUser.id);
    }

    return this.createUser(whatsappPhoneNumber);
  }

  async updateLastInteraction(userId: string): Promise<User> {
    await this.usersRepository.update(userId, {
      lastInteractionAt: new Date(),
    });

    const updatedUser = await this.usersRepository.findOne({
      where: { id: userId },
    });

    if (!updatedUser) {
      throw new Error(`User with ID ${userId} was not found after update.`);
    }

    return updatedUser;
  }
}
