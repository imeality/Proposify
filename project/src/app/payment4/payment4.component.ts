import { Component, OnInit, AfterViewChecked } from '@angular/core';
declare let paypal: any;

@Component({
  selector: 'app-payment4',
  templateUrl: './payment4.component.html',
  styleUrls: ['./payment4.component.css']
})
export class Payment4Component implements AfterViewChecked {

addScript: boolean = false;
  paypalLoad: boolean = true;
  
  finalAmount: number = 1200;

  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'AQ74sKhhuAfWXI1bjY9-tpr5n_Qee6eB53iYVXMy-dSs99wolYHQGoQg5_vmN3yJbKxr3qH4ff4im_6A',
      production: '<your-production-key-here>'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.finalAmount, currency: 'INR' } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        //Do something when payment is successful.
      })
    }
  };

  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
        this.paypalLoad = false;
      })
    }
  }
  
  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');    
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    })
  }

  today: Date;
   fname =localStorage.getItem('key');
   lname =localStorage.getItem('key1');
   emal =localStorage.getItem('key2');
   mob =localStorage.getItem('key3');

  constructor() {
    this.today =new Date();
   }

  ngOnInit() {
  }

}

