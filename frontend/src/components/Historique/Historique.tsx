import { useState } from "react";
import climat_history, { Climat } from "../../fake_api/historique";
import NoResult from "./NoResult";
import Pagination from "./Pagination";
import HistoryItem from "./HistoryItem";

/* Composant Historique */
export function Historique() {

    /* Stockage des données de l'historique dans une variable d'état */
    const [data, setData] = useState<Climat[]>(climat_history);

    /* Variable d'état pour vérifier si la recherche a eu un résultat ou non */
    const [hasResult, setHasResult] = useState<boolean>(true);

    /* Fonction de recherche par date */
    const search = (e: any) => {
        const value = e.target.value;
        if (value === "") {
            setData(climat_history);
            return;
        }
        const result = climat_history.filter((item) => {
            return item.date.toLowerCase().includes(value.toLowerCase());
        });
        setHasResult(result.length > 0); 
        setData(result);
    }

    return (
        <div className="flex flex-col items-center justify-center flex-1 text-center">
            <h1 className="text-3xl text-emerald-500 font-bold">Historique</h1>
            <div className="w-1/2 flex justify-end">
                <input type="date" onChange={(e) => search(e)} className="border-2 border-gray-500 rounded-md p-2 mt-3" />
            </div>
            <table className="table-auto mt-3 w-1/2">
                <thead>
                <tr>
                    <th className="px-4 py-2 border-2 border-gray-500">
                        <span className="text-emerald-500">Jours</span>
                        <span className="text-gray-500 ml-2 mr-2">\</span>
                        <span className="text-emerald-500">Données</span>
                    </th>
                    <th className="px-4 py-2 border-2 border-gray-500">Température</th>
                    <th className="px-4 py-2 border-2 border-gray-500">Humidité</th>
                    <th className="px-4 py-2 border-2 border-gray-500">Luminosité</th>
                </tr>
                </thead>
                <tbody>
                {hasResult && data.map((item) => (
                    <HistoryItem data={item} key={item.id} />
                ))}
                {!hasResult && 
                    <NoResult />
                }
                </tbody>
            </table>
            {hasResult && <Pagination />}
        </div>
    );
}
