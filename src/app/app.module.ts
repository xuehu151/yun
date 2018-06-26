import {ComponentsModule} from './components/components.module';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {AppComponent} from './app.component';
import {InterceptsModule} from './intercepts/intercepts.module';
import {NgrxModule} from './ngrx/ngrx.module';
import {AppRoutingModule} from './app.routing';
import {PagesModule} from './pages/pages.module';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function createTranslateHttpLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/il8n/', '.json');
}
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NgZorroAntdModule.forRoot(),
        InterceptsModule.forRoot(),
        ComponentsModule,
        NgrxModule,
        PagesModule,
        AppRoutingModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateHttpLoader),
                deps: [HttpClient]
            }
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
