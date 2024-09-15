import { Component, OnInit } from '@angular/core';
import { SoundService } from '../sound.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-splash-screen',
    templateUrl: './splash-screen.component.html',
    styleUrls: ['./splash-screen.component.css']
})
export class SplashScreenComponent implements OnInit {

    isSplashVisible = true;
    private record: string[] = [];
    parole: string[] = [];
    private pulsanti: HTMLElement[] = [];

    constructor(private soundService: SoundService) { }
    ngOnInit(): void {
        setTimeout(() => {
            this.isSplashVisible = false;
        }, 0
        );

        this.soundService.loadDB();
    }

    play(): void {
        //this.soundService.playSound("../../assets/sound/success.wav");        
        this.record = this.soundService.getRecord().split(';');
        this.soundService.playSound("../../assets/data/" + this.record[0] + ".wav");
        this.parole = this.record[1].split(' ');

        //aggiorna numero parole
        document.getElementById('words')!.innerText = this.parole.length + ' words';

        //aggiorna testo pulsanti        
        this.pulsanti = Array.from(document.getElementsByClassName('parola') as HTMLCollectionOf<HTMLElement>);

        this.pulsanti.forEach((pulsante, index) => {

            if (this.parole[index]) {
                // Aggiorna il testo del pulsante
                pulsante.innerText = this.parole[index];

                //cambia sfondo e bordo pulsanti
                pulsante.style.backgroundColor = '#b4d16b';
                pulsante.style.border='1px solid #a8008c'

            } else {
                pulsante.innerText = this.soundService.getRandomWord();
                pulsante.style.backgroundColor = '#c56d7a';
                pulsante.style.border=''
            }
        });
    }

    //dnd material
    //https://material.angular.io/cdk/drag-drop/overview#cdk-drag-drop-mixed-sorting    
    
    //dnd material v16
    //https://v16.material.angular.io/cdk/drag-drop/overview#cdk-drag-drop-horizontal-sorting

    //this.parole = ['It\'s', 'so', 'not', 'true'];

    timePeriods = [
        'Bronze age',
        'Iron age',
        'Middle ages',
        'Early modern period',
        'Long nineteenth century',
      ];
    
    drop(event: CdkDragDrop<string[]>){
        console.log("Drop event triggered");
        // moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
        moveItemInArray(this.parole, event.previousIndex, event.currentIndex);
    }

    alwaysTrue(){
        return true;
    }
}