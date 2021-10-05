import { Injectable } from '@nestjs/common';
import { count } from 'console';

@Injectable()
export class ItemsService {
    

       Items= [{
            id:1,
            name: 'buy groceries',
            check: true
        },
    
        {
            id:2,
            name: 'prepare weekly report',
            check: false
        }]
        
    getItem(){
        return this.Items;
    }

    getItemById(){
        return this.Items;
    }

    createItem(item){
        
        this.Items=[...this.Items,{...item,id:this.Items.length+1}];
        
        //this.Items.push({...item});
    }

    updateItem(item){

        this.Items = this.Items.map(p => {
            if(p.id == item.id){
                return { ...item};
            }
            return p;
        });
    }

    deleteItem(id: string | number){
        this.Items = this.Items.filter(p => p.id != id);
    }
}
