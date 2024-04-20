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
    const [searchValue, setSearchValue] = useState('');
    const [filteredData, setFilteredData] = useState<IMedicine[]>([]);

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

    const sortedData = [...data].sort((a: IMedicine, b: IMedicine) => {
        return new Date(b.published_at).getTime() - new Date(a.published_at).getTime();
    });

    const handleSearch = () => {
        const formattedSearchValue = searchValue.toLowerCase().trim();
        if (formattedSearchValue === '') {
            setFilteredData([]);
            return;
        }

        const filteredResults = data.filter((item: IMedicine) => {
            const lowerCaseName = item.name.toLowerCase();
            console.log(lowerCaseName)
            const lowerCaseCompany = item.company.toLowerCase();
            return lowerCaseName.includes(formattedSearchValue) || lowerCaseCompany.includes(formattedSearchValue);
        });

        setFilteredData(filteredResults);
    };

    return (
        <AuthContext.Provider
            value={{
                nextPage,
                prevPage,
                lastPage,
                sortedData,
                currentPage,
                searchValue,
                setSearchValue,
                handleSearch,
                filteredData
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
