import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS, XHRBackend } from '@angular/http';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { TodoSeedData } from './shared/todo.data';

import { AppComponent } from './app.component';

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    { provide: XHRBackend, useClass: InMemoryBackendService },
    { provide: SEED_DATA, useClass: TodoSeedData },
]);