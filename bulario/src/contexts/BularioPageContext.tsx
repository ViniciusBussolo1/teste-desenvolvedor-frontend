import axios from "axios";
import { ReactNode, createContext, useEffect, useState } from "react";

export interface IMedicine {
    id: string;
    name: string;
    published_at: string;
    company: string;
    documents: IDocument[];
    active_principles: IActivePrinciple[];
}

export interface IDocument {
    id: string;
    expedient: string;
    type: string;
    url: string;
}

export interface IActivePrinciple {
    id: string;
    name: string;
}

export interface IProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: IProviderProps) => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/data?_page=${currentPage}`);
                setData(response.data.data);
                setLastPage(response.data.last)
            } catch (error) {
                console.error('Erro ao obter dados:', error);
            }
        };

        fetchData();
    }, [currentPage]);


    const nextPage = async () => {
        try {
            if (currentPage < lastPage) {
                setCurrentPage(prevPage => prevPage + 1);
            } else {
                console.log('Você já está na última página.');
            }
        } catch (error) {
            console.error('Erro ao obter dados:', error);
        }
    };

    const prevPage = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    };

    return (
        <AuthContext.Provider
            value={{
                data,
                nextPage,
                prevPage,
                lastPage,
                currentPage
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
