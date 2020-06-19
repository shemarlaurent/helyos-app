import { Component, ViewChild, ElementRef, OnInit, Input } from "@angular/core";

/**
 * Generated class for the PriceCurveComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "price-curve",
  templateUrl: "price-curve.html"
})
export class PriceCurveComponent implements OnInit {
  @ViewChild("cont") cont: ElementRef;
  @ViewChild("redPath") redPathInstance: ElementRef;
  @ViewChild("orangePath") orangePathInstance: ElementRef;
  @ViewChild("yellowPath") yellowPathInstance: ElementRef;
  @ViewChild("greenPath") greenPathInstance: ElementRef;

  @Input("price") price: any;
  constructor() {}

  ngOnInit() {
    this.constructKnob();
  }

  constructKnob() {
    let pos = this.calculatepos(this.price);
    console.log("post", pos);

    let type;
    let path;

    if (this.price >= 0 && this.price <= 100) {
      path = this.redPathInstance.nativeElement;
      type = "red";
    }

    if (this.price >= 101 && this.price <= 200) {
      path = this.orangePathInstance.nativeElement;
      type = "orange";
    }

    if (this.price >= 201 && this.price <= 400) {
      path = this.yellowPathInstance.nativeElement;
      type = "yellow";
    }
    if (this.price >= 401) {
      path = this.greenPathInstance.nativeElement;
      type = "green";
    }

    if (type == "yellow" || type == "green") pos = 1 - pos;

    var pathLength = path.getTotalLength();
    var loc = path.getPointAtLength(pos * pathLength);
    console.log(loc);

    var div = document.createElement("div");
    div.setAttribute("class", "knob");
    if (type == "red") div.style.border = "5px solid #FF003F";
    if (type == "orange") div.style.border = "5px solid #FFC14F";
    if (type == "yellow") div.style.border = "5px solid #FFFF2C";
    if (type == "green") div.style.border = "5px solid #13F200";
    div.style.left = loc.x + "px";
    div.style.top = loc.y + "px";

    if (type == "red") {
      if (pos >= 0.6 && pos <= 0.9) div.style.marginLeft = "21px";
      if (pos <= 0.5 && pos >= 0.3) div.style.marginLeft = "20px";
      if (pos < 0.3) div.style.marginLeft = "18px";
    }

    if (type == "orange") {
      if (pos <= 0.5) {
        div.style.marginTop = "60px";
        div.style.marginLeft = "15px";
      }

      if (pos >= 0.6) {
        div.style.marginTop = "58px";
        div.style.marginLeft = "15px";
      }
    }

    if (type == "yellow") {
      if (pos >= 0 && pos <= 0.2) {
        div.style.marginTop = "53px";
        div.style.marginLeft = "10px";
      }
      if (pos >= 0.2 && pos <= 0.4) {
        div.style.marginTop = "55px";
        div.style.marginLeft = "10px";
      }
      if (pos >= 0.4) {
        div.style.marginTop = "56px";
        div.style.marginLeft = "10px";
      }
    }

    if (type == "green") {
      if (pos) {
        div.style.marginLeft = "10px";
      }

      if (pos > 0.9) {
        div.style.marginLeft = "18px";
      }

      if (pos <= 0.7 && pos >= 0.5) {
        div.style.marginLeft = "13px";
      }

      if (pos <= 0.5 && pos >= 0.3) {
        div.style.marginLeft = "15px";
      }

      if (pos <= 0.2) {
        div.style.marginLeft = "17px";
      }
    }

    this.cont.nativeElement.appendChild(div);
  }

  calculatepos(price) {
    if (price > 650) return 1;
    let lowerbound, upperbound;

    if (this.price >= 0 && this.price <= 100) {
      lowerbound = 0;
      upperbound = 100;
    }

    if (this.price >= 101 && this.price <= 200) {
      lowerbound = 101;
      upperbound = 200;
    }

    if (this.price >= 201 && this.price <= 400) {
      lowerbound = 201;
      upperbound = 400;
    }
    if (this.price >= 401) {
      lowerbound = 401;
      upperbound = 650;
    }

    const pos = (price - lowerbound) / (upperbound - lowerbound);
    return pos;
  }
}
