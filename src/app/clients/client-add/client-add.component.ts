import { ClientsService } from './../service/clients.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {

  clientForm: FormGroup;
  errorMessage;
  constructor(private clientService: ClientsService) { }

  ngOnInit() {
    this.clientForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'surname': new FormControl(null, Validators.required),
      'telephoneNumbers': new FormControl(null, Validators.required),
      'emailAddress': new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    let temp = this.clientForm.value.telephoneNumbers;
    this.clientForm.value.telephoneNumbers = [temp];
    console.log(this.clientForm.value);
    this.clientService.addClient(this.clientForm.value).subscribe(
      resp => console.log(resp),
      err => console.log(err)
    );
  }

}
