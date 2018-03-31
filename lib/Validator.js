/*
* Author: Rafael Augusto 
* email: movcode[at]gmail.com
*/ 

class Validator{       
    constructor(params = {}){       
        this.errors = []

        let eml = params['eml'];
        let pwd = params['pwd'];
        let max = params['max'];
        let min = params['min'];
        let num = params['num'];
        let str = params['str'];
        let cpf = params['cpf'];
        let cnpj = params['cnpj'];
        let tel = params['tel'];        

        if (eml)
            this.isEmail(eml.data,eml.msg)
        if (pwd)
            this.notEqualsPassword(pwd.pwd1,pwd.pwd2,eml.msg)
        if (max)
            this.lenghtMax(max.data,max.max,max.msg)
        if (min)
            this.lengthMin(min.data,min.min,min.msg)
        if (num)
            this.isNumber(num.data,num.msg)
        if (str)
            this.isString(str.data,str.msg)
        if (cpf)
            this.isCpf(cpf.data,cpf.msg)
        if (cnpj)
            this.isCnpj(cnpj.data,cnpj.msg)
        if (tel)
            this.isTelefone(tel.data,tel.msg)        
    }


     isEmail (email,message){
        var reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!reg.test(email))
            this.errors.push({error:message}); 
    }   

    
    notEqualsPassword(pwd1,pwd2, message){
        if (pwd1 != pwd2)
            this.errors.push({error:message});
    }


    lenghtMax(str,total,message){        
        if (str.length > total)
            this.errors.push({error:message});
    }
    

    lengthMin(str,total,message){        
        if (str.length < total)
            this.errors.push({error:message});
    }


    isNumber(data,message){
        if (isNaN(data))        
            this.errors.push({error:message});
    }


    isString(data,message){
        if (!isNaN(data))        
            this.errors.push({error:message});
    }


    isCpf(cpf,message){
        let reg = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/;
        if (!reg.test(cpf))
            this.errors.push({error:message});
    }
    
    
    
    isCnpj(cnpj,message){
        let reg = /^[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}$/;
        if (!reg.test(cnpj))
            this.errors.push({error:message});
    }
    

    isTelefone(tel, message){
        let reg = /^\(\d{2}\)?\s*\d{4,5}\-\d{4}$/g;;
        if(!reg.test(tel))
            this.errors.push({error:message});
    }
    

    generatScaffold(){
        
        let rules ={
            eml:{data:'email@email.com',msg:'Este email é inválido'},
            pwd:{pwd1:'senha1',pwd2:'senha1',msg:'Senha não coincidem'},
            max:{data:'Hello World',max:5,msg:'No max 5 caracteres'},       
            min:{data:'Hello',min:6,msg:'Digite no minimo 6 caracteres'},
            num:{data:'Hello', msg:'Apernas numeros'},
            str:{data:'1', msg:'Apernas letras'},
            cpf:{data:'000.000.000-000',msg:'cpf invalido'},
            cnpj:{data:'000.000.000-000',msg:'cnpj invalido'},
            tel:{data:'(23)3662-323233',msg:'Telefone invalido'}
        }        
        console.log(rules);
    }

    isInvalid(){
        let count_error = this.errors.length;        
        if (count_error>0) return true;
    }

}

module.exports = Validator;