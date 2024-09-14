import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SoundService {

    private audio = new Audio();

    constructor() { }

    playSound(src: string) {
        this.audio = new Audio(src);
        this.audio.load();
        this.audio.play();
    }
}
