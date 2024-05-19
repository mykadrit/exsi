class SadikEngeer {
  private experience: number;

  constructor() {
    this.experience = 5; // Assuming 5 years of experience for demonstration
  }

  public getExp(): number {
    return this.experience;
  }
}

const engineer = new SadikEngeer();
console.log(engineer.getExp());
