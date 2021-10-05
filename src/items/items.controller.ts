import { Controller , Get, Param, Post, Body , Put, Delete} from '@nestjs/common';
import { get } from 'http';
import { ItemsService } from './items.service';

interface ItemDto{
    id: string;
    name: string;
    check: boolean;
}

@Controller('items')
export class ItemsController {
    constructor(private ItemService:ItemsService){}

    @Get()
    getItem(){
        return this.ItemService.getItem();
    }

    @Get(':id')
    getItemById(@Param()params){
        console.log('get a single item', params.id);
        return this.ItemService.getItemById().filter(p => p.id == params.id)
    }


    @Post()
    CreateItem(@Body() item:ItemDto){
        console.log('create item', item);
        this.ItemService.createItem(item);
    }

    @Put()
    updateitem(@Body() item:ItemDto){
        console.log('update item',item);
        this.ItemService.updateItem(item);
    }

    @Delete(':id')
    deleteItem(@Body() item: ItemDto){
        console.log('delete product',item.id);
        this.ItemService.deleteItem(item.id);
    }
}

