import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;
  userId: any;

  constructor(private fb: FormBuilder, private userService: UserService, private actRoute: ActivatedRoute, private router: Router) {
    
    this.userForm = this.fb.group({
      id: 0,
      nome: '',
      sobrenome: '',
      idade: '',
      profissao: '',
    })
  }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(params =>{
      this.userId = params.get('id');
      console.log(this.userId);
      if (this.userId !== null){
        this.userService.getUser(this.userId).subscribe( result => {
          this.userForm.patchValue({
            id: result[0].id,
            nome: result[0].nome,
            sobrenome: result[0].sobrenome,
            idade: result[0].idade,
            profissao: result[0].profissao,
          })
        })
      }
    })
  }

  createUser(){
    this.userService.postUser(this.userForm.value).subscribe({
      next: (result) => { console.log('Usuário cadastrado com sucesso', result)},
      error: (err) => {console.log('Error: ', err)},
      complete: () => {this.router.navigate(['/'])}
    })
  }

  updateUser(){
    this.userService.updateUser(this.userId, this.userForm.value).subscribe({
      next: (result) => { console.log('Usuário atualizado com sucesso', result)},
      error: (err) => {console.log('Error: ', err)},
      complete: () => {this.router.navigate(['/'])}
    })
  }

  actionButton(){
    if(this.userId !== null){
      this.updateUser();
    }else{
      this.createUser();
    }
  }
  

}
