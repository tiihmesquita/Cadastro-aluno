import { Component, OnInit } from '@angular/core';
import { ALUNOS } from '../mock'; 
import { Aluno } from '../studants';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  alunos = ALUNOS;
  selectedAluno?: Aluno;
  



  constructor() { }

  ngOnInit(): void {
  }
  
  onSelect(x: Aluno): void{
    this.selectedAluno = x;
  }

}
