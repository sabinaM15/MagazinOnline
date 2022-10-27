import { Injectable } from "@angular/core";
import { sample_addresses } from "../data";
import { Address } from "../models/address.model";

@Injectable({
    providedIn: 'root'
  })
export class AddressService{
    getAllAddresses(): Address[]{
        return sample_addresses;
    }

    getAddressById(addressId:number):Address{
        return this.getAllAddresses().find(address => address.id == addressId) ?? new Address();
      }
    
}