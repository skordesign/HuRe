import { Component, OnInit, OnDestroy, AfterViewInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '@services/backend/job.service';
import { Observable } from 'rxjs/Observable';
import { share } from 'rxjs/operators';
import { Http } from '@angular/http';
import { CommonHttpService } from '@services/backend/common-http.service';
import { Subscription } from 'rxjs/Subscription';
import { CompanyService } from '@services/backend/company.service';
import { ConfirmService } from '@services/frontend/confirm.service';
import { LocalService } from '@services/backend/local.service';
import { AlertService } from '@services/frontend/alert.service';
import { ApplyService } from '@services/backend/apply.service';
import { AuthService } from '@services/backend/auth.service';

@Component({
  selector: 'hure-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.sub$.unsubscribe()
  }
  sub$: Subscription
  job: Job
  jobRelated$: Observable<Job[]>
  constructor(private route: ActivatedRoute, private jobSvc: JobService, private companySvc: CompanyService,
    private confirmSvc: ConfirmService, private localSvc: LocalService, private alertSvc: AlertService,
    private applySvc: ApplyService, private authSvc: AuthService) { }
  contentHTML: Observable<string>
  ngOnInit() {
    this.route.params.subscribe(param => {
      let jobId = param['id']
      this.sub$ = this.jobSvc.getJobDetail(+jobId!).subscribe(result => {
        this.job = result;
        this.jobRelated$ = this.companySvc.getJobOfCompany(this.job.companyId).pipe(share())
      })
    })
  }
  apply(job: Job) {
    if(this.authSvc.isLogged()){
      this.confirmSvc.showConfirm("Nộp đơn xin việc",
      `Xác nhận nộp đơn xin việc tại công ty 
    ${job.company.name}.
    `, [{
        text: "Đồng ý", func: () => this.requestApply(job)
      }])
    }else{
      this.alertSvc.show("Yêu cầu","Chức năng này cần phải đăng nhập",'danger')
      this.authSvc.loginRequest$.emit(false)
    }
  }
  private requestApply(job: Job) {
    let accountId = this.localSvc.getAccountId()
    if (accountId) {
      let model = {
        accountId: +accountId,
        jobId: job.id,
        status:"In progress"
      }
      this.applySvc.postApply(model).subscribe(result => {
        if (result == true) {
          this.alertSvc.show("Thông báo","Apply thành công. Thông tin sẽ được gửi đến nhà tuyển dụng.")
        } else {
          this.alertSvc.show("Thông báo", "Apply thất bại. Có thể bạn đã apply vào công ty này rồi.","danger");
        }
      })
    } else {
      this.alertSvc.show("Thông báo", "Apply thất bại. Có thể bạn đã apply vào công ty này rồi.","danger");
    }
  }
}
