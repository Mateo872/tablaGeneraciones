class Person {
  constructor(name, age, gender, weight, height, dni, yearBirth) {
    this.name = name;
    this.age = age;
    this.dni = dni;
    this.gender = gender;
    this.weight = weight;
    this.height = height;
    this.yearBirth = yearBirth;
  }

  olderAge() {
    if (this.age >= 18) {
      return `${this.name} es mayor de edad.`;
    } else {
      return `${this.name} no es mayor de edad.`;
    }
  }

  showData() {
    alert(`Nombre: ${this.name}`);
    alert(`Edad: ${this.age} años`);
    alert(`Dni: ${this.dni}`);
    alert(`Sexo: ${this.gender}`);
    alert(`Peso: ${this.weight}kg`);
    alert(`Altura: ${this.height} metros`);
    alert(`Año de Nacimiento: ${this.yearBirth}`);
  }

  showGeneration() {
    let generation = "";

    if (this.yearBirth >= 1994 && this.yearBirth <= 2010) {
      generation = "Generación Z";
      return `La persona pertenece a la '${generation}' y su rasgo característico es la irreverencia.`;
    } else if (this.yearBirth >= 1981 && this.yearBirth <= 1993) {
      generation = "Generación Y";
      return `La persona pertenece a la '${generation}' y su rasgo característico es la frustración.`;
    } else if (this.yearBirth >= 1969 && this.yearBirth <= 1980) {
      generation = "Generación X";
      return `La persona pertenece a la '${generation}' y su rasgo característico es la obsesión por el éxito.`;
    } else if (this.yearBirth >= 1949 && this.yearBirth <= 1968) {
      generation = "Baby Boom";
      return `La persona pertenece a la '${generation}' y su rasgo característico es la ambición.`;
    } else if (this.yearBirth >= 1930 && this.yearBirth <= 1948) {
      generation = "Silent Generation";
      return `La persona pertenece a la '${generation}' y su rasgo característico es la autoridad.`;
    } else {
      return "No se puede determinar la generación de la persona.";
    }
  }
}

const form = document.querySelector("form");
const showGeneration = document.querySelector(".generation-btn");
const ageBtn = document.querySelector(".age-btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const age = +document.querySelector("#age").value;
  const gender = document.querySelector("#gender").value;
  const weight = +document.querySelector("#weight").value;
  const height = +document.querySelector("#height").value;
  const dni = +document.querySelector("#dni").value;
  const yearBirth = +document.querySelector("#yearBirth").value;

  const person = new Person(name, age, gender, weight, height, dni, yearBirth);

  person.showData();

  showGeneration.addEventListener("click", () => {
    alert(person.showGeneration());
  });

  ageBtn.addEventListener("click", () => {
    alert(person.olderAge());
  });
});
