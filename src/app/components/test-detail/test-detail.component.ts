import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material";

export interface DialogData {
    result: string;
}

@Component({
    selector: 'app-test-detail',
    templateUrl: './test-detail.component.html',
    styleUrls: ['./test-detail.component.scss']
})
export class TestDetailComponent implements OnInit {
    answer1: string;
    answer2: string;
    answer3: string;

    mistakes: number = null;

    constructor(public dialog: MatDialog) { }

    ngOnInit() {  }

    private checkAnswer(answer: string, result: string) {
        if (answer != result) {
            this.mistakes++;
        } else {
            this.mistakes = this.mistakes - 1;
        }
    }

    private checkTest(): void {
        if (this.answer1 != '2') {
            this.mistakes++;

            if (this.answer2 != '3') {
                this.mistakes++;

                if (this.answer3 != '2') {
                    this.mistakes++;
                } else {
                    this.mistakes--;
                }
            } else {
                this.mistakes--;
            }
        } else {
            this.mistakes--;
        }

        // const dialogRef = this.dialog.open(ExampleDialog, {
        //     width: '250px',
        //     data: { result: result }
        // });
    }
}

@Component({
    selector: 'example-dialog',
    templateUrl: 'example-dialog.html',
})
export class ExampleDialog {

    constructor(
        public dialogRef: MatDialogRef<ExampleDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }
}
