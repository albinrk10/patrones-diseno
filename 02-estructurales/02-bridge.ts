/**
 * ! Patrón Bridge
 * Este patrón nos permite desacoplar una abstracción de su implementación,
 * de tal forma que ambas puedan variar independientemente.
 *
 * * Es útil cuando se tienen múltiples implementaciones de una abstracción
 * * Se puede utilizar para separar la lógica de negocio de la lógica de presentación
 * * Se puede utilizar para separar la lógica de la interfaz de usuario también.
 *
 * https://refactoring.guru/es/design-patterns/bridge
 */

import { COLORS } from "../helpers/colors.ts";

interface Ability {
    use(): void;
}

class SwordAttack implements Ability {
    use(): void {
        console.log('Ataca con un %cespada ferozmente', COLORS.green)
    }

}

class AxeAttack implements Ability {
    use(): void {
        console.log('Ataca con un %chacha brutalmente', COLORS.green)
    }

}


class MagicSpell implements Ability {
    use(): void {
        console.log('Lanza un hechizo %cmagico poderoso', COLORS.green)
    }

}

class FireballSpell implements Ability {
    use(): void {
        console.log('Lanza una %cbola de fuego', COLORS.green)
    }

}

abstract class Charater {
    protected ability: Ability;

    constructor(ability: Ability) {
        this.ability = ability;
    }

    setAbility(ability: Ability): void {
        this.ability = ability;
    }

    abstract performAbility(): void;

}

class Warrior extends Charater {

    override performAbility(): void {
        console.log("\nEl guerrero esta listo para luchar ");
        this.ability.use();
    }

}
class Mage extends Charater {

    override performAbility(): void {
        console.log("\nEl mago prepara su magia ");
        this.ability.use();
    }

}


function main(){
 const warrion =new Warrior(new SwordAttack());
 warrion.performAbility();

 warrion.setAbility(new AxeAttack());
 warrion.performAbility();

//  const mage = new Mage(new MagicSpell())
//  mage.performAbility();

 const mage = new Mage(new FireballSpell())
 mage.performAbility();

}

main();