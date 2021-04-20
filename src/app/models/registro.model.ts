export class Registro {


    public id: number;
    public format: string;
    public text: string;
    public type: string;
    public icon: string;
    public created: Date;
    public seguido: boolean;


    constructor( format: string, text: string ) {

        this.id = new Date().getMilliseconds();
        this.format = format;
        this.text = text;
        this.created = new Date();
        this.determinarTipo();
        this.seguido = false;

    }


    private determinarTipo() {

        const inicioTexto = this.text.substring(0,4);

        console.log('TIPO', inicioTexto);

        switch(inicioTexto) {
            
            case 'http':
                this.type = 'http';
                this.icon = 'globe';
                break;
        
            default:
                this.type = 'No reconocido';
                this.icon = 'create';

        }

    }


}