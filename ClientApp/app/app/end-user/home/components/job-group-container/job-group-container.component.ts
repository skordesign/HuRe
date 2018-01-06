import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'hure-job-group-container',
    templateUrl: './job-group-container.component.html',
    styleUrls: ['./job-group-container.component.scss']
})
export class JobGroupComponent implements OnInit {
    private array_typework = [
        { url: "http://jobcareer.chimpgroup.com/careerbakery/wp-content/uploads/category-list-img7.png", text: 'Kinh doanh các mặt hàng' },
        { url: "http://jobcareer.chimpgroup.com/careerbakery/wp-content/uploads/category-list-img7.png", text: 'Kinh doanh các mặt hàng' },
        { url: "http://jobcareer.chimpgroup.com/careerbakery/wp-content/uploads/category-list-img7.png", text: 'Kinh doanh các mặt hàng' }, { url: "http://jobcareer.chimpgroup.com/careerbakery/wp-content/uploads/category-list-img7.png", text: 'AAAAAAAA' }, { url: "http://jobcareer.chimpgroup.com/careerbakery/wp-content/uploads/category-list-img7.png", text: 'Nhóm việc E' }, { url: "http://jobcareer.chimpgroup.com/careerbakery/wp-content/uploads/category-list-img7.png", text: 'Nhóm việc F' },
        { url: "http://jobcareer.chimpgroup.com/careerbakery/wp-content/uploads/category-list-img7.png", text: 'Kinh doanh các mặt hàng' }, { url: "http://jobcareer.chimpgroup.com/careerbakery/wp-content/uploads/category-list-img7.png", text: 'Nhóm việc H' },
    ];
    ngOnInit() { }
}