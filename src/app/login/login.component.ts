import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  items;
      checkoutForm;

  constructor(private cartService: CartService,
        private formBuilder: FormBuilder,
      ) {
        this.checkoutForm = this.formBuilder.group({
          name: '',
          address: ''
        });
      }
  }

  ngOnInit(): void {

    
    
      constructor(
        
    
      ngOnInit() {
        this.items = this.cartService.getItems();
      }
    }
  }

}
