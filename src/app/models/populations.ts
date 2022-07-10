export type Populations = {
    population: InfoPopulation,
};

export type InfoPopulation = {
    person: Person[],
};

export type Person = {
    id: number,
    name: string,
    surname: string,
    surname2: string,
    sex: string,
    'country-id': number,
    phone: string,
    datebirthday: string,
    lastModification: string,
};
