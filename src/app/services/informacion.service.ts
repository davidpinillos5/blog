import { Injectable } from '@angular/core';


export interface Post {
  titulo: string;
  texto: string;
  autor: string;
  imagen: string;
  fecha: Date;
  categoria: string;
}

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  arrPosts: Post[];

  constructor() {
    this.arrPosts = [];

   }

  agregarPost(pPost: Post):Promise<Post[]> {

    return new Promise((resolve,reject) => {
      this.arrPosts.push(pPost);
      resolve(this.arrPosts);    
    })
  }

  getAllPost(): Promise<Post[]> {
    return new Promise((resolve,reject)=>{
      resolve(this.arrPosts)
    })
  }

  getPostsByCategoria(pCategoria: string):Promise<Post[]> {
    return new Promise((resolve,reject)=>{
      const arrCategorias = this.arrPosts.filter(post =>{
        return post.categoria === pCategoria;
      })
      resolve(arrCategorias);
    })
  }

  getCategorias(): Promise<string[]> {
    return new Promise((resolve, reject )=>{
      const categorias = [];
      for(let post of this.arrPosts) {
        if(!categorias.includes(post.categoria)) {
          categorias.push(post.categoria);
        }
      }
      resolve(categorias);
      
    });
  }
}

