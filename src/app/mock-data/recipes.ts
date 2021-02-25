import { Recipe } from '../models/models';

export const MockRecipes: Recipe[] = [
    {
        name: "Nasi",
        instructions: "Maak alles warm.",
        ingredients: [
            {
                name: "Nasi kruiden",
                amount: 1,
                amountType: "zakje"
            },
            {
                name: "Rijst",
                amount: 1,
                amountType: "kopje"
            },
            {
                name: "Gebakken ei",
                amount: 2,
                amountType: "stuks"
            },
            {
                name: "Nasi groente",
                amount: 1,
                amountType: "zak"
            },
            {
                name: "Sate saus",
                amount: 1,
                amountType: "bakje"
            },
            {
                name: "Casave kroepoek",
                amount: 1,
                amountType: "zak"
            }
        ]
    },
    {
        name: "Pita Gyros",
        instructions: "Doe dingen met spullen.",
        ingredients: [
            {
                name: "Feta kaas",
                amount: 0.5,
                amountType: "pakje"
            },
            {
                name: "Komkommer",
                amount: 0.5,
                amountType: "stuk"
            },
            {
                name: "Gyros (vegatarisch)",
                amount: 1,
                amountType: "bakje"
            },
            {
                name: "Knoflook saus",
                amount: 1,
                amountType: "fles"
            },
            {
                name: "Sla",
                amount: 1,
                amountType: "zakje"
            },
            {
                name: "Tomaat",
                amount: 1,
                amountType: "stuk"
            },
        ]
    }

];