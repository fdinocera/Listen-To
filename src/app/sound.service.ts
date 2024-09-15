import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SoundService {

    private audio = new Audio();
    private db: string[] = [];
    private randomWords: string[] = [];

    constructor() { }

    playSound(src: string) {
        this.audio = new Audio(src);
        this.audio.load();
        this.audio.play();
    }

    loadDB() {
        fetch("../../assets/data/db_sounds.txt")
            .then(response => response.text()) // Convertiamo la risposta in testo
            .then(data => {
                this.db = data.split("\r\n"); // Separa le righe in base a '\n\r'
                //console.log(this.db);
                this.db.forEach(riga => {
                    let record = riga.split(';');
                    let parole = record[1].split(' ');
                    parole.forEach(p => {
                        this.randomWords.push(p);
                    })                    
                })
            })
            .catch(error => {
                console.error('Errore durante il caricamento del file:', error);
            });
    }

    getRecord() {
        return this.db[0];
    }

    getRandomWord() {
        let n = Math.floor(Math.random() * this.randomWords.length);
        console.log(this.randomWords[n])
        return this.randomWords[n];
    }
}