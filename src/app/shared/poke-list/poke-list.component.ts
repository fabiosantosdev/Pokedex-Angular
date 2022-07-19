import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {
  private setAllpokemons: any;
  public getAllpokemons: any;
  public apiError:boolean = false;

  constructor(
    private pokeApiService:PokeApiService
  ) { }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => {
        this.setAllpokemons = res.results;
        this.getAllpokemons = this.setAllpokemons;
      },
      error => {
        this.apiError = true;
      }
    );
  }

  public getSearch(value:string){
    const filter = this.setAllpokemons.filter((res:any) => {
      return !res.name.indexOf(value.toLowerCase())
    })
    this.getAllpokemons = filter;
  }

}
