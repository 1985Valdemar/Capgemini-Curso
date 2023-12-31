import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { IProduto } from '../produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos: IProduto[] | undefined;

  constructor(
    private produtosService: ProdutosService
  ){}

  //usando serviço
  ngOnInit(): void{
    this.produtos = this.produtosService.getAll();
    
  }
}
