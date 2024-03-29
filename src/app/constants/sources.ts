import { Sources } from "../models/sources";

export const SOURCE: Sources = {
    data: {
        sex: [
            {
                id: 1,
                key: 'H',
                description: 'Men'
            },
            {
                id: 2,
                key: 'M',
                description: 'Women'
            }
        ],
        language: [
            {
                id: 1,
                key: '1',
                description: 'Spanish'
            },
            {
                id: 2,
                key: '2',
                description: 'Germany'
            },
            {
                id: 3,
                key: '3',
                description: 'French'
            }
        ],
        country: [
            {
                id: 1,
                description: 'Spain',
                prefix: 34,
                language: '1'
            },
            {
                id: 2,
                description: 'Germany',
                prefix: 55,
                language: '2'
            },
            {
                id: 3,
                description: 'France',
                prefix: 89,
                language: '3'
            }
        ]
    }
};