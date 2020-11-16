import { Component, OnInit } from '@angular/core';
import { InformacionService, Post } from '../services/informacion.service';



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  arrArticulos: Post[]
  categorias: string[];

  constructor(private informacionService: InformacionService) { }

  ngOnInit(): void {

    this.informacionService.getCategorias()
    .then(arrCategorias => this.categorias = arrCategorias)


    this.informacionService.getAllPost()
      .then(posts =>{
        this.arrArticulos = posts;
      })
      .catch(error =>console.log(error));
      
  }


  async onChange($event) {
    if($event.target.value === 'selecciona') {
      this.arrArticulos = await this.informacionService.getAllPost();
    }else {
      this.arrArticulos = await this.informacionService.getPostsByCategoria($event.target.value);
    }
  }




}
