import { NgModule } from '@angular/core';
import { AdminGuard } from '@guards/admin.guard';
import { AuthGuard } from '@guards/auth.guard';
import { SinhVienGuard} from '@guards/sinhvien.guard';
import { DoanhNghiepGuard} from '@guards/doanhnghiep.guard';

@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [AdminGuard,AuthGuard,SinhVienGuard,DoanhNghiepGuard],
})
export class GuardModule { }
