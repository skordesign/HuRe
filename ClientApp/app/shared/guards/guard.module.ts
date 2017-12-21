import { NgModule } from '@angular/core';
import { AdminGuard } from '@guards/admin.guard';
import { AuthGuard } from '@guards/auth.guard';


@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [AdminGuard,AuthGuard],
})
export class GuardModule { }
