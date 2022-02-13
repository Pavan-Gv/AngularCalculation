import { Component } from "@angular/core";

@Component({
    selector:"Cylinder-Volume",
    templateUrl:"./cylinder.component.html"
})
export class CylinderComponent{
    radius:number;
    height:number;
    volume:number;
    constructor(){
        this.radius=0;
        this.height=0;
        this.volume=this.radius*this.height
    }
    onCalculate()
    {
        this.volume=3.14*(this.radius*this.radius)*this.height;
    }
}

