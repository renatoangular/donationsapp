class Item {
    _id: string;
    itemname: string;
    description: string;
    date_Recieved: Date;
    item_Status: string;

    constructor(
    ) {
        this._id = '';
        this.itemname = '';
        this.description = '';
        this.date_Recieved = new Date();
        this.item_Status = '';
    }
}

export default Item;
