import { Component, OnInit } from '@angular/core';
import { SoundService } from '../sound.service';

@Component({
    selector: 'app-splash-screen',
    templateUrl: './splash-screen.component.html',
    styleUrls: ['./splash-screen.component.css']
})
export class SplashScreenComponent implements OnInit {

    isSplashVisible = true;

    constructor(private soundService: SoundService) { }

    ngOnInit(): void {
        setTimeout(() => {
            this.isSplashVisible = false;
        }, 0
        );
    }

    play():void {
        this.soundService.playSound("../../assets/sound/success.wav");        
    }
}
