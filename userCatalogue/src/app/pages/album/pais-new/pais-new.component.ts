import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-pais-new',
  templateUrl: './pais-new.component.html',
  styleUrls: ['./pais-new.component.scss']
})
export class PaisNewComponent {
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private _albumService: AlbumService) {
    this.formulario = this.formBuilder.group({
      id: ['', Validators.required],
      countryName: ['', Validators.required],
      population: ['', Validators.required],
      capital: ['', Validators.required],
      continentName: ['', Validators.required],
      img: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      console.log('Datos del formulario:', this.formulario.value);
      
      this._albumService.newPais(this.formulario.value).subscribe({
        next: (data: any) => {
          console.log(data)
        },
        error: ({ e }: any) => console.log(e),
        complete: () => {
          //this.loading = false;
        },
      });
    } else {
    }
  }
}
