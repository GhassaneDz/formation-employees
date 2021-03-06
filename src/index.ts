import { Warehouseman } from './warehouseman';
import { Producer } from './producer';
import { Representant } from './representant';
import { Salesman } from './salesman';
import { Staff } from './staff';
// Déclaration d'une variable toujours avec let.
let myName: string = 'jérémy';

// Déclaration d'une fonction avec type de retour défini. Cela oblige à mettre une instruction return dans la fonction pour être certain de renvoyer une valeur du type indiqué.
function start(name: string): number {
    console.log(`Début du programme pour ${name}.`);
    return 0;
}

// On exporte les définitions des classes pour les utiliser dans d'autres fichiers.
export class Person {
    // Les attributs ont la visibilité public par défaut.
    firstname: string;
    lastname: string;
    age: number;

    /**
     * Paramètre obligatoires toujours en premier.
     * Paramètre optionnel déclaré avec '?'.
     * Paramètre avec valeur par défaut '= 0'.
     */
    constructor(firstname: string, lastname?: string, age: number = 0) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
}

start(myName);

let jeremy = new Person("jérémy");
let jmasson = new Person("jérémy", "masson");
let michel = new Person("michel", "Dupont", 40);

let e = new Salesman('jeremy', 'masson', 18, '2000', 20000);
// Appel des attributs de l'instance e :
console.log('Prénom : ' + e.firstname);
// Appel du getter (pas de parenthèses !) :
console.log('Nom complet : ' + e.name);

// Exécution de l'exercice 2 :
let myEmployees: Staff = new Staff();
myEmployees.addMember(new Salesman("Pierre", "Business", 45, "1995", 30000));
myEmployees.addMember(new Representant("Léon", "Ventout", 25, "2001", 20000));
myEmployees.addMember(new Producer("Yves", "Ahalouest", 28, "1998", 1000));
myEmployees.addMember(new Warehouseman("Jeanne", "Stoktout", 32, "1998", 45));
// myEmployees.addMember(new ProducerWithRisk("Jean", "Flippe", 28, "2000", 1000));
// myEmployees.addMember(new WharehousemanWithRisk("Al", "Abordage", 30, "2001", 45));

myEmployees.displaySalaries();
myEmployees.displayAverageSalary();