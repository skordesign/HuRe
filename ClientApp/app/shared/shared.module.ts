import { NgModule } from '@angular/core';
import { UIModule } from '@ui/ui.module';
import { DirectiveModule } from '@directives/directive.module';
import { GuardModule } from '@guards/guard.module';
import { ServiceModule } from '@services/service.module';
import { PipeModule } from '@shared/pipes/pipe.module';


@NgModule({
    imports: [UIModule, DirectiveModule, GuardModule, PipeModule],
    exports: [DirectiveModule, UIModule, GuardModule, PipeModule],
    declarations: [],
    providers: [],
})
export class SharedModule { }
