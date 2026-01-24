import { COLORS } from '../helpers/colors.ts';

/**
 * ! Patrón decorador
 * Es un patrón de diseño estructural que permite añadir
 * funcionalidades a objetos, colocando estos objetos dentro de
 * objetos encapsuladores especiales que contienen estas funcionalidades.
 *
 * No confundirlo con los decoradores de TypeScript que son anotaciones.
 *
 * * Es útil cuando necesitas añadir funcionalidades a objetos
 *  * de manera dinámica y flexible.
 *
 * https://refactoring.guru/es/design-patterns/decorator
 */
interface Notificacion {
    send(message:string): void;
}

class BasicNotification implements Notificacion{

  send(message: string): void {
    console.log(`%cEnviando notificacion basica: %c${message}`, COLORS.blue, COLORS.white);
  }

}
//clase decoradora
abstract class NotificationDecorator implements Notificacion{
    protected notification: Notificacion;

    constructor(notification: Notificacion){
        this.notification = notification;
    }

    send(message: string): void {
      this.notification.send(message);
    }
}

//crear diferentes decoradores
class EmailDecorator extends NotificationDecorator{

private sendEmail(message: string){
    console.log(`%cEnviando notificacion por correo electronico: %c${message}`,COLORS.green,COLORS.white)
}

 override send(message: string): void {
   super.send(message)
   this.sendEmail(message)
 }

}

class SMSDecorator extends NotificationDecorator{

private sendSMS(message: string){
    console.log(`%cEnviando notificacion por SMS: %c${message}`,COLORS.red,COLORS.white)
}

 override send(message: string): void {
   super.send(message)
   this.sendSMS(message)
 }

}

function main(){
    let notificacion : Notificacion = new BasicNotification();

    notificacion = new EmailDecorator(notificacion)

    notificacion = new SMSDecorator(notificacion)

    notificacion.send('Alerta de sistema!');

}

main();