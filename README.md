# AngularCalculation

# Web Page for Mathematical Calculations using Angular

## AIM:
To design a dynamic website to perform mathematical calculations using Angular Framwork

## DESIGN STEPS:

### Step 1:

Requirement collection.

### Step 2:

Creating the layout using HTML and CSS in component.html file

### Step 3:

Write typescript to perform the calculations.

### Step 4:

Validate the layout in various browsers.

### Step 5:

Validate the HTML code.

### Step 6:

Publish the website in the given URL.

## PROGRAM :

### app.component.html:
~~~
<h1>Math Clalculations</h1>
<Rectangle-Area></Rectangle-Area>
<Cylinder-Volume></Cylinder-Volume>
~~~

### index.html:
~~~
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Angularpj</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <style>
    * {
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}
body {
    color: snow;
    background-image: url("https://th.bing.com/th/id/OIP.5Mzm03CJXLOw1a-tPYQJtAHaEo?w=272&h=180&c=7&r=0&o=5&pid=1.7");
    background-repeat: no-repeat;
    background-size: cover;
}    
.container{
    background-size: 700px 500px ;
    width: 700px;
    height: 400px;
    text-align: center;
    border-style: solid;
    border-color: white;
    margin-left: 300px;
    display: inline-block;
 }
.container1{
    
    width:700px;
    height:400px;
    text-align:center;
    border-style: solid;
    border-color: white;
    margin-left: 300px;
    margin-top: 10px;
}
.content {
    display: block;
    width: 100%;
    min-height: 500px;
    margin: 0px 0px 0px 0px;
    margin-top: 65px;
    }
h1{
    text-align: center;
}
h2{
    text-align: center;
    padding-top: 20px;
    font-style: italic;
}
.formelement{
    text-align: center;

}
.footer{
    display: inline-block;
    background-color:cyan;
    padding-top: 10px;
}
  </style>
</head>
<body>
  <app-root></app-root>
  <div class="footer">Developed by G Venkata Pavan Kumar</div>
</body>
</html>

~~~
### cylinder.component.html:
~~~
<div class="container1">
    <h2><u>Volume of Cylinder</u></h2>
    Radius=<input [(ngModel)]="radius"type="text" >Meters<br/>
    Height=<input [(ngModel)]="height"type="text" >Meters<br/>
        <input type="button" (click)="onCalculate()" value="Calculate"><br/>
    Volume=<input type="text" [value]="volume">Meters<sup>3</sup>
</div>


~~~

### rectanagle.component.html:
~~~
<div class="container1">
    <h2><u>Area of the Rectangle</u></h2>
    Length=<input [(ngModel)]="length"type="text" >Meters<br/>
    Breadth=<input [(ngModel)]="breadth"type="text" >Meters<br/>
        <input type="button" (click)="onCalculate()" value="Calculate"><br/>
    Area=<input type="text" [value]="area">Meters<sup>2</sup>
</div>
~~~

### app.component.ts:
~~~
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularpj';
}

~~~
### cylinder.component.ts:
~~~
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


~~~
### rectangle.component.ts:
~~~
import { Component } from "@angular/core";

@Component({
    selector:"Rectangle-Area",
    templateUrl:"./rectangle.component.html"
})
export class RectagleComponent{
    length:number;
    breadth:number;
    area:number;
    constructor(){
        this.length=0;
        this.breadth=0;
        this.area=this.length*this.breadth
    }
    onCalculate()
    {
        this.area=this.length*this.breadth;
    }
}


~~~
## OUTPUT:
![OUTPUT](./Ex8/con1.png)
![OUTPUT](./Ex8/con2.png)


## Result:
Therefore we successfully designed a dynamic website to perform mathematical calculations using Angular Framwork.
