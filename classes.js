// initialize class Hospital employee

class HospitalEmployee {
	constructor(name) {
		this._name = name;
		this._remainingVacationDays = 20;
	}

	get name() {
		return this._name;
	}

	get remainingVacationDays() {
		return this._remainingVacationDays;
	}

	takeVacationDays(daysOff) {
		this._remainingVacationDays -= daysOff;
	}

	//setting a static method only accessable from this class
	static generatePassword() {
		const randomInteger = Math.floor(Math.random() * 10000);
		return randomInteger;
	}
}

//creating a class of Nurse that inherits the same properties and methods as HospitalEmployee
class Nurse extends HospitalEmployee {
	constructor(name, certifications) {
		//First property should always be a super
		super(name);
		//certification will be unique in this instance
		this._certifications = certifications;
	}

	get certifications() {
		return this._certifications;
	}

	addCertification(newCertification) {
		this.certifications.push(newCertification);
	}
}

//creating a class of Doctor that inherits the same properties and methods as HospitalEmployee.
class Doctor extends HospitalEmployee {
	//insurance will be unique in this instance. A nurse will not inherit insurance property unless we change it to the parent class.
	constructor(name, insurance) {
		super(name);
		this._insurance = insurance;
	}

	get insurance() {
		return this._insurance;
	}

	addInsurance(insuranceName) {
		this.insurance.push(insuranceName);
	}
}

//bulding a new instance of Nurse called nurseOlynyk
const nurseOlynyk = new Nurse('Olynyk', [ 'Trauma', 'Pediatrics' ]);
//sending him off for vacation using the method built in the class of Nurse
nurseOlynyk.takeVacationDays(5);
// console.log(nurseOlynyk.remainingVacationDays);

//Olynyk has completed a course giving him a certification in Genetics, lets add that to his instance.
nurseOlynyk.addCertification('Genetics');
// console.log(nurseOlynyk.certifications);

//creating a new instance of Doctor called Zyzz
const doctorZyzz = new Doctor('Zyzz', []);

console.log(doctorZyzz);
//Zyzz needs a 2 day vacation
doctorZyzz.takeVacationDays(2);
//Zyzz has recieved 2 new insurances, we add them to his array of insurance.
doctorZyzz.addInsurance([ 'if skadeforsikring', 'Nordea Liv' ]);
console.log(doctorZyzz);
