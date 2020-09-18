export class Note{
   id:number;
    etudiant:{
    id:number
    user:{
    email:string;
    password:string;
    };
    nom:string;
    prenom:string;
    tel:string;
}
enseignant:{
    id:number
    user:{
    email:string;
    password:string;
    };
    nom:string;
    prenom:string;
    
}
matiere:{
id:number
nomMatiere:string;
coefficient:number
}
note:number

}