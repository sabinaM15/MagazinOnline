import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/models/address.model';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {
  numberOfAddresses!: number 

  newAddressNickname!: string
  newAddressStreet!: string
  newAddressNumber!: number
  newAddressCity!: string

  constructor(private addressService: AddressService) { }

  ngOnInit(): void {

    console.log("Numarul de adrese: ", this.numberOfAddresses);
  }

  saveAddresses(){
    let indexAddress = this.addressService.findLastId();
    let newAddress: Address = {
      id: indexAddress,
      code: this.newAddressNickname,
      street: this.newAddressStreet,
      num: this.newAddressNumber,
      city: this.newAddressCity
    }

    this.addressService.saveAddress(newAddress)
  }

}
