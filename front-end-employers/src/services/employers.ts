export interface EmployersResponse {
    data: Employer[];
    error: any;
}

export interface Employer {
    id: number;
    name: string;
    // add more properties here
}

export const getEmployers = async (): Promise<EmployersResponse> => {
    try {
        const response = await fetch("http://localhost:8080/employers");
        const data = await response.json();
        return { data, error: null };
    } catch (error) {
        return { data: [], error };
    }
};

export const registerEmployer = async (data: Employer) => {
    return fetch("http://localhost:8080/employers", {
        method: "POST",
        body: JSON.stringify(data),
    }).then((res) => res.json());
};
