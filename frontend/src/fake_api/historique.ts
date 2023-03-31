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
    },
    {
        id: 5,
        temperature: 33,
        humidite: {
            sol: 20,
            ambiant: 24
        },
        luminosite: 50,
        date: "2023-03-01"
    },
    {
        id: 6,
        temperature: 30,
        humidite: {
            sol: 30,
            ambiant: 45
        },
        luminosite: 50,
        date: "2023-03-02"
    },
    {
        id: 7,
        temperature: 36,
        humidite: {
            sol: 30,
            ambiant: 50
        },
        luminosite: 45,
        date: "2023-03-03"
    },
    {
        id: 8,
        temperature: 25,
        humidite: {
            sol: 30,
            ambiant: 45
        },
        luminosite: 50,
        date: "2023-03-04"
    },
    {
        id: 9,
        temperature: 28,
        humidite: {
            sol: 20,
            ambiant: 40
        },
        luminosite: 50,
        date: "2023-03-01"
    },
    {
        id: 10,
        temperature: 30,
        humidite: {
            sol: 30,
            ambiant: 35
        },
        luminosite: 50,
        date: "2023-03-02"
    },
    {
        id: 11,
        temperature: 30,
        humidite: {
            sol: 28,
            ambiant: 42
        },
        luminosite: 45,
        date: "2023-03-03"
    },
    {
        id: 12,
        temperature: 35,
        humidite: {
            sol: 30,
            ambiant: 45
        },
        luminosite: 50,
        date: "2023-03-04"
    },
    {
        id: 13,
        temperature: 29,
        humidite: {
            sol: 30,
            ambiant: 40
        },
        luminosite: 50,
        date: "2023-03-02"
    },
    {
        id: 14,
        temperature: 30,
        humidite: {
            sol: 30,
            ambiant: 40
        },
        luminosite: 45,
        date: "2023-03-03"
    },
    {
        id: 15,
        temperature: 31,
        humidite: {
            sol: 30,
            ambiant: 46
        },
        luminosite: 50,
        date: "2023-03-04"
    },
    {
        id: 16,
        temperature: 27,
        humidite: {
            sol: 30,
            ambiant: 50
        },
        luminosite: 50,
        date: "2023-03-04"
    }
]

export default climat_history;

