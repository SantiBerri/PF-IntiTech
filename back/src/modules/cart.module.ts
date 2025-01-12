import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartController } from 'src/controllers/cart.controller';
import { Cart } from 'src/entities/cart.entity';
import { CartItem } from 'src/entities/cartItem.entity';
import { ItemRecord } from 'src/entities/itemRecord.entity';
import { PanelForSale } from 'src/entities/panelForSale.entity';
import { Record } from 'src/entities/record.entity';
import { User } from 'src/entities/user.entity';
import { CartRepository } from 'src/repositories/cart.repository';
import { CartService } from 'src/services/cart.service';

@Module({
  imports: [TypeOrmModule.forFeature([Cart, CartItem, PanelForSale, Record, ItemRecord, User])],
  controllers: [CartController],
  providers: [CartService, CartRepository],
  exports: [CartRepository, TypeOrmModule],
})
export class CartModule { }
