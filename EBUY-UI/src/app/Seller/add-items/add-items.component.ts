import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {

  AddItemForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.AddItemForm = this.formBuilder.group({
          id: ['', Validators.required],
          category_id: ['', Validators.required],
          subcategory_id: ['', Validators.required],
          price: ['', Validators.required],
          stock_number: ['', Validators.required],
          item_name:['',[Validators.required,Validators.pattern('^[a-z]{3,20}$')]],
          description:['',[Validators.required,Validators.pattern('^[a-z]{3,20}$')]],
          remarks:['',[Validators.required,Validators.pattern('^[a-z]{3,20}$')]],    
          acceptTerms: [false, Validators.requiredTrue]
      });
  }

}
