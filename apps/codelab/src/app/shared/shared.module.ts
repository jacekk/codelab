import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CodeDemoModule } from '@codelab/code-demos';
import { CodelabComponentsModule } from '../components/codelab-components.module';
import { SlidesModule } from '@codelab/slides';
import { FeedbackModule } from '@codelab/feedback';
import { NxModule } from '@nrwl/nx';

import { FullLayoutComponent } from '../containers';
import { FirebaseLoginModule } from '@codelab/firebase-login/src';
import { monacoReady } from '@codelab/code-demos/src/lib/shared/monaco-config.service';

@NgModule({
  declarations: [FullLayoutComponent],
  imports: [
    HttpClientModule,
    FormsModule,
    RouterModule,
    CodeDemoModule,
    CodelabComponentsModule,
    SlidesModule,
    FeedbackModule,
    FirebaseLoginModule,
    NxModule.forRoot()
  ],
  exports: [
    FullLayoutComponent,
    HttpClientModule,
    FormsModule,
    CodeDemoModule,
    CodelabComponentsModule,
    FeedbackModule,
    SlidesModule
  ],
  providers: [],
})
export class SharedModule {
}