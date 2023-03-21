/*create an object containing humidite, temperature an object with two keys sol et ambiant, luminosite */
export type Climat = {
    id: number,
    humidite: {
        sol: number,
        ambiant: number
    },
    temperature: number,
    luminosite: number
    date: string,
}
const climat_history: Climat[] = [
    {
        id: 1,
        temperature: 40,
        humidite: {
            sol: 20,
            ambiant: 25
        },
        luminosite: 50,
        date: "2023-03-01"
    },
    {
        id: 2,
        temperature: 30,
        humidite: {
            sol: 30,
            ambiant: 35
        },
        luminosite: 50,
        date: "2023-03-02"
    },
    {
        id: 3,
        temperature: 60,
        humidite: {
            sol: 30,
            ambiant: 32
        },
        luminosite: 45,
        date: "2023-03-03"
    },
    {
        id: 4,
        temperature: 45,
        humidite: {
            sol: 30,
            ambiant: 35
        },
        luminosite: 50,
        date: "2023-03-04"
    }
]

export default climat_history;

