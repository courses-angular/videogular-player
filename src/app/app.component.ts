import {Component} from '@angular/core';
import {VgApiService, VgControlsHiddenService} from '@videogular/ngx-videogular/core';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-video-player-example';
  subscriptions: Subscription[] = [];

  constructor(private controlsHidden: VgControlsHiddenService,private vgApiService: VgApiService) {
  }

  onPlayerReady(): void {
    this.subscriptions.push(this.controlsHidden.isHidden
      .subscribe(this.onHideControls.bind(this)));

  }

  onHideControls(state: boolean): void {
    console.log('Are controls hidden?', state);
  }
  showControls() {
    // this.hidden.state(false);
  }

  onPrev() {
    console.log(this.vgApiService.currentTime);
  }

  onNext() {

  }
}
