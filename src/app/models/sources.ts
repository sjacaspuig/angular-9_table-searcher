export type Sources = {
    data: DataSource,
};

export type DataSource = {
    sex: Gender[],
    language: Language[],
    country: Country[],
};

export type Gender = {
    id: number,
    key: string,
    description: string,
};

export type Language = {
    id: number,
    key: string,
    description: string,
};

export type Country = {
    id: number,
    description: string,
    prefix: number,
    language: string,
};
