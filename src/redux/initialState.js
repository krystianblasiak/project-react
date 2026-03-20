const initialState = {
    columns: [
        {
            id: 1,
            title: 'Books',
            icon: 'book',
        },
        {
            id: 2,
            title: 'Movies',
            icon: 'film',
        },
        {
            id: 3,
            title: 'Games',
            icon: 'gamepad',
        }
    ],

    cards: [
        { id: 1, columnId: 1, title: "Programuj tak, aby nie naprawiać Planowanie projektów i systemów" },
        { id: 2, columnId: 1, title: "Star Wars. Kolekcja Legend. Eskadra Łotrów. Cykl X-wingi." },
        { id: 3, columnId: 2, title: "Wilk z Wall Street" },
        { id: 4, columnId: 2, title: "Elizjum" },
        { id: 5, columnId: 3, title: "Starfield" },
        { id: 6, columnId: 3, title: "Company of Heroes 3" }
    ],

    searchCard: ""
};

export default initialState;