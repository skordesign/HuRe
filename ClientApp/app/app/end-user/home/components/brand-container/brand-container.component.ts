import { Component, OnInit, OnDestroy } from '@angular/core';
import { CompanyService } from '@services/backend/company.service';
import { Observable } from 'rxjs/Observable';
import { share } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'hure-brand-container',
    templateUrl: 'brand-container.component.html',
    styleUrls: ['./brand-container.component.scss']
})

export class BrandContainerComponent implements OnInit, OnDestroy {
    ngOnDestroy(): void {
        this.sub!.unsubscribe()
    }
    listBrand: any[]
    sub:Subscription
    constructor(private companySvc:CompanyService) { }

    ngOnInit() {
       this.sub =  this.companySvc.getCompanies().subscribe(s=>{
            this.listBrand = s.map(o=>{
                return {
                    img:o.urlLogo,
                    text:o.name,
                    url:o.website
                }
            });
       });
     }
}