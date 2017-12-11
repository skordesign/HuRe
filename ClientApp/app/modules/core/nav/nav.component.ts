import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'hure-nav',
    templateUrl:'./nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
    ngOnInit(): void {
       //hàm này sễ khởi tạo khi gọi component này 
        //viết kiểu này là typescript  , typescript là phiên bản nâng cao của jas
    //    alert('test')
    }
    private test(){
       alert('test')
       
    }

}
