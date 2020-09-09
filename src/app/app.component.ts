import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private snackBar: MatSnackBar) {
  }
  title = 'Hacknowledge components';

  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  openSnackBar(): void {
    this.snackBar.open('Bienvenue chez Hacknowledge', 'OK', {
      duration: 2000,
    });
  }

}
