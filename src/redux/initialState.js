const initialState = {
    columns: [
        {
            id: '1',
            listId: '1',
            title: 'Books',
            icon: 'book',
        },
        {
            id: '2',
            listId: '1',
            title: 'Movies',
            icon: 'film',
        },
        {
            id: '3',
            listId: '1',
            title: 'Games',
            icon: 'gamepad',
        },
        {
            id: '4',
            listId: '2',
            title: "Test",
            icon: "rebel"
        }
    ],

    cards: [
        { id: '1', columnId: '1', title: "Programuj tak, aby nie naprawiać Planowanie projektów i systemów", isFavorite: false },
        { id: '2', columnId: '1', title: "Star Wars. Kolekcja Legend. Eskadra Łotrów. Cykl X-wingi.", isFavorite: false },
        { id: '3', columnId: '2', title: "Wilk z Wall Street", isFavorite: false },
        { id: '4', columnId: '2', title: "Elizjum", isFavorite: false },
        { id: '5', columnId: '3', title: "Starfield", isFavorite: false },
        { id: '6', columnId: '3', title: "Company of Heroes 3", isFavorite: false }
    ],

    lists: [
        {
            id: '1',
            title: "Rzeczy do zrobienia...",
            description: "Interesujące rzeczy, które chcę sprawdzić"
        },
        {
            id: '2',
            title: "Test list",
            description: "Lorem Ipsum"
        }
    ],

    searchCard: ""
};

export default initialState;