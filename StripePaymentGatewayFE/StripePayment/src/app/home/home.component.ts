import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from "@angular/router";
import { PaymentserviceService } from '../paymentservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  paymentHandler: any = null;
  stripeAPIKey: any = 'pk_test_51M2Xe0SGETGrHif8Wfb72WhLB1KGDqexl4A63EU63jczBtecUzSsp7wy7yw1xPbP0u68JVGTaahwMTmaVCQ9zVUf006SvLQw8u';

  stripeto: any = null;
  Dateto: any = null;
  Amount: any = null;
  token : any;
  constructor( private dialogModal: MatDialog,
    public dialog: MatDialog,
    private router: Router,
    private stripePaymentService:PaymentserviceService,
    ) { }

  /*------------------------------------------
  --------------------------------------------
  ngOnInit() Function
  --------------------------------------------
  --------------------------------------------*/
  ngOnInit() {
    this.invokeStripe();

  }
 
  /*------------------------------------------
  --------------------------------------------
  makePayment() Function
  --------------------------------------------
  --------------------------------------------*/
  makePayment(amount: any) {

    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: this.stripeAPIKey,
      locale: 'auto',
      token: (token: any) => {
        this.token = `token : ${token}`;
        this.stripeto=token.id;
          this.Dateto=new Date();
          let obj={
            stripeid:this.stripeto,
            Amount:amount,
            date:this.Dateto
          }    
        this.stripePaymentService.SavePaymnent(obj).subscribe((response)=>{
        },error=>{
         
        })
      }
    });
    paymentHandler.open({
      name: 'codequs.com',
      description: '3 widgets',
      amount: amount * 100,      
    });
    
    
    
  }


  /*------------------------------------------
  --------------------------------------------
  invokeStripe() Function
  --------------------------------------------
  --------------------------------------------*/
  invokeStripe() {

    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');

      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: this.stripeAPIKey,
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
            debugger

            alert('Payment has been successfull!');
           /// call SaveAppointmentFromPatientPortal() as per requirement
          },
        });
      };

      window.document.body.appendChild(script);
    }
  }


}


