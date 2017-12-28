import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'hure-job-group-container',
    templateUrl: './job-group-container.component.html',
    styleUrls: ['./job-group-container.component.scss']
})
export class JobGroupComponent implements OnInit {
    private array_typework = [
        { url: "http://jobcareer.chimpgroup.com/careerbakery/wp-content/uploads/category-list-img7.png", text: 'Nhóm việc A' },
        { url: "http://jobcareer.chimpgroup.com/careerbakery/wp-content/uploads/category-list-img7.png", text: 'Nhóm việc B' },
        { url: "http://jobcareer.chimpgroup.com/careerbakery/wp-content/uploads/category-list-img7.png", text: 'Nhóm việc C' }, { url: "http://jobcareer.chimpgroup.com/careerbakery/wp-content/uploads/category-list-img7.png", text: 'Nhóm việc D' }, { url: "http://jobcareer.chimpgroup.com/careerbakery/wp-content/uploads/category-list-img7.png", text: 'Nhóm việc E' }, { url: "http://jobcareer.chimpgroup.com/careerbakery/wp-content/uploads/category-list-img7.png", text: 'Nhóm việc F' },
        { url: "http://jobcareer.chimpgroup.com/careerbakery/wp-content/uploads/category-list-img7.png", text: 'Nhóm việc G' }, { url: "http://jobcareer.chimpgroup.com/careerbakery/wp-content/uploads/category-list-img7.png", text: 'Nhóm việc H' },
    ];
    ngOnInit() { }
}