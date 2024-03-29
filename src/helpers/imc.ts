export type Level = {
    title: string
    color: string
    icon: 'down'|'up'
    imc: number[]
    yourImc?: number
} | null


export const levels = [
    {title: 'Magreza', color: '#96A3AB', icon: 'down', imc:[0, 18.5], yourImc: 0},

    {title: 'Normal', color: '#0EAD69', icon: 'up', imc:[18.6, 24.9], yourImc: 0},

    {title: 'Sobrepeso', color: '#E2B039', icon: 'down', imc:[25, 30], yourImc: 0},

    {title: 'Obesidade', color: '#C3423F', icon: 'down', imc:[30.1, 99], yourImc: 0}
];

export const calculateImc = (height: number, weight: number): any => {
    const imc = weight / (height**2);

    for (let i in levels){
        if(imc >= levels[i].imc[0] && imc <= levels[i].imc[1]){
            let levelCopy = {...levels[i]}
            levelCopy.yourImc = imc;
            return levelCopy;
        }
    }

    return null;
}