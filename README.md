#  Usage node-req-validator



# #Install

command: sudo npm install node-req-validator 

# #Usage Json Validate

    const Validator = require('node-req-validator');
    /* instace */
    let validator = new Validator({
	    /*validate email*/
	    eml:{data:'email@email.com',msg:'Email invalid'},
	    
		/* compare password*/
		pwd:{pwd1:'pw1',pwd2:'pwd2',msg:'Pwd does not match'},
		
		/*validate  max characters*/
		max:{data:'Hello World',max:5,msg:'Max 5 characters'},	

		/*validate min cahracters*/
		min:{data:'Hello',min:6,msg:'Min 6 5 characters'},
		
		/*verify input number*/
		num:{data:'Hello', msg:'it`s not number'},
		
		/*verify input string*/
		str:{data:'1', msg:'it`s not string'},
	
		/*validate cpf (BR)*/
		cpf:{data:'000.000.000-000',msg:'cpf invalid'},
		
		/*validate cnpj(BR) */
		cnpj:{data:'000.000.000-000',msg:'cnpj invalid'},

		/*validate phone (BR)*/
		tel:{data:'(23)3662-323233',msg:'Phone invalid'}
    });
    /* validate */
    if (validator.isInvalid()) 
		    return  res.status(400).send(validator.errors);
	
# #Usage Methods Validate
    const Validator = require('node-req-validator');
    /* instace */
    let validator = new Validator({});
    validator.isEmail(email,'email invalid');
    validator.notEqualsPassword(pwd1,pwd2, message);
    validator.lenghtMax(str,total,message);
    validator.lengthMin(str,total,message);
    validator.isNumber(data,message);
    validator.isString(data,message);
    validator.isCpf(cpf,message);
    validator.isCnpj(cnpj,message);
    validator.isTelefone(tel, message);


# #Generate scaffold rules

    const Validator = require('node-req-validator');
    let validator = new Validator({});
    console.log(validator.generatScaffold());
    


----------


